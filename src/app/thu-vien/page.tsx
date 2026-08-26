import { PageHero } from "@/components/PageHero";
import { ContentCardGrid } from "@/components/ContentCardGrid";
import { galleryAlbums } from "@/data/site";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Thư viện",
  description:
    "Thư viện hình ảnh công trình nhà phố, biệt thự, nội thất của Kiến trúc Minh Phú.",
  path: "/thu-vien",
});

export default function ThuVienPage() {
  return (
    <>
      <PageHero title="Thư viện" canonicalPath="/thu-vien" />
      <section className="pb-12 md:pb-16 pt-6">
        <div className="container-mp">
          <ContentCardGrid items={galleryAlbums} />
        </div>
      </section>
    </>
  );
}
