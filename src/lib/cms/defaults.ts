import {
  architectureList as defaultArchitecture,
  benefits as defaultBenefits,
  fields as defaultFields,
  footerSupport as defaultFooter,
  galleryAlbums as defaultGallery,
  houseDesigns as defaultHouses,
  intro as defaultIntro,
  nav as defaultNav,
  pricingCards as defaultPricing,
  projects as defaultProjects,
  servicesDetail as defaultServiceDetails,
  serviceList as defaultServices,
  site as defaultSite,
  slides as defaultSlides,
} from "@/data/site";
import type { CmsStore } from "./types";
import { DEFAULT_INTRO_EXTRA, DEFAULT_PAGES } from "./default-pages";

function idFromHref(href: string, fallback: string) {
  const slug = href.replace(/^\//, "").replace(/\//g, "-") || fallback;
  return slug;
}

const DEFAULT_MAP_EMBED =
  "https://maps.google.com/maps?q=71/4A%20Nguy%E1%BB%85n%20Duy%20Cung%20H%E1%BB%93%20Ch%C3%AD%20Minh&t=&z=15&ie=UTF8&iwloc=&output=embed";
const DEFAULT_MAP_DIRECTIONS =
  "https://www.google.com/maps/dir/?api=1&origin=&destination=71/4A%20Nguy%E1%BB%85n%20Duy%20Cung,%20P.%20An%20H%E1%BB%99i%20T%C3%A2y,%20H%E1%BB%93%20Ch%C3%AD%20Minh";

export function buildDefaultCms(): CmsStore {
  return {
    version: 1,
    updatedAt: new Date().toISOString(),
    settings: {
      ...defaultSite,
      mapEmbed: DEFAULT_MAP_EMBED,
      mapDirections: DEFAULT_MAP_DIRECTIONS,
    },
    intro: {
      title: defaultIntro.title,
      image: defaultIntro.image,
      href: defaultIntro.href,
      paragraphs: [...defaultIntro.paragraphs],
      extra: DEFAULT_INTRO_EXTRA,
    },
    slides: defaultSlides.map((s, i) => ({
      id: `slide-${i + 1}`,
      src: s.src,
      alt: s.alt,
    })),
    benefits: defaultBenefits.map((b, i) => ({
      id: `benefit-${i + 1}`,
      title: b.title,
      desc: b.desc,
      icon: b.icon,
    })),
    projects: defaultProjects.map((p) => ({
      id: idFromHref(p.href, p.title),
      title: p.title,
      href: p.href,
      image: p.image,
      owner: p.owner,
      location: p.location,
      scale: p.scale,
      description: "",
    })),
    pricingCards: defaultPricing.map((p) => ({
      id: idFromHref(p.href, p.title),
      title: p.title,
      href: p.href,
      image: p.image,
      summary: p.summary,
      highlights: [...p.highlights],
    })),
    serviceList: defaultServices.map((s) => ({
      id: idFromHref(s.href, s.title),
      title: s.title,
      href: s.href,
      image: s.image,
    })),
    fields: defaultFields.map((f) => ({
      id: idFromHref(f.href, f.title),
      title: f.title,
      href: f.href,
      image: f.image,
    })),
    galleryAlbums: defaultGallery.map((a) => ({
      id: idFromHref(a.href, a.title),
      title: a.title,
      href: a.href,
      image: a.image,
      images: "images" in a && Array.isArray(a.images) ? [...a.images] : [],
    })),
    houseDesigns: defaultHouses.map((h) => ({
      id: idFromHref(h.href, h.title),
      title: h.title,
      href: h.href,
      image: h.image,
      tabs: [...h.tabs],
    })),
    architectureList: defaultArchitecture.map((a) => ({
      id: idFromHref(a.href, a.title),
      title: a.title,
      href: a.href,
      image: a.image,
    })),
    nav: defaultNav.map((item, i) => ({
      id: `nav-${i + 1}`,
      label: item.label,
      href: item.href,
      children: item.children?.map((child, j) => ({
        id: `nav-${i + 1}-c${j + 1}`,
        label: child.label,
        href: child.href,
      })),
    })),
    footerSupport: defaultFooter.map((item, i) => ({
      id: `footer-${i + 1}`,
      label: item.label,
      href: item.href,
    })),
    servicesDetail: defaultServiceDetails.map((s) => ({
      id: `detail-${s.slug}`,
      title: s.title,
      href: `/dich-vu/${s.slug}`,
      image: s.image,
      summary: s.summary,
      body: "",
    })),
    pages: DEFAULT_PAGES.map((p) => ({ ...p })),
    news: [],
    hiddenNewsHrefs: [],
  };
}
