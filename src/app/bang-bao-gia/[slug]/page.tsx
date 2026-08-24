import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/PageHero";
import { pricingCards, site } from "@/data/site";
import { pageMeta } from "@/lib/seo";

type Props = { params: Promise<{ slug: string }> };

const items = pricingCards.map((p) => ({
  slug: p.href.replace("/bang-bao-gia/", ""),
  title: p.title,
  image: p.image,
  href: p.href,
}));

export async function generateStaticParams() {
  return items.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const item = items.find((i) => i.slug === slug);
  if (!item) return { title: "Báo giá" };
  return pageMeta({
    title: item.title,
    description: `Báo giá ${item.title} tại ${site.shortName}. Liên hệ hotline ${site.phone} để nhận tư vấn chi tiết.`,
    path: item.href,
    image: item.image,
  });
}

export default async function BaoGiaDetailPage({ params }: Props) {
  const { slug } = await params;
  const item = items.find((i) => i.slug === slug);
  if (!item) notFound();

  return (
    <>
      <PageHero
        title={item.title}
        crumbs={[
          { label: "Bảng báo giá", href: "/bang-bao-gia" },
          { label: item.title },
        ]}
      />
      <section className="pb-12 md:pb-16 pt-4">
        <div className="container-mp grid lg:grid-cols-2 gap-10 items-start">
          <div className="relative aspect-[354/424] bg-[#eee] overflow-hidden btn-hover-img scale-img">
            <Image src={item.image} alt={item.title} fill className="object-cover" sizes="50vw" />
          </div>
          <div>
            <h2 className="mt-0 text-[22px] font-bold uppercase text-[var(--color-main)]">
              {item.title}
            </h2>
            <p className="text-[15px] leading-7 text-[#444]">
              Liên hệ Minh Phú Building để nhận báo giá chi tiết theo hiện trạng và yêu cầu
              của bạn. Đơn giá được lập minh bạch theo hạng mục, vật tư và phạm vi thi công.
            </p>
            <p className="text-[15px] leading-7">
              Hotline:{" "}
              <a className="text-[var(--color-main)] font-semibold" href={`tel:${site.phoneRaw}`}>
                {site.phone}
              </a>
              <br />
              Email:{" "}
              <a className="text-[var(--color-main)] font-semibold" href={`mailto:${site.email}`}>
                {site.email}
              </a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
