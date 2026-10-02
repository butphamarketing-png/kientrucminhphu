"use client";

import { useCallback, useEffect, useState } from "react";
import { AdminShell } from "@/components/admin/AdminUi";

type MediaItem = {
  id: string;
  name: string;
  url: string;
  key: string | null;
  size: number;
};

export function AdminMediaLibrary() {
  const [media, setMedia] = useState<MediaItem[]>([]);
  const [busy, setBusy] = useState(false);
  const [message, setMessage] = useState("");

  const refresh = useCallback(async () => {
    const res = await fetch("/api/adminbp/media");
    const list = await res.json();
    if (list.ok) setMedia(list.data || []);
    else setMessage(list.error || "Không đọc được kho ảnh");
  }, []);

  useEffect(() => {
    refresh().catch(() => setMessage("Không kết nối được máy chủ"));
  }, [refresh]);

  async function onUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    e.target.value = "";
    if (!file) return;
    setBusy(true);
    setMessage("");
    try {
      const body = new FormData();
      body.append("file", file);
      const res = await fetch("/api/adminbp/upload", { method: "POST", body });
      const data = await res.json();
      if (!res.ok || !data.ok) {
        setMessage(data.error || "Upload thất bại");
        return;
      }
      setMessage(`Đã tải lên: ${data.data.url}`);
      await refresh();
    } catch {
      setMessage("Không kết nối được máy chủ");
    } finally {
      setBusy(false);
    }
  }

  async function remove(item: MediaItem) {
    if (!confirm(`Xóa ${item.name}?`)) return;
    const qs = new URLSearchParams({ id: item.id });
    if (item.key) qs.set("key", item.key);
    const res = await fetch(`/api/adminbp/media?${qs}`, { method: "DELETE" });
    const data = await res.json();
    if (!res.ok || !data.ok) {
      setMessage(data.error || "Xóa thất bại");
      return;
    }
    await refresh();
  }

  return (
    <AdminShell title="Kho ảnh R2" hint="Tải ảnh/video lên Cloudflare R2 rồi dán URL vào các mục nội dung.">
      <section className="adminbp-upload">
        <div>
          <h2>Tải file lên</h2>
          <p>PNG, JPG, WebP, AVIF, SVG, PDF, MP4 — tối đa 12MB.</p>
        </div>
        <label className="adminbp-upload-btn">
          <input type="file" accept="image/*,.pdf,.mp4" disabled={busy} onChange={onUpload} />
          {busy ? "Đang tải…" : "Chọn file"}
        </label>
      </section>
      {message ? <p className="adminbp-dash-msg">{message}</p> : null}
      {media.length ? (
        <ul className="adminbp-media-grid">
          {media.map((item) => (
            <li key={item.id}>
              {item.url.match(/\.(mp4|pdf)(\?|$)/i) ? (
                <a href={item.url} target="_blank" rel="noreferrer">
                  {item.name}
                </a>
              ) : (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={item.url} alt={item.name} />
              )}
              <small>{item.name}</small>
              <div className="adminbp-item-actions" style={{ marginTop: 8 }}>
                <button
                  type="button"
                  onClick={() => navigator.clipboard.writeText(item.url)}
                >
                  Copy URL
                </button>
                <button type="button" className="danger" onClick={() => remove(item)}>
                  Xóa
                </button>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p style={{ marginTop: 16 }}>Chưa có file. Kết nối R2 rồi tải ảnh lên.</p>
      )}
    </AdminShell>
  );
}
