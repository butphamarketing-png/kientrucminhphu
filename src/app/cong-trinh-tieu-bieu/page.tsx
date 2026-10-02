import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { pageMeta } from "@/lib/seo";
import { readCms } from "@/lib/cms/store";

export const metadata = pageMeta({
  title: "Công trình tiêu biểu",
  description:
    "Danh mục công trình tiêu biểu của Kiến trúc Minh Phú: nhà phố, biệt thự, cải tạo tại TP.HCM và các tỉnh thành.",
  path: "/cong-trinh-tieu-bieu",
});

export default async function CongTrinhPage() {
  const { projects } = await readCms();
  return (
    <>
      <PageHero title="Công trình tiêu biểu" canonicalPath="/cong-trinh-tieu-bieu" />
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
                  sizes="(max-width: 640px) 100vw, 25vw"
                />
              </div>
              <div className="mt-3">
                <h2 className="m-0 text-[14px] md:text-[16px] font-semibold uppercase text-center text-[#1c1c1c] leading-[1.3] text-split-2 px-1 group-hover:text-[var(--color-main)]">
                  {p.title}
                </h2>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
