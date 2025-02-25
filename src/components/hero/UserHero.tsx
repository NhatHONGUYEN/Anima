import AnimeList from "../AnimeList";
import UserIntro from "./UserIntro";

export default function UserHero() {
  return (
    <>
      <UserIntro />
      <AnimeList
        filter="bypopularity"
        title="All"
        description="Discover the most popular anime series currently airing. These shows are trending and have captured the hearts of many fans around the world."
      />
    </>
  );
}
