import { PageHero } from "@/components/PageHero";
import { site } from "@/data/site";

export function SimpleContentPage({
  title,
  children,
}: {
  title: string;
  children?: React.ReactNode;
}) {
  return (
    <>
      <PageHero title={title} />
      <section className="pb-12 md:pb-16 pt-4">
        <div className="container-mp max-w-3xl text-[15px] leading-7 text-[#444]">
          {children ?? (
            <>
              <p>
                Nội dung đang được cập nhật bởi {site.shortName}. Vui lòng liên hệ hotline{" "}
                <a className="text-[var(--color-main)] font-semibold" href={`tel:${site.phoneRaw}`}>
                  {site.phone}
                </a>{" "}
                để được tư vấn chi tiết.
              </p>
            </>
          )}
        </div>
      </section>
    </>
  );
}
