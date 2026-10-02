"use client";

import { useCallback, useEffect, useState } from "react";
import type { CmsStore } from "@/lib/cms/types";

export function useCmsEditor() {
  const [cms, setCms] = useState<CmsStore | null>(null);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState("");

  const load = useCallback(async () => {
    const res = await fetch("/api/adminbp/cms");
    const data = await res.json();
    if (!res.ok || !data.ok) throw new Error(data.error || "Không tải được CMS");
    setCms(data.data);
  }, []);

  useEffect(() => {
    load().catch((err: Error) => setMessage(err.message));
  }, [load]);

  async function save(patch: Partial<CmsStore>) {
    if (!cms) return;
    setSaving(true);
    setMessage("");
    try {
      const res = await fetch("/api/adminbp/cms", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(patch),
      });
      const data = await res.json();
      if (!res.ok || !data.ok) {
        setMessage(data.error || "Lưu thất bại");
        return;
      }
      setCms(data.data);
      setMessage("Đã lưu");
    } catch {
      setMessage("Không kết nối được máy chủ");
    } finally {
      setSaving(false);
    }
  }

  return { cms, setCms, save, saving, message, reload: load };
}

export async function uploadAdminFile(file: File) {
  const body = new FormData();
  body.append("file", file);
  const res = await fetch("/api/adminbp/upload", { method: "POST", body });
  const data = await res.json();
  if (!res.ok || !data.ok) throw new Error(data.error || "Upload thất bại");
  return data.data.url as string;
}
