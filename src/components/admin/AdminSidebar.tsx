"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const NAV = [
  { href: "/adminbp", label: "Tổng quan", icon: "fa-tachometer-alt" },
  { href: "/adminbp/cai-dat", label: "Cài đặt website", icon: "fa-cog" },
  { href: "/adminbp/trang-chu", label: "Trang chủ", icon: "fa-home" },
  { href: "/adminbp/tin-tuc", label: "Tin tức / SEO", icon: "fa-newspaper" },
  { href: "/adminbp/cong-trinh", label: "Công trình", icon: "fa-building" },
  { href: "/adminbp/bao-gia", label: "Bảng báo giá", icon: "fa-tags" },
  { href: "/adminbp/dich-vu", label: "Dịch vụ", icon: "fa-briefcase" },
  { href: "/adminbp/trang", label: "Trang nội dung", icon: "fa-file-alt" },
  { href: "/adminbp/thu-vien", label: "Thư viện ảnh", icon: "fa-images" },
  { href: "/adminbp/kien-truc", label: "Kiến trúc", icon: "fa-drafting-compass" },
  { href: "/adminbp/kho-anh", label: "Kho ảnh R2", icon: "fa-cloud-upload-alt" },
];

export function AdminSidebar() {
  const pathname = usePathname();
  const router = useRouter();

  async function logout() {
    await fetch("/api/adminbp/logout", { method: "POST" });
    router.replace("/adminbp/login");
    router.refresh();
  }

  return (
    <aside className="adminbp-sidebar">
      <div className="adminbp-brand">
        <span className="adminbp-brand-mark">BP</span>
        <div>
          <strong>Admin Minh Phú</strong>
          <small>/adminbp</small>
        </div>
      </div>
      <nav className="adminbp-nav">
        {NAV.map((item) => {
          const active =
            item.href === "/adminbp"
              ? pathname === "/adminbp"
              : pathname?.startsWith(item.href);
          return (
            <Link
              key={item.href}
              href={item.href}
              className={active ? "active" : undefined}
            >
              <i className={`fas ${item.icon}`} aria-hidden />
              {item.label}
            </Link>
          );
        })}
      </nav>
      <div className="adminbp-sidebar-foot">
        <a href="/" target="_blank" rel="noreferrer">
          <i className="fas fa-external-link-alt" aria-hidden /> Xem website
        </a>
        <button type="button" onClick={logout}>
          <i className="fas fa-sign-out-alt" aria-hidden /> Đăng xuất
        </button>
      </div>
    </aside>
  );
}
