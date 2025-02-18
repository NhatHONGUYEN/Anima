import {
  fetchTopAnime,
  fetchAnimeDetails,
  fetchAnimeEpisodes,
  fetchAnimeRecommendations,
  fetchAnimeCharacters,
  fetchAnimeReviews,
} from "@/lib/api";
import { NextResponse } from "next/server";

// Cette fonction traite toutes les requêtes GET
export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const type = searchParams.get("type");
  const id = searchParams.get("id");
  const filter = searchParams.get("filter") as
    | "airing"
    | "upcoming"
    | "bypopularity"
    | "favorite";
  const page = parseInt(searchParams.get("page") || "1", 10);

  try {
    let data;

    // Traitement en fonction du type
    switch (type) {
      case "topAnime":
        data = await fetchTopAnime(filter, page);
        break;
      case "animeDetails":
        if (!id) throw new Error("ID is required for animeDetails");
        data = await fetchAnimeDetails(parseInt(id, 10));
        break;
      case "animeEpisodes":
        if (!id) throw new Error("ID is required for animeEpisodes");
        data = await fetchAnimeEpisodes(parseInt(id, 10));
        break;
      case "animeRecommendations":
        if (!id) throw new Error("ID is required for animeRecommendations");
        data = await fetchAnimeRecommendations(parseInt(id, 10));
        break;
      case "animeCharacters":
        if (!id) throw new Error("ID is required for animeCharacters");
        data = await fetchAnimeCharacters(parseInt(id, 10));
        break;
      case "animeReviews":
        if (!id) throw new Error("ID is required for animeReviews");
        data = await fetchAnimeReviews(parseInt(id, 10));
        break;
      default:
        return NextResponse.json({ error: "Invalid type" }, { status: 400 });
    }

    // Réponse avec les données
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Unknown error" },
      { status: 500 }
    );
  }
}
