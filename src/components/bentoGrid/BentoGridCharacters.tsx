"use client";

import React from "react";
import { Characters } from "@/lib/types";
import BentoGridList from "../bentoGrid/BentoGridList";

type BentoGridCharactersProps = {
  characters: Characters[];
};

export default function BentoGridCharacters({
  characters,
}: BentoGridCharactersProps) {
  return (
    <BentoGridList
      items={characters}
      title="Characters"
      getImageUrl={(characterObj) =>
        characterObj.character.images?.webp?.image_url
      }
      getName={(characterObj) => characterObj.character.name}
      noItemsMessage="No characters found."
      isCharacterList={true}
    />
  );
}
