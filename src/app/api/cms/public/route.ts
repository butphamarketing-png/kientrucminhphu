import { NextResponse } from "next/server";
import { getPublicNews } from "@/lib/cms/content";
import { readCms } from "@/lib/cms/store";

export const dynamic = "force-dynamic";

export async function GET() {
  const cms = await readCms();
  return NextResponse.json({
    ok: true,
    data: {
      settings: cms.settings,
      intro: cms.intro,
      slides: cms.slides,
      benefits: cms.benefits,
      fields: cms.fields,
      projects: cms.projects,
      pricingCards: cms.pricingCards,
      serviceList: cms.serviceList,
      galleryAlbums: cms.galleryAlbums,
      houseDesigns: cms.houseDesigns,
      architectureList: cms.architectureList,
      nav: cms.nav,
      footerSupport: cms.footerSupport,
      news: getPublicNews(cms),
    },
  });
}
