import { Slideshow } from "@/components/Slideshow";
import { Intro } from "@/components/Intro";
import { Benefits } from "@/components/Benefits";
import { Fields } from "@/components/Fields";
import { Projects } from "@/components/Projects";
import { HouseDesign } from "@/components/HouseDesign";
import { NewsAndContact } from "@/components/NewsAndContact";
import { JsonLd } from "@/components/JsonLd";
import { pageMeta, defaultDescription, faqJsonLd } from "@/lib/seo";

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

export default function HomePage() {
  return (
    <>
      <JsonLd data={faqJsonLd()} />
      <Slideshow />
      <Intro />
      <Benefits />
      <Fields />
      <Projects />
      <HouseDesign />
      <NewsAndContact />
    </>
  );
}
