"use client";

import { useLikeStore } from "@/lib/store";

import { useQueries } from "@tanstack/react-query";
import React from "react";
import Image from "next/image";
import { fetchAnimeDetails } from "@/lib/actions.ts/anime";

export default function LikesPage() {
  const { likedAnimes } = useLikeStore();

  // Effectuer plusieurs requêtes en parallèle
  const animeQueries = useQueries({
    queries: likedAnimes.map((animeId) => ({
      queryKey: ["animeDetails", animeId],
      queryFn: () => fetchAnimeDetails(animeId),
    })),
  });

  return (
    <div>
      <h1>Mes Animes Likés</h1>
      {likedAnimes.length > 0 ? (
        <ul>
          {animeQueries.map((query, index) => {
            if (query.isLoading) return <p key={index}>Chargement...</p>;
            if (query.isError) return <p key={index}>Erreur de chargement</p>;

            const anime = query.data?.data;

            return (
              <li key={anime.mal_id}>
                <Image
                  src={anime.images.jpg.image_url}
                  alt={anime.title}
                  width={400}
                  height={400}
                />
                <p>{anime.title}</p>
              </li>
            );
          })}
        </ul>
      ) : (
        <p>Aucun anime liké pour le moment.</p>
      )}
    </div>
  );
}
