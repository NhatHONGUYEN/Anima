"use client";

import React from "react";
import { Characters } from "@/lib/types";
import Image from "next/image";

type HeroCharactersProps = {
  characters: Characters[];
};

export default function HeroCharacters({ characters }: HeroCharactersProps) {
  return (
    <div className="relative lg:col-span-3">
      <div className="absolute inset-px rounded-lg ring-1 ring-border bg-card max-lg:rounded-t-[2rem] lg:rounded-tl-[2rem]" />
      <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)] lg:rounded-tl-[calc(2rem+1px)] min-h-[300px] lg:min-h-[400px]">
        {characters.map((character, charIndex) => (
          <div key={`${character.mal_id}-${charIndex}`} className="p-4">
            <Image
              src={
                character.images?.webp?.image_url ||
                "/path/to/default/image.jpg"
              }
              alt={`Image of ${character.name}`}
              className="w-16 h-16 rounded-full"
              width={64}
              height={64}
            />
            <h3 className="text-lg font-bold">{character.name}</h3>
            <p className="text-sm text-muted-foreground">{character.role}</p>
            <p className="text-sm text-muted-foreground">
              Favorites: {character.favorites}
            </p>
          </div>
        ))}
      </div>
      <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm max-lg:rounded-t-[2rem] lg:rounded-tl-[2rem]" />
    </div>
  );
}
