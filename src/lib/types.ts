export type Entity = {
  mal_id: number;
  type: string;
  name: string;
  url: string;
};

export type ImageProps = {
  src: string;
  alt: string;
  fill: boolean;
  sizes: string;
  style: {
    objectFit: "cover" | "contain" | "fill" | "none" | "scale-down";
  };
  className: string;
  priority: boolean;
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

export type AccordionSectionProps = {
  title: string;
  items: { mal_id: number; name: string }[];
};

export type Theme = {
  mal_id: number;
  name: string;
};

export type AnimeListProps = {
  filter: "airing" | "upcoming" | "bypopularity" | "favorite" | "all";
  title: string;
  description: string;
};

export type CustomButtonProps = {
  label: string;
  href?: string;
  icon?: React.ElementType;
  variant?: "default" | "outline";
  onClick?: () => void;
};

export type AnimeCardProps = {
  anime: Anime;
};

export type LikeButtonProps = {
  onLike?: (liked: boolean) => void;
  defaultLiked?: boolean;
  className?: string;
};
