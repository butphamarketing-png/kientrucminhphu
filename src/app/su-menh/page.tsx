import { CmsStaticPage, cmsPageMeta } from "@/components/CmsStaticPage";

export async function generateMetadata() {
  return cmsPageMeta("/su-menh", {
    title: "Sứ mệnh",
    description:
      "Sứ mệnh của Minh Phú Building: thiết kế & thi công nhà phố uy tín, lấy con người làm trung tâm, cam kết chất lượng – tiến độ – chi phí minh bạch.",
  });
}

export default async function Page() {
  return <CmsStaticPage path="/su-menh" fallbackTitle="Sứ mệnh" />;
}
