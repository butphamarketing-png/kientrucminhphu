import { SimpleContentPage } from "@/components/SimpleContentPage";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Chính sách bảo hành",
  description: "Chính sách bảo hành công trình thiết kế và thi công của Kiến trúc Minh Phú.",
  path: "/chinh-sach-bao-hanh",
});

export default function Page() {
  return <SimpleContentPage title="Chính sách bảo hành" />;
}
