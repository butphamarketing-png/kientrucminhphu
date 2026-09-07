import {
  benefits as defaultBenefits,
  fields as defaultFields,
  intro as defaultIntro,
  pricingCards as defaultPricing,
  projects as defaultProjects,
  serviceList as defaultServices,
  site as defaultSite,
  slides as defaultSlides,
} from "@/data/site";
import type { CmsStore } from "./types";

function idFromHref(href: string, fallback: string) {
  const slug = href.replace(/^\//, "").replace(/\//g, "-") || fallback;
  return slug;
}

export function buildDefaultCms(): CmsStore {
  return {
    version: 1,
    updatedAt: new Date().toISOString(),
    settings: { ...defaultSite },
    intro: {
      title: defaultIntro.title,
      image: defaultIntro.image,
      href: defaultIntro.href,
      paragraphs: [...defaultIntro.paragraphs],
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
    news: [],
    hiddenNewsHrefs: [],
  };
}
