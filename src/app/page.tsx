import { Slideshow } from "@/components/Slideshow";
import { Intro } from "@/components/Intro";
import { Benefits } from "@/components/Benefits";
import { Fields } from "@/components/Fields";
import { Projects } from "@/components/Projects";
import { HouseDesign } from "@/components/HouseDesign";
import { NewsAndContact } from "@/components/NewsAndContact";
import { JsonLd } from "@/components/JsonLd";
import { pageMeta, faqJsonLd, siteDescription } from "@/lib/seo";
import { getPublicNews } from "@/lib/cms/content";
import { readCms } from "@/lib/cms/store";

export async function generateMetadata() {
  const { settings } = await readCms();
  return pageMeta({
    title: "Thiết kế thi công nhà phố TP.HCM",
    description: siteDescription(settings),
    path: "/",
    keywords: [
      "thiết kế nhà phố TP.HCM",
      "thi công nhà phố trọn gói",
      "cải tạo nhà",
      "Kiến trúc Minh Phú",
    ],
    settings,
  });
}

export default async function HomePage() {
  const cms = await readCms();
  const news = getPublicNews(cms).slice(0, 8);

  return (
    <>
      <JsonLd data={faqJsonLd(cms.settings)} />
      <Slideshow slides={cms.slides} />
      <Intro intro={cms.intro} />
      <Benefits benefits={cms.benefits} />
      <Fields fields={cms.fields} />
      <Projects projects={cms.projects} />
      <HouseDesign houseDesigns={cms.houseDesigns} />
      <NewsAndContact news={news} />
    </>
  );
}
