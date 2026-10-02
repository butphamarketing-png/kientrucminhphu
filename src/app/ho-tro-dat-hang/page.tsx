import { CmsStaticPage, cmsPageMeta } from "@/components/CmsStaticPage";

export async function generateMetadata() {
  return cmsPageMeta("/ho-tro-dat-hang", {
    title: "Hỗ trợ đặt hàng",
    description: "Chính sách hỗ trợ đặt hàng và tư vấn dịch vụ tại Kiến trúc Minh Phú.",
  });
}

export default async function Page() {
  return <CmsStaticPage path="/ho-tro-dat-hang" fallbackTitle="Hỗ trợ đặt hàng" />;
}
