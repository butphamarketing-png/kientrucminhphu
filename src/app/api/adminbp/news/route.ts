import { NextResponse } from "next/server";
import { isAdminAuthenticated } from "@/lib/cms/auth";
import { listAllNewsForAdmin, slugifyTitle } from "@/lib/cms/content";
import { readCms, writeCms } from "@/lib/cms/store";
import type { CmsNewsArticle } from "@/lib/cms/types";
import { news as staticNews } from "@/data/site";

export async function GET() {
  if (!(await isAdminAuthenticated())) {
    return NextResponse.json({ ok: false, error: "Unauthorized" }, { status: 401 });
  }
  return NextResponse.json({ ok: true, data: await listAllNewsForAdmin() });
}

export async function POST(request: Request) {
  if (!(await isAdminAuthenticated())) {
    return NextResponse.json({ ok: false, error: "Unauthorized" }, { status: 401 });
  }

  const body = (await request.json().catch(() => null)) as Partial<CmsNewsArticle> | null;
  if (!body?.title?.trim()) {
    return NextResponse.json({ ok: false, error: "Thiếu tiêu đề" }, { status: 400 });
  }

  const cms = await readCms();
  const slug =
    body.href?.replace(/^\/tin-tuc\//, "").replace(/^\//, "") ||
    slugifyTitle(body.title);
  const href = `/tin-tuc/${slug}`;

  const article: CmsNewsArticle = {
    id: body.id || `cms-${slug}-${Date.now()}`,
    title: body.title.trim(),
    href,
    image: body.image || "/brand/logo-menu-lg.png.webp",
    imageAlt: body.imageAlt || body.title.trim(),
    date:
      body.date ||
      new Date().toLocaleDateString("vi-VN", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
      }),
    keywords: body.keywords || [],
    excerpt: body.excerpt || "",
    body: body.body || [""],
    gallery: body.gallery || [],
    published: body.published !== false,
    source: "cms",
  };

  const idx = cms.news.findIndex((n) => n.href === href || n.id === article.id);
  if (idx >= 0) cms.news[idx] = article;
  else cms.news.unshift(article);

  // If was hidden static, unhide when publishing cms copy
  cms.hiddenNewsHrefs = cms.hiddenNewsHrefs.filter((h) => h !== href);

  await writeCms(cms);
  return NextResponse.json({ ok: true, data: article });
}

export async function DELETE(request: Request) {
  if (!(await isAdminAuthenticated())) {
    return NextResponse.json({ ok: false, error: "Unauthorized" }, { status: 401 });
  }

  const { searchParams } = new URL(request.url);
  const href = searchParams.get("href");
  if (!href) {
    return NextResponse.json({ ok: false, error: "Thiếu href" }, { status: 400 });
  }

  const cms = await readCms();
  const isStatic = staticNews.some((n) => n.href === href);

  cms.news = cms.news.filter((n) => n.href !== href);

  if (isStatic) {
    if (!cms.hiddenNewsHrefs.includes(href)) cms.hiddenNewsHrefs.push(href);
  }

  await writeCms(cms);
  return NextResponse.json({ ok: true });
}
