import { PageHero } from "@/components/PageHero";
import { ContentCardGrid } from "@/components/ContentCardGrid";
import { cmsMeta } from "@/lib/seo";
import { readCms } from "@/lib/cms/store";

export function generateMetadata() {
  return cmsMeta({
    title: "Kiến trúc",
    description:
      "Mẫu thiết kế kiến trúc nhà phố, biệt thự, nội thất đẹp do Kiến trúc Minh Phú thực hiện tại TP.HCM.",
    path: "/kien-truc",
  });
}

export default async function KienTrucPage() {
  const { architectureList } = await readCms();
  return (
    <>
      <PageHero title="Kiến trúc" canonicalPath="/kien-truc" />
      <section className="pb-12 md:pb-16 pt-6">
        <div className="container-mp">
          <ContentCardGrid items={architectureList} />
        </div>
      </section>
    </>
  );
}
