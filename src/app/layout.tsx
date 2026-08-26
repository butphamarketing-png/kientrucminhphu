import type { Metadata, Viewport } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingCta } from "@/components/FloatingCta";
import { JsonLd } from "@/components/JsonLd";
import { site } from "@/data/site";
import {
  SITE_URL,
  DEFAULT_OG_IMAGE,
  defaultDescription,
  absUrl,
  localBusinessJsonLd,
  websiteJsonLd,
  GOOGLE_SITE_VERIFICATION,
} from "@/lib/seo";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#1198dc",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${site.name} | Thiết kế thi công nhà phố TP.HCM`,
    template: `%s | ${site.shortName}`,
  },
  description: defaultDescription,
  applicationName: site.shortName,
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
  authors: [{ name: site.name, url: SITE_URL }],
  creator: site.name,
  publisher: site.name,
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
    siteName: site.name,
    title: `${site.name} | Thiết kế thi công nhà phố TP.HCM`,
    description: defaultDescription,
    images: [{ url: absUrl(DEFAULT_OG_IMAGE), width: 1200, height: 630, alt: site.shortName }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} | Thiết kế thi công nhà phố TP.HCM`,
    description: defaultDescription,
    images: [absUrl(DEFAULT_OG_IMAGE)],
  },
  icons: {
    icon: [
      { url: "/brand/favicon.jpg", type: "image/jpeg", sizes: "512x512" },
      { url: "/favicon.ico", sizes: "any" },
      { url: "/brand/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/brand/favicon-192.png", sizes: "192x192", type: "image/png" },
    ],
    apple: [{ url: "/brand/apple-touch-icon.png", sizes: "180x180" }],
    shortcut: [{ url: "/brand/favicon.jpg", type: "image/jpeg" }],
  },
  manifest: "/manifest.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
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
        {/* eslint-disable-next-line @next/next/no-css-tags */}
        <link rel="stylesheet" href="/media/css/original.css" />
        <style>{`#header,#header .marquee{background-color:#1198dc!important;background:#1198dc!important}`}</style>
        <link href="/brand/favicon.jpg" rel="icon" type="image/jpeg" sizes="512x512" />
        <link href="/brand/favicon.jpg" rel="shortcut icon" type="image/x-icon" />
      </head>
      <body className={`${montserrat.variable} antialiased`}>
        <JsonLd data={[localBusinessJsonLd(), websiteJsonLd()]} />
        <a className="skip-link" href="#noi-dung">
          Đến nội dung chính
        </a>
        <Header />
        <main id="noi-dung">{children}</main>
        <Footer />
        <FloatingCta />
      </body>
    </html>
  );
}
