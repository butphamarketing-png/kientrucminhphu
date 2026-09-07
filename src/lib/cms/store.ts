import fs from "fs";
import path from "path";
import type { CmsStore } from "./types";
import { buildDefaultCms } from "./defaults";

const CMS_PATH = path.join(process.cwd(), "data", "cms.json");

function ensureDir() {
  const dir = path.dirname(CMS_PATH);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
}

export function readCms(): CmsStore {
  try {
    if (!fs.existsSync(CMS_PATH)) {
      const fresh = buildDefaultCms();
      writeCms(fresh);
      return fresh;
    }
    const raw = fs.readFileSync(CMS_PATH, "utf8");
    const parsed = JSON.parse(raw) as CmsStore;
    return { ...buildDefaultCms(), ...parsed };
  } catch {
    return buildDefaultCms();
  }
}

export function writeCms(store: CmsStore) {
  ensureDir();
  const next: CmsStore = {
    ...store,
    version: store.version || 1,
    updatedAt: new Date().toISOString(),
  };
  fs.writeFileSync(CMS_PATH, JSON.stringify(next, null, 2), "utf8");
  return next;
}

export function updateCms(patch: Partial<CmsStore>) {
  const current = readCms();
  return writeCms({ ...current, ...patch, version: current.version || 1 });
}

export function cmsPath() {
  return CMS_PATH;
}
