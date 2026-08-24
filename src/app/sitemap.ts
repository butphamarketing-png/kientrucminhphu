import type { MetadataRoute } from "next";
import {
  architectureList,
  galleryAlbums,
  houseDesigns,
  news,
  pricingCards,
  projects,
  serviceList,
  servicesDetail,
} from "@/data/site";
import { SITE_URL } from "@/lib/seo";

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

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = new Set(staticPaths);

  projects.forEach((p) => paths.add(p.href));
  news.forEach((n) => paths.add(n.href));
  galleryAlbums.forEach((a) => paths.add(a.href));
  pricingCards.forEach((p) => paths.add(p.href));
  architectureList.forEach((a) => paths.add(a.href));
  houseDesigns.forEach((h) => paths.add(h.href));
  serviceList.forEach((s) => paths.add(s.href));
  servicesDetail.forEach((s) => paths.add(`/dich-vu/${s.slug}`));

  return [...paths].map((path) => ({
    url: `${SITE_URL}${path === "/" ? "" : path}`,
    lastModified: new Date(),
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : path.split("/").length <= 2 ? 0.8 : 0.6,
  }));
}
