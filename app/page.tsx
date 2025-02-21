import ScrollVelocityGif from "@/animations/ScrollVelocityGif";
// import BentoGrid from "@/components/bentoGrid/BentoGrid";
import Faq from "@/components/Faq";
import Hero from "@/components/hero/Hero";
import TopAnimeSlider from "@/components/TopAnimeSlider";

export default function Home() {
  return (
    <>
      <Hero />
      {/* <BentoGrid /> */}
      <ScrollVelocityGif />
      <TopAnimeSlider animeId={38524} />
      <Faq />
    </>
  );
}
