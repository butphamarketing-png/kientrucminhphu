import { AdminHomeEditor } from "@/components/admin/AdminHomeEditor";

export const metadata = {
  title: { absolute: "Trang chủ · CMS Minh Phú" },
  robots: { index: false, follow: false },
};

export default function Page() {
  return <AdminHomeEditor />;
}
