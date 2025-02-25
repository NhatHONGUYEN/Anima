"use client";

import React, { useState } from "react";
import Image from "next/image";
import { BentoGridImageProps } from "@/lib/types/bentoGrid";

export default function BentoGridImage({
  largeImageUrl,
  title,
}: BentoGridImageProps) {
  const [largeImageError, setLargeImageError] = useState(false);

  return (
    <div className="relative lg:col-span-2 lg:BentoGrid-rows-1">
      <div className="absolute inset-px rounded-lg " />
      <div className="relative ring-1 ring-border flex h-full flex-col overflow-hidden rounded-xl ">
        {largeImageUrl && !largeImageError ? (
          <div className="relative w-full h-96  lg:h-[600px]">
            <Image
              src={largeImageUrl}
              alt={`${title} Large`}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover hover:scale-105 transition-transform duration-300"
              onError={() => setLargeImageError(true)}
              priority
            />
          </div>
        ) : (
          <p>Image non disponible</p>
        )}
      </div>
      <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm lg:rounded-bl-[2rem]" />
    </div>
  );
}
