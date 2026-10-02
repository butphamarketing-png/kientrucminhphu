import type { Metadata, Viewport } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { JsonLd } from "@/components/JsonLd";
import { SiteChrome } from "@/components/SiteChrome";
import { readCms } from "@/lib/cms/store";
import {
  SITE_URL,
  DEFAULT_OG_IMAGE,
  absUrl,
  localBusinessJsonLd,
  websiteJsonLd,
  GOOGLE_SITE_VERIFICATION,
  safeHex,
  siteDescription,
} from "@/lib/seo";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export async function generateViewport(): Promise<Viewport> {
  const { settings } = await readCms();
  return {
    themeColor: safeHex(settings.headerColor),
    width: "device-width",
    initialScale: 1,
  };
}

export async function generateMetadata(): Promise<Metadata> {
  const { settings } = await readCms();
  const description = siteDescription(settings);
  const title = `${settings.name} | Thiết kế thi công nhà phố TP.HCM`;
  const favicon = settings.favicon || "/brand/favicon.jpg";
  return {
    metadataBase: new URL(SITE_URL),
    title: {
      default: title,
      template: `%s | ${settings.shortName}`,
    },
    description,
    applicationName: settings.shortName,
    category: "architecture",
    keywords: [
      "kiến trúc Minh Phú",
      "thiết kế nhà phố TP.HCM",
      "thi công nhà phố trọn gói",
      "cải tạo nhà Hồ Chí Minh",
      "xây nhà trọn gói",
      "Minh Phú Building",
      "thiết kế thi công nội thất",
    ],
    authors: [{ name: settings.name, url: SITE_URL }],
    creator: settings.name,
    publisher: settings.name,
    formatDetection: { telephone: true, email: true, address: true },
    verification: { google: GOOGLE_SITE_VERIFICATION },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
    },
    alternates: { canonical: SITE_URL, languages: { "vi-VN": SITE_URL } },
    openGraph: {
      type: "website",
      locale: "vi_VN",
      url: SITE_URL,
      siteName: settings.name,
      title,
      description,
      images: [{ url: absUrl(DEFAULT_OG_IMAGE), width: 1200, height: 630, alt: settings.shortName }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [absUrl(DEFAULT_OG_IMAGE)],
    },
    icons: {
      icon: [
        { url: favicon },
        { url: "/favicon.ico", sizes: "any" },
        { url: "/brand/favicon-32.png", sizes: "32x32", type: "image/png" },
        { url: "/brand/favicon-192.png", sizes: "192x192", type: "image/png" },
      ],
      apple: [{ url: "/brand/apple-touch-icon.png", sizes: "180x180" }],
      shortcut: [{ url: favicon }],
    },
    manifest: "/manifest.webmanifest",
  };
}

export const dynamic = "force-dynamic";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cms = await readCms();
  const headerColor = safeHex(cms.settings.headerColor);
  const offers = [...cms.servicesDetail, ...cms.serviceList].map((item) => ({
    title: item.title,
    summary: item.summary,
    href: item.href,
  }));
  return (
    <html lang="vi">
      <head>
        <link rel="preconnect" href="https://cdnjs.cloudflare.com" crossOrigin="" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
        <style>{`#header,#header .marquee{background-color:${headerColor}!important;background:${headerColor}!important}`}</style>
        <link href="/brand/favicon.jpg" rel="icon" type="image/jpeg" sizes="512x512" />
        <link href="/brand/favicon.jpg" rel="shortcut icon" type="image/jpeg" />
      </head>
      <body className={`${montserrat.variable} antialiased`}>
        <JsonLd data={[localBusinessJsonLd(cms.settings, offers), websiteJsonLd(cms.settings)]} />
        <SiteChrome
          settings={cms.settings}
          navItems={cms.nav}
          footerSupport={cms.footerSupport}
        >
          {children}
        </SiteChrome>
      </body>
    </html>
  );
}
