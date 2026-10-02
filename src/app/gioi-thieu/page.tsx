import Image from "next/image";
import { PageHero } from "@/components/PageHero";
import { CmsBody } from "@/components/CmsBody";
import { pageMeta } from "@/lib/seo";
import { readCms } from "@/lib/cms/store";

export const metadata = pageMeta({
  title: "Giới thiệu",
  description:
    "Giới thiệu Công ty TNHH Kiến trúc Minh Phú — đơn vị thiết kế, thi công và cải tạo nhà phố tại TP.HCM với quy trình bài bản, báo giá minh bạch.",
  path: "/gioi-thieu",
});

export default async function GioiThieuPage() {
  const { intro, settings: site } = await readCms();
  return (
    <>
      <PageHero title="Giới thiệu" crumbs={[{ label: "Giới thiệu", href: "/gioi-thieu" }]} />
      <section className="pb-12 md:pb-16 pt-4">
        <div className="container-mp grid lg:grid-cols-2 gap-10 items-start">
          <div className="content text-[15px] leading-7 text-[#444]">
            {intro.paragraphs.map((p) => (
              <p key={p.slice(0, 40)} className="m-0 mb-4 text-justify">
                {p}
              </p>
            ))}

            {intro.extra ? <CmsBody text={intro.extra} /> : null}

            <div className="mt-10 p-5 bg-[#f7f9fb] border-l-4 border-[var(--color-main)]">
              <h3 className="m-0 mb-2 text-[16px] font-bold uppercase text-[#1c1c1c]">
                Thông tin liên hệ
              </h3>
              <p className="m-0 text-[14px] leading-7">
                <em>
                  {site.slogan1} — {site.slogan2}
                </em>
                <br />
                <strong>{site.address1Label}:</strong> {site.address1}
                <br />
                <strong>{site.address2Label}:</strong> {site.address2}
                <br />
                Hotline: {site.phone}
                <br />
                Website: {site.website}
                <br />
                Email: {site.email}
              </p>
            </div>
          </div>
          <div className="scale-img">
            <Image
              src={intro.image}
              alt={intro.title}
              width={800}
              height={800}
              className="w-full object-cover"
            />
          </div>
        </div>
      </section>
    </>
  );
}
