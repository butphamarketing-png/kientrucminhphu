import { SimpleContentPage } from "@/components/SimpleContentPage";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Chính sách trả hàng",
  description: "Chính sách trả hàng và hỗ trợ khách hàng của Kiến trúc Minh Phú.",
  path: "/chinh-sach-tra-hang",
});

export default function Page() {
  return <SimpleContentPage title="Chính sách trả hàng" />;
}
