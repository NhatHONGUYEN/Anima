"use client";

import React from "react";
import { Characters } from "@/lib/types";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

type HeroCharactersProps = {
  characters: Characters[];
};

export default function HeroCharacters({ characters }: HeroCharactersProps) {
  return (
    <div className="relative lg:col-span-3">
      <div className="absolute inset-px rounded-lg ring-1 ring-border bg-card max-lg:rounded-t-[2rem] lg:rounded-tl-[2rem]" />
      <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)] lg:rounded-tl-[calc(2rem+1px)] min-h-[300px] lg:min-h-[400px]">
        <div className="container mt-16 grid gap-x-8 gap-y-16 md:grid-cols-2 lg:grid-cols-3 overflow-y-auto max-h-[400px]">
          {characters.map((characterObj, charIndex) => (
            <div
              key={`${characterObj.character.mal_id}-${charIndex}`}
              className="flex flex-col items-center"
            >
              <Avatar className="mb-4 size-20 border md:mb-5 lg:size-24">
                <AvatarImage
                  src={
                    characterObj.character.images?.webp?.image_url ||
                    "/path/to/default/image.jpg"
                  }
                  alt={`Image of ${characterObj.character.name}`}
                />
                <AvatarFallback> {characterObj.character.name}</AvatarFallback>
              </Avatar>
              <p className="text-center font-medium">
                {characterObj.character.name}
              </p>
              <p className="text-center text-muted-foreground">
                {characterObj.role}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm max-lg:rounded-t-[2rem] lg:rounded-tl-[2rem]" />
    </div>
  );
}
