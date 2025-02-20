"use client";

import React from "react";
import { BentoGridTrailerProps } from "@/lib/types";
import BentoGridVideoDialog from "@/animations/BentoGridVideoDialog";
import Image from "next/image";

export default function BentoGridTrailer({
  title,
  trailerEmbedUrl,
  trailerImageUrl = "",
}: BentoGridTrailerProps) {
  return (
    <div className="relative lg:col-span-3 w-full h-full">
      <div className="relative ring-1 ring-border flex h-96 lg:h-full flex-col overflow-hidden rounded-xl lg:rounded-tr-[calc(2rem+1px)] w-full">
        {trailerEmbedUrl ? (
          <div className="flex flex-1">
            {/* Version pour le mode clair */}
            <BentoGridVideoDialog
              className="block dark:hidden w-full h-full"
              animationStyle="from-center"
              videoSrc={trailerEmbedUrl}
              thumbnailSrc={trailerImageUrl}
              thumbnailAlt={title}
            />
            {/* Version pour le mode sombre */}
            <BentoGridVideoDialog
              className="hidden dark:block w-full h-full"
              animationStyle="from-center"
              videoSrc={trailerEmbedUrl}
              thumbnailSrc={trailerImageUrl}
              thumbnailAlt={title}
            />
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center gap-4 w-full h-full">
            <h1>Trailer not available </h1>
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
