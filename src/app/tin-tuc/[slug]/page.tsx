import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/PageHero";
import { JsonLd } from "@/components/JsonLd";
import { news, site } from "@/data/site";
import { pageMeta, articleJsonLd, toIsoDate } from "@/lib/seo";

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
    publishedTime: toIsoDate(item.date),
  });
}

export default async function NewsDetailPage({ params }: Props) {
  const { slug } = await params;
  const item = news.find((n) => n.href.endsWith(`/${slug}`));
  if (!item) notFound();

  const paragraphs =
    "body" in item && Array.isArray(item.body) && item.body.length > 0
      ? item.body
      : [
          item.excerpt,
          `${site.shortName} chia sẻ thông tin hữu ích về thiết kế, thi công và cải tạo nhà phố tại TP.HCM. Nếu bạn đang tìm đơn vị đồng hành từ khảo sát, thiết kế đến thi công hoàn thiện, hãy liên hệ hotline để được tư vấn phương án phù hợp hiện trạng thực tế.`,
        ];

  const gallery =
    "gallery" in item && Array.isArray(item.gallery) ? item.gallery : [];

  return (
    <>
      <JsonLd data={articleJsonLd(item)} />
      <PageHero
        title={item.title}
        showHeading={false}
        crumbs={[
          { label: "Tin tức", href: "/tin-tuc" },
          { label: item.title, href: item.href },
        ]}
      />
      <article className="py-12 md:py-16" itemScope itemType="https://schema.org/Article">
        <div className="container-mp max-w-4xl">
          <p className="text-[13px] text-[var(--color-gray)] m-0 mb-4">
            <time dateTime={toIsoDate(item.date)}>{item.date}</time>
          </p>
          <div className="relative aspect-[16/9] mb-8 bg-[#eee] overflow-hidden">
            <Image src={item.image} alt={item.title} fill className="object-cover" sizes="100vw" priority />
          </div>
          <h1
            className="mt-0 text-[24px] md:text-[28px] font-bold uppercase text-[var(--color-main)] leading-snug"
            itemProp="headline"
          >
            {item.title}
          </h1>
          <div className="text-[15px] leading-7 text-[#444] space-y-4" itemProp="articleBody">
            {paragraphs.map((p) => (
              <p key={p.slice(0, 48)} className="m-0 text-justify">
                {p}
              </p>
            ))}
            <p className="m-0">
              Hotline tư vấn:{" "}
              <a className="text-[var(--color-main)] font-semibold" href={`tel:${site.phoneRaw}`}>
                {site.phone}
              </a>
              {" · "}
              <Link className="text-[var(--color-main)] font-semibold" href="/thu-vien/nha-pho-mau-2026">
                Xem bộ ảnh nhà phố mẫu 2026
              </Link>
            </p>
          </div>

          {gallery.length > 0 ? (
            <div className="mt-10">
              <h2 className="mt-0 mb-5 text-[18px] font-bold uppercase text-[var(--color-main)]">
                Bộ ảnh minh họa
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {gallery.map((src, i) => (
                  <div
                    key={src}
                    className="relative aspect-square overflow-hidden bg-[#eee] btn-hover-img scale-img"
                  >
                    <Image
                      src={src}
                      alt={`${item.title} — ảnh ${i + 1}`}
                      fill
                      className="object-cover"
                      sizes="33vw"
                    />
                  </div>
                ))}
              </div>
            </div>
          ) : null}
        </div>
      </article>
    </>
  );
}
