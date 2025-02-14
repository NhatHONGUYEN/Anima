"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Characters } from "@/lib/types";
import { Button } from "../ui/button";

type HeroCharactersProps = {
  characters: Characters[];
};

export default function HeroCharacters({ characters }: HeroCharactersProps) {
  const [visibleCount, setVisibleCount] = useState(4);

  const displayedCharacters = characters.slice(0, visibleCount);

  const handleShowMore = () => {
    setVisibleCount((prevCount) => prevCount + 4);
  };

  const handleShowLess = () => {
    setVisibleCount((prevCount) => Math.max(prevCount - 4, 4));
  };

  return (
    <div className="relative py-16 lg:col-span-3">
      <div className="absolute inset-px rounded-lg bg-card max-lg:rounded-t-[2rem] lg:rounded-bl-[2rem]" />
      <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)] lg:rounded-bl-[calc(2rem+1px)] min-h-[300px] lg:min-h-[400px]">
        <h1 className="mb-8 text-center font-bold">Characters</h1>
        <div className="container grid gap-8 md:grid-cols-2">
          {displayedCharacters.length > 0 ? (
            displayedCharacters.map((characterObj, charIndex) => (
              <div key={`${characterObj.character.mal_id}-${charIndex}`}>
                <div className="relative w-full h-48">
                  <Image
                    alt={`Image of ${characterObj.character.name}`}
                    src={
                      characterObj.character.images?.webp?.image_url ||
                      "/path/to/default/image.jpg"
                    }
                    className="rounded-lg  object-cover"
                    layout="fill"
                  />
                </div>
                <p className="py-8 text-center">
                  {characterObj.character.name}
                </p>
              </div>
            ))
          ) : (
            <p className="text-center">No characters found.</p>
          )}
        </div>
        <div className="mt-4 flex justify-center space-x-4">
          {visibleCount < characters.length && (
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
