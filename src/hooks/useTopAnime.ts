import { useQuery } from "@tanstack/react-query";
import {
  fetchAnimeDetails,
  fetchTopAnime,
} from "../../app/actions/topAnime/route";

export function useTopAnime(page: number) {
  return useQuery({
    queryKey: ["topAnime", page],
    queryFn: () => fetchTopAnime(page),
    staleTime: 5000,
  });
}

export function useAnimeDetails(id: number) {
  return useQuery({
    queryKey: ["animeDetails", id],
    queryFn: () => fetchAnimeDetails(id),
  });
}
