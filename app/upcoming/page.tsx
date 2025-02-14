"use client";

import React from "react";
import AnimeList from "@/components/AnimeList";

export default function UpcomingAnimePage() {
  return (
    <AnimeList
      filter="upcoming"
      title="Upcoming Anime"
      description="Stay ahead of the curve with our list of upcoming anime series. Get a sneak peek at the shows that are set to premiere soon and be the first to watch the latest hits."
    />
  );
}
