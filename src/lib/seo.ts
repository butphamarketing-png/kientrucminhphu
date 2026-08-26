import type { Metadata } from "next";
import { servicesDetail, site } from "@/data/site";

export const SITE_URL = "https://kientrucminhphu.com";
export const DEFAULT_OG_IMAGE = "/brand/banner-contact.png";
export const GOOGLE_SITE_VERIFICATION = "5O_vcQp19XoYLMLTzewxW4q7vlNqFWG6-vCcqyC-Wy0";
export const PHONE_E164 = `+84${site.phoneRaw.replace(/^0/, "")}`;

export const defaultDescription =
  "Công ty TNHH Kiến trúc Minh Phú chuyên thiết kế, thi công và cải tạo nhà phố tại TP.HCM. Báo giá minh bạch, đúng tiến độ. Hotline 0912 166 079.";

export function absUrl(path = "/") {
  if (path.startsWith("http://") || path.startsWith("https://")) return path;
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}

/** Convert dd/mm/yyyy → ISO 8601 date */
export function toIsoDate(viDate: string) {
  const m = /^(\d{1,2})\/(\d{1,2})\/(\d{4})$/.exec(viDate.trim());
  if (!m) return undefined;
  const [, d, mo, y] = m;
  return `${y}-${mo.padStart(2, "0")}-${d.padStart(2, "0")}`;
}

export function pageMeta({
  title,
  description,
  path,
  image,
  type = "website",
  publishedTime,
  keywords,
  noIndex,
}: {
  title: string;
  description: string;
  path: string;
  image?: string;
  type?: "website" | "article";
  publishedTime?: string;
  keywords?: string[];
  noIndex?: boolean;
}): Metadata {
  const url = absUrl(path);
  const ogImage = absUrl(image || DEFAULT_OG_IMAGE);
  const fullTitle =
    path === "/"
      ? `${site.name} | Thiết kế thi công nhà phố TP.HCM`
      : `${title} | ${site.shortName}`;
  const desc = description.length > 160 ? `${description.slice(0, 157)}...` : description;

  return {
    title: path === "/" ? { absolute: fullTitle } : title,
    description: desc,
    keywords,
    robots: noIndex
      ? { index: false, follow: true }
      : { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large" } },
    alternates: { canonical: url },
    openGraph: {
      title: fullTitle,
      description: desc,
      url,
      siteName: site.name,
      locale: "vi_VN",
      type,
      images: [{ url: ogImage, width: 1200, height: 630, alt: title }],
      ...(publishedTime ? { publishedTime, modifiedTime: publishedTime } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description: desc,
      images: [ogImage],
    },
  };
}

export function breadcrumbJsonLd(crumbs: { name: string; path?: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Trang chủ", item: SITE_URL },
      ...crumbs.map((c, i) => ({
        "@type": "ListItem",
        position: i + 2,
        name: c.name,
        ...(c.path ? { item: absUrl(c.path) } : {}),
      })),
    ],
  };
}

export function localBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "ProfessionalService"],
    "@id": `${SITE_URL}/#business`,
    name: site.name,
    alternateName: ["Kiến trúc Minh Phú", "Minh Phú Building"],
    url: SITE_URL,
    logo: absUrl("/brand/logo-site.png"),
    image: [absUrl(DEFAULT_OG_IMAGE), absUrl("/brand/logo-site.png")],
    telephone: PHONE_E164,
    email: site.email,
    description: defaultDescription,
    slogan: site.tagline,
    address: {
      "@type": "PostalAddress",
      streetAddress: "71/4A Nguyễn Duy Cung",
      addressLocality: "Phường An Hội Tây",
      addressRegion: "Hồ Chí Minh",
      postalCode: "700000",
      addressCountry: "VN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 10.8378,
      longitude: 106.6404,
    },
    hasMap: "https://maps.google.com/?q=71/4A+Nguyen+Duy+Cung+Ho+Chi+Minh",
    sameAs: [site.facebook, site.zalo, site.messenger],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "08:00",
        closes: "17:30",
      },
    ],
    areaServed: [
      { "@type": "City", name: "Hồ Chí Minh" },
      { "@type": "Country", name: "Vietnam" },
    ],
    priceRange: "$$",
    currenciesAccepted: "VND",
    paymentAccepted: "Cash, Bank Transfer",
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: PHONE_E164,
        contactType: "customer service",
        areaServed: "VN",
        availableLanguage: ["Vietnamese"],
      },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Dịch vụ Kiến trúc Minh Phú",
      itemListElement: servicesDetail.map((s) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: s.title,
          description: s.summary,
          url: absUrl(`/dich-vu/${s.slug}`),
        },
      })),
    },
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    name: site.shortName,
    url: SITE_URL,
    inLanguage: "vi-VN",
    publisher: { "@id": `${SITE_URL}/#business` },
    potentialAction: {
      "@type": "SearchAction",
      target: `${SITE_URL}/tin-tuc?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };
}

export function faqJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Kiến trúc Minh Phú làm những dịch vụ gì?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Minh Phú chuyên thiết kế nhà phố, thi công xây dựng trọn gói, thi công nội thất, hoàn thiện nhà đã xây thô và sửa chữa – cải tạo nhà tại TP.HCM.",
        },
      },
      {
        "@type": "Question",
        name: "Làm sao để nhận báo giá thiết kế thi công?",
        acceptedAnswer: {
          "@type": "Answer",
          text: `Liên hệ hotline ${site.phone}, Zalo ${site.phoneRaw} hoặc gửi form tại trang Liên hệ. Báo giá được lập theo hiện trạng, hạng mục và vật tư, minh bạch trước khi ký hợp đồng.`,
        },
      },
      {
        "@type": "Question",
        name: "Văn phòng Kiến trúc Minh Phú ở đâu?",
        acceptedAnswer: {
          "@type": "Answer",
          text: `Văn phòng chính: ${site.address1}. Văn phòng họp: ${site.address2}.`,
        },
      },
    ],
  };
}

export function serviceJsonLd(item: { title: string; summary: string; image: string; slug: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: item.title,
    description: item.summary,
    image: absUrl(item.image),
    url: absUrl(`/dich-vu/${item.slug}`),
    provider: { "@id": `${SITE_URL}/#business` },
    areaServed: { "@type": "City", name: "Hồ Chí Minh" },
    serviceType: item.title,
  };
}

export function articleJsonLd(item: {
  title: string;
  excerpt: string;
  image: string;
  href: string;
  date: string;
}) {
  const iso = toIsoDate(item.date);
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: item.title,
    description: item.excerpt,
    image: absUrl(item.image),
    url: absUrl(item.href),
    inLanguage: "vi-VN",
    ...(iso ? { datePublished: iso, dateModified: iso } : {}),
    author: { "@id": `${SITE_URL}/#business` },
    publisher: {
      "@type": "Organization",
      name: site.name,
      logo: { "@type": "ImageObject", url: absUrl("/brand/logo-site.png") },
    },
    mainEntityOfPage: absUrl(item.href),
  };
}
