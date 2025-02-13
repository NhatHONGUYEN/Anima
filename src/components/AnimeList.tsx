"use client";

import React from "react";
import { useTopAnime } from "@/hooks/useTopAnime";
import AnimeCard from "@/components/AnimeCard";
import { Anime } from "@/lib/types";

type AnimeListProps = {
  filter: "airing" | "upcoming" | "bypopularity" | "favorite" | "all";
  title: string;
};

export default function AnimeList({ filter, title }: AnimeListProps) {
  const { data, error, isLoading } = useTopAnime(filter);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  const animeList = data?.data;
  if (!Array.isArray(animeList)) return <div>No anime found</div>;

  return (
    <section className="py-16">
      <div className="container mx-auto flex flex-col items-center gap-16 lg:px-16">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">{title}</h1>
          <p className="text-muted-foreground lg:max-w-3xl lg:text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Elig
            doloremque mollitia fugiat omnis! Porro facilis quo animi
            consequatur. Explicabo.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {animeList.map((anime: Anime, index) => (
            <AnimeCard key={`${anime.mal_id}-${index}`} anime={anime} />
          ))}
        </div>
      </div>
    </section>
  );
}
