"use client";

import {
  useAnimeCharacters,
  useAnimeDetails,
  useAnimeEpisodes,
} from "@/hooks/useTopAnime";
import { Anime, Characters, Episode } from "@/lib/types";
import ContentHero from "@/components/ContentHero";
import Loader from "./ui/loader";

export default function AnimeDetails({ id }: { id: number }) {
  const { data: animeDetail, error, isLoading } = useAnimeDetails(id);
  const {
    data: animeEpisodes,
    error: episodesError,
    isLoading: episodesLoading,
  } = useAnimeEpisodes(id);
  const {
    data: animeCharacters,
    error: charactersError,
    isLoading: charactersLoading,
  } = useAnimeCharacters(id);

  if (isLoading || episodesLoading || charactersLoading) return <Loader />;
  if (error) return <div>Error: {error.message}</div>;
  if (episodesError) return <div>Error: {episodesError.message}</div>;
  if (charactersError) return <div>Error: {charactersError.message}</div>;

  const anime: Anime | undefined = animeDetail?.data;
  if (!anime) return <div>Anime not found</div>;

  const episodes: Episode[] | undefined = animeEpisodes?.data;
  if (!episodes) return <div>Episodes not found</div>;

  const characters: Characters[] | undefined = animeCharacters?.data;
  if (!characters) return <div>Characters not found</div>;

  return (
    <ContentHero
      title={anime.title}
      score={anime.score}
      duration={anime.duration}
      episode={anime.episodes}
      favorites={anime.favorites}
      type={anime.type}
      rank={anime.rank}
      synopsis={anime.synopsis}
      themes={anime.themes}
      trailerEmbedUrl={anime.trailer?.embed_url}
      trailerImageUrl={anime.trailer?.images?.maximum_image_url}
      largeImageUrl={anime.images?.jpg?.large_image_url}
      producers={anime.producers}
      licensors={anime.licensors}
      studios={anime.studios}
      episodes={episodes}
      characters={characters}
    />
  );
}
