"use client";

import React from "react";
import { useTopAnime } from "@/hooks/useTopAnime";
import AnimeCard from "@/components/AnimeCard";
import { Anime } from "@/lib/types";

interface AnimeListProps {
  filter: "airing" | "upcoming" | "bypopularity" | "favorite" | "all";
  title: string;
}

export default function AnimeList({ filter, title }: AnimeListProps) {
  const { data, error, isLoading } = useTopAnime(filter);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  const animeList = data?.data;
  if (!Array.isArray(animeList)) return <div>No anime found</div>;

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-2xl font-bold mb-4">{title}</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {animeList.map((anime: Anime, index) => (
          <AnimeCard key={`${anime.mal_id}-${index}`} anime={anime} />
        ))}
      </div>
    </div>
  );
}
