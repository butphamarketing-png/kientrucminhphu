import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/PageHero";
import { JsonLd } from "@/components/JsonLd";
import { pageMeta, absUrl } from "@/lib/seo";
import { readCms } from "@/lib/cms/store";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  const { projects } = await readCms();
  return projects.map((p) => ({
    slug: p.href.replace("/cong-trinh-tieu-bieu/", ""),
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const cms = await readCms();
  const item = cms.projects.find((p) => p.href.endsWith(`/${slug}`));
  if (!item) return { title: "Công trình" };
  const desc = `Công trình ${item.title} — chủ đầu tư ${item.owner}, ${item.location}. Thiết kế thi công bởi ${cms.settings.shortName}.`;
  return pageMeta({
    title: item.title,
    description: desc,
    path: item.href,
    image: item.image,
  });
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const cms = await readCms();
  const item = cms.projects.find((p) => p.href.endsWith(`/${slug}`));
  if (!item) notFound();
  const { settings } = cms;

  const desc = `Công trình ${item.title} do ${settings.shortName} thiết kế và thi công tại ${item.location}.`;

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "CreativeWork",
          name: item.title,
          description: desc,
          image: absUrl(item.image),
          url: absUrl(item.href),
          creator: { "@type": "Organization", name: settings.name },
        }}
      />
      <PageHero
        title={item.title}
        crumbs={[
          { label: "Công trình tiêu biểu", href: "/cong-trinh-tieu-bieu" },
          { label: item.title, href: item.href },
        ]}
      />
      <section className="py-12 md:py-16">
        <div className="container-mp max-w-5xl">
          <div className="relative aspect-[4/5] sm:aspect-[4/3] mb-8 bg-[#eee]">
            <Image src={item.image} alt={item.title} fill className="object-cover" sizes="100vw" priority />
          </div>
          <p className="mt-0 mb-4 text-[15px] leading-7 text-[#666]">
            Chủ đầu tư: {item.owner}
            {item.location ? ` · ${item.location}` : ""}
            {item.scale ? ` · ${item.scale}` : ""}
          </p>
          <p className="text-[15px] leading-7 text-[#444] text-justify">
            {item.description ||
              "Công trình được Minh Phú Building thiết kế và thi công với định hướng tối ưu công năng, thẩm mỹ và chi phí đầu tư. Từ khảo sát hiện trạng đến bàn giao, mọi hạng mục đều được kiểm soát kỹ thuật và tiến độ rõ ràng để mang lại không gian sống bền vững cho gia chủ."}
          </p>
        </div>
      </section>
    </>
  );
}
