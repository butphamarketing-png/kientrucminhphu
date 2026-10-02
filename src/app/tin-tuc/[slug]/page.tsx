import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/PageHero";
import { JsonLd } from "@/components/JsonLd";
import { findPublicNewsBySlugAsync, getPublicNewsAsync } from "@/lib/cms/content";
import { readCms } from "@/lib/cms/store";
import { cmsMeta, articleJsonLd, toIsoDate } from "@/lib/seo";

type Props = { params: Promise<{ slug: string }> };

type BodyBlock = string | { type: "h2"; text: string };

type GalleryItem = string | { src: string; alt: string };

function renderInline(text: string) {
  const parts = text.split(/(\[[^\]]+\]\([^)]+\))/g);
  return parts.map((part, i) => {
    const m = /^\[([^\]]+)\]\(([^)]+)\)$/.exec(part);
    if (!m) return <Fragment key={i}>{part}</Fragment>;
    const [, label, href] = m;
    const external = href.startsWith("http://") || href.startsWith("https://");
    if (external) {
      return (
        <a
          key={i}
          href={href}
          className="text-[var(--color-main)] font-semibold"
          target="_blank"
          rel="noopener noreferrer"
        >
          {label}
        </a>
      );
    }
    return (
      <Link key={i} href={href} className="text-[var(--color-main)] font-semibold">
        {label}
      </Link>
    );
  });
}

function normalizeGallery(gallery: GalleryItem[], fallbackTitle: string) {
  return gallery.map((g, i) =>
    typeof g === "string"
      ? { src: g, alt: `${fallbackTitle} — ảnh ${i + 1}` }
      : g,
  );
}

export async function generateStaticParams() {
  const news = await getPublicNewsAsync();
  return news.map((n) => ({ slug: n.href.replace("/tin-tuc/", "") }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const item = await findPublicNewsBySlugAsync(slug);
  if (!item) return { title: "Tin tức" };
  return cmsMeta({
    title: item.title,
    description: item.excerpt,
    path: item.href,
    image: item.image,
    type: "article",
    publishedTime: toIsoDate(item.date),
    keywords: "keywords" in item && Array.isArray(item.keywords) ? item.keywords : undefined,
  });
}

export default async function NewsDetailPage({ params }: Props) {
  const { slug } = await params;
  const item = await findPublicNewsBySlugAsync(slug);
  if (!item) notFound();
  const { settings } = await readCms();

  const rawBody: BodyBlock[] =
    "body" in item && Array.isArray(item.body) && item.body.length > 0
      ? (item.body as BodyBlock[])
      : [
          item.excerpt,
          `${settings.shortName} chia sẻ thông tin hữu ích về thiết kế, thi công và cải tạo nhà phố tại TP.HCM. Nếu bạn đang tìm đơn vị đồng hành từ khảo sát, thiết kế đến thi công hoàn thiện, hãy liên hệ hotline để được tư vấn phương án phù hợp hiện trạng thực tế.`,
        ];

  const gallery = normalizeGallery(
    "gallery" in item && Array.isArray(item.gallery) ? (item.gallery as GalleryItem[]) : [],
    item.title,
  );

  const imageAlt =
    "imageAlt" in item && typeof item.imageAlt === "string" ? item.imageAlt : item.title;

  return (
    <>
      <JsonLd data={articleJsonLd(item, settings)} />
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
            <Image src={item.image} alt={imageAlt} fill className="object-cover" sizes="100vw" priority />
          </div>
          <h1
            className="mt-0 text-[24px] md:text-[28px] font-bold uppercase text-[var(--color-main)] leading-snug"
            itemProp="headline"
          >
            {item.title}
          </h1>
          <div className="text-[15px] leading-7 text-[#444] space-y-4 mt-5" itemProp="articleBody">
            {rawBody.map((block, idx) => {
              if (typeof block === "object" && block.type === "h2") {
                return (
                  <h2
                    key={`h2-${idx}`}
                    className="!mt-8 !mb-3 text-[18px] md:text-[20px] font-bold text-[var(--color-main)] leading-snug"
                  >
                    {block.text}
                  </h2>
                );
              }
              const text = typeof block === "string" ? block : "";
              return (
                <p key={`p-${idx}`} className="m-0 text-justify">
                  {renderInline(text)}
                </p>
              );
            })}
            <p className="m-0">
              Hotline tư vấn:{" "}
              <a className="text-[var(--color-main)] font-semibold" href={`tel:${settings.phoneRaw}`}>
                {settings.phone}
              </a>
              {" · "}
              <Link className="text-[var(--color-main)] font-semibold" href="/lien-he">
                Liên hệ nhận báo giá
              </Link>
            </p>
          </div>

          {gallery.length > 0 ? (
            <div className="mt-10">
              <h2 className="mt-0 mb-5 text-[18px] font-bold uppercase text-[var(--color-main)]">
                Bộ ảnh minh họa
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {gallery.map((g) => (
                  <div
                    key={g.src}
                    className="relative aspect-square overflow-hidden bg-[#eee] btn-hover-img scale-img"
                  >
                    <Image
                      src={g.src}
                      alt={g.alt}
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
