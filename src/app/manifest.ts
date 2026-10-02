import type { MetadataRoute } from "next";
import { readCms } from "@/lib/cms/store";
import { safeHex, siteDescription } from "@/lib/seo";

export default async function manifest(): Promise<MetadataRoute.Manifest> {
  const { settings } = await readCms();
  return {
    name: settings.name,
    short_name: settings.shortName,
    description: siteDescription(settings) || settings.tagline,
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: safeHex(settings.headerColor),
    lang: "vi",
    icons: [
      { src: "/brand/favicon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/brand/favicon-512.png", sizes: "512x512", type: "image/png" },
      { src: "/brand/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  };
}
