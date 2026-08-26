import Image from "next/image";
import Link from "next/link";
import { footerSupport, site } from "@/data/site";

export function Footer() {
  return (
    <footer id="footer">
      <div className="footer-top">
        <div className="center d-flex flex-wrap align-items-start justify-content-between">
          <div className="footer-1">
            <div className="logof">
              <Link href="/">
                <Image
                  src="/brand/logo-menu-lg.png.webp"
                  alt={`${site.shortName} - Trang chủ`}
                  width={93}
                  height={96}
                />
              </Link>
            </div>
            <p className="footer-tit">{site.name}</p>
            <address className="footer-content" style={{ fontStyle: "normal" }}>
              <p>
                <strong>{site.address1Label}:</strong> {site.address1}
              </p>
              <p>
                <strong>{site.address2Label}:</strong> {site.address2}
              </p>
              <p>
                Email:{" "}
                <a href={`mailto:${site.email}`}>{site.email}</a>
              </p>
              <p>
                Hotline:{" "}
                <a href={`tel:${site.phoneRaw}`}>{site.phone}</a>
              </p>
              <p>
                Website:{" "}
                <a
                  href={`https://${site.website}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  {site.website}
                </a>
              </p>
            </address>
          </div>

          <div className="footer-2">
            <p className="footer-tit">Hỗ trợ khách hàng</p>
            <ul className="footer-list">
              {footerSupport.map((item) => (
                <li key={item.href}>
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
                  href={site.facebook}
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
                  href={site.zalo}
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
                src="https://maps.google.com/maps?q=71/4A%20Nguy%E1%BB%85n%20Duy%20Cung%20H%E1%BB%93%20Ch%C3%AD%20Minh&t=&z=15&ie=UTF8&iwloc=&output=embed"
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
            Copyright © {new Date().getFullYear()} {site.name}. All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
