import { news as staticNews } from "@/data/site";
import { readCms } from "./store";
import type {
  BodyBlock,
  CmsNewsArticle,
  CmsPricingCard,
  CmsProject,
  CmsStore,
  GalleryItem,
  SiteSettings,
} from "./types";

export type PublicNewsItem = {
  title: string;
  href: string;
  image: string;
  imageAlt?: string;
  date: string;
  keywords?: string[];
  excerpt: string;
  body?: BodyBlock[];
  gallery?: GalleryItem[];
};

function slugOf(href: string) {
  return href.replace(/\/tin-tuc\//, "").replace(/^\//, "");
}

export function getSiteSettings(): SiteSettings {
  return readCms().settings;
}

export function getCmsSnapshot(): CmsStore {
  return readCms();
}

export function getIntro() {
  return readCms().intro;
}

export function getSlides() {
  return readCms().slides;
}

export function getBenefits() {
  return readCms().benefits;
}

export function getProjects(): CmsProject[] {
  return readCms().projects;
}

export function getPricingCards(): CmsPricingCard[] {
  return readCms().pricingCards;
}

export function getServiceList() {
  return readCms().serviceList;
}

export function getFields() {
  return readCms().fields;
}

function staticToCmsShape(item: (typeof staticNews)[number]): CmsNewsArticle {
  return {
    id: `static-${slugOf(item.href)}`,
    title: item.title,
    href: item.href,
    image: item.image,
    imageAlt: "imageAlt" in item ? (item.imageAlt as string | undefined) : undefined,
    date: item.date,
    keywords: "keywords" in item && Array.isArray(item.keywords) ? item.keywords : undefined,
    excerpt: item.excerpt,
    body: "body" in item && Array.isArray(item.body) ? (item.body as BodyBlock[]) : [],
    gallery: "gallery" in item && Array.isArray(item.gallery) ? (item.gallery as GalleryItem[]) : undefined,
    published: true,
    source: "static",
  };
}

/** All news for admin listing (static + cms), cms overrides win by href */
export function listAllNewsForAdmin(): CmsNewsArticle[] {
  const cms = readCms();
  const byHref = new Map<string, CmsNewsArticle>();

  for (const item of staticNews) {
    const shaped = staticToCmsShape(item);
    if (cms.hiddenNewsHrefs.includes(item.href)) {
      shaped.published = false;
    }
    byHref.set(item.href, shaped);
  }

  for (const item of cms.news) {
    byHref.set(item.href, { ...item, source: "cms" });
  }

  return Array.from(byHref.values()).sort((a, b) => {
    const da = a.date.split("/").reverse().join("");
    const db = b.date.split("/").reverse().join("");
    return db.localeCompare(da);
  });
}

/** Public news feed: static (minus hidden) + published cms, overrides by href */
export function getPublicNews(): PublicNewsItem[] {
  const cms = readCms();
  const hidden = new Set(cms.hiddenNewsHrefs);
  const byHref = new Map<string, PublicNewsItem>();

  for (const item of staticNews) {
    if (hidden.has(item.href)) continue;
    byHref.set(item.href, {
      title: item.title,
      href: item.href,
      image: item.image,
      imageAlt: "imageAlt" in item ? (item.imageAlt as string | undefined) : undefined,
      date: item.date,
      keywords: "keywords" in item && Array.isArray(item.keywords) ? item.keywords : undefined,
      excerpt: item.excerpt,
      body: "body" in item && Array.isArray(item.body) ? (item.body as BodyBlock[]) : undefined,
      gallery: "gallery" in item && Array.isArray(item.gallery) ? (item.gallery as GalleryItem[]) : undefined,
    });
  }

  for (const item of cms.news) {
    if (!item.published) {
      byHref.delete(item.href);
      continue;
    }
    byHref.set(item.href, {
      title: item.title,
      href: item.href,
      image: item.image,
      imageAlt: item.imageAlt,
      date: item.date,
      keywords: item.keywords,
      excerpt: item.excerpt,
      body: item.body,
      gallery: item.gallery,
    });
  }

  return Array.from(byHref.values());
}

export function findPublicNewsBySlug(slug: string) {
  return getPublicNews().find((n) => n.href.endsWith(`/${slug}`) || slugOf(n.href) === slug);
}

export function slugifyTitle(text: string) {
  return text
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/đ/g, "d")
    .replace(/Đ/g, "D")
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}
