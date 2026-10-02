import { AdminMediaLibrary } from "@/components/admin/AdminMediaLibrary";

export const metadata = {
  title: { absolute: "Kho ảnh · CMS Minh Phú" },
  robots: { index: false, follow: false },
};

export default function Page() {
  return <AdminMediaLibrary />;
}
