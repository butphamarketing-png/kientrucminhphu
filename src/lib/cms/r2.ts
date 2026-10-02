import {
  DeleteObjectCommand,
  GetObjectCommand,
  HeadBucketCommand,
  PutObjectCommand,
  S3Client,
} from "@aws-sdk/client-s3";
import { env, required } from "./env";

let client: S3Client | null = null;

export function isR2Configured() {
  return required([
    "R2_ACCOUNT_ID",
    "R2_ACCESS_KEY_ID",
    "R2_SECRET_ACCESS_KEY",
    "R2_BUCKET_NAME",
    "R2_PUBLIC_URL",
  ]);
}

function getEndpoint() {
  return (
    env("R2_ENDPOINT") ||
    `https://${env("R2_ACCOUNT_ID")}.r2.cloudflarestorage.com`
  );
}

export function getPublicUrl(key: string) {
  const base = env("R2_PUBLIC_URL").replace(/\/$/, "");
  if (!base) return null;
  return `${base}/${String(key).replace(/^\//, "")}`;
}

function getClient() {
  if (!isR2Configured()) return null;
  if (client) return client;
  client = new S3Client({
    region: env("R2_REGION", "auto"),
    endpoint: getEndpoint(),
    credentials: {
      accessKeyId: env("R2_ACCESS_KEY_ID"),
      secretAccessKey: env("R2_SECRET_ACCESS_KEY"),
    },
  });
  return client;
}

export function contentTypeFor(ext: string) {
  const map: Record<string, string> = {
    ".png": "image/png",
    ".jpg": "image/jpeg",
    ".jpeg": "image/jpeg",
    ".webp": "image/webp",
    ".gif": "image/gif",
    ".svg": "image/svg+xml",
    ".avif": "image/avif",
    ".mp4": "video/mp4",
    ".pdf": "application/pdf",
  };
  return map[String(ext || "").toLowerCase()] || "application/octet-stream";
}

export async function uploadObject(opts: {
  key: string;
  body: Buffer;
  contentType: string;
  cacheControl?: string;
}) {
  if (!isR2Configured()) {
    throw new Error("R2 chưa cấu hình (thiếu env)");
  }
  const s3 = getClient();
  if (!s3) throw new Error("R2 client không khởi tạo được");
  const bucket = env("R2_BUCKET_NAME");
  const result = await s3.send(
    new PutObjectCommand({
      Bucket: bucket,
      Key: opts.key,
      Body: opts.body,
      ContentType: opts.contentType,
      CacheControl: opts.cacheControl || "public, max-age=31536000, immutable",
    }),
  );
  const url = getPublicUrl(opts.key);
  if (!url) {
    throw new Error("Thiếu R2_PUBLIC_URL — bật R2.dev subdomain hoặc custom domain");
  }
  return { key: opts.key, url, bucket, etag: result.ETag || null };
}

export async function deleteObject(key: string) {
  if (!key || !isR2Configured()) return { ok: false as const, skipped: true as const };
  const s3 = getClient();
  if (!s3) return { ok: false as const, skipped: true as const };
  await s3.send(
    new DeleteObjectCommand({
      Bucket: env("R2_BUCKET_NAME"),
      Key: key,
    }),
  );
  return { ok: true as const };
}

export async function getJson<T>(key: string): Promise<T | null> {
  const s3 = getClient();
  if (!s3) return null;
  try {
    const result = await s3.send(
      new GetObjectCommand({
        Bucket: env("R2_BUCKET_NAME"),
        Key: key,
      }),
    );
    const text = await result.Body?.transformToString();
    if (!text) return null;
    return JSON.parse(text) as T;
  } catch (error) {
    const name = error && typeof error === "object" && "name" in error ? String(error.name) : "";
    const status =
      error && typeof error === "object" && "$metadata" in error
        ? Number((error as { $metadata?: { httpStatusCode?: number } }).$metadata?.httpStatusCode)
        : 0;
    if (name === "NoSuchKey" || name === "NotFound" || status === 404) return null;
    throw error;
  }
}

export async function putJson(key: string, value: unknown) {
  return uploadObject({
    key,
    body: Buffer.from(JSON.stringify(value)),
    contentType: "application/json; charset=utf-8",
    cacheControl: "no-cache",
  });
}

export async function healthR2() {
  if (!isR2Configured()) {
    return {
      ok: false,
      configured: false,
      error:
        "Thiếu R2_ACCOUNT_ID / R2_ACCESS_KEY_ID / R2_SECRET_ACCESS_KEY / R2_BUCKET_NAME / R2_PUBLIC_URL",
    };
  }
  try {
    const s3 = getClient();
    if (!s3) throw new Error("R2 client không khởi tạo được");
    await s3.send(new HeadBucketCommand({ Bucket: env("R2_BUCKET_NAME") }));
    return {
      ok: true,
      configured: true,
      bucket: env("R2_BUCKET_NAME"),
      publicUrl: env("R2_PUBLIC_URL"),
    };
  } catch (error) {
    const message = error instanceof Error ? error.message : "Không kết nối được R2";
    return {
      ok: false,
      configured: true,
      bucket: env("R2_BUCKET_NAME"),
      publicUrl: env("R2_PUBLIC_URL"),
      error: message,
    };
  }
}
