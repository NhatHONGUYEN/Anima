"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Anime } from "@/lib/types";
import { useSession } from "next-auth/react"; // Vérifier si l'utilisateur est connecté
import { useLikeStore } from "@/lib/store";
import LikeButton from "./ui/LikeButton";

type AnimeCardProps = {
  anime: Anime;
};

export default function AnimeCard({ anime }: AnimeCardProps) {
  const { data: session } = useSession(); // Vérifie si l'utilisateur est connecté
  const { likedAnimes, toggleLike } = useLikeStore(); // Utilise le store

  // Vérifie si cet anime est liké
  const isLiked = likedAnimes.includes(anime.mal_id);

  const handleLike = () => {
    if (!session) {
      alert("You need to be logged in to like this.");
      return;
    }

    console.log("Toggling like for anime ID:", anime.mal_id); // Debug
    toggleLike(anime.mal_id); // Met à jour l'état du like pour cet anime
  };

  if (!anime) {
    return (
      <div className="text-center text-red-500">Anime data not available</div>
    );
  }

  const imageUrl =
    anime?.images?.jpg?.large_image_url || "/path/to/default/image.jpg";
  const title = anime?.title ?? "Unknown Title";
  const synopsis = anime?.synopsis;

  return (
    <div className="group rounded-xl">
      <div className="group relative h-full min-h-[27rem] max-w-full overflow-hidden rounded-xl md:aspect-[5/4] lg:aspect-[16/9]">
        <Image
          src={imageUrl}
          alt={title}
          width={400}
          height={450}
          quality={100}
          className="absolute h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 h-full bg-[linear-gradient(hsl(var(--muted)/0),hsl(var(--muted)/0.4),hsl(var(--muted)/0.8)_100%)] mix-blend-multiply" />
        <div className="absolute inset-x-0 bottom-0 flex flex-col items-start p-6 text-primary-foreground md:p-8">
          <h1 className="mb-2 pt-4 font-semibold md:mb-3 md:pt-4 lg:pt-4">
            {title.length > 30 ? `${title.slice(0, 30)}...` : title}
          </h1>
          {synopsis && (
            <h3 className="mb-8 line-clamp-2 md:mb-12 lg:mb-9">
              {synopsis.length > 30 ? `${synopsis.slice(0, 30)}...` : synopsis}
            </h3>
          )}
          <Link href={`/movies/${anime.mal_id}`} className="flex items-center">
            Read more{" "}
            <ArrowRight className="ml-2 size-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
        {session && <LikeButton onLike={handleLike} defaultLiked={isLiked} />}
      </div>
    </div>
  );
}
