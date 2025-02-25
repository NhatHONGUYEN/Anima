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

export type BentoGridEpisodesProps = {
  episodes: Episode[];
};
