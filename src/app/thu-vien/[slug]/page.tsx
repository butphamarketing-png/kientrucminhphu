import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/PageHero";
import { galleryAlbums, projects } from "@/data/site";
import { pageMeta } from "@/lib/seo";

type Props = { params: Promise<{ slug: string }> };

const albums = galleryAlbums.map((a) => ({
  slug: a.href.replace("/thu-vien/", ""),
  title: a.title,
  image: a.image,
  href: a.href,
}));

export async function generateStaticParams() {
  return albums.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const item = albums.find((a) => a.slug === slug);
  if (!item) return { title: "Thư viện" };
  return pageMeta({
    title: item.title,
    description: `Album hình ảnh ${item.title} — thư viện công trình Kiến trúc Minh Phú.`,
    path: item.href,
    image: item.image,
  });
}

export default async function ThuVienAlbumPage({ params }: Props) {
  const { slug } = await params;
  const item = albums.find((a) => a.slug === slug);
  if (!item) notFound();

  return (
    <>
      <PageHero
        title={item.title}
        crumbs={[
          { label: "Thư viện", href: "/thu-vien" },
          { label: item.title },
        ]}
      />
      <section className="pb-12 md:pb-16 pt-6">
        <div className="container-mp grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {[item.image, ...projects.slice(0, 7).map((p) => p.image)].map((src, i) => (
            <div key={src + i} className="relative aspect-square overflow-hidden btn-hover-img scale-img bg-[#eee]">
              <Image src={src} alt={`${item.title} ${i + 1}`} fill className="object-cover" sizes="25vw" />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
