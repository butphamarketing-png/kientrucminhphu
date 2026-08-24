import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/PageHero";
import { JsonLd } from "@/components/JsonLd";
import { news, site } from "@/data/site";
import { pageMeta, absUrl } from "@/lib/seo";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return news.map((n) => ({ slug: n.href.replace("/tin-tuc/", "") }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const item = news.find((n) => n.href.endsWith(`/${slug}`));
  if (!item) return { title: "Tin tức" };
  return pageMeta({
    title: item.title,
    description: item.excerpt,
    path: item.href,
    image: item.image,
    type: "article",
  });
}

export default async function NewsDetailPage({ params }: Props) {
  const { slug } = await params;
  const item = news.find((n) => n.href.endsWith(`/${slug}`));
  if (!item) notFound();

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: item.title,
          description: item.excerpt,
          image: absUrl(item.image),
          url: absUrl(item.href),
          datePublished: item.date,
          author: { "@type": "Organization", name: site.name },
          publisher: { "@type": "Organization", name: site.name },
        }}
      />
      <PageHero
        title={item.title}
        crumbs={[{ label: "Tin tức", href: "/tin-tuc" }, { label: item.title }]}
      />
      <article className="py-12 md:py-16">
        <div className="container-mp max-w-4xl">
          <p className="text-[13px] text-[var(--color-gray)] m-0 mb-4">{item.date}</p>
          <div className="relative aspect-[16/8] mb-8 bg-[#eee]">
            <Image src={item.image} alt={item.title} fill className="object-cover" sizes="100vw" priority />
          </div>
          <h1 className="mt-0 text-[24px] md:text-[28px] font-bold uppercase text-[var(--color-main)] leading-snug">
            {item.title}
          </h1>
          <div className="text-[15px] leading-7 text-[#444] space-y-4">
            <p>{item.excerpt}</p>
            <p>
              Minh Phú Building chia sẻ thông tin hữu ích về thiết kế, thi công và cải tạo
              nhà phố tại TP.HCM. Nếu bạn đang tìm đơn vị đồng hành từ khảo sát, thiết kế đến
              thi công hoàn thiện, hãy liên hệ hotline để được tư vấn phương án phù hợp hiện
              trạng thực tế.
            </p>
          </div>
        </div>
      </article>
    </>
  );
}
