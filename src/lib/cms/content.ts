import { news as staticNews } from "@/data/site";
import { slugifyTitle } from "./ids";
import { readCms, readCmsLocal } from "./store";
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
  return readCmsLocal().settings;
}

export function getCmsSnapshot(): CmsStore {
  return readCmsLocal();
}

export function getIntro() {
  return readCmsLocal().intro;
}

export function getSlides() {
  return readCmsLocal().slides;
}

export function getBenefits() {
  return readCmsLocal().benefits;
}

export function getProjects(): CmsProject[] {
  return readCmsLocal().projects;
}

export function getPricingCards(): CmsPricingCard[] {
  return readCmsLocal().pricingCards;
}

export function getServiceList() {
  return readCmsLocal().serviceList;
}

export function getFields() {
  return readCmsLocal().fields;
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

function byDate(a: { date: string }, b: { date: string }) {
  const da = a.date.split("/").reverse().join("");
  const db = b.date.split("/").reverse().join("");
  return db.localeCompare(da);
}

/** All news for admin listing. Once seeded, R2 is the only list. */
export async function listAllNewsForAdmin(): Promise<CmsNewsArticle[]> {
  const cms = await readCms();
  if (cms.news.length > 0) return [...cms.news].sort(byDate);
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

  return Array.from(byHref.values()).sort(byDate);
}

function publicNewsFrom(cms: CmsStore): PublicNewsItem[] {
  if (cms.news.length > 0) {
    return cms.news
      .filter((item) => item.published)
      .map((item) => ({
        title: item.title,
        href: item.href,
        image: item.image,
        imageAlt: item.imageAlt,
        date: item.date,
        keywords: item.keywords,
        excerpt: item.excerpt,
        body: item.body,
        gallery: item.gallery,
      }))
      .sort(byDate);
  }

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

/** Public news feed: static (minus hidden) + published cms, overrides by href */
export function getPublicNews(cms?: CmsStore): PublicNewsItem[] {
  return publicNewsFrom(cms ?? readCmsLocal());
}

export async function getPublicNewsAsync() {
  return publicNewsFrom(await readCms());
}

export function findPublicNewsBySlug(slug: string, cms?: CmsStore) {
  return getPublicNews(cms).find((n) => n.href.endsWith(`/${slug}`) || slugOf(n.href) === slug);
}

export async function findPublicNewsBySlugAsync(slug: string) {
  return findPublicNewsBySlug(slug, await readCms());
}

const RELATED_KEYWORD_NOISE = /minh phú|minh phu|tp\.?\s*hcm|nhà phố tp/i;

/** Prefer articles that share a real keyword, then fill from the date order. */
export function relatedNews(all: PublicNewsItem[], currentHref: string, limit = 3) {
  const current = all.find((item) => item.href === currentHref);
  const others = all.filter((item) => item.href !== currentHref);
  if (!current) return others.slice(0, limit);
  const mine = new Set(
    (current.keywords || []).map((keyword) => keyword.toLowerCase()).filter((keyword) => !RELATED_KEYWORD_NOISE.test(keyword)),
  );
  const ranked = others
    .map((item) => {
      const score = (item.keywords || []).reduce(
        (sum, keyword) => sum + (mine.has(keyword.toLowerCase()) ? 1 : 0),
        0,
      );
      return { item, score };
    })
    .sort((a, b) => b.score - a.score);
  const picked: PublicNewsItem[] = [];
  for (const row of ranked) {
    if (picked.length >= limit) break;
    if (row.score <= 0 && picked.length > 0) break;
    if (row.score <= 0 && picked.length === 0) break;
    picked.push(row.item);
  }
  if (picked.length >= limit) return picked;
  const seen = new Set(picked.map((item) => item.href));
  for (const item of others) {
    if (picked.length >= limit) break;
    if (seen.has(item.href)) continue;
    picked.push(item);
  }
  return picked;
}

export { slugifyTitle };
