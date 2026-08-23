import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { ContentCardGrid } from "@/components/ContentCardGrid";
import { architectureList } from "@/data/site";

export const metadata: Metadata = { title: "Kiến trúc" };

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
