"use client";

import Link from "next/link";
import { useCallback, useEffect, useState } from "react";

type Health = { ok: boolean; configured: boolean; error?: string; bucket?: string; publicUrl?: string };

const LINKS = [
  { href: "/adminbp/cai-dat", label: "Cài đặt", desc: "Hotline, địa chỉ, menu" },
  { href: "/adminbp/trang-chu", label: "Trang chủ", desc: "Slide, intro, lĩnh vực" },
  { href: "/adminbp/tin-tuc", label: "Tin tức", desc: "Bài viết SEO" },
  { href: "/adminbp/cong-trinh", label: "Công trình", desc: "Dự án tiêu biểu" },
  { href: "/adminbp/bao-gia", label: "Báo giá", desc: "Gói thi công" },
  { href: "/adminbp/dich-vu", label: "Dịch vụ", desc: "Danh mục dịch vụ" },
  { href: "/adminbp/trang", label: "Trang nội dung", desc: "Sứ mệnh, chính sách" },
  { href: "/adminbp/thu-vien", label: "Thư viện", desc: "Album ảnh" },
  { href: "/adminbp/kien-truc", label: "Kiến trúc", desc: "Mẫu thiết kế" },
  { href: "/adminbp/kho-anh", label: "Kho ảnh R2", desc: "Upload Cloudflare" },
];

export function AdminDashboard() {
  const [cms, setCms] = useState<Health | null>(null);
  const [r2, setR2] = useState<Health | null>(null);
  const [message, setMessage] = useState("");

  const refresh = useCallback(async () => {
    const statusRes = await fetch("/api/adminbp/status");
    const status = await statusRes.json();
    if (status.ok) {
      setCms(status.cms);
      setR2(status.r2);
    }
  }, []);

  useEffect(() => {
    refresh().catch(() => setMessage("Không đọc được trạng thái kết nối"));
  }, [refresh]);

  return (
    <div className="adminbp-dash">
      <h1>CMS Website</h1>
      <p>Quản lý toàn bộ nội dung website Kiến Trúc Minh Phú.</p>

      <div className="adminbp-status-grid">
        <article className={`adminbp-status-card ${cms?.ok ? "is-ok" : ""}`}>
          <small>Nội dung CMS</small>
          <strong>{cms?.ok ? "Đang lưu trên R2" : "Chưa cấu hình"}</strong>
          <span>{cms?.error || "File cms/cms.json trên bucket"}</span>
        </article>
        <article className={`adminbp-status-card ${r2?.ok ? "is-ok" : ""}`}>
          <small>Cloudflare R2</small>
          <strong>{r2?.ok ? "Đã kết nối" : "Chưa cấu hình"}</strong>
          <span>{r2?.bucket || r2?.error || "Kho ảnh / video"}</span>
        </article>
      </div>

      <nav className="adminbp-shortcuts">
        {LINKS.map((item) => (
          <Link key={item.href} href={item.href}>
            <strong>{item.label}</strong>
            <small>{item.desc}</small>
          </Link>
        ))}
      </nav>
      {message ? <p className="adminbp-dash-msg">{message}</p> : null}
    </div>
  );
}
