"use client";

import React from "react";
import Image from "next/image";
import { HeroEpisodesProps } from "@/lib/types";
import { ImageOff } from "lucide-react";

export default function HeroEpisodes({ episodes }: HeroEpisodesProps) {
  return (
    <div className="relative lg:col-span-2">
      {/* Background effect */}
      <div className="absolute inset-px rounded-lg max-lg:rounded-b-[2rem] lg:rounded-br-[2rem]" />

      <div className="relative bg-card flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-br-[calc(2rem+1px)]">
        <div className="p-10 mx-auto">
          {/* Vérification si des épisodes existent */}
          {!episodes || episodes.length === 0 ? (
            <p>No Episode</p>
          ) : (
            <>
              <h2 className="pb-4">Episodes:</h2>
              <div className="grid grid-cols-1  gap-4">
                {episodes.slice(0, 2).map((episode) => (
                  <div key={episode.mal_id} className="flex flex-col gap-4">
                    {/* Image de l'épisode */}
                    <div className="relative  ">
                      {episode?.images?.jpg?.image_url ? (
                        <Image
                          src={episode.images.jpg.image_url}
                          alt={`Episode ${episode.mal_id}`}
                          width={400}
                          height={400}
                          className="rounded-lg object-cover"
                          priority
                        />
                      ) : (
                        <div className="flex items-center justify-center w-full h-full bg-accent rounded-lg">
                          <ImageOff size={40} />
                        </div>
                      )}
                    </div>
                    {/* Titre de l'épisode */}
                    <p>
                      {episode.title.length > 16
                        ? `${episode.title.slice(0, 16)}...`
                        : episode.title}
                    </p>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </div>

      {/* Contour avec effet de shadow */}
      <div className="pointer-events-none ring-1 ring-border absolute inset-px rounded-lg shadow-sm max-lg:rounded-b-[2rem] lg:rounded-br-[2rem]" />
    </div>
  );
}
