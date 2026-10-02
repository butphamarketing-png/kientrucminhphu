import { CmsStaticPage, cmsPageMeta } from "@/components/CmsStaticPage";

export async function generateMetadata() {
  return cmsPageMeta("/chinh-sach-bao-hanh", {
    title: "Chính sách bảo hành",
    description: "Chính sách bảo hành công trình thiết kế và thi công của Kiến trúc Minh Phú.",
  });
}

export default async function Page() {
  return <CmsStaticPage path="/chinh-sach-bao-hanh" fallbackTitle="Chính sách bảo hành" />;
}
