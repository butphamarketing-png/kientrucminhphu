import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { projects } from "@/data/site";

export const metadata: Metadata = {
  title: "Công trình tiêu biểu",
};

export default function CongTrinhPage() {
  return (
    <>
      <PageHero title="Công trình tiêu biểu" />
      <section className="pb-12 md:pb-16 pt-6">
        <div className="container-mp grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((p) => (
            <Link key={p.href} href={p.href} className="block group">
              <div className="relative aspect-[614/702] bg-[#eee] overflow-hidden btn-hover-img scale-img">
                <Image
                  src={p.image}
                  alt={p.title}
                  fill
                  className="object-cover"
                  sizes="(max-width:768px) 50vw, 25vw"
                />
              </div>
              <div className="news-desc mt-3">
                <h2 className="m-0 text-[14px] md:text-[16px] font-semibold uppercase text-center text-[#1c1c1c] leading-[1.3] text-split-2 px-1 group-hover:text-[var(--color-main)]">
                  {p.title}
                </h2>
                <div className="contruction-info mt-3 px-1 text-[12px] md:text-[13px] text-[#555] leading-[1.45] text-center space-y-0.5">
                  <p className="m-0">
                    <b>Chủ đầu tư:</b> {p.owner}
                  </p>
                  <p className="m-0">
                    <b>Địa điểm:</b> {p.location}
                  </p>
                  <p className="m-0">
                    <b>Quy mô:</b> {p.scale}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
