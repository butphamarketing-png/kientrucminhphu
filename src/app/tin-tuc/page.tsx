import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { news } from "@/data/site";

export const metadata: Metadata = { title: "Tin tức" };

export default function TinTucPage() {
  return (
    <>
      <PageHero title="Tin tức" />
      <section className="pb-12 md:pb-16 pt-6">
        <div className="container-mp grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {news.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              className="news-item group rounded-lg border border-[#DCDCDC] bg-white p-2 pb-5 hover:border-[var(--color-main)] transition-colors"
            >
              <div className="relative aspect-[308/151] overflow-hidden rounded btn-hover-img scale-img">
                <Image src={n.image} alt={n.title} fill className="object-cover" sizes="33vw" />
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
