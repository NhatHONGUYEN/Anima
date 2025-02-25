"use client";

import { Badge } from "../ui/badge";

import { Heart, Star } from "lucide-react";
import { useSession } from "next-auth/react";
import { useLikeStore } from "@/lib/store";
import LikeButton from "../customButton/LikeButton";
import { BentoGridHeaderProps } from "@/lib/types/bentoGrid";
import { Theme } from "@/lib/types/theme";

export default function BentoGridHeader({
  title,
  score,
  synopsis,
  themes,
  type,
  episode,
  duration,
  favorites,
  mal_id,
}: BentoGridHeaderProps) {
  const { data: session } = useSession();
  const { likedAnimes, toggleLike } = useLikeStore();

  const isLiked = likedAnimes.includes(mal_id);

  const handleLike = async () => {
    if (!session) {
      alert("You need to be logged in to like this.");
      return;
    }

    toggleLike(mal_id); // Met à jour l'état global du like
  };

  return (
    <div className="relative lg:col-span-3">
      <div className="absolute inset-px rounded-lg ring-1 ring-border lg:rounded-tl-[2rem]" />
      <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)] lg:rounded-tl-[calc(2rem+1px)] min-h-[300px] lg:min-h-[400px]">
        <div className="p-10 flex flex-col justify-center h-full">
          <h1 className="mb-4">{title}</h1>

          <div className="flex gap-4 mb-4 flex-wrap">
            {type && (
              <Badge variant="outline" className="shrink-0">
                {type}
              </Badge>
            )}
            {episode && (
              <Badge variant="outline" className="shrink-0">
                Eps {episode}
              </Badge>
            )}
            {duration && (
              <Badge variant="outline" className="shrink-0">
                {duration}
              </Badge>
            )}
            {score && (
              <Badge variant="outline" className="shrink-0">
                <Star size={12} className="mr-1" />
                {score}
              </Badge>
            )}
            {favorites && (
              <Badge variant="outline" className="shrink-0">
                <Heart size={12} className="mr-1" /> {favorites}
              </Badge>
            )}
          </div>
          <p className="max-w-lg">{synopsis}</p>
          <div className="flex mt-4 gap-4 flex-wrap">
            {themes.map((theme: Theme) => (
              <Badge variant="accent" key={theme.mal_id} className="shrink-0">
                {theme.name}
              </Badge>
            ))}
          </div>
          {session && (
            <div onClick={(e) => e.stopPropagation()}>
              {" "}
              {/* Empêche la propagation ici aussi */}
              <LikeButton onLike={handleLike} defaultLiked={isLiked} />
            </div>
          )}
        </div>
      </div>
      <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm max-lg:rounded-t-[2rem] lg:rounded-tl-[2rem]" />
    </div>
  );
}
