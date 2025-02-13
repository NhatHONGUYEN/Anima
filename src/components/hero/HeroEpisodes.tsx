"use client";

import React from "react";
import Image from "next/image";
import { HeroEpisodesProps } from "@/lib/types";

export default function HeroEpisodes({ episodes }: HeroEpisodesProps) {
  return (
    <div className="relative lg:col-span-2">
      <div className="absolute inset-px rounded-lg max-lg:rounded-b-[2rem] lg:rounded-br-[2rem]" />
      <div className="relative bg-card flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-br-[calc(2rem+1px)]">
        <div className="p-10 mx-auto">
          <h2 className="pb-4">Episodes:</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {episodes.slice(0, 6).map((episode) => (
              <div key={episode.mal_id} className="flex gap-4">
                <div>
                  <p className="pb-2">
                    {episode.title.length > 16
                      ? `${episode.title.slice(0, 10)}...`
                      : episode.title}
                  </p>
                  {episode.images.jpg.image_url ? (
                    <Image
                      src={episode.images.jpg.image_url}
                      alt={`Episode ${episode.mal_id} image`}
                      width={150}
                      height={150}
                      className="rounded-lg"
                    />
                  ) : (
                    <p>Image non disponible</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="pointer-events-none ring-1 ring-border absolute inset-px rounded-lg shadow-sm max-lg:rounded-b-[2rem] lg:rounded-br-[2rem]" />
    </div>
  );
}
