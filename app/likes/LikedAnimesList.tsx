"use client";

import React, { useState } from "react";
import AnimeLike from "@/components/AnimeLike";
import { Button } from "@/components/ui/button";
import FADE_DOWN_ANIMATION from "@/animations/FADE_DOWN_ANIMATION";
import { useLikeStore } from "@/lib/store";

const INITIAL_VISIBLE_COUNT = 4;

export default function LikedAnimesList() {
  const { likedAnimes } = useLikeStore();
  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE_COUNT);

  const handleLoadMore = () => {
    setVisibleCount((prevCount) => prevCount + INITIAL_VISIBLE_COUNT);
  };

  return (
    <FADE_DOWN_ANIMATION>
      <section className="py-16">
        <div className="container">
          <div className="text-center flex flex-col items-center mb-8">
            <h1>My Liked Animes</h1>
          </div>
          <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {likedAnimes.slice(0, visibleCount).map((animeId) => (
              <AnimeLike key={animeId} animeId={animeId} />
            ))}
          </ul>
          {likedAnimes.length >= visibleCount && (
            <div className="flex justify-center mt-8">
              <Button onClick={handleLoadMore}>Load More</Button>
            </div>
          )}
        </div>
      </section>
    </FADE_DOWN_ANIMATION>
  );
}
