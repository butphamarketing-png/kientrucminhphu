import { getJson, isR2Configured, putJson } from "./r2";

const MEDIA_KEY = "cms/media.json";
const MAX_ITEMS = 200;

export type MediaItem = {
  id: string;
  name: string;
  url: string;
  key: string | null;
  size: number;
  alt: string;
  storage: string;
  uploadedAt: string;
};

function normalize(raw: unknown): MediaItem[] {
  if (!Array.isArray(raw)) return [];
  return raw
    .filter((item) => item && typeof item === "object" && "id" in item)
    .map((item) => {
      const row = item as Partial<MediaItem>;
      return {
        id: String(row.id || ""),
        name: String(row.name || ""),
        url: String(row.url || ""),
        key: row.key ? String(row.key) : null,
        size: Number(row.size) || 0,
        alt: String(row.alt || ""),
        storage: String(row.storage || "r2"),
        uploadedAt: String(row.uploadedAt || ""),
      };
    })
    .filter((item) => item.id && item.url);
}

export async function listMedia(): Promise<MediaItem[]> {
  if (!isR2Configured()) return [];
  const remote = await getJson<unknown>(MEDIA_KEY);
  return normalize(remote);
}

export async function upsertMedia(item: MediaItem) {
  if (!isR2Configured()) return { ok: false as const, skipped: true as const };
  const list = await listMedia();
  const next = [item, ...list.filter((row) => row.id !== item.id)].slice(0, MAX_ITEMS);
  await putJson(MEDIA_KEY, next);
  return { ok: true as const };
}

export async function deleteMediaRow(id: string) {
  if (!isR2Configured() || !id) return { ok: false as const, skipped: true as const };
  const list = await listMedia();
  await putJson(
    MEDIA_KEY,
    list.filter((row) => row.id !== id),
  );
  return { ok: true as const };
}
