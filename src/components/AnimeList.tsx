"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { AnimeListProps } from "@/lib/types";
import AnimeCard from "@/components/AnimeCard";
import Loader from "./ui/loader";
import CustomButton from "./customButton/CustomButton";
import { MoveLeft } from "lucide-react";
import FADE_DOWN_ANIMATION from "@/animations/FADE_DOWN_ANIMATION";
import { useAnimeList } from "@/hooks/useAnimeList"; // Import the custom hook
import { INITIAL_VISIBLE_COUNT } from "@/lib/constants";

export default function AnimeList({
  filter,
  title,
  description,
}: AnimeListProps) {
  const router = useRouter();
  const {
    allAnime,
    visibleCount,
    isLoading,
    error,
    handleShowMore,
    handleShowLess,
  } = useAnimeList(filter, INITIAL_VISIBLE_COUNT); // Pass the initial visible count to the custom hook

  if (isLoading && visibleCount === INITIAL_VISIBLE_COUNT) return <Loader />;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <section className="py-16">
      <FADE_DOWN_ANIMATION>
        <div className="container mx-auto">
          <div className="text-center flex flex-col items-center mb-8">
            <h1 className="mb-4 text-xl uppercase">{title}</h1>
            <p className="max-w-md">{description}</p>
          </div>
          <div className="mt-10 hidden md:block">
            <CustomButton
              icon={MoveLeft}
              label="Go Back"
              onClick={() => router.back()}
            />
          </div>
          <div className="grid mt-10 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {allAnime
              .slice(0, visibleCount) // Affiche uniquement les premiers `visibleCount` éléments
              .map((anime, index) => (
                <AnimeCard key={`${anime.mal_id}-${index}`} anime={anime} />
              ))}
          </div>
          <div className="flex justify-center mt-8 space-x-4">
            {allAnime.length >= visibleCount && (
              <CustomButton label="Show More" onClick={handleShowMore} />
            )}
            {visibleCount > INITIAL_VISIBLE_COUNT && (
              <CustomButton
                label="Show Less"
                variant="outline"
                onClick={handleShowLess}
              />
            )}
          </div>
        </div>
      </FADE_DOWN_ANIMATION>
    </section>
  );
}
