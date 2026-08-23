import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { ContentCardGrid } from "@/components/ContentCardGrid";
import { serviceList } from "@/data/site";

export const metadata: Metadata = {
  title: "Dịch vụ",
};

export default function DichVuPage() {
  return (
    <>
      <PageHero title="Dịch vụ" />
      <section className="pb-12 md:pb-16 pt-6">
        <div className="container-mp">
          <ContentCardGrid items={serviceList} />
        </div>
      </section>
    </>
  );
}
