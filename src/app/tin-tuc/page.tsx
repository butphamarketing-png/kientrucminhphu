import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { getPublicNewsAsync } from "@/lib/cms/content";
import { cmsMeta } from "@/lib/seo";

type Props = { searchParams: Promise<{ q?: string }> };

export async function generateMetadata({ searchParams }: Props): Promise<Metadata> {
  const { q } = await searchParams;
  const base = await cmsMeta({
    title: "Tin tức",
    description:
      "Tin tức xu hướng thiết kế, thi công và cải tạo nhà phố tại TP.HCM từ Kiến trúc Minh Phú.",
    path: "/tin-tuc",
  });
  if (q?.trim()) {
    return { ...base, robots: { index: false, follow: true } };
  }
  return base;
}

export default async function TinTucPage({ searchParams }: Props) {
  const { q } = await searchParams;
  const query = q?.trim() ?? "";
  const news = await getPublicNewsAsync();
  const list = query
    ? news.filter(
        (n) =>
          n.title.toLowerCase().includes(query.toLowerCase()) ||
          n.excerpt.toLowerCase().includes(query.toLowerCase()),
      )
    : news;

  return (
    <>
      <PageHero title="Tin tức" canonicalPath="/tin-tuc" />
      <section className="pb-12 md:pb-16 pt-6">
        <div className="container-mp grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {list.length === 0 ? (
            <p className="col-span-full text-[15px] text-[#555]">
              Không tìm thấy bài viết phù hợp với “{query}”.
            </p>
          ) : null}
          {list.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              className="news-item group rounded-lg border border-[#DCDCDC] bg-white p-2 pb-5 hover:border-[var(--color-main)] transition-colors"
            >
              <div className="relative aspect-[308/151] overflow-hidden rounded btn-hover-img scale-img">
                <Image
                  src={n.image}
                  alt={"imageAlt" in n && typeof n.imageAlt === "string" ? n.imageAlt : n.title}
                  fill
                  className="object-cover"
                  sizes="33vw"
                />
              </div>
              <p className="m-0 mt-3 px-1 text-[12px] text-[#999]">{n.date}</p>
              <h2 className="mt-2 mb-0 px-1 text-[15px] md:text-[16px] font-semibold uppercase leading-[1.3] text-split-2 group-hover:text-[var(--color-main)]">
                {n.title}
              </h2>
              <p className="mt-2 mb-0 px-1 text-[13px] text-[#555] text-split-2 leading-[1.3]">
                {n.excerpt}
              </p>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
