import { PageHero } from "@/components/PageHero";
import { ContentCardGrid } from "@/components/ContentCardGrid";
import { cmsMeta } from "@/lib/seo";
import { readCms } from "@/lib/cms/store";

export function generateMetadata() {
  return cmsMeta({
    title: "Bảng báo giá",
    description:
      "Bảng báo giá thiết kế nhà, thi công trọn gói, phần thô và sửa chữa cải tạo tại Kiến trúc Minh Phú.",
    path: "/bang-bao-gia",
  });
}

export default async function BaoGiaPage() {
  const { pricingCards } = await readCms();
  return (
    <>
      <PageHero title="Bảng báo giá" canonicalPath="/bang-bao-gia" />
      <section className="pb-12 md:pb-16 pt-6">
        <div className="container-mp">
          <ContentCardGrid items={pricingCards} />
        </div>
      </section>
    </>
  );
}
