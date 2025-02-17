"use client";

import React from "react";
import { Characters } from "@/lib/types";
import HeroList from "./HeroList";

type HeroCharactersProps = {
  characters: Characters[];
};

export default function HeroCharacters({ characters }: HeroCharactersProps) {
  return (
    <HeroList
      items={characters}
      title="Characters"
      getImageUrl={(characterObj) =>
        characterObj.character.images?.webp?.image_url
      }
      getName={(characterObj) => characterObj.character.name}
      noItemsMessage="No characters found."
    />
  );
}
