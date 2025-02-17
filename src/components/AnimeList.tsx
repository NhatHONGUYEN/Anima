"use client";

import React, { useState, useEffect } from "react";
import { useTopAnime } from "@/hooks/useTopAnime";
import AnimeCard from "@/components/AnimeCard";
import { Anime } from "@/lib/types";
import Loader from "./ui/loader";

type AnimeListProps = {
  filter: "airing" | "upcoming" | "bypopularity" | "favorite" | "all";
  title: string;
  description: string;
};

export default function AnimeList({
  filter,
  title,
  description,
}: AnimeListProps) {
  const [page, setPage] = useState(1);
  const [allAnime, setAllAnime] = useState<Anime[]>([]);
  const { data, error, isLoading } = useTopAnime(filter, page);

  useEffect(() => {
    if (data?.data) {
      setAllAnime((prevAnime) => [...prevAnime, ...data.data]);
    }
  }, [data]);

  if (isLoading && page === 1) return <Loader />;
  if (error) return <div>Error: {error.message}</div>;

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <section className="py-16">
      <div className="container ">
        <div className="text-center flex flex-col items-center mb-8">
          <h1 className=" mb-4 text-xl uppercase">{title}</h1>
          <p className="max-w-md">{description}</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {allAnime.map((anime: Anime, index) => (
            <AnimeCard key={`${anime.mal_id}-${index}`} anime={anime} />
          ))}
        </div>
        <button
          onClick={handleLoadMore}
          className="mt-8 px-4 py-2 bg-primary text-white rounded-lg"
        >
          Load More
        </button>
      </div>
    </section>
  );
}
