"use client";

import { usePathname } from "next/navigation";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingCta } from "@/components/FloatingCta";
import type { SiteSettings } from "@/lib/cms/types";

export function SiteShell({
  children,
  settings,
}: {
  children: React.ReactNode;
  settings: SiteSettings;
}) {
  const pathname = usePathname();
  const isAdmin = pathname?.startsWith("/adminbp");

  if (isAdmin) {
    return <>{children}</>;
  }

  return (
    <>
      <Header settings={settings} />
      <main id="noi-dung">{children}</main>
      <Footer settings={settings} />
      <FloatingCta />
    </>
  );
}
