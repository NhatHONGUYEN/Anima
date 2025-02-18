import AnimeList from "@/components/AnimeList";

export default function HomePage() {
  return (
    <AnimeList
      filter="bypopularity"
      title="All"
      description="Discover the most popular anime series currently airing. These shows are trending and have captured the hearts of many fans around the world."
    />
  );
}
