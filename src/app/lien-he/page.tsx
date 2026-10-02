import { PageHero } from "@/components/PageHero";
import { ContactForm } from "@/components/ContactForm";
import { IconMail, IconMapPin, IconPhone } from "@/components/Icons";
import { pageMeta } from "@/lib/seo";
import { readCms } from "@/lib/cms/store";

export async function generateMetadata() {
  const { settings } = await readCms();
  return pageMeta({
    title: "Liên hệ",
    description: `Liên hệ ${settings.shortName}: hotline ${settings.phone}, email ${settings.email}. Văn phòng ${settings.address1}.`,
    path: "/lien-he",
    settings,
  });
}

export default async function LienHePage() {
  const { settings: site } = await readCms();
  return (
    <>
      <PageHero title="Liên hệ" canonicalPath="/lien-he" />
      <section className="pb-12 md:pb-16 pt-6">
        <div className="container-mp grid lg:grid-cols-2 gap-10">
          <div>
            <h2 className="mt-0 text-[22px] font-bold uppercase text-[var(--color-main)]">
              Thông tin về {site.name}
            </h2>
            <ul className="list-none m-0 p-0 space-y-3 text-[15px]">
              <li className="flex gap-3">
                <span className="text-[var(--color-main)] shrink-0 mt-1">
                  <IconMapPin size={18} />
                </span>
                <span>
                  <strong>{site.address1Label}:</strong> {site.address1}
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-[var(--color-main)] shrink-0 mt-1">
                  <IconMapPin size={18} />
                </span>
                <span>
                  <strong>{site.address2Label}:</strong> {site.address2}
                </span>
              </li>
              <li className="flex gap-3 items-center">
                <span className="text-[var(--color-main)]">
                  <IconPhone size={18} />
                </span>
                <a href={`tel:${site.phoneRaw}`}>Hotline: {site.phone}</a>
              </li>
              <li className="flex gap-3 items-center">
                <span className="text-[var(--color-main)]">
                  <IconMail size={18} />
                </span>
                <a href={`mailto:${site.email}`}>{site.email}</a>
              </li>
              <li className="flex gap-3 items-center">
                <span className="text-[var(--color-main)] text-[13px] font-bold">Web</span>
                <a href={`https://${site.website}`} target="_blank" rel="noreferrer">
                  {site.website}
                </a>
              </li>
            </ul>

            <div className="mt-8 aspect-[16/10] rounded-xl overflow-hidden bg-[#dde5ec]">
              <iframe
                title="Google map Văn phòng Kiến trúc Minh Phú"
                src={site.mapEmbed}
                className="w-full h-full border-0"
                loading="lazy"
              />
            </div>
          </div>

          <div>
            <h2 className="mt-0 mb-5 text-[20px] font-bold uppercase text-[var(--color-main)]">
              Gửi thắc mắc cho chúng tôi
            </h2>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
