"use client";

import React from "react";
import AnimeList from "@/components/AnimeList";

export default function UpcomingAnimePage() {
  return <AnimeList filter="upcoming" title="Upcoming Anime" />;
}
