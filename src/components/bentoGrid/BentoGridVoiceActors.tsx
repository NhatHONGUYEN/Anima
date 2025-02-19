"use client";

import React from "react";
import { Characters } from "@/lib/types";
import BentoGridList from "../bentoGrid/BentoGridList";

type BentoGridVoiceActorsProps = {
  voiceActors: Characters["voice_actors"];
};

export default function BentoGridVoiceActors({
  voiceActors,
}: BentoGridVoiceActorsProps) {
  const japaneseVoiceActors = voiceActors.filter(
    (actor) => actor.language === "Japanese"
  );

  return (
    <BentoGridList
      items={japaneseVoiceActors}
      title="Voice Actors"
      getImageUrl={(actor) => actor.person.images?.jpg?.image_url}
      getName={(actor) => actor.person.name}
      noItemsMessage="No Japanese voice actors found."
    />
  );
}
