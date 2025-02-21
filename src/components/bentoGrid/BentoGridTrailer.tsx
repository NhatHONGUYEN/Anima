"use client";

import React, { useRef } from "react";
import { BentoGridTrailerProps } from "@/lib/types";
import BentoGridVideoDialog from "@/animations/BentoGridVideoDialog";
import Image from "next/image";

export default function BentoGridTrailer({
  title,
  trailerEmbedUrl,
  trailerImageUrl = "",
}: BentoGridTrailerProps) {
  const videoRef = useRef<HTMLDivElement>(null);

  const handleVideoClick = () => {
    if (videoRef.current) {
      videoRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <div className="relative lg:col-span-3 w-full h-full">
      <div
        className="relative ring-1 ring-border flex h-96 lg:h-full flex-col overflow-hidden rounded-xl lg:rounded-tr-[calc(2rem+1px)] w-full"
        ref={videoRef} // 🔥 Ajoute le ref pour scroller
      >
        {trailerEmbedUrl ? (
          <div className="flex flex-1">
            {/* Version claire */}
            <BentoGridVideoDialog
              className="block dark:hidden w-full h-full"
              animationStyle="from-center"
              videoSrc={trailerEmbedUrl}
              thumbnailSrc={trailerImageUrl}
              thumbnailAlt={title}
              onClick={handleVideoClick} // 🔥 Passe la fonction onClick
            />
            {/* Version sombre */}
            <BentoGridVideoDialog
              className="hidden dark:block w-full h-full"
              animationStyle="from-center"
              videoSrc={trailerEmbedUrl}
              thumbnailSrc={trailerImageUrl}
              thumbnailAlt={title}
              onClick={handleVideoClick} // 🔥 Passe la fonction onClick
            />
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center gap-4 w-full h-full">
            <h1>Trailer not available</h1>
            <Image
              src="/notrailer.gif"
              alt="No trailer available"
              width={200}
              height={200}
              className="rounded-lg"
            />
          </div>
        )}
      </div>
    </div>
  );
}
