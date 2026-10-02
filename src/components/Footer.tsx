import Image from "next/image";
import Link from "next/link";
import { footerSupport as defaultFooter, site } from "@/data/site";
import type { CmsFooterLink, SiteSettings } from "@/lib/cms/types";

const DEFAULT_MAP =
  "https://maps.google.com/maps?q=71/4A%20Nguy%E1%BB%85n%20Duy%20Cung%20H%E1%BB%93%20Ch%C3%AD%20Minh&t=&z=15&ie=UTF8&iwloc=&output=embed";

export function Footer({
  settings = site,
  footerSupport = defaultFooter,
}: {
  settings?: SiteSettings;
  footerSupport?: { id?: string; label: string; href: string }[] | CmsFooterLink[];
}) {
  return (
    <footer id="footer">
      <div className="footer-top">
        <div className="center d-flex flex-wrap align-items-start justify-content-between">
          <div className="footer-1">
            <div className="logof">
              <Link href="/">
                <Image
                  src="/brand/logo-menu-lg.png.webp"
                  alt={`${settings.shortName} - Trang chủ`}
                  width={93}
                  height={96}
                />
              </Link>
            </div>
            <p className="footer-tit">{settings.name}</p>
            <address className="footer-content" style={{ fontStyle: "normal" }}>
              <p>
                <strong>{settings.address1Label}:</strong> {settings.address1}
              </p>
              <p>
                <strong>{settings.address2Label}:</strong> {settings.address2}
              </p>
              <p>
                Email:{" "}
                <a href={`mailto:${settings.email}`}>{settings.email}</a>
              </p>
              <p>
                Hotline:{" "}
                <a href={`tel:${settings.phoneRaw}`}>{settings.phone}</a>
              </p>
              <p>
                Website:{" "}
                <a
                  href={`https://${settings.website}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  {settings.website}
                </a>
              </p>
            </address>
          </div>

          <div className="footer-2">
            <p className="footer-tit">Hỗ trợ khách hàng</p>
            <ul className="footer-list">
              {footerSupport.map((item) => (
                <li key={"id" in item && item.id ? item.id : item.href}>
                  <Link href={item.href} className="text-decoration-none">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-3">
            <p className="footer-tit">Liên kết với chúng tôi</p>
            <ul className="mxh footer-mxh">
              <li>
                <a
                  href={settings.facebook}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Facebook"
                >
                  <Image
                    src="/media/thumbs/40x40x2/upload/photo/f1-7239.png.webp"
                    alt="Facebook"
                    width={40}
                    height={40}
                  />
                </a>
              </li>
              <li>
                <a
                  href={settings.zalo}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Zalo"
                >
                  <Image
                    src="/media/thumbs/40x40x2/upload/photo/f2-9488.png.webp"
                    alt="Zalo"
                    width={40}
                    height={40}
                  />
                </a>
              </li>
            </ul>
          </div>

          <div className="footer-4">
            <p className="footer-tit">Google map</p>
            <div className="footer-map">
              <iframe
                title="Google map Minh Phú"
                src={settings.mapEmbed || DEFAULT_MAP}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="center">
          <p className="copyright">
            Copyright © {new Date().getFullYear()} {settings.name}. All rights reserved
          </p>
          <p className="footer-credit">
            Website được thiết kế và vận hành bởi{" "}
            <a
              href="https://butphamarketing.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Bứt Phá Marketing
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
