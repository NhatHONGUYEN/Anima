import {
  fetchAnimeCharacters,
  fetchAnimeDetails,
  fetchAnimeEpisodes,
  fetchAnimeList,
  fetchAnimeRecommendations,
  fetchTopAnime,
} from "@/lib/api";
import { Anime } from "@/lib/types";
import { useQuery } from "@tanstack/react-query";

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

export function useAnimeRecommendations(id: number) {
  return useQuery({
    queryKey: ["animeRecommendations", id],
    queryFn: () => fetchAnimeRecommendations(id),
  });
}

export function useAnimeCharacters(id: number) {
  return useQuery({
    queryKey: ["animeCharacters", id],
    queryFn: () => fetchAnimeCharacters(id),
  });
}

export function useAnimeList() {
  return useQuery<Anime[], Error>({
    queryKey: ["animeList"],
    queryFn: () => fetchAnimeList(),
    staleTime: 5000,
  });
}
