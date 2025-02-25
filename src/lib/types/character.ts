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
