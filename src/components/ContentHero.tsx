"use client";

import React from "react";
import { ContentHeroProps } from "@/lib/types";
import HeroHeader from "./hero/HeroHeader";
import HeroTrailer from "./hero/HeroTrailer";
import HeroImage from "./hero/HeroImage";
import HeroDetails from "./hero/HeroDetails";
import HeroEpisodes from "./hero/HeroEpisodes";
import HeroCharacters from "./hero/HeroCharacters";
import HeroVoiceActors from "./hero/HeroVoiceActors";

export default function ContentHero({
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
}: ContentHeroProps) {
  return (
    <section>
      <div className="mx-auto container ">
        <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-6 lg:grid-rows-1">
          <HeroHeader
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
          <HeroTrailer
            title={title}
            trailerEmbedUrl={trailerEmbedUrl}
            trailerImageUrl={trailerImageUrl}
          />
          <HeroImage largeImageUrl={largeImageUrl} title={title} />
          <HeroDetails
            trailerImageUrl={trailerImageUrl}
            title={title}
            producers={producers}
            licensors={licensors}
            studios={studios}
          />
          <HeroEpisodes episodes={episodes} />
          {characters && characters.length > 0 && (
            <HeroCharacters characters={characters} />
          )}
          {characters && characters.length > 0 && (
            <HeroVoiceActors
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
