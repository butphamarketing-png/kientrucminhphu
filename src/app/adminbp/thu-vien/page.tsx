import { AdminGalleryEditor } from "@/components/admin/AdminGalleryEditor";

export const metadata = {
  title: { absolute: "Thư viện · CMS Minh Phú" },
  robots: { index: false, follow: false },
};

export default function Page() {
  return <AdminGalleryEditor />;
}
