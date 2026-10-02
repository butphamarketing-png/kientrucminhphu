import { createClient, type SupabaseClient } from "@supabase/supabase-js";
import { required, env } from "./env";

let adminClient: SupabaseClient | null = null;

export function isSupabaseConfigured() {
  return required(["SUPABASE_URL", "SUPABASE_SERVICE_ROLE_KEY"]);
}

export function getAdminClient() {
  if (!isSupabaseConfigured()) return null;
  if (adminClient) return adminClient;
  adminClient = createClient(
    env("SUPABASE_URL"),
    env("SUPABASE_SERVICE_ROLE_KEY"),
    { auth: { persistSession: false, autoRefreshToken: false } },
  );
  return adminClient;
}

export type MediaRow = {
  id: string;
  name: string;
  url: string;
  key?: string | null;
  size?: number;
  alt?: string;
  storage?: string;
  uploaded_at?: string;
};

export async function getDoc<T = unknown>(key: string): Promise<T | null> {
  const client = getAdminClient();
  if (!client) return null;
  const { data, error } = await client
    .from("cms_docs")
    .select("data")
    .eq("key", key)
    .maybeSingle();
  if (error) throw new Error(`cms_docs get ${key}: ${error.message}`);
  return (data?.data as T) ?? null;
}

export async function setDoc(key: string, value: unknown) {
  const client = getAdminClient();
  if (!client) return { ok: false as const, skipped: true as const };
  const { error } = await client.from("cms_docs").upsert(
    { key, data: value, updated_at: new Date().toISOString() },
    { onConflict: "key" },
  );
  if (error) throw new Error(`cms_docs set ${key}: ${error.message}`);
  return { ok: true as const };
}

export async function listMedia() {
  const client = getAdminClient();
  if (!client) return null;
  const { data, error } = await client
    .from("media")
    .select("*")
    .order("uploaded_at", { ascending: false })
    .limit(200);
  if (error) throw new Error(`media list: ${error.message}`);
  return (data || []).map((m) => ({
    id: String(m.id),
    name: String(m.name || ""),
    url: String(m.url || ""),
    key: m.key ? String(m.key) : null,
    size: Number(m.size) || 0,
    alt: String(m.alt || ""),
    storage: String(m.storage || "r2"),
    uploadedAt: String(m.uploaded_at || ""),
  }));
}

export async function upsertMedia(item: {
  id: string;
  name: string;
  url: string;
  key?: string | null;
  size?: number;
  alt?: string;
  storage?: string;
  uploadedAt?: string;
}) {
  const client = getAdminClient();
  if (!client) return { ok: false as const, skipped: true as const };
  const row = {
    id: item.id,
    name: item.name,
    url: item.url,
    key: item.key || null,
    size: item.size || 0,
    alt: item.alt || "",
    storage: item.storage || "r2",
    uploaded_at: item.uploadedAt || new Date().toISOString(),
  };
  const { error } = await client.from("media").upsert(row, { onConflict: "id" });
  if (error) return { ok: false as const, error: error.message };
  return { ok: true as const };
}

export async function deleteMediaRow(id: string) {
  const client = getAdminClient();
  if (!client || !id) return { ok: false as const, skipped: true as const };
  const { error } = await client.from("media").delete().eq("id", id);
  if (error) return { ok: false as const, error: error.message };
  return { ok: true as const };
}

export async function healthSupabase() {
  if (!isSupabaseConfigured()) {
    return { ok: false, configured: false, error: "Thiếu SUPABASE_URL / SUPABASE_SERVICE_ROLE_KEY" };
  }
  const client = getAdminClient();
  if (!client) {
    return { ok: false, configured: false, error: "Không tạo được client" };
  }
  const { error } = await client.from("cms_docs").select("key").limit(1);
  if (error) return { ok: false, configured: true, error: error.message };
  return { ok: true, configured: true };
}
