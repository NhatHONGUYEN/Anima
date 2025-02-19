import ScrollVelocityGif from "@/animations/ScrollVelocityGif";
import BentoGrid from "@/components/bentoGrid/BentoGrid";
import TopAnimeSlider from "@/components/TopAnimeSlider";

export default function Home() {
  return (
    <div>
      <BentoGrid />
      <ScrollVelocityGif />
      <TopAnimeSlider animeId={38524} />
    </div>
  );
}
