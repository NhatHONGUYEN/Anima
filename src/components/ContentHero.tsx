"use client";

import React from "react";
import { ContentHeroProps } from "@/lib/types";
import HeroHeader from "./hero/HeroHeader";
import HeroTrailer from "./hero/HeroTrailer";
import HeroImage from "./hero/HeroImage";
import HeroDetails from "./hero/HeroDetails";
import HeroEpisodes from "./hero/HeroEpisodes";

export default function ContentHero({
  title,
  score,
  scoredBy,
  rank,
  synopsis,
  themes,
  trailerEmbedUrl,
  trailerImageUrl,
  largeImageUrl,
  producers,
  licensors,
  studios,
  episodes,
}: ContentHeroProps) {
  return (
    <section className="pb-16">
      <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
        <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-6 lg:grid-rows-1">
          <HeroHeader
            title={title}
            score={score}
            scoredBy={scoredBy}
            rank={rank}
            synopsis={synopsis}
            themes={themes}
          />
          <HeroTrailer trailerEmbedUrl={trailerEmbedUrl} />
          <HeroImage largeImageUrl={largeImageUrl} title={title} />
          <HeroDetails
            trailerImageUrl={trailerImageUrl}
            title={title}
            producers={producers}
            licensors={licensors}
            studios={studios}
          />
          {episodes && episodes.length > 0 && (
            <HeroEpisodes episodes={episodes} />
          )}
        </div>
      </div>
    </section>
  );
}
