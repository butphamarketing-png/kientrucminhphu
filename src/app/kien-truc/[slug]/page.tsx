import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/PageHero";
import { architectureList, houseDesigns } from "@/data/site";
import { pageMeta } from "@/lib/seo";

type Props = { params: Promise<{ slug: string }> };

const items = [
  ...architectureList.map((a) => ({
    slug: a.href.replace("/kien-truc/", ""),
    title: a.title,
    image: a.image,
  })),
  ...houseDesigns.map((h) => ({
    slug: h.href.replace("/kien-truc/", ""),
    title: h.title,
    image: h.image,
  })),
];

export async function generateStaticParams() {
  return Array.from(new Set(items.map((i) => i.slug))).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const item = items.find((i) => i.slug === slug);
  if (!item) return { title: "Kiến trúc" };
  return pageMeta({
    title: item.title,
    description: `Mẫu thiết kế ${item.title} — kiến trúc nhà phố, biệt thự tại Kiến trúc Minh Phú.`,
    path: `/kien-truc/${slug}`,
    image: item.image,
  });
}

export default async function KienTrucDetailPage({ params }: Props) {
  const { slug } = await params;
  const item = items.find((i) => i.slug === slug);
  if (!item) notFound();

  return (
    <>
      <PageHero
        title={item.title}
        crumbs={[
          { label: "Kiến trúc", href: "/kien-truc" },
          { label: item.title },
        ]}
      />
      <section className="pb-12 md:pb-16 pt-4">
        <div className="container-mp max-w-4xl">
          <div className="relative aspect-[354/424] sm:aspect-[4/3] mb-8 bg-[#eee] overflow-hidden btn-hover-img scale-img">
            <Image src={item.image} alt={item.title} fill className="object-cover" sizes="100vw" priority />
          </div>
          <h2 className="mt-0 text-[22px] font-bold uppercase text-[var(--color-main)]">
            {item.title}
          </h2>
          <p className="text-[15px] leading-7 text-[#444] text-justify">
            Mẫu thiết kế thuộc danh mục kiến trúc của Minh Phú Building, tập trung tối ưu
            công năng, thẩm mỹ và chi phí đầu tư cho nhà phố – biệt thự tại TP.HCM và các
            tỉnh thành.
          </p>
        </div>
      </section>
    </>
  );
}
