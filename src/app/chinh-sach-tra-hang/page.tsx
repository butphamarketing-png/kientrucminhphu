import { CmsStaticPage, cmsPageMeta } from "@/components/CmsStaticPage";

export async function generateMetadata() {
  return cmsPageMeta("/chinh-sach-tra-hang", {
    title: "Chính sách trả hàng",
    description: "Chính sách trả hàng và hỗ trợ khách hàng của Kiến trúc Minh Phú.",
  });
}

export default async function Page() {
  return <CmsStaticPage path="/chinh-sach-tra-hang" fallbackTitle="Chính sách trả hàng" />;
}
