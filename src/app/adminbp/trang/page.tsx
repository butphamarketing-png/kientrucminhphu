import { AdminPagesEditor } from "@/components/admin/AdminPagesEditor";

export const metadata = {
  title: { absolute: "Trang nội dung · CMS Minh Phú" },
  robots: { index: false, follow: false },
};

export default function Page() {
  return <AdminPagesEditor />;
}
