import { Entity } from "./entity";
import { Episode } from "./episode";
import { Characters } from "./character";

export type ContentBentoGridProps = {
  mal_id: number;
  title: string;
  score: number;
  duration: string;
  episode: number;
  favorites: number;
  type: string;
  rank: number;
  synopsis: string;
  themes: Entity[];
  trailerEmbedUrl: string;
  trailerImageUrl: string;
  largeImageUrl: string;
  producers: Entity[];
  licensors: Entity[];
  studios: Entity[];
  episodes: Episode[];
  characters: Characters[];
};

export type BentoGridEpisodesProps = {
  episodes: Episode[];
};

export type BentoGridDetailsProps = {
  trailerImageUrl?: string;
  title: string;
  producers: { mal_id: number; name: string }[];
  licensors: { mal_id: number; name: string }[];
  studios: { mal_id: number; name: string }[];
};

export type BentoGridImageProps = {
  largeImageUrl?: string;
  title: string;
};

export type BentoGridTrailerProps = {
  title: string;
  trailerEmbedUrl?: string;
  trailerImageUrl?: string;
};

export type BentoGridHeaderProps = {
  title: string;
  score: number;
  rank: number;
  synopsis: string;
  themes: { mal_id: number; name: string }[];
  type: string;
  episode: number;
  duration: string;
  favorites: number;
  mal_id: number;
};
