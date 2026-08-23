import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/PageHero";
import { news } from "@/data/site";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return news.map((n) => ({ slug: n.href.replace("/tin-tuc/", "") }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const item = news.find((n) => n.href.endsWith(`/${slug}`));
  return { title: item?.title ?? "Tin tức" };
}

export default async function NewsDetailPage({ params }: Props) {
  const { slug } = await params;
  const item = news.find((n) => n.href.endsWith(`/${slug}`));
  if (!item) notFound();

  return (
    <>
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
            <p>
              Minh Phú Building chia sẻ thông tin hữu ích về thiết kế, thi công và cải tạo
              nhà phố tại TP.HCM. Nội dung nhằm giúp gia chủ nắm rõ xu hướng, quy trình và
              giải pháp tối ưu công năng – chi phí cho từng công trình.
            </p>
            <p>
              Nếu bạn đang tìm đơn vị đồng hành từ khảo sát, thiết kế đến thi công hoàn thiện,
              hãy liên hệ hotline để được tư vấn phương án phù hợp hiện trạng thực tế.
            </p>
          </div>
        </div>
      </article>
    </>
  );
}
