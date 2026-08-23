import { Slideshow } from "@/components/Slideshow";
import { Intro } from "@/components/Intro";
import { Benefits } from "@/components/Benefits";
import { Fields } from "@/components/Fields";
import { Projects } from "@/components/Projects";
import { HouseDesign } from "@/components/HouseDesign";
import { NewsAndContact } from "@/components/NewsAndContact";

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
