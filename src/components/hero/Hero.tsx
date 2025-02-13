"use client";

import React from "react";
import { useAnimeDetails, useAnimeEpisodes } from "@/hooks/useTopAnime";
import { Anime, Episode } from "@/lib/types";
import ContentHero from "@/components/ContentHero";

export default function Hero() {
  const { data: animeDetail, error, isLoading } = useAnimeDetails(38524);
  const {
    data: animeEpisodes,
    error: episodesError,
    isLoading: episodesLoading,
  } = useAnimeEpisodes(38524);

  if (isLoading || episodesLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  if (episodesError) return <div>Error: {episodesError.message}</div>;

  const anime: Anime | undefined = animeDetail?.data;
  if (!anime) return <div>Anime not found</div>;

  const episodes: Episode[] | undefined = animeEpisodes?.data;
  if (!episodes) return <div>Episodes not found</div>;

  return (
    <ContentHero
      title={anime.title}
      score={anime.score}
      scoredBy={anime.scored_by}
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
    />
  );
}
