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

export default function ContentBentoGrid({
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
  return (
    <section>
      <div className="mx-auto container ">
        <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-6 lg:grid-rows-1">
          <BentoGridHeader
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
