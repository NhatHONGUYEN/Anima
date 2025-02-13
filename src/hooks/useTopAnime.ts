import { useQuery } from "@tanstack/react-query";
import {
  fetchAnimeDetails,
  fetchAnimeEpisodes,
  fetchTopAnime,
} from "../../app/actions/topAnime/route";

export function useTopAnime(
  filter?: "airing" | "upcoming" | "bypopularity" | "favorite" | "all",
  page: number = 1
) {
  return useQuery({
    queryKey: ["topAnime", filter, page],
    queryFn: () => fetchTopAnime(filter === "all" ? undefined : filter, page),
    staleTime: 5000,
  });
}

export function useAnimeDetails(id: number) {
  return useQuery({
    queryKey: ["animeDetails", id],
    queryFn: () => fetchAnimeDetails(id),
  });
}

export function useAnimeEpisodes(id: number) {
  return useQuery({
    queryKey: ["animeEpisodes", id],
    queryFn: () => fetchAnimeEpisodes(id),
  });
}
