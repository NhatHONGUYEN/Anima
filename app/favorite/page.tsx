"use client";

import React from "react";
import AnimeList from "@/components/AnimeList";

export default function FavoriteAnimePage() {
  return (
    <AnimeList
      filter="favorite"
      title="Favorite Anime"
      description="Explore the anime series that have become fan favorites. These shows have earned a special place in the hearts of viewers and are highly recommended by the community."
    />
  );
}
