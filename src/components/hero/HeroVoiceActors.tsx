"use client";

import React from "react";
import { Characters } from "@/lib/types";
import HeroList from "./HeroList";

type HeroVoiceActorsProps = {
  voiceActors: Characters["voice_actors"];
};

export default function HeroVoiceActors({ voiceActors }: HeroVoiceActorsProps) {
  const japaneseVoiceActors = voiceActors.filter(
    (actor) => actor.language === "Japanese"
  );

  return (
    <HeroList
      items={japaneseVoiceActors}
      title="Voice Actors"
      getImageUrl={(actor) => actor.person.images?.jpg?.image_url}
      getName={(actor) => actor.person.name}
      noItemsMessage="No Japanese voice actors found."
    />
  );
}
