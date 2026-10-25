import type { MetadataRoute } from "next";
import { getPublicNews } from "@/lib/cms/content";
import { readCms } from "@/lib/cms/store";
import { SITE_URL, toIsoDate } from "@/lib/seo";

const NEWS_PAGE_SIZE = 12;

export const dynamic = "force-dynamic";
export const revalidate = 0;

const staticPaths = [
  "/",
  "/gioi-thieu",
  "/su-menh",
  "/tuyen-dung",
  "/cong-trinh-tieu-bieu",
  "/dich-vu",
  "/thu-vien",
  "/bang-bao-gia",
  "/kien-truc",
  "/tin-tuc",
  "/lien-he",
  "/ho-tro-dat-hang",
  "/chinh-sach-tra-hang",
  "/chinh-sach-bao-hanh",
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const cms = await readCms();
  const news = getPublicNews(cms);
  const paths = new Set(staticPaths);
  const newsDate = new Map(news.map((item) => [item.href, toIsoDate(item.date)]));
  const newsPages = Math.ceil(news.length / NEWS_PAGE_SIZE);

  cms.projects.forEach((p) => paths.add(p.href));
  news.forEach((n) => paths.add(n.href));
  for (let page = 2; page <= newsPages; page += 1) paths.add(`/tin-tuc?trang=${page}`);
  cms.galleryAlbums.forEach((a) => paths.add(a.href));
  cms.pricingCards.forEach((p) => paths.add(p.href));
  cms.architectureList.forEach((a) => paths.add(a.href));
  cms.houseDesigns.forEach((h) => paths.add(h.href));
  cms.serviceList.forEach((s) => paths.add(s.href));
  cms.servicesDetail.forEach((s) => paths.add(s.href));
  cms.pages.forEach((p) => paths.add(p.path));

  return [...paths].map((path) => {
    const pathname = path.split("?")[0];
    const modified = newsDate.get(pathname);
    return {
      url: `${SITE_URL}${path === "/" ? "" : path}`,
      ...(modified ? { lastModified: modified } : {}),
      changeFrequency: path === "/" ? "weekly" : "monthly",
      priority: path === "/" ? 1 : pathname.split("/").length <= 2 ? 0.8 : 0.6,
    };
  });
}
