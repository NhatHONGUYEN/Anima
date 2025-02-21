"use client";

import React, { useState, useEffect } from "react";
import { useTopAnime } from "@/hooks/useTopAnime";
import AnimeCard from "@/components/AnimeCard";
import { Anime } from "@/lib/types";
import Loader from "./ui/loader";
import CustomButton from "./CustomButton";
import { MoveLeft } from "lucide-react";
import { useRouter } from "next/navigation";

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
  const router = useRouter();
  const [visibleCount, setVisibleCount] = useState(8); // État pour gérer le nombre d'éléments visibles

  useEffect(() => {
    if (data?.data) {
      setAllAnime((prevAnime) => [...prevAnime, ...data.data]);
    }
  }, [data]);

  if (isLoading && page === 1) return <Loader />;
  if (error) return <div>Error: {error.message}</div>;

  const handleShowMore = () => {
    setPage((prevPage) => prevPage + 1);
    setVisibleCount((prevCount) => prevCount + 8); // Augmente de 8 éléments
  };

  const handleShowLess = () => {
    setVisibleCount((prevCount) => Math.max(8, prevCount - 8)); // Réduit de 8 éléments, avec un minimum de 8
  };

  return (
    <section className="py-16">
      <div className="container mx-auto">
        <div className="text-center flex flex-col items-center mb-8">
          <h1 className="mb-4 text-xl uppercase">{title}</h1>
          <p className="max-w-md">{description}</p>
        </div>
        <div className="mt-10">
          <CustomButton
            icon={MoveLeft}
            label="Go Back"
            onClick={() => router.back()}
          />
        </div>
        <div className="grid mt-10 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {allAnime
            .slice(0, visibleCount) // Affiche uniquement les premiers `visibleCount` éléments
            .map((anime: Anime, index) => (
              <AnimeCard key={`${anime.mal_id}-${index}`} anime={anime} />
            ))}
        </div>
        <div className="flex justify-center mt-8 space-x-4">
          {allAnime.length >= visibleCount && (
            <CustomButton label="Show More" onClick={handleShowMore} />
          )}
          {visibleCount > 8 && (
            <CustomButton
              label="Show Less"
              variant="outline"
              onClick={handleShowLess}
            />
          )}
        </div>
      </div>
    </section>
  );
}
