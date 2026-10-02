import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/PageHero";
import { CmsBody } from "@/components/CmsBody";
import { pageMeta } from "@/lib/seo";
import { readCms } from "@/lib/cms/store";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  const cms = await readCms();
  const slugs = [
    ...cms.architectureList.map((a) => a.href.replace("/kien-truc/", "")),
    ...cms.houseDesigns.map((h) => h.href.replace("/kien-truc/", "")),
  ];
  return Array.from(new Set(slugs)).map((slug) => ({ slug }));
}

async function findItem(slug: string) {
  const cms = await readCms();
  const items = [
    ...cms.architectureList.map((a) => ({
      slug: a.href.replace("/kien-truc/", ""),
      title: a.title,
      image: a.image,
      summary: a.summary || "",
      body: a.body || "",
    })),
    ...cms.houseDesigns.map((h) => ({
      slug: h.href.replace("/kien-truc/", ""),
      title: h.title,
      image: h.image,
      summary: h.summary || "",
      body: "",
    })),
  ];
  return items.find((i) => i.slug === slug);
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const item = await findItem(slug);
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
  const item = await findItem(slug);
  if (!item) notFound();

  return (
    <>
      <PageHero
        title={item.title}
        crumbs={[
          { label: "Kiến trúc", href: "/kien-truc" },
          { label: item.title, href: `/kien-truc/${slug}` },
        ]}
      />
      <section className="pb-12 md:pb-16 pt-4">
        <div className="container-mp max-w-4xl">
          <div className="relative aspect-[354/424] sm:aspect-[4/3] mb-8 bg-[#eee] overflow-hidden btn-hover-img scale-img">
            <Image src={item.image} alt={item.title} fill className="object-cover" sizes="100vw" priority />
          </div>
          <p className="text-[15px] leading-7 text-[#444] text-justify">
            {item.summary ||
              "Mẫu thiết kế thuộc danh mục kiến trúc của Minh Phú Building, tập trung tối ưu công năng, thẩm mỹ và chi phí đầu tư cho nhà phố – biệt thự tại TP.HCM và các tỉnh thành."}
          </p>
          {item.body ? (
            <div className="mt-4 text-[15px] leading-7 text-[#444]">
              <CmsBody text={item.body} />
            </div>
          ) : null}
        </div>
      </section>
    </>
  );
}
