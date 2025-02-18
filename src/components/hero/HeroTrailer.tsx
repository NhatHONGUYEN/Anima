"use client";

import React from "react";
import { HeroTrailerProps } from "@/lib/types";
import HeroVideoDialog from "@/animations/hero-video-dialog";

export default function HeroTrailer({
  title,
  trailerEmbedUrl,
  trailerImageUrl = "",
}: HeroTrailerProps) {
  return (
    <div className="relative lg:col-span-3 w-full h-full">
      <div className="relative ring-1 ring-border flex h-96 lg:h-full flex-col overflow-hidden rounded-xl lg:rounded-tr-[calc(2rem+1px)] w-full">
        {trailerEmbedUrl ? (
          <div className="flex flex-1">
            {/* Version pour le mode clair */}
            <HeroVideoDialog
              className="block dark:hidden w-full h-full"
              animationStyle="from-center"
              videoSrc={trailerEmbedUrl}
              thumbnailSrc={trailerImageUrl}
              thumbnailAlt={title}
            />
            {/* Version pour le mode sombre */}
            <HeroVideoDialog
              className="hidden dark:block w-full h-full"
              animationStyle="from-center"
              videoSrc={trailerEmbedUrl}
              thumbnailSrc={trailerImageUrl}
              thumbnailAlt={title}
            />
          </div>
        ) : (
          <div className="flex items-center justify-center w-full h-full">
            <p>Trailer non disponible</p>
          </div>
        )}
      </div>
    </div>
  );
}
