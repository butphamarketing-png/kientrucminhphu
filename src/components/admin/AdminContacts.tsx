"use client";

import { useCallback, useEffect, useState } from "react";
import { AdminShell } from "@/components/admin/AdminUi";
import type { ContactMessage } from "@/lib/cms/contacts";

export function AdminContacts() {
  const [items, setItems] = useState<ContactMessage[] | null>(null);
  const [message, setMessage] = useState("");

  const load = useCallback(async () => {
    const res = await fetch("/api/adminbp/contacts");
    const data = await res.json();
    if (!res.ok || !data.ok) {
      setMessage(data.error || "Không tải được danh sách");
      setItems([]);
      return;
    }
    setItems(data.data);
  }, []);

  useEffect(() => {
    load().catch(() => setMessage("Không tải được danh sách"));
  }, [load]);

  async function remove(id: string) {
    const res = await fetch(`/api/adminbp/contacts?id=${encodeURIComponent(id)}`, {
      method: "DELETE",
    });
    if (!res.ok) {
      setMessage("Không xóa được");
      return;
    }
    setItems((current) => (current || []).filter((item) => item.id !== id));
  }

  return (
    <AdminShell title="Liên hệ khách" hint="Tin nhắn gửi từ form Liên hệ trên website, lưu trên R2.">
      {message ? <p>{message}</p> : null}
      {!items ? <p>Đang tải…</p> : null}
      {items && items.length === 0 ? <p>Chưa có liên hệ nào.</p> : null}
      <div className="adminbp-form">
        {items?.map((item) => (
          <article key={item.id} className="adminbp-item">
            <strong>{item.name}</strong>
            <p>
              {item.phone}
              {item.email ? ` · ${item.email}` : ""}
              {item.address ? ` · ${item.address}` : ""}
            </p>
            <p>{item.message}</p>
            <p>
              <small>{new Date(item.createdAt).toLocaleString("vi-VN")}</small>
            </p>
            <div className="adminbp-item-actions">
              <button type="button" className="danger" onClick={() => remove(item.id)}>
                Xóa
              </button>
            </div>
          </article>
        ))}
      </div>
    </AdminShell>
  );
}
