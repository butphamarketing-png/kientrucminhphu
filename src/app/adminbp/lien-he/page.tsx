import { AdminContacts } from "@/components/admin/AdminContacts";

export const metadata = {
  title: { absolute: "Liên hệ khách · CMS Minh Phú" },
  robots: { index: false, follow: false },
};

export default function Page() {
  return <AdminContacts />;
}
