"use client";

import { useState } from "react";
import { useTopAnime } from "@/hooks/useTopAnime";
import Pagination from "@/components/Pagination";
import Image from "next/image";
import { Button } from "@/components/ui/button";

type Anime = {
  mal_id: number;
  title: string;
  synopsis: string;
  score: number;
  genres: { name: string }[];
  images: {
    jpg: { image_url: string };
    webp: { image_url: string };
  };
};

export default function Home() {
  const [page, setPage] = useState(1);
  const { data: topAnime, error, isLoading, isFetching } = useTopAnime(page);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h1>Top Anime</h1>
      <ul>
        {topAnime.data.map((anime: Anime) => (
          <li key={anime.mal_id} className="anime-item">
            <Image
              src={
                anime.images.webp
                  ? anime.images.webp.image_url
                  : anime.images.jpg.image_url
              }
              alt={anime.title}
              className="anime-image"
              width={200}
              height={300}
            />
            <div className="anime-details">
              <h2>{anime.title}</h2>
              <p>{anime.synopsis}</p>
              <p>
                <strong>Genres:</strong>{" "}
                {anime.genres.map((genre) => genre.name).join(", ")}
              </p>
              <p>
                <strong>Score:</strong> {anime.score}
              </p>
              <div className="anime-buttons">
                <Button>Watch</Button>
                <Button>Info</Button>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <Pagination page={page} isFetching={isFetching} onPageChange={setPage} />
    </div>
  );
}
