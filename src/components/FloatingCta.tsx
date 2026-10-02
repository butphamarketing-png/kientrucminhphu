"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { site } from "@/data/site";
import type { SiteSettings } from "@/lib/cms/types";

const DEFAULT_DIRECTIONS =
  "https://www.google.com/maps/dir/?api=1&origin=&destination=71/4A%20Nguy%E1%BB%85n%20Duy%20Cung,%20P.%20An%20H%E1%BB%99i%20T%C3%A2y,%20H%E1%BB%93%20Ch%C3%AD%20Minh";

export function FloatingCta({ settings = site }: { settings?: SiteSettings }) {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 120);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const items = [
    {
      id: "goidien",
      href: `tel:${settings.phoneRaw}`,
      label: "Gọi điện",
      icon: "/media/assets/images/fp-phone.png",
    },
    {
      id: "sms",
      href: `sms:${settings.phoneRaw}`,
      label: "Nhắn tin",
      icon: "/media/assets/images/fp-sms.png",
    },
    {
      id: "chiduong",
      href: settings.mapDirections || DEFAULT_DIRECTIONS,
      label: "Chỉ Đường",
      icon: "/media/assets/images/fp-chiduong.png",
      external: true,
    },
    {
      id: "chatzalo",
      href: settings.zalo,
      label: "Chat zalo",
      icon: "/media/assets/images/fp-zalo.png",
      external: true,
    },
    {
      id: "chatfb",
      href: settings.messenger,
      label: "Chat facebook",
      icon: "/media/assets/images/fp-mess.png",
      external: true,
    },
  ];

  return (
    <>
      <button
        type="button"
        aria-label="Lên đầu trang"
        className={`progress-wrap ${showTop ? "active-progress" : ""}`}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      />

      <div className="float-cta-right">
        <a
          className="float-social-btn float-social-zalo float-bob"
          href={settings.zalo}
          target="_blank"
          rel="noreferrer"
          aria-label="Chat Zalo"
          title="Zalo"
          style={{ animationDelay: "0s" }}
        >
          <span className="float-social-pulse" />
          <span className="float-social-pulse delay" />
          <span className="float-social-core">
            <Image src="/media/assets/images/fp-zalo.png" alt="Zalo" width={28} height={28} />
          </span>
        </a>
        <a
          className="float-social-btn float-social-mess float-bob"
          href={settings.messenger}
          target="_blank"
          rel="noreferrer"
          aria-label="Chat Messenger"
          title="Messenger"
          style={{ animationDelay: "0.35s" }}
        >
          <span className="float-social-pulse" />
          <span className="float-social-pulse delay" />
          <span className="float-social-core">
            <Image src="/media/assets/images/fp-mess.png" alt="Messenger" width={28} height={28} />
          </span>
        </a>
        <a
          className="float-social-btn float-social-fb float-bob"
          href={settings.facebook}
          target="_blank"
          rel="noreferrer"
          aria-label="Facebook"
          title="Facebook"
          style={{ animationDelay: "0.7s" }}
        >
          <span className="float-social-pulse" />
          <span className="float-social-pulse delay" />
          <span className="float-social-core">
            <i className="fab fa-facebook-f" aria-hidden />
          </span>
        </a>
        <a
          href={`tel:${settings.phoneRaw}`}
          className="btn-phone-float float-bob"
          data-phone={settings.phone}
          aria-label={`Gọi ${settings.phone}`}
          style={{ animationDelay: "1.05s" }}
        >
          <span className="btn-phone-pulse" />
          <span className="btn-phone-pulse delay" />
          <span className="btn-phone-core">
            <i className="fa fa-phone" style={{ transform: "rotate(90deg)" }} aria-hidden />
          </span>
        </a>
      </div>

      <div className="fix-toolbar">
        <ul>
          {items.map((item, i) => (
            <li key={item.id} style={{ animationDelay: `${i * 0.28}s` }}>
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
