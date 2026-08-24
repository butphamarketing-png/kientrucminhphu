import type { Metadata } from "next";
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
} from "@/lib/seo";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${site.name} | Thiết kế thi công nhà phố TP.HCM`,
    template: `%s | ${site.shortName}`,
  },
  description: defaultDescription,
  keywords: [
    "kiến trúc Minh Phú",
    "thiết kế nhà phố",
    "thi công nhà phố",
    "cải tạo nhà TP.HCM",
    "xây nhà trọn gói",
    "Minh Phú Building",
  ],
  authors: [{ name: site.name, url: SITE_URL }],
  creator: site.name,
  publisher: site.name,
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  alternates: { canonical: SITE_URL },
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <head>
        <meta name="google-site-verification" content="5O_vcQp19XoYLMLTzewxW4q7vlNqFWG6-vCcqyC-Wy0" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
        {/* Served from /media (public/css is blocked/404 on this Next setup) */}
        {/* eslint-disable-next-line @next/next/no-css-tags */}
        <link rel="stylesheet" href="/media/css/original.css" />
        <style>{`#header,#header .marquee{background-color:#1198dc!important;background:#1198dc!important}`}</style>
        <link href="/brand/favicon.jpg" rel="icon" type="image/jpeg" sizes="512x512" />
        <link href="/brand/favicon.jpg" rel="shortcut icon" type="image/x-icon" />
      </head>
      <body className={`${montserrat.variable} antialiased`}>
        <JsonLd data={[localBusinessJsonLd(), websiteJsonLd()]} />
        <Header />
        <main>{children}</main>
        <Footer />
        <FloatingCta />
      </body>
    </html>
  );
}
