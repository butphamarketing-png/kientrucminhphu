import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/PageHero";
import { serviceList, servicesDetail, site } from "@/data/site";
import { pageMeta } from "@/lib/seo";

type Props = { params: Promise<{ slug: string }> };

const allServices = [
  ...servicesDetail.map((s) => ({
    slug: s.slug,
    title: s.title,
    image: s.image,
    summary: s.summary,
  })),
  ...serviceList.map((s) => ({
    slug: s.href.replace("/dich-vu/", ""),
    title: s.title,
    image: s.image,
    summary:
      "Minh Phú Building cung cấp giải pháp thiết kế – thi công – cải tạo nhà phố thực tế, minh bạch và đúng tiến độ tại TP.HCM.",
  })),
];

export async function generateStaticParams() {
  const slugs = Array.from(new Set(allServices.map((s) => s.slug)));
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const item = allServices.find((s) => s.slug === slug);
  if (!item) return { title: "Dịch vụ" };
  return pageMeta({
    title: item.title,
    description: item.summary,
    path: `/dich-vu/${slug}`,
    image: item.image,
  });
}

export default async function DichVuDetailPage({ params }: Props) {
  const { slug } = await params;
  const item = allServices.find((s) => s.slug === slug);
  if (!item) notFound();

  return (
    <>
      <PageHero
        title={item.title}
        crumbs={[
          { label: "Dịch vụ", href: "/dich-vu" },
          { label: item.title },
        ]}
      />
      <section className="pb-12 md:pb-16 pt-4">
        <div className="container-mp grid lg:grid-cols-2 gap-10 items-start">
          <div className="relative aspect-[4/3] scale-img bg-[#eee] overflow-hidden btn-hover-img">
            <Image src={item.image} alt={item.title} fill className="object-cover" sizes="50vw" />
          </div>
          <div>
            <h2 className="mt-0 text-[22px] font-bold text-[var(--color-main)] uppercase">
              {item.title}
            </h2>
            <p className="text-[15px] leading-7 text-[#444]">{item.summary}</p>
            <p className="text-[15px] leading-7 text-[#444] text-justify">
              {site.shortName} đồng hành cùng khách hàng từ khảo sát hiện trạng, tư vấn
              phương án, thiết kế chi tiết đến thi công hoàn thiện. Chúng tôi ưu tiên giải
              pháp thực tế, tối ưu công năng – chi phí và kiểm soát tiến độ rõ ràng.
            </p>
            <ul className="pl-5 space-y-2 text-[15px]">
              <li>Tư vấn miễn phí phương án phù hợp hiện trạng</li>
              <li>Báo giá minh bạch, hạn chế phát sinh</li>
              <li>Thi công đúng kỹ thuật, bàn giao đúng tiến độ</li>
              <li>Chính sách bảo hành và hỗ trợ hậu mãi</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
