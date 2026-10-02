import { PageHero } from "@/components/PageHero";
import { ContentCardGrid } from "@/components/ContentCardGrid";
import { pageMeta } from "@/lib/seo";
import { readCms } from "@/lib/cms/store";

export const metadata = pageMeta({
  title: "Dịch vụ",
  description:
    "Dịch vụ thiết kế nhà phố, thi công xây dựng, nội thất và sửa chữa cải tạo trọn gói tại TP.HCM của Kiến trúc Minh Phú.",
  path: "/dich-vu",
});

export default async function DichVuPage() {
  const { serviceList } = await readCms();
  return (
    <>
      <PageHero title="Dịch vụ" canonicalPath="/dich-vu" />
      <section className="pb-12 md:pb-16 pt-6">
        <div className="container-mp">
          <ContentCardGrid items={serviceList} />
        </div>
      </section>
    </>
  );
}
