"use client";

import BentoGridHeader from "./BentoGridHeader";
import BentoGridTrailer from "./BentoGridTrailer";
import BentoGridImage from "./BentoGridImage";
import BentoGridDetails from "./BentoGridDetails";
import BentoGridEpisodes from "./bentoGridEpisodes/BentoGridEpisodes";
import BentoGridCharacters from "./BentoGridCharacters";
import BentoGridVoiceActors from "./BentoGridVoiceActors";
import CustomButton from "../customButton/CustomButton";
import { MoveLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import { ContentBentoGridProps } from "@/lib/types/bentoGrid";

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
        <div className="mt-10 hidden md:block">
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
