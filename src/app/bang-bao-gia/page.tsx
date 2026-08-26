import { PageHero } from "@/components/PageHero";
import { ContentCardGrid } from "@/components/ContentCardGrid";
import { pricingCards } from "@/data/site";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Bảng báo giá",
  description:
    "Bảng báo giá thiết kế nhà, thi công trọn gói, phần thô và sửa chữa cải tạo tại Kiến trúc Minh Phú.",
  path: "/bang-bao-gia",
});

export default function BaoGiaPage() {
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
