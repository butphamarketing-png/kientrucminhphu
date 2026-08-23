import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { ContentCardGrid } from "@/components/ContentCardGrid";
import { pricingCards } from "@/data/site";

export const metadata: Metadata = { title: "Bảng báo giá" };

export default function BaoGiaPage() {
  return (
    <>
      <PageHero title="Bảng báo giá" />
      <section className="pb-12 md:pb-16 pt-6">
        <div className="container-mp">
          <ContentCardGrid items={pricingCards} />
        </div>
      </section>
    </>
  );
}
