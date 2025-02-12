export type Entity = {
  mal_id: number;
  type: string;
  name: string;
  url: string;
};

export type Anime = {
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
