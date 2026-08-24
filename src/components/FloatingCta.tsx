"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { site } from "@/data/site";

const mapUrl =
  "https://www.google.com/maps/dir/?api=1&origin=&destination=71/4A%20Nguy%E1%BB%85n%20Duy%20Cung,%20P.%20An%20H%E1%BB%99i%20T%C3%A2y,%20H%E1%BB%93%20Ch%C3%AD%20Minh";

const items = [
  {
    id: "goidien",
    href: `tel:${site.phoneRaw}`,
    label: "Gọi điện",
    icon: "/media/assets/images/fp-phone.png",
  },
  {
    id: "sms",
    href: `sms:${site.phoneRaw}`,
    label: "Nhắn tin",
    icon: "/media/assets/images/fp-sms.png",
  },
  {
    id: "chiduong",
    href: mapUrl,
    label: "Chỉ Đường",
    icon: "/media/assets/images/fp-chiduong.png",
    external: true,
  },
  {
    id: "chatzalo",
    href: site.zalo,
    label: "Chat zalo",
    icon: "/media/assets/images/fp-zalo.png",
    external: true,
  },
  {
    id: "chatfb",
    href: site.messenger,
    label: "Chat facebook",
    icon: "/media/assets/images/fp-mess.png",
    external: true,
  },
];

export function FloatingCta() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 120);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <button
        type="button"
        aria-label="Lên đầu trang"
        className={`progress-wrap ${showTop ? "active-progress" : ""}`}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      />

      {/* Desktop: Zalo / Messenger / Facebook + pulse phone — right side */}
      <div className="float-cta-right">
        <a
          className="float-social-btn float-social-zalo"
          href={site.zalo}
          target="_blank"
          rel="noreferrer"
          aria-label="Chat Zalo"
          title="Zalo"
        >
          <Image src="/media/assets/images/fp-zalo.png" alt="Zalo" width={28} height={28} />
        </a>
        <a
          className="float-social-btn float-social-mess"
          href={site.messenger}
          target="_blank"
          rel="noreferrer"
          aria-label="Chat Messenger"
          title="Messenger"
        >
          <Image src="/media/assets/images/fp-mess.png" alt="Messenger" width={28} height={28} />
        </a>
        <a
          className="float-social-btn float-social-fb"
          href={site.facebook}
          target="_blank"
          rel="noreferrer"
          aria-label="Facebook"
          title="Facebook"
        >
          <i className="fab fa-facebook-f" aria-hidden />
        </a>
        <a
          href={`tel:${site.phoneRaw}`}
          className="btn-phone-float"
          data-phone={site.phone}
          aria-label={`Gọi ${site.phone}`}
        >
          <span className="btn-phone-pulse" />
          <span className="btn-phone-pulse delay" />
          <span className="btn-phone-core">
            <i className="fa fa-phone" style={{ transform: "rotate(90deg)" }} aria-hidden />
          </span>
        </a>
      </div>

      {/* Mobile bottom toolbar ≤767px */}
      <div className="fix-toolbar">
        <ul>
          {items.map((item) => (
            <li key={item.id}>
              <a
                href={item.href}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noreferrer" : undefined}
                title={item.label}
              >
                <Image src={item.icon} alt={item.label} width={25} height={25} />
                <br />
                <span>{item.label}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
