import { Entity } from "../types";

export type Anime = {
  mal_id: number;
  title_english: string;
  type: string;
  title: string;
  source: string;
  episodes: number;
  status: string;
  duration: string;
  synopsis: string;
  rating: string;
  score: number;
  scored_by: number;
  rank: number;
  popularity: number;
  favorites: number;
  year: number;
  producers: Entity[];
  licensors: Entity[];
  studios: Entity[];
  themes: Entity[];
  images: {
    jpg: {
      large_image_url: string;
    };
  };
  trailer: {
    images: {
      maximum_image_url: string;
    };
    embed_url: string;
  };
};

export type AnimeReview = {
  mal_id: number;
  url: string;
  type: string;
  reactions: {
    overall: number;
    nice: number;
    love_it: number;
    funny: number;
    confusing: number;
    informative: number;
    well_written: number;
    creative: number;
  };
  date: string;
  review: string;
  score: number;
  tags: string[];
  is_spoiler: boolean;
  is_preliminary: boolean;
  episodes_watched: number | null;
  user: {
    url: string;
    username: string;
    images: {
      jpg: {
        image_url: string;
      };
      webp: {
        image_url: string;
      };
    };
  };
};

export type AnimeListProps = {
  filter: "airing" | "upcoming" | "bypopularity" | "favorite" | "all";
  title: string;
  description: string;
};

export type AnimeCardProps = {
  anime: Anime;
};
