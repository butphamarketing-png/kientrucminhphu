import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { ContentCardGrid } from "@/components/ContentCardGrid";
import { galleryAlbums } from "@/data/site";

export const metadata: Metadata = { title: "Thư viện" };

export default function ThuVienPage() {
  return (
    <>
      <PageHero title="Thư viện" />
      <section className="pb-12 md:pb-16 pt-6">
        <div className="container-mp">
          <ContentCardGrid items={galleryAlbums} />
        </div>
      </section>
    </>
  );
}
