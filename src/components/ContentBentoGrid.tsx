"use client";

import React from "react";
import { ContentBentoGridProps } from "@/lib/types";
import BentoGridHeader from "./bentoGrid/BentoGridHeader";
import BentoGridTrailer from "./bentoGrid/BentoGridTrailer";
import BentoGridImage from "./bentoGrid/BentoGridImage";
import BentoGridDetails from "./bentoGrid/BentoGridDetails";
import BentoGridEpisodes from "./bentoGrid/BentoGridEpisodes";
import BentoGridCharacters from "./bentoGrid/BentoGridCharacters";
import BentoGridVoiceActors from "./bentoGrid/BentoGridVoiceActors";
import CustomButton from "./CustomButton";
import { MoveLeft } from "lucide-react";
import { useRouter } from "next/navigation";

export default function ContentBentoGrid({
  mal_id,
  title,
  score,
  type,
  episode,
  duration,
  favorites,
  rank,
  synopsis,
  themes,
  trailerEmbedUrl,
  trailerImageUrl,
  largeImageUrl,
  producers,
  licensors,
  studios,
  episodes = [], // Provide a default value of an empty array
  characters,
}: ContentBentoGridProps) {
  const router = useRouter();

  return (
    <section>
      <div className="mx-auto container ">
        <div className="mt-10">
          <CustomButton
            icon={MoveLeft}
            label="Go Back"
            onClick={() => router.back()}
          />
        </div>
        <div className="mt-10 grid grid-cols-1 gap-4 lg:grid-cols-6 lg:grid-rows-1">
          <BentoGridHeader
            mal_id={mal_id}
            title={title}
            score={score}
            type={type}
            episode={episode}
            duration={duration}
            favorites={favorites}
            rank={rank}
            synopsis={synopsis}
            themes={themes}
          />
          <BentoGridTrailer
            title={title}
            trailerEmbedUrl={trailerEmbedUrl}
            trailerImageUrl={trailerImageUrl}
          />
          <BentoGridImage largeImageUrl={largeImageUrl} title={title} />
          <BentoGridDetails
            trailerImageUrl={trailerImageUrl}
            title={title}
            producers={producers}
            licensors={licensors}
            studios={studios}
          />
          <BentoGridEpisodes episodes={episodes} />
          {characters && characters.length > 0 && (
            <BentoGridCharacters characters={characters} />
          )}
          {characters && characters.length > 0 && (
            <BentoGridVoiceActors
              voiceActors={characters.flatMap(
                (character) => character.voice_actors
              )}
            />
          )}
        </div>
      </div>
    </section>
  );
}
