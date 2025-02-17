"use client";

import React from "react";
import AnimeList from "@/components/AnimeList";

export default function ByPopularityAnimePage() {
  return (
    <AnimeList
      filter="bypopularity"
      title="Popular"
      description="Discover the most popular anime series currently airing. These shows are trending and have captured the hearts of many fans around the world."
    />
  );
}
