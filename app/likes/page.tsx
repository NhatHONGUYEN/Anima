"use client";

import { useState } from "react";
import AnimeLike from "@/components/AnimeLike";
import { Button } from "@/components/ui/button";
import { useLikeStore } from "@/lib/store";
import { useRouter } from "next/navigation";

export default function LikesPage() {
  const { likedAnimes } = useLikeStore();
  const [visibleCount, setVisibleCount] = useState(4);

  const handleLoadMore = () => {
    setVisibleCount((prevCount) => prevCount + 4);
  };

  const router = useRouter();

  return (
    <div>
      {likedAnimes.length > 0 ? (
        <section className="py-16">
          <div className="container">
            <div className="text-center flex flex-col items-center mb-8">
              <h1>Mes Animes Likés</h1>
            </div>
            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
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
            <Button onClick={() => router.push("/all")}>
              <span aria-hidden="true">&larr;</span> Check our Anime List
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
