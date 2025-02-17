export type Entity = {
  mal_id: number;
  type: string;
  name: string;
  url: string;
};

export type Anime = {
  mal_id: number;
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

export type Episode = {
  mal_id: number;
  url: string;
  title: string;
  title_japanese: string;
  title_romanji: string;
  aired: string;
  score: number;
  filler: boolean;
  recap: boolean;
  forum_url: string;
  images: {
    jpg: {
      image_url: string;
    };
  };
};

export type Characters = {
  mal_id: number;
  character: {
    mal_id: number;
    images: {
      webp: {
        image_url: string;
      };
    };
    name: string;
    favorites: number;
  };
  role: string;
  voice_actors: {
    person: {
      mal_id: number;
      images: {
        jpg: {
          image_url: string;
        };
      };
      name: string;
    };
    language: string;
  }[];
};

export type ContentHeroProps = {
  title: string;
  score: number;
  rank: number;
  type: string;
  episode: number;
  duration: string;
  favorites: number;
  synopsis: string;
  themes: Entity[];
  trailerEmbedUrl?: string;
  trailerImageUrl?: string;
  largeImageUrl?: string;
  producers: Entity[];
  licensors: Entity[];
  studios: Entity[];
  episodes?: Episode[];
  characters: Characters[];
};

export type HeroEpisodesProps = {
  episodes: Episode[];
};

export type HeroDetailsProps = {
  trailerImageUrl?: string;
  title: string;
  producers: { mal_id: number; name: string }[];
  licensors: { mal_id: number; name: string }[];
  studios: { mal_id: number; name: string }[];
};

export type HeroImageProps = {
  largeImageUrl?: string;
  title: string;
};

export type HeroTrailerProps = {
  trailerEmbedUrl?: string;
};

export type HeroHeaderProps = {
  title: string;
  score: number;
  rank: number;
  synopsis: string;
  themes: { mal_id: number; name: string }[];
  type: string;
  episode: number;
  duration: string;
  favorites: number;
};

export type AccordionSectionProps = {
  title: string;
  items: { mal_id: number; name: string }[];
};

export type Theme = {
  mal_id: number;
  name: string;
};
