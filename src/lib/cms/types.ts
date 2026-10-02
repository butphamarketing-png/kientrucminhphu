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
  mapEmbed: string;
  mapDirections: string;
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
  description: string;
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
  summary?: string;
  body?: string;
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
  extra: string;
};

export type CmsNavChild = {
  id: string;
  label: string;
  href: string;
};

export type CmsNavItem = {
  id: string;
  label: string;
  href: string;
  children?: CmsNavChild[];
};

export type CmsFooterLink = {
  id: string;
  label: string;
  href: string;
};

export type CmsGalleryAlbum = {
  id: string;
  title: string;
  href: string;
  image: string;
  images: string[];
};

export type CmsHouseDesign = {
  id: string;
  title: string;
  href: string;
  image: string;
  tabs: string[];
  summary?: string;
};

export type CmsContentPage = {
  id: string;
  path: string;
  title: string;
  description: string;
  body: string;
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
  galleryAlbums: CmsGalleryAlbum[];
  houseDesigns: CmsHouseDesign[];
  architectureList: CmsServiceItem[];
  nav: CmsNavItem[];
  footerSupport: CmsFooterLink[];
  servicesDetail: CmsServiceItem[];
  pages: CmsContentPage[];
  /** Articles created/edited in admin (override static by href) */
  news: CmsNewsArticle[];
  /** Static article hrefs hidden from public site */
  hiddenNewsHrefs: string[];
};
