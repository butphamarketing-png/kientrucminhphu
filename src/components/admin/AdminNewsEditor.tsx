"use client";

import { useCallback, useEffect, useState } from "react";
import { AdminShell, Field, ImageField } from "@/components/admin/AdminUi";
import type { BodyBlock, CmsNewsArticle, GalleryItem } from "@/lib/cms/types";

function bodyToText(body: BodyBlock[]) {
  return body
    .map((block) => (typeof block === "string" ? block : `## ${block.text}`))
    .join("\n\n");
}

function textToBody(text: string): BodyBlock[] {
  return text
    .split(/\n\s*\n/)
    .map((block) => block.trim())
    .filter(Boolean)
    .map((block) =>
      block.startsWith("## ") ? { type: "h2" as const, text: block.slice(3).trim() } : block,
    );
}

function galleryToText(gallery?: GalleryItem[]) {
  if (!gallery?.length) return "";
  return gallery
    .map((g) => (typeof g === "string" ? g : g.src))
    .join("\n");
}

const emptyDraft: CmsNewsArticle = {
  id: "",
  title: "",
  href: "",
  image: "/brand/logo-menu-lg.png.webp",
  date: "",
  excerpt: "",
  body: [""],
  gallery: [],
  published: true,
  source: "cms",
};

export function AdminNewsEditor() {
  const [list, setList] = useState<CmsNewsArticle[]>([]);
  const [draft, setDraft] = useState<CmsNewsArticle | null>(null);
  const [bodyText, setBodyText] = useState("");
  const [galleryText, setGalleryText] = useState("");
  const [keywords, setKeywords] = useState("");
  const [message, setMessage] = useState("");
  const [saving, setSaving] = useState(false);

  const load = useCallback(async () => {
    const res = await fetch("/api/adminbp/news");
    const data = await res.json();
    if (res.ok && data.ok) setList(data.data);
    else setMessage(data.error || "Không tải được tin");
  }, []);

  useEffect(() => {
    load().catch(() => setMessage("Không kết nối được máy chủ"));
  }, [load]);

  function open(item?: CmsNewsArticle) {
    const next = item
      ? { ...item }
      : {
          ...emptyDraft,
          date: new Date().toLocaleDateString("vi-VN", {
            day: "2-digit",
            month: "2-digit",
            year: "numeric",
          }),
        };
    setDraft(next);
    setBodyText(bodyToText(next.body || []));
    setGalleryText(galleryToText(next.gallery));
    setKeywords((next.keywords || []).join(", "));
    setMessage("");
  }

  async function saveDraft() {
    if (!draft?.title.trim()) {
      setMessage("Nhập tiêu đề");
      return;
    }
    setSaving(true);
    setMessage("");
    try {
      const res = await fetch("/api/adminbp/news", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...draft,
          keywords: keywords
            .split(",")
            .map((k) => k.trim())
            .filter(Boolean),
          body: textToBody(bodyText),
          gallery: galleryText
            .split("\n")
            .map((l) => l.trim())
            .filter(Boolean),
        }),
      });
      const data = await res.json();
      if (!res.ok || !data.ok) {
        setMessage(data.error || "Lưu thất bại");
        return;
      }
      setMessage("Đã lưu bài viết");
      setDraft(null);
      await load();
    } catch {
      setMessage("Không kết nối được máy chủ");
    } finally {
      setSaving(false);
    }
  }

  async function remove(item: CmsNewsArticle) {
    if (!confirm(`Ẩn / xóa “${item.title}”?`)) return;
    const res = await fetch(`/api/adminbp/news?href=${encodeURIComponent(item.href)}`, {
      method: "DELETE",
    });
    const data = await res.json();
    if (!res.ok || !data.ok) {
      setMessage(data.error || "Xóa thất bại");
      return;
    }
    setMessage("Đã cập nhật");
    if (draft?.href === item.href) setDraft(null);
    await load();
  }

  return (
    <AdminShell
      title="Tin tức / SEO"
      hint="Bài mới ghi đè bài tĩnh cùng đường dẫn. Xóa bài gốc sẽ ẩn khỏi website."
    >
      {draft ? (
        <div className="adminbp-form">
          <div className="adminbp-item-actions">
            <button type="button" onClick={() => setDraft(null)}>
              ← Danh sách
            </button>
          </div>
          <div className="adminbp-grid">
            <Field label="Tiêu đề" value={draft.title} onChange={(title) => setDraft({ ...draft, title })} />
            <Field
              label="Đường dẫn (/tin-tuc/...)"
              value={draft.href}
              onChange={(href) => setDraft({ ...draft, href })}
            />
            <Field label="Ngày (dd/mm/yyyy)" value={draft.date} onChange={(date) => setDraft({ ...draft, date })} />
            <label className="adminbp-field">
              <span>Xuất bản</span>
              <label className="adminbp-check">
                <input
                  type="checkbox"
                  checked={draft.published}
                  onChange={(e) => setDraft({ ...draft, published: e.target.checked })}
                />
                Hiện trên website
              </label>
            </label>
            <ImageField
              label="Ảnh đại diện"
              value={draft.image}
              onChange={(image) => setDraft({ ...draft, image })}
            />
            <Field
              label="Alt ảnh"
              value={draft.imageAlt || ""}
              onChange={(imageAlt) => setDraft({ ...draft, imageAlt })}
            />
            <Field
              label="Tóm tắt"
              multiline
              span2
              value={draft.excerpt}
              onChange={(excerpt) => setDraft({ ...draft, excerpt })}
            />
            <Field
              label="Từ khóa SEO (phẩy)"
              span2
              value={keywords}
              onChange={setKeywords}
            />
            <Field
              label="Nội dung (cách đoạn bằng dòng trống, heading bắt đầu ## )"
              multiline
              rows={12}
              span2
              value={bodyText}
              onChange={setBodyText}
            />
            <Field
              label="Gallery (mỗi dòng 1 URL)"
              multiline
              rows={5}
              span2
              value={galleryText}
              onChange={setGalleryText}
            />
          </div>
          <div className="adminbp-savebar">
            <button type="button" className="adminbp-save" disabled={saving} onClick={saveDraft}>
              {saving ? "Đang lưu…" : "Lưu bài viết"}
            </button>
            {message ? <span>{message}</span> : null}
          </div>
        </div>
      ) : (
        <div className="adminbp-form">
          <div className="adminbp-item-actions">
            <button type="button" className="adminbp-save" onClick={() => open()}>
              + Bài viết mới
            </button>
          </div>
          {message ? <p className="adminbp-dash-msg">{message}</p> : null}
          <div className="adminbp-cards">
            {list.map((item) => (
              <article key={item.href} className="adminbp-item">
                <div className="adminbp-news-row">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={item.image} alt="" />
                  <div>
                    <strong>{item.title}</strong>
                    <small>
                      {item.date} · {item.href} · {item.published ? "Hiện" : "Ẩn"} · {item.source}
                    </small>
                  </div>
                  <div className="adminbp-item-actions">
                    <button type="button" onClick={() => open(item)}>
                      Sửa
                    </button>
                    <button type="button" className="danger" onClick={() => remove(item)}>
                      Xóa
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      )}
    </AdminShell>
  );
}
