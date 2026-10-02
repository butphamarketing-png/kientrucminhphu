import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CmsStaticPage } from "@/components/CmsStaticPage";
import { readCms } from "@/lib/cms/store";
import { pageMeta } from "@/lib/seo";

type Props = { params: Promise<{ slug: string[] }> };

function toPath(slug: string[]) {
  return `/${slug.map((part) => decodeURIComponent(part)).join("/")}`;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const path = toPath(slug);
  const cms = await readCms();
  const page = cms.pages.find((item) => item.path === path);
  if (!page) return { title: "Không tìm thấy" };
  return pageMeta({
    title: page.title,
    description: page.description,
    path,
    settings: cms.settings,
  });
}

export default async function CmsExtraPage({ params }: Props) {
  const { slug } = await params;
  const path = toPath(slug);
  const cms = await readCms();
  const page = cms.pages.find((item) => item.path === path);
  if (!page) notFound();
  return <CmsStaticPage path={path} fallbackTitle={page.title} />;
}
