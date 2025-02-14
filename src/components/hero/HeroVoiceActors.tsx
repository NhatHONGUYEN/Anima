"use client";

import React, { useState } from "react";
import { Characters } from "@/lib/types";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";

type HeroVoiceActorsProps = {
  voiceActors: Characters["voice_actors"];
};

export default function HeroVoiceActors({ voiceActors }: HeroVoiceActorsProps) {
  const [visibleCount, setVisibleCount] = useState(6);

  const japaneseVoiceActors = voiceActors.filter(
    (actor) => actor.language === "Japanese"
  );

  const displayedVoiceActors = japaneseVoiceActors.slice(0, visibleCount);

  const handleShowMore = () => {
    setVisibleCount((prevCount) => prevCount + 6);
  };

  const handleShowLess = () => {
    setVisibleCount((prevCount) => Math.max(prevCount - 6, 6));
  };

  return (
    <div className="relative lg:col-span-3">
      <div className="absolute inset-px rounded-lg ring-1 ring-border bg-card max-lg:rounded-t-[2rem] lg:rounded-tl-[2rem]" />
      <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)] lg:rounded-tl-[calc(2rem+1px)] min-h-[300px] lg:min-h-[400px]">
        <div className="container mt-16 grid gap-x-8 gap-y-16 md:grid-cols-2 lg:grid-cols-3">
          {displayedVoiceActors.length > 0 ? (
            displayedVoiceActors.map((actor, actorIndex) => (
              <div
                key={`${actor.person.mal_id}-${actorIndex}`}
                className="flex flex-col items-center"
              >
                <Avatar className="mb-4 size-20 border md:mb-5 lg:size-24">
                  <AvatarImage
                    src={
                      actor.person.images?.jpg?.image_url ||
                      "/path/to/default/image.jpg"
                    }
                    alt={`Image of ${actor.person.name}`}
                    className="object-cover"
                  />
                  <AvatarFallback> {actor.person.name}</AvatarFallback>
                </Avatar>
                <p className="text-center font-medium">
                  {actor.person.name} ({actor.language})
                </p>
              </div>
            ))
          ) : (
            <p>No Japanese voice actors found.</p>
          )}
        </div>
        <div className="mt-4 flex justify-center space-x-4">
          {visibleCount < japaneseVoiceActors.length && (
            <Button onClick={handleShowMore}>Show More</Button>
          )}
          {visibleCount > 6 && (
            <Button variant="outline" onClick={handleShowLess}>
              Show Less
            </Button>
          )}
        </div>
      </div>
      <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm max-lg:rounded-t-[2rem] lg:rounded-tl-[2rem]" />
    </div>
  );
}
