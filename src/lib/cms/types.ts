export type SiteSettings = {
  name: string;
  shortName: string;
  tagline: string;
  slogan1: string;
  slogan2: string;
  greeting: string;
  phone: string;
  phoneRaw: string;
  email: string;
  website: string;
  address1Label: string;
  address1: string;
  address2Label: string;
  address2: string;
  zalo: string;
  facebook: string;
  messenger: string;
};

export type BodyBlock = string | { type: "h2"; text: string };

export type GalleryItem = string | { src: string; alt: string };

export type CmsNewsArticle = {
  id: string;
  title: string;
  href: string;
  image: string;
  imageAlt?: string;
  date: string;
  keywords?: string[];
  excerpt: string;
  body: BodyBlock[];
  gallery?: GalleryItem[];
  published: boolean;
  source: "cms" | "static";
};

export type CmsProject = {
  id: string;
  title: string;
  href: string;
  image: string;
  owner: string;
  location: string;
  scale: string;
};

export type CmsPricingCard = {
  id: string;
  title: string;
  href: string;
  image: string;
  summary: string;
  highlights: string[];
};

export type CmsServiceItem = {
  id: string;
  title: string;
  href: string;
  image: string;
};

export type CmsBenefit = {
  id: string;
  title: string;
  desc: string;
  icon: string;
};

export type CmsSlide = {
  id: string;
  src: string;
  alt: string;
};

export type CmsIntro = {
  title: string;
  image: string;
  href: string;
  paragraphs: string[];
};

export type CmsStore = {
  version: number;
  updatedAt: string;
  settings: SiteSettings;
  intro: CmsIntro;
  slides: CmsSlide[];
  benefits: CmsBenefit[];
  projects: CmsProject[];
  pricingCards: CmsPricingCard[];
  serviceList: CmsServiceItem[];
  fields: CmsServiceItem[];
  /** Articles created/edited in admin (override static by href) */
  news: CmsNewsArticle[];
  /** Static article hrefs hidden from public site */
  hiddenNewsHrefs: string[];
};
