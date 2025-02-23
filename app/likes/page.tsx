"use client";

import { useState } from "react";
import AnimeLike from "@/components/AnimeLike";
import { Button } from "@/components/ui/button";
import { useLikeStore } from "@/lib/store";
import CustomButton from "@/components/CustomButton";
import { MoveLeft } from "lucide-react";
import FADE_DOWN_ANIMATION from "@/animations/FADE_DOWN_ANIMATION";

export default function LikesPage() {
  const { likedAnimes } = useLikeStore();
  const [visibleCount, setVisibleCount] = useState(4);

  const handleLoadMore = () => {
    setVisibleCount((prevCount) => prevCount + 4);
  };

  return (
    <div>
      <FADE_DOWN_ANIMATION>
        {likedAnimes.length > 0 ? (
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
        ) : (
          <div className="mx-auto max-w-7xl px-6 py-32 text-center sm:py-40 lg:px-8">
            <p className="text-base/8 font-semibold text-white">Oops</p>
            <h1 className="mt-4 text-5xl font-semibold tracking-tight text-balance text-primary-foreground sm:text-7xl">
              No Anime Likes yet
            </h1>
            <p className="mt-6">Maybe you should expolore some animes first</p>
            <div className="mt-10 flex justify-center">
              <CustomButton
                icon={MoveLeft}
                label="Check our Anime List"
                href="/all"
              />
            </div>
          </div>
        )}
      </FADE_DOWN_ANIMATION>
    </div>
  );
}
