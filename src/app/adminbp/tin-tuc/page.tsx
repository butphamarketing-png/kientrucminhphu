import { AdminNewsEditor } from "@/components/admin/AdminNewsEditor";

export const metadata = {
  title: { absolute: "Tin tức · CMS Minh Phú" },
  robots: { index: false, follow: false },
};

export default function Page() {
  return <AdminNewsEditor />;
}
