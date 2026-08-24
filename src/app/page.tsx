import { Slideshow } from "@/components/Slideshow";
import { Intro } from "@/components/Intro";
import { Benefits } from "@/components/Benefits";
import { Fields } from "@/components/Fields";
import { Projects } from "@/components/Projects";
import { HouseDesign } from "@/components/HouseDesign";
import { NewsAndContact } from "@/components/NewsAndContact";
import { pageMeta, defaultDescription } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Thiết kế thi công nhà phố TP.HCM",
  description: defaultDescription,
  path: "/",
});

export default function HomePage() {
  return (
    <>
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
