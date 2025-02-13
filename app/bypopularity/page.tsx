"use client";

import React from "react";
import AnimeList from "@/components/AnimeList";

export default function ByPopularityAnimePage() {
  return <AnimeList filter="bypopularity" title="Popular Anime" />;
}
