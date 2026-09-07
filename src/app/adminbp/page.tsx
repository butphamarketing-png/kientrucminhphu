import { AdminSidebar } from "@/components/admin/AdminSidebar";

export const metadata = {
  title: { absolute: "CMS Website · Kiến Trúc Minh Phú" },
  robots: { index: false, follow: false },
};

export default function AdminHomePage() {
  return (
    <div className="adminbp-shell">
      <AdminSidebar />
      <main className="adminbp-main">
        <h1>CMS Website</h1>
        <p>Quản lý nội dung website Kiến Trúc Minh Phú.</p>
      </main>
    </div>
  );
}
