"use client";

import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import { fetchAnimeDetails } from "@/lib/actions.ts/anime";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import LikeButton from "./customButton/LikeButton";
import { useLikeStore } from "@/lib/store";
import LikesSkeleton from "./skeleton/LikesSkeleton";

export default function AnimeLike({ animeId }: { animeId: number }) {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["animeDetails", animeId],
    queryFn: () => fetchAnimeDetails(animeId),
  });

  const { likedAnimes, toggleLike } = useLikeStore();

  if (isLoading) return <LikesSkeleton />;
  if (isError) return <p>Erreur de chargement</p>;

  const anime = data?.data;
  const isLiked = likedAnimes.includes(anime.mal_id);

  const handleLike = () => {
    toggleLike(anime.mal_id); // Met à jour l'état du like pour cet anime
  };

  return (
    <div key={anime.mal_id}>
      <div className="group rounded-xl">
        <div className="group relative h-full min-h-[27rem] max-w-full overflow-hidden rounded-xl md:aspect-[5/4] lg:aspect-[16/9]">
          <Image
            src={anime.images.jpg.image_url}
            alt={anime.title}
            width={400}
            height={450}
            quality={100}
            priority
            className="absolute h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 h-full bg-[linear-gradient(hsl(var(--muted)/0),hsl(var(--muted)/0.4),hsl(var(--muted)/0.8)_100%)] mix-blend-multiply" />
          <div className="absolute inset-x-0 bottom-0 flex flex-col items-start p-6 text-primary-foreground md:p-8">
            <h1 className="mb-2 pt-4 font-semibold md:mb-3 md:pt-4 lg:pt-4">
              {anime.title.length > 30
                ? `${anime.title.slice(0, 30)}...`
                : anime.title}
            </h1>
            <Link
              href={`/movies/${anime.mal_id}`}
              className="flex items-center"
            >
              Read more{" "}
              <ArrowRight className="ml-2 size-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
          <LikeButton onLike={handleLike} defaultLiked={isLiked} />
        </div>
      </div>
    </div>
  );
}
