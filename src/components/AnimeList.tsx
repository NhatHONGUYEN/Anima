"use client";

import React from "react";
import { useTopAnime } from "@/hooks/useTopAnime";
import Image from "next/image";

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
        {animeList.map((anime, index) => (
          <div
            key={`${anime.mal_id}-${index}`}
            className="bg-white p-4 rounded-lg shadow-md"
          >
            <Image
              src={anime.images.jpg.image_url}
              alt={anime.title}
              width={200}
              height={300}
              className="rounded-lg"
            />
            <h2 className="text-lg font-semibold mt-2">
              {anime.title.length > 16
                ? `${anime.title.slice(0, 16)}...`
                : anime.title}
            </h2>
            <p className="text-sm text-gray-600">{anime.synopsis}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
