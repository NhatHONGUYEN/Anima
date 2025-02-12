"use client"; // ⬅️ Indique que c'est un Client Component

import { useAnimeDetails } from "@/hooks/useTopAnime";
import Image from "next/image";

type Genre = {
  name: string;
};

export default function AnimeDetails({ id }: { id: number }) {
  const { data: animeDetail, error, isLoading } = useAnimeDetails(id);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  const anime = animeDetail?.data;
  if (!anime) return <div>Anime not found</div>;

  return (
    <div>
      <h1>{anime.title}</h1>
      <Image
        src={
          anime.images?.webp?.image_url ||
          anime.images?.jpg?.image_url ||
          "/fallback-image.jpg"
        }
        alt={anime.title}
        width={400}
        height={600}
      />
      <p>{anime.synopsis}</p>
      <p>
        <strong>Genres:</strong>{" "}
        {anime.genres?.map((genre: Genre) => genre.name).join(", ") || "N/A"}
      </p>
      <p>
        <strong>Score:</strong> {anime.score || "N/A"}
      </p>
    </div>
  );
}
