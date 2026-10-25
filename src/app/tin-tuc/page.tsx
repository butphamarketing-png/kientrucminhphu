import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { getPublicNewsAsync } from "@/lib/cms/content";
import { absUrl, cmsMeta } from "@/lib/seo";

const PAGE_SIZE = 12;

type Props = { searchParams: Promise<{ q?: string; trang?: string }> };

function parsePage(raw: string | undefined) {
  if (!raw) return 1;
  if (!/^\d+$/.test(raw)) return 0;
  return Number(raw);
}

function pageHref(page: number, query: string) {
  const params = new URLSearchParams();
  if (query) params.set("q", query);
  if (page > 1) params.set("trang", String(page));
  const search = params.toString();
  return search ? `/tin-tuc?${search}` : "/tin-tuc";
}

export async function generateMetadata({ searchParams }: Props): Promise<Metadata> {
  const { q, trang } = await searchParams;
  const query = q?.trim() ?? "";
  const page = parsePage(trang);
  const path = pageHref(page > 1 ? page : 1, query);
  const base = await cmsMeta({
    title: page > 1 ? `Tin tức — trang ${page}` : "Tin tức",
    description:
      "Tin tức xu hướng thiết kế, thi công và cải tạo nhà phố tại TP.HCM từ Kiến trúc Minh Phú.",
    path,
  });
  if (query) {
    return { ...base, robots: { index: false, follow: true } };
  }
  const news = await getPublicNewsAsync();
  const pages = Math.max(1, Math.ceil(news.length / PAGE_SIZE));
  return {
    ...base,
    pagination: {
      previous: page > 1 && page <= pages ? absUrl(pageHref(page - 1, "")) : undefined,
      next: page < pages ? absUrl(pageHref(page + 1, "")) : undefined,
    },
  };
}

export default async function TinTucPage({ searchParams }: Props) {
  const { q, trang } = await searchParams;
  const query = q?.trim() ?? "";
  const requested = parsePage(trang);
  const news = await getPublicNewsAsync();
  const filtered = query
    ? news.filter(
        (item) =>
          item.title.toLowerCase().includes(query.toLowerCase()) ||
          item.excerpt.toLowerCase().includes(query.toLowerCase()),
      )
    : news;
  const pages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));

  if (requested === 0 || requested > pages || (trang === "1" && !query)) {
    redirect(pageHref(1, query));
  }
  const page = requested;
  const start = (page - 1) * PAGE_SIZE;
  const list = filtered.slice(start, start + PAGE_SIZE);
  const window = [1, pages, page - 1, page, page + 1]
    .filter((value, index, all) => value >= 1 && value <= pages && all.indexOf(value) === index)
    .sort((a, b) => a - b);

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ItemList",
          numberOfItems: filtered.length,
          itemListElement: list.map((item, index) => ({
            "@type": "ListItem",
            position: start + index + 1,
            name: item.title,
            url: absUrl(item.href),
          })),
        }}
      />
      <PageHero title="Tin tức" canonicalPath={query ? undefined : pageHref(page, "")} />
      <section className="pb-8 md:pb-10 pt-6">
        <div className="container-mp grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {list.length === 0 ? (
            <p className="col-span-full text-[15px] text-[#555]">
              Không tìm thấy bài viết phù hợp với “{query}”.
            </p>
          ) : null}
          {list.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="news-item group rounded-lg border border-[#DCDCDC] bg-white p-2 pb-5 hover:border-[var(--color-main)] transition-colors"
            >
              <div className="relative aspect-[308/151] overflow-hidden rounded btn-hover-img scale-img">
                <Image
                  src={item.image}
                  alt={item.imageAlt || item.title}
                  fill
                  className="object-cover"
                  sizes="33vw"
                />
              </div>
              <p className="m-0 mt-3 px-1 text-[12px] text-[#999]">{item.date}</p>
              <h2 className="mt-2 mb-0 px-1 text-[15px] md:text-[16px] font-semibold uppercase leading-[1.3] text-split-2 group-hover:text-[var(--color-main)]">
                {item.title}
              </h2>
              <p className="mt-2 mb-0 px-1 text-[13px] text-[#555] text-split-2 leading-[1.3]">
                {item.excerpt}
              </p>
            </Link>
          ))}
        </div>
      </section>
      {pages > 1 ? (
        <nav className="container-mp flex flex-wrap items-center justify-center gap-2 pb-12" aria-label="Phân trang tin tức">
          {page > 1 ? (
            <Link href={pageHref(page - 1, query)} className="px-3 py-2 text-[14px] border border-[#DCDCDC] rounded hover:border-[var(--color-main)]">
              Trước
            </Link>
          ) : null}
          {window.map((value, index) => {
            const prev = window[index - 1];
            const gap = prev && value - prev > 1;
            return (
              <span key={value} className="flex items-center gap-2">
                {gap ? <span className="text-[#999]">…</span> : null}
                {value === page ? (
                  <span className="px-3 py-2 text-[14px] rounded bg-[var(--color-main)] text-white" aria-current="page">
                    {value}
                  </span>
                ) : (
                  <Link
                    href={pageHref(value, query)}
                    className="px-3 py-2 text-[14px] border border-[#DCDCDC] rounded hover:border-[var(--color-main)]"
                  >
                    {value}
                  </Link>
                )}
              </span>
            );
          })}
          {page < pages ? (
            <Link href={pageHref(page + 1, query)} className="px-3 py-2 text-[14px] border border-[#DCDCDC] rounded hover:border-[var(--color-main)]">
              Sau
            </Link>
          ) : null}
        </nav>
      ) : null}
    </>
  );
}
