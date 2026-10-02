import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/PageHero";
import { cmsMeta } from "@/lib/seo";
import { readCms } from "@/lib/cms/store";

type Props = { params: Promise<{ slug: string }> };

function toItems(cards: Awaited<ReturnType<typeof readCms>>["pricingCards"]) {
  return cards.map((p) => ({
    slug: p.href.replace("/bang-bao-gia/", ""),
    title: p.title,
    image: p.image,
    href: p.href,
    summary: p.summary,
    highlights: p.highlights,
  }));
}

export async function generateStaticParams() {
  const cms = await readCms();
  return toItems(cms.pricingCards).map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const cms = await readCms();
  const item = toItems(cms.pricingCards).find((i) => i.slug === slug);
  if (!item) return { title: "Báo giá" };
  return cmsMeta({
    title: item.title,
    description: item.summary,
    path: item.href,
    image: item.image,
  });
}

export default async function BaoGiaDetailPage({ params }: Props) {
  const { slug } = await params;
  const cms = await readCms();
  const items = toItems(cms.pricingCards);
  const item = items.find((i) => i.slug === slug);
  if (!item) notFound();
  const { settings } = cms;
  const others = items.filter((i) => i.slug !== slug).slice(0, 4);

  return (
    <>
      <PageHero
        title={item.title}
        crumbs={[
          { label: "Bảng báo giá", href: "/bang-bao-gia" },
          { label: item.title, href: item.href },
        ]}
        canonicalPath={item.href}
      />

      <section className="pricing-detail pb-12 md:pb-16 pt-2">
        <div className="container-mp">
          <div className="pricing-detail-grid">
            <div className="pricing-detail-media">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover"
                sizes="(max-width: 991px) 100vw, 48vw"
                priority
              />
            </div>

            <div className="pricing-detail-body">
              <p className="pricing-detail-lead">{item.summary}</p>

              <ul className="pricing-detail-list">
                {item.highlights.map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>

              <div className="pricing-detail-contact">
                <p className="pricing-detail-contact-label">Nhận báo giá chi tiết</p>
                <a className="pricing-detail-hotline" href={`tel:${settings.phoneRaw}`}>
                  Hotline: {settings.phone}
                </a>
                <a className="pricing-detail-email" href={`mailto:${settings.email}`}>
                  {settings.email}
                </a>
              </div>

              <div className="pricing-detail-actions">
                <a className="btn-more pricing-btn-primary" href={`tel:${settings.phoneRaw}`}>
                  Gọi tư vấn ngay
                </a>
                <Link className="btn-more" href="/lien-he">
                  Gửi yêu cầu báo giá
                </Link>
              </div>
            </div>
          </div>

          {others.length > 0 ? (
            <div className="pricing-related">
              <div className="title-main" style={{ marginBottom: 28 }}>
                <h2>Bảng báo giá khác</h2>
              </div>
              <div className="pricing-related-grid">
                {others.map((o) => (
                  <Link key={o.href} href={o.href} className="pricing-related-item scale-img btn-hover-img">
                    <div className="pricing-related-thumb">
                      <Image src={o.image} alt={o.title} fill className="object-cover" sizes="25vw" />
                    </div>
                    <span className="pricing-related-name">{o.title}</span>
                  </Link>
                ))}
              </div>
            </div>
          ) : null}
        </div>
      </section>
    </>
  );
}
