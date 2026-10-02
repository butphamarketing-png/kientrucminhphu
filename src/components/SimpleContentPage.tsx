import { PageHero } from "@/components/PageHero";
import { site as defaultSite } from "@/data/site";
import type { SiteSettings } from "@/lib/cms/types";

export function SimpleContentPage({
  title,
  path,
  children,
  settings = defaultSite,
}: {
  title: string;
  path?: string;
  children?: React.ReactNode;
  settings?: SiteSettings;
}) {
  return (
    <>
      <PageHero title={title} canonicalPath={path} />
      <section className="pb-12 md:pb-16 pt-4">
        <div className="container-mp max-w-3xl text-[15px] leading-7 text-[#444]">
          {children ?? (
            <>
              <p>
                Nội dung đang được cập nhật bởi {settings.shortName}. Vui lòng liên hệ hotline{" "}
                <a className="text-[var(--color-main)] font-semibold" href={`tel:${settings.phoneRaw}`}>
                  {settings.phone}
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
