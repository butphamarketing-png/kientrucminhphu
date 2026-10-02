import { news as staticNews } from "@/data/site";
import type { BodyBlock, CmsNewsArticle, GalleryItem } from "./types";

function slugOf(href: string) {
  return href.replace(/\/tin-tuc\//, "").replace(/^\//, "") || "bai-viet";
}

/** Copy articles that still live in code into the CMS shape, once. */
export function newsArticlesFromStatic(): CmsNewsArticle[] {
  return staticNews.flatMap((raw) => {
    const item = raw as {
      title?: string;
      href?: string;
      image?: string;
      imageAlt?: string;
      date?: string;
      keywords?: string[];
      excerpt?: string;
      body?: BodyBlock[];
      gallery?: GalleryItem[];
    };
    const href = item.href?.trim() || "";
    const title = item.title?.trim() || "";
    if (!href || !title) return [];
    return [
      {
        id: `cms-${slugOf(href)}`,
        title,
        href,
        image: item.image || "/brand/logo-menu-lg.png.webp",
        imageAlt: item.imageAlt,
        date: item.date || "",
        keywords: item.keywords,
        excerpt: item.excerpt || "",
        body: Array.isArray(item.body) ? item.body : [],
        gallery: Array.isArray(item.gallery) ? item.gallery : undefined,
        published: true,
        source: "cms" as const,
      },
    ];
  });
}
