import React from "react";
import Image from "next/image";
import BentoGridEpisodeTitle from "./BentoGridEpisodeTitle";
import { Episode } from "@/lib/types";

const NO_IMAGE_TEXT = "Sorry No Image";
const NO_IMAGE_SRC = "/sorry.gif";

export default function BentoGridEpisode({ episode }: { episode: Episode }) {
  return (
    <div key={episode.mal_id} className="max-w-full">
      {/* Image de l'épisode */}
      <div className="relative">
        {episode?.images?.jpg?.image_url ? (
          <Image
            src={episode.images.jpg.image_url}
            alt={`Episode ${episode.mal_id}`}
            width={400}
            height={400}
            className="rounded-lg w-full h-auto object-cover max-w-full"
            priority
            quality={100}
          />
        ) : (
          <div className="flex flex-col pt-10 justify-center items-center h-full">
            <h1>{NO_IMAGE_TEXT}</h1>
            <Image
              src={NO_IMAGE_SRC}
              alt="no episode"
              width={400}
              height={400}
              className="rounded-lg object-cover max-w-full"
              quality={100}
              priority
            />
          </div>
        )}
      </div>
      {/* Titre de l'épisode */}
      <BentoGridEpisodeTitle title={episode.title} />
    </div>
  );
}
