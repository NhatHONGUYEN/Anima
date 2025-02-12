"use client";

import { useState } from "react";
import { useTopAnime } from "@/hooks/useTopAnime";
import Pagination from "@/components/Pagination";

export default function Home() {
  const [page, setPage] = useState(1);
  const { data, error, isLoading, isFetching } = useTopAnime(page);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h1>Top Anime</h1>
      <ul>
        {data.data.map((anime: any) => (
          <li key={anime.mal_id}>{anime.title}</li>
        ))}
      </ul>
      <Pagination page={page} isFetching={isFetching} onPageChange={setPage} />
    </div>
  );
}
