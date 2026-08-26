import { SimpleContentPage } from "@/components/SimpleContentPage";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Hỗ trợ đặt hàng",
  description: "Chính sách hỗ trợ đặt hàng và tư vấn dịch vụ tại Kiến trúc Minh Phú.",
  path: "/ho-tro-dat-hang",
});

export default function Page() {
  return <SimpleContentPage title="Chính sách hỗ trợ" path="/ho-tro-dat-hang" />;
}
