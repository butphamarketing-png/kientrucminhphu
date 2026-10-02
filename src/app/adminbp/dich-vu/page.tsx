import { AdminServicesEditor } from "@/components/admin/AdminServicesEditor";

export const metadata = {
  title: { absolute: "Dịch vụ · CMS Minh Phú" },
  robots: { index: false, follow: false },
};

export default function Page() {
  return <AdminServicesEditor />;
}
