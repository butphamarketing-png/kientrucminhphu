import { NextResponse } from "next/server";
import { isAdminAuthenticated } from "@/lib/cms/auth";
import { contentTypeFor, isR2Configured, uploadObject } from "@/lib/cms/r2";
import { upsertMedia } from "@/lib/cms/media-index";

const MAX_BYTES = 12 * 1024 * 1024;
const ALLOWED = new Set([
  ".png",
  ".jpg",
  ".jpeg",
  ".webp",
  ".gif",
  ".svg",
  ".avif",
  ".pdf",
  ".mp4",
]);

export async function POST(request: Request) {
  if (!(await isAdminAuthenticated())) {
    return NextResponse.json({ ok: false, error: "Unauthorized" }, { status: 401 });
  }
  if (!isR2Configured()) {
    return NextResponse.json(
      { ok: false, error: "R2 chưa cấu hình. Điền biến R2_* trên Vercel / .env.local." },
      { status: 503 },
    );
  }

  const form = await request.formData().catch(() => null);
  const file = form?.get("file");
  if (!(file instanceof File) || !file.size) {
    return NextResponse.json({ ok: false, error: "Thiếu file" }, { status: 400 });
  }
  if (file.size > MAX_BYTES) {
    return NextResponse.json({ ok: false, error: "File quá lớn (tối đa 12MB)" }, { status: 400 });
  }

  const original = file.name || "upload";
  const ext = original.includes(".")
    ? `.${original.split(".").pop()?.toLowerCase()}`
    : "";
  if (!ALLOWED.has(ext)) {
    return NextResponse.json({ ok: false, error: `Định dạng không hỗ trợ: ${ext}` }, { status: 400 });
  }

  const id = `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
  const key = `uploads/minhphu/${id}${ext}`;
  const buf = Buffer.from(await file.arrayBuffer());

  try {
    const uploaded = await uploadObject({
      key,
      body: buf,
      contentType: file.type || contentTypeFor(ext),
    });
    const item = {
      id,
      name: original,
      url: uploaded.url,
      key: uploaded.key,
      size: file.size,
      alt: "",
      storage: "r2",
      uploadedAt: new Date().toISOString(),
    };
    await upsertMedia(item);
    return NextResponse.json({ ok: true, data: item });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Upload thất bại";
    return NextResponse.json({ ok: false, error: message }, { status: 500 });
  }
}
