import { AdminSettingsEditor } from "@/components/admin/AdminSettingsEditor";

export const metadata = {
  title: { absolute: "Cài đặt website · CMS Minh Phú" },
  robots: { index: false, follow: false },
};

export default function Page() {
  return <AdminSettingsEditor />;
}
