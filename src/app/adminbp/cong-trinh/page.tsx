import { AdminProjectsEditor } from "@/components/admin/AdminProjectsEditor";

export const metadata = {
  title: { absolute: "Công trình · CMS Minh Phú" },
  robots: { index: false, follow: false },
};

export default function Page() {
  return <AdminProjectsEditor />;
}
