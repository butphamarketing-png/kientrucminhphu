import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/PageHero";
import { projects } from "@/data/site";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return projects.map((p) => ({
    slug: p.href.replace("/cong-trinh-tieu-bieu/", ""),
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const item = projects.find((p) => p.href.endsWith(`/${slug}`));
  return { title: item?.title ?? "Công trình" };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const item = projects.find((p) => p.href.endsWith(`/${slug}`));
  if (!item) notFound();

  return (
    <>
      <PageHero
        title={item.title}
        crumbs={[
          { label: "Công trình tiêu biểu", href: "/cong-trinh-tieu-bieu" },
          { label: item.title },
        ]}
      />
      <section className="py-12 md:py-16">
        <div className="container-mp max-w-5xl">
          <div className="relative aspect-[4/5] sm:aspect-[4/3] mb-8 bg-[#eee]">
            <Image src={item.image} alt={item.title} fill className="object-cover" sizes="100vw" priority />
          </div>
          <h2 className="mt-0 text-[24px] font-bold uppercase text-[var(--color-main)]">
            {item.title}
          </h2>
          <p className="text-[15px] leading-7 text-[#444] text-justify">
            Công trình được Minh Phú Building thiết kế và thi công với định hướng tối ưu
            công năng, thẩm mỹ và chi phí đầu tư. Từ khảo sát hiện trạng đến bàn giao, mọi
            hạng mục đều được kiểm soát kỹ thuật và tiến độ rõ ràng để mang lại không gian
            sống bền vững cho gia chủ.
          </p>
        </div>
      </section>
    </>
  );
}
