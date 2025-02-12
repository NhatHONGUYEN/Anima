import { useQuery } from "@tanstack/react-query";
import { fetchTopAnime } from "../../app/actions/topAnime/route";

export function useTopAnime(page: number) {
  return useQuery({
    queryKey: ["topAnime", page],
    queryFn: () => fetchTopAnime(page),
    staleTime: 5000,
  });
}
