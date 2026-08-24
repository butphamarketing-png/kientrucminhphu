import { PageHero } from "@/components/PageHero";
import { ContactForm } from "@/components/ContactForm";
import { IconMail, IconMapPin, IconPhone } from "@/components/Icons";
import { site } from "@/data/site";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Liên hệ",
  description: `Liên hệ ${site.shortName}: hotline ${site.phone}, email ${site.email}. Văn phòng ${site.address1}.`,
  path: "/lien-he",
});

export default function LienHePage() {
  return (
    <>
      <PageHero title="Liên hệ" />
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
                src="https://maps.google.com/maps?q=71/4A%20Nguy%E1%BB%85n%20Duy%20Cung,%20An%20H%E1%BB%99i%20T%C3%A2y,%20H%E1%BB%93%20Ch%C3%AD%20Minh&t=&z=15&ie=UTF8&iwloc=&output=embed"
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
