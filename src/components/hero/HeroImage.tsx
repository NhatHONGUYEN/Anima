"use client";

import React, { useState } from "react";
import Image from "next/image";

interface HeroImageProps {
  largeImageUrl?: string;
  title: string;
}

export default function HeroImage({ largeImageUrl, title }: HeroImageProps) {
  const [largeImageError, setLargeImageError] = useState(false);

  return (
    <div className="relative lg:col-span-2 lg:grid-rows-1">
      <div className="absolute inset-px rounded-lg lg:rounded-bl-[2rem]" />
      <div className="relative ring-1 ring-border flex h-full flex-col overflow-hidden rounded-xl lg:rounded-bl-[calc(2rem+1px)]">
        {largeImageUrl && !largeImageError ? (
          <Image
            src={largeImageUrl}
            alt={`${title} Large`}
            width={400}
            height={600}
            onError={() => setLargeImageError(true)}
          />
        ) : (
          <p>Image non disponible</p>
        )}
      </div>
      <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm lg:rounded-bl-[2rem]" />
    </div>
  );
}
