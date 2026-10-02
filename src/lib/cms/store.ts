import fs from "fs";
import path from "path";
import { cache } from "react";
import { revalidatePath } from "next/cache";
import type { CmsStore } from "./types";
import { buildDefaultCms } from "./defaults";
import { newsArticlesFromStatic } from "./news-seed";
import { getJson, isR2Configured, putJson } from "./r2";

const CMS_PATH = path.join(process.cwd(), "data", "cms.json");
const CMS_OBJECT_KEY = "cms/cms.json";

function ensureDir() {
  const dir = path.dirname(CMS_PATH);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
}

export function mergeCms(parsed: Partial<CmsStore> | null | undefined): CmsStore {
  const defaults = buildDefaultCms();
  if (!parsed || typeof parsed !== "object") return defaults;
  return {
    ...defaults,
    ...parsed,
    settings: { ...defaults.settings, ...parsed.settings },
    intro: {
      ...defaults.intro,
      ...parsed.intro,
      paragraphs: parsed.intro?.paragraphs ?? defaults.intro.paragraphs,
      extra: parsed.intro?.extra ?? defaults.intro.extra,
    },
    slides: parsed.slides ?? defaults.slides,
    benefits: parsed.benefits ?? defaults.benefits,
    projects: (parsed.projects ?? defaults.projects).map((p) => ({
      ...p,
      description: p.description ?? "",
    })),
    pricingCards: parsed.pricingCards ?? defaults.pricingCards,
    serviceList: parsed.serviceList ?? defaults.serviceList,
    fields: parsed.fields ?? defaults.fields,
    galleryAlbums: parsed.galleryAlbums ?? defaults.galleryAlbums,
    houseDesigns: parsed.houseDesigns ?? defaults.houseDesigns,
    architectureList: parsed.architectureList ?? defaults.architectureList,
    nav: parsed.nav ?? defaults.nav,
    footerSupport: parsed.footerSupport ?? defaults.footerSupport,
    servicesDetail: parsed.servicesDetail ?? defaults.servicesDetail,
    pages: parsed.pages ?? defaults.pages,
    news: parsed.news ?? defaults.news,
    hiddenNewsHrefs: parsed.hiddenNewsHrefs ?? defaults.hiddenNewsHrefs,
  };
}

export function readCmsLocal(): CmsStore {
  try {
    if (!fs.existsSync(CMS_PATH)) {
      return buildDefaultCms();
    }
    const raw = fs.readFileSync(CMS_PATH, "utf8");
    return mergeCms(JSON.parse(raw) as Partial<CmsStore>);
  } catch {
    return buildDefaultCms();
  }
}

function writeCmsLocal(store: CmsStore) {
  try {
    ensureDir();
    fs.writeFileSync(CMS_PATH, JSON.stringify(store, null, 2), "utf8");
  } catch {
    /* Vercel read-only filesystem */
  }
}

async function ensureNews(store: CmsStore): Promise<CmsStore> {
  const seeded = newsArticlesFromStatic();
  if (!seeded.length) return store;
  const hidden = new Set(store.hiddenNewsHrefs);
  const have = new Set(store.news.map((item) => item.href));
  const missing = seeded.filter((item) => !have.has(item.href) && !hidden.has(item.href));
  if (!missing.length) return store;
  const next: CmsStore = {
    ...store,
    news: [...missing, ...store.news],
    updatedAt: new Date().toISOString(),
  };
  writeCmsLocal(next);
  if (isR2Configured()) await putJson(CMS_OBJECT_KEY, next);
  return next;
}

async function readCmsUncached(): Promise<CmsStore> {
  if (isR2Configured()) {
    try {
      const remote = await getJson<CmsStore>(CMS_OBJECT_KEY);
      if (remote && typeof remote === "object" && remote.settings) {
        return ensureNews(mergeCms(remote));
      }
      const seeded = await ensureNews(readCmsLocal());
      await putJson(CMS_OBJECT_KEY, seeded);
      return seeded;
    } catch (error) {
      console.error("readCms r2", error);
    }
  }
  return ensureNews(readCmsLocal());
}

export const readCms = cache(readCmsUncached);

function bustPublicCache() {
  try {
    revalidatePath("/", "layout");
  } catch {
    /* not in a Next request context */
  }
}

export async function writeCms(store: CmsStore) {
  const next: CmsStore = {
    ...mergeCms(store),
    version: store.version || 1,
    updatedAt: new Date().toISOString(),
  };
  writeCmsLocal(next);
  if (isR2Configured()) {
    await putJson(CMS_OBJECT_KEY, next);
  }
  bustPublicCache();
  return next;
}

export async function updateCms(patch: Partial<CmsStore>) {
  const current = await readCms();
  return writeCms({ ...current, ...patch, version: current.version || 1 });
}

export function cmsPath() {
  return CMS_PATH;
}
