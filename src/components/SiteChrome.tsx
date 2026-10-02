"use client";

import { usePathname } from "next/navigation";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingCta } from "@/components/FloatingCta";
import type { CmsFooterLink, CmsNavItem, SiteSettings } from "@/lib/cms/types";

export function SiteChrome({
  children,
  settings,
  navItems,
  footerSupport,
}: {
  children: React.ReactNode;
  settings: SiteSettings;
  navItems: CmsNavItem[];
  footerSupport: CmsFooterLink[];
}) {
  const pathname = usePathname();
  const isAdmin = pathname?.startsWith("/adminbp");

  if (isAdmin) {
    return <>{children}</>;
  }

  return (
    <>
      {/* eslint-disable-next-line @next/next/no-css-tags */}
      <link rel="stylesheet" href="/media/css/original.css" />
      <a className="skip-link" href="#noi-dung">
        Đến nội dung chính
      </a>
      <Header settings={settings} navItems={navItems} />
      <main id="noi-dung">{children}</main>
      <Footer settings={settings} footerSupport={footerSupport} />
      <FloatingCta settings={settings} />
    </>
  );
}
