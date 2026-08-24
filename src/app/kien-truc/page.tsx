import { PageHero } from "@/components/PageHero";
import { ContentCardGrid } from "@/components/ContentCardGrid";
import { architectureList } from "@/data/site";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Kiến trúc",
  description:
    "Mẫu thiết kế kiến trúc nhà phố, biệt thự, nội thất đẹp do Kiến trúc Minh Phú thực hiện tại TP.HCM.",
  path: "/kien-truc",
});

export default function KienTrucPage() {
  return (
    <>
      <PageHero title="Kiến trúc" />
      <section className="pb-12 md:pb-16 pt-6">
        <div className="container-mp">
          <ContentCardGrid items={architectureList} />
        </div>
      </section>
    </>
  );
}
