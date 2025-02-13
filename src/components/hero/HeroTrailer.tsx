"use client";

import { HeroTrailerProps } from "@/lib/types";
import React from "react";

export default function HeroTrailer({ trailerEmbedUrl }: HeroTrailerProps) {
  return (
    <div className="relative lg:col-span-3">
      <div className="relative ring-1 ring-border flex h-full flex-col overflow-hidden rounded-xl lg:rounded-tr-[calc(2rem+1px)]">
        {trailerEmbedUrl ? (
          <div className="video-container w-full h-full">
            <iframe
              src={`${trailerEmbedUrl}?autoplay=1`}
              title="Trailer"
              style={{ border: 0 }}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </div>
        ) : (
          <p>Trailer non disponible</p>
        )}
      </div>
    </div>
  );
}
