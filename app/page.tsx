import Hero from "@/components/hero/Hero";
import TopAnimeSlider from "@/components/TopAnimeSlider";

export default function Home() {
  return (
    <div>
      <Hero />
      <TopAnimeSlider animeId={38524} />
    </div>
  );
}
