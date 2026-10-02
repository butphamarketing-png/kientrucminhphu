"use client";

import { AdminSidebar } from "@/components/admin/AdminSidebar";

export function AdminShell({
  title,
  hint,
  children,
}: {
  title: string;
  hint?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="adminbp-shell">
      <AdminSidebar />
      <main className="adminbp-main">
        <div className="adminbp-page-head">
          <h1>{title}</h1>
          {hint ? <p>{hint}</p> : null}
        </div>
        {children}
      </main>
    </div>
  );
}

export function Field({
  label,
  value,
  onChange,
  type = "text",
  multiline,
  rows = 4,
  span2,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  multiline?: boolean;
  rows?: number;
  span2?: boolean;
}) {
  return (
    <label className={`adminbp-field${span2 ? " span-2" : ""}`}>
      <span>{label}</span>
      {multiline ? (
        <textarea rows={rows} value={value} onChange={(e) => onChange(e.target.value)} />
      ) : (
        <input type={type} value={value} onChange={(e) => onChange(e.target.value)} />
      )}
    </label>
  );
}

export function ImageField({
  label,
  value,
  onChange,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
}) {
  async function onFile(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    e.target.value = "";
    if (!file) return;
    const body = new FormData();
    body.append("file", file);
    const res = await fetch("/api/adminbp/upload", { method: "POST", body });
    const data = await res.json();
    if (res.ok && data.ok) onChange(data.data.url);
    else alert(data.error || "Upload thất bại");
  }

  return (
    <label className="adminbp-field">
      <span>{label}</span>
      <div className="adminbp-image-field">
        {value ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={value} alt="" />
        ) : (
          <div className="adminbp-image-empty">Chưa có ảnh</div>
        )}
        <input value={value} onChange={(e) => onChange(e.target.value)} placeholder="URL ảnh" />
        <input type="file" accept="image/*" onChange={onFile} />
      </div>
    </label>
  );
}

export function SaveBar({
  saving,
  message,
  onSave,
}: {
  saving: boolean;
  message: string;
  onSave: () => void;
}) {
  return (
    <div className="adminbp-savebar">
      <button type="button" className="adminbp-save" disabled={saving} onClick={onSave}>
        {saving ? "Đang lưu…" : "Lưu thay đổi"}
      </button>
      {message ? <span>{message}</span> : null}
    </div>
  );
}

export function CardList({
  title,
  onAdd,
  children,
}: {
  title: string;
  onAdd: () => void;
  children: React.ReactNode;
}) {
  return (
    <section className="adminbp-cardlist">
      <header>
        <h2>{title}</h2>
        <button type="button" onClick={onAdd}>
          + Thêm
        </button>
      </header>
      <div className="adminbp-cards">{children}</div>
    </section>
  );
}

export function ItemActions({
  onUp,
  onDown,
  onRemove,
}: {
  onUp: () => void;
  onDown: () => void;
  onRemove: () => void;
}) {
  return (
    <div className="adminbp-item-actions">
      <button type="button" onClick={onUp}>
        Lên
      </button>
      <button type="button" onClick={onDown}>
        Xuống
      </button>
      <button type="button" className="danger" onClick={onRemove}>
        Xóa
      </button>
    </div>
  );
}
