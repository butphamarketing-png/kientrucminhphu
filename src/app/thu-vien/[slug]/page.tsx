import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/PageHero";
import { galleryAlbums, projects, townhouseGallery } from "@/data/site";
import { pageMeta } from "@/lib/seo";

type Props = { params: Promise<{ slug: string }> };

const albums = galleryAlbums.map((a) => ({
  slug: a.href.replace("/thu-vien/", ""),
  title: a.title,
  image: a.image,
  href: a.href,
  images: "images" in a && Array.isArray(a.images) ? a.images : undefined,
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

  const photos =
    item.images && item.images.length > 0
      ? item.images.map((src, i) => ({
          src,
          alt: townhouseGallery[i]?.alt ?? `${item.title} ${i + 1}`,
        }))
      : [
          { src: item.image, alt: item.title },
          ...projects.slice(0, 7).map((p, i) => ({
            src: p.image,
            alt: `${item.title} ${i + 2}`,
          })),
        ];

  return (
    <>
      <PageHero
        title={item.title}
        crumbs={[
          { label: "Thư viện", href: "/thu-vien" },
          { label: item.title, href: item.href },
        ]}
        canonicalPath={item.href}
      />
      <section className="pb-12 md:pb-16 pt-6">
        <div className="container-mp grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
          {photos.map((photo) => (
            <div
              key={photo.src}
              className="relative aspect-[3/4] overflow-hidden btn-hover-img scale-img bg-[#eee]"
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 50vw, 33vw"
              />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
