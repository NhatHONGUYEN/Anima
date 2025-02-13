"use server";

export async function fetchTopAnime(
  filter?: "airing" | "upcoming" | "bypopularity" | "favorite",
  page: number = 1
) {
  try {
    const url = filter
      ? `https://api.jikan.moe/v4/top/anime?filter=${filter}&page=${page}&limit=10`
      : `https://api.jikan.moe/v4/top/anime?page=${page}&limit=10`;

    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(
        `Failed to fetch top anime${filter ? ` with filter: ${filter}` : ""}`
      );
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(
      `Error fetching top anime${filter ? ` with filter ${filter}` : ""}:`,
      error
    );
    throw error;
  }
}

export async function fetchAnimeDetails(id: number) {
  try {
    const response = await fetch(`https://api.jikan.moe/v4/anime/${id}`);
    if (!response.ok) {
      throw new Error("Failed to fetch anime details");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching anime details:", error);
    throw error;
  }
}

export async function fetchAnimeEpisodes(id: number) {
  try {
    const response = await fetch(
      `https://api.jikan.moe/v4/anime/${id}/videos/episodes`
    );
    if (!response.ok) {
      throw new Error("Failed to fetch anime episodes");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching anime episodes:", error);
    throw error;
  }
}
