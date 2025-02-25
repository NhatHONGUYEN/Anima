import { useState, useEffect } from "react";
import { useTopAnime } from "@/hooks/useTopAnime";
import { Anime } from "@/lib/types";

export function useAnimeList(
  filter:
    | "airing"
    | "upcoming"
    | "bypopularity"
    | "favorite"
    | "all"
    | undefined,
  initialVisibleCount: number
) {
  const [page, setPage] = useState(1);
  const [allAnime, setAllAnime] = useState<Anime[]>([]);
  const [visibleCount, setVisibleCount] = useState(initialVisibleCount); // Use the initial visible count
  const { data, error, isLoading } = useTopAnime(filter, page);

  useEffect(() => {
    if (data?.data) {
      setAllAnime((prevAnime) => [...prevAnime, ...data.data]);
    }
  }, [data]);

  const handleShowMore = () => {
    setPage((prevPage) => prevPage + 1);
    setVisibleCount((prevCount) => prevCount + initialVisibleCount); // Increase by the initial visible count
  };

  const handleShowLess = () => {
    setVisibleCount((prevCount) =>
      Math.max(initialVisibleCount, prevCount - initialVisibleCount)
    ); // Decrease by the initial visible count, with a minimum of the initial visible count
  };

  return {
    allAnime,
    visibleCount,
    isLoading,
    error,
    handleShowMore,
    handleShowLess,
  };
}
