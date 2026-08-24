import type { Metadata } from "next";
import { site } from "@/data/site";

export const SITE_URL = "https://kientrucminhphu.com";
export const DEFAULT_OG_IMAGE = "/brand/banner-contact.png";

export const defaultDescription =
  "Công ty TNHH Kiến trúc Minh Phú chuyên thiết kế, thi công và cải tạo nhà phố tại TP.HCM. Báo giá minh bạch, đúng tiến độ. Hotline 0912 166 079.";

export function absUrl(path = "/") {
  if (path.startsWith("http://") || path.startsWith("https://")) return path;
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}

export function pageMeta({
  title,
  description,
  path,
  image,
  type = "website",
}: {
  title: string;
  description: string;
  path: string;
  image?: string;
  type?: "website" | "article";
}): Metadata {
  const url = absUrl(path);
  const ogImage = absUrl(image || DEFAULT_OG_IMAGE);
  const fullTitle = `${title} | ${site.shortName}`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: site.name,
      locale: "vi_VN",
      type,
      images: [{ url: ogImage, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [ogImage],
    },
  };
}

export function localBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${SITE_URL}/#business`,
    name: site.name,
    alternateName: site.shortName,
    url: SITE_URL,
    logo: absUrl("/brand/logo-site.png"),
    image: absUrl(DEFAULT_OG_IMAGE),
    telephone: `+84${site.phoneRaw.replace(/^0/, "")}`,
    email: site.email,
    description: defaultDescription,
    slogan: site.tagline,
    address: {
      "@type": "PostalAddress",
      streetAddress: "71/4A Nguyễn Duy Cung",
      addressLocality: "An Hội Tây",
      addressRegion: "Hồ Chí Minh",
      addressCountry: "VN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 10.8231,
      longitude: 106.6297,
    },
    sameAs: [site.facebook, site.zalo],
    openingHours: "Mo-Sa 08:00-17:30",
    areaServed: "VN",
    priceRange: "$$",
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: site.shortName,
    url: SITE_URL,
    inLanguage: "vi-VN",
    publisher: { "@id": `${SITE_URL}/#business` },
  };
}
