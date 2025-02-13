"use client";

import React from "react";
import AnimeList from "@/components/AnimeList";

export default function FavoriteAnimePage() {
  return <AnimeList filter="favorite" title="Favorite Anime" />;
}
