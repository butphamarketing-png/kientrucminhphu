import { AdminSidebar } from "@/components/admin/AdminSidebar";
import { AdminDashboard } from "@/components/admin/AdminDashboard";

export const metadata = {
  title: { absolute: "CMS Website · Kiến Trúc Minh Phú" },
  robots: { index: false, follow: false },
};

export default function AdminHomePage() {
  return (
    <div className="adminbp-shell">
      <AdminSidebar />
      <main className="adminbp-main">
        <AdminDashboard />
      </main>
    </div>
  );
}
