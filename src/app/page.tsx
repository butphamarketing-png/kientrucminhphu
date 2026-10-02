import { Slideshow } from "@/components/Slideshow";
import { Intro } from "@/components/Intro";
import { Benefits } from "@/components/Benefits";
import { Fields } from "@/components/Fields";
import { Projects } from "@/components/Projects";
import { HouseDesign } from "@/components/HouseDesign";
import { NewsAndContact } from "@/components/NewsAndContact";
import { JsonLd } from "@/components/JsonLd";
import { pageMeta, defaultDescription, faqJsonLd } from "@/lib/seo";
import { getPublicNews } from "@/lib/cms/content";
import { readCms } from "@/lib/cms/store";

export const metadata = pageMeta({
  title: "Thiết kế thi công nhà phố TP.HCM",
  description: defaultDescription,
  path: "/",
  keywords: [
    "thiết kế nhà phố TP.HCM",
    "thi công nhà phố trọn gói",
    "cải tạo nhà",
    "Kiến trúc Minh Phú",
  ],
});

export default async function HomePage() {
  const cms = await readCms();
  const news = getPublicNews(cms).slice(0, 8);

  return (
    <>
      <JsonLd data={faqJsonLd()} />
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
