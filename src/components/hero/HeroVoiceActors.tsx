"use client";

import React, { useState } from "react";
import { Characters } from "@/lib/types";
import { Button } from "../ui/button";
import Image from "next/image";

type HeroVoiceActorsProps = {
  voiceActors: Characters["voice_actors"];
};

export default function HeroVoiceActors({ voiceActors }: HeroVoiceActorsProps) {
  const [visibleCount, setVisibleCount] = useState(4);

  const japaneseVoiceActors = voiceActors.filter(
    (actor) => actor.language === "Japanese"
  );

  const displayedVoiceActors = japaneseVoiceActors.slice(0, visibleCount);

  const handleShowMore = () => {
    setVisibleCount((prevCount) => prevCount + 4);
  };

  const handleShowLess = () => {
    setVisibleCount((prevCount) => Math.max(prevCount - 4, 4));
  };

  return (
    <div className="relative py-16 lg:col-span-3">
      <div className="absolute inset-px rounded-lg ring-1 ring-border bg-card max-lg:rounded-t-[2rem] lg:rounded-br-[2rem]" />
      <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)] lg:rounded-br-[calc(2rem+1px)] min-h-[300px] lg:min-h-[400px]">
        <h1 className="mb-8  text-center font-bold ">Voice Actors</h1>
        <div className="container grid gap-8 md:grid-cols-2">
          {displayedVoiceActors.length > 0 ? (
            displayedVoiceActors.map((actor, actorIndex) => (
              <div key={`${actor.person.mal_id}-${actorIndex}`}>
                <Image
                  alt={`Image of ${actor.person.name}`}
                  src={
                    actor.person.images?.jpg?.image_url ||
                    "/path/to/default/image.jpg"
                  }
                  className="rounded-lg w-full h-40 object-cover object-center"
                  width={400}
                  height={400}
                />
                <p className="py-8 text-center">{actor.person.name}</p>
              </div>
            ))
          ) : (
            <p className="text-center">No Japanese voice actors found.</p>
          )}
        </div>
        <div className="mt-4 flex justify-center space-x-4">
          {visibleCount < japaneseVoiceActors.length && (
            <Button onClick={handleShowMore}>Show More</Button>
          )}
          {visibleCount > 4 && (
            <Button variant="outline" onClick={handleShowLess}>
              Show Less
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
