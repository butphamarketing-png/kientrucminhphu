import { CmsStaticPage, cmsPageMeta } from "@/components/CmsStaticPage";

export async function generateMetadata() {
  return cmsPageMeta("/tuyen-dung", {
    title: "Tuyển dụng",
    description: "Tuyển dụng tại Kiến trúc Minh Phú: vị trí quản lý khối thi công xây dựng.",
  });
}

export default async function Page() {
  return <CmsStaticPage path="/tuyen-dung" fallbackTitle="Tuyển dụng" />;
}
