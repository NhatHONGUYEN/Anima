import ScrollVelocityGif from "@/animations/ScrollVelocityGif";
import BentoGrid from "@/components/bentoGrid/BentoGrid";
import Hero from "@/components/hero/Hero";
import TopAnimeSlider from "@/components/TopAnimeSlider";

export default function Home() {
  return (
    <div>
      <Hero />
      <BentoGrid />
      <ScrollVelocityGif />
      <TopAnimeSlider animeId={38524} />
    </div>
  );
}
