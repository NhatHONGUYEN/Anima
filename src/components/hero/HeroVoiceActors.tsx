"use client";

import React from "react";
import { Characters } from "@/lib/types";
import Image from "next/image";

type HeroVoiceActorsProps = {
  voiceActors: Characters["voice_actors"];
};

export default function HeroVoiceActors({ voiceActors }: HeroVoiceActorsProps) {
  return (
    <div className="relative lg:col-span-3">
      <div className="relative ring-1 ring-border flex h-full flex-col overflow-hidden rounded-xl lg:rounded-tr-[calc(2rem+1px)]">
        {voiceActors.length > 0 ? (
          voiceActors.map((actor, actorIndex) => (
            <div
              key={`${actor.person.mal_id}-${actorIndex}`}
              className="flex items-center mt-1 p-4"
            >
              <Image
                src={
                  actor.person.images?.jpg?.image_url ||
                  "/path/to/default/image.jpg"
                }
                alt={`Image of ${actor.person.name}`}
                className="w-8 h-8 rounded-full mr-2"
                width={32}
                height={32}
              />
              <p className="text-sm">
                {actor.person.name} ({actor.language})
              </p>
            </div>
          ))
        ) : (
          <p>No voice actors available</p>
        )}
      </div>
    </div>
  );
}
