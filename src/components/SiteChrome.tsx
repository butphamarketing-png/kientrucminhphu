"use client";

import { usePathname } from "next/navigation";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingCta } from "@/components/FloatingCta";

export function SiteChrome({ children }: { children: React.ReactNode }) {
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
      <Header />
      <main id="noi-dung">{children}</main>
      <Footer />
      <FloatingCta />
    </>
  );
}
