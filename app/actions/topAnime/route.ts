import {
  fetchAnimeCharacters,
  fetchAnimeDetails,
  fetchAnimeEpisodes,
  fetchAnimeRecommendations,
  fetchTopAnime,
} from "@/lib/api";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { id, type, filter, page } = req.query;

  try {
    let data;
    switch (type) {
      case "topAnime":
        data = await fetchTopAnime(
          filter as "airing" | "upcoming" | "bypopularity" | "favorite",
          parseInt(page as string, 10)
        );
        break;
      case "animeDetails":
        data = await fetchAnimeDetails(parseInt(id as string, 10));
        break;
      case "animeEpisodes":
        data = await fetchAnimeEpisodes(parseInt(id as string, 10));
        break;
      case "animeRecommendations":
        data = await fetchAnimeRecommendations(parseInt(id as string, 10));
        break;
      case "animeCharacters":
        data = await fetchAnimeCharacters(parseInt(id as string, 10));
        break;
      default:
        res.status(400).json({ error: "Invalid type" });
        return;
    }
    res.status(200).json(data);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    } else {
      res.status(500).json({ error: "An unknown error occurred" });
    }
  }
}
