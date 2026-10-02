import { AdminPricingEditor } from "@/components/admin/AdminPricingEditor";

export const metadata = {
  title: { absolute: "Bảng báo giá · CMS Minh Phú" },
  robots: { index: false, follow: false },
};

export default function Page() {
  return <AdminPricingEditor />;
}
