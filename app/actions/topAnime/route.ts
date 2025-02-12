"use server";

export async function fetchTopAnime(page: number) {
  try {
    const response = await fetch(
      `https://api.jikan.moe/v4/top/anime?page=${page}&limit=10`
    );
    if (!response.ok) {
      throw new Error("Failed to fetch top anime");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching top anime:", error);
    throw error;
  }
}
