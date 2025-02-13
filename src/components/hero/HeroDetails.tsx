"use client";

import React, { useState } from "react";
import Image from "next/image";
import { HeroDetailsProps } from "@/lib/types";

export default function HeroDetails({
  trailerImageUrl,
  title,
  producers,
  licensors,
  studios,
}: HeroDetailsProps) {
  const [trailerImageError, setTrailerImageError] = useState(false);

  return (
    <div className="relative lg:col-span-2">
      <div className="absolute inset-px rounded-lg" />
      <div className="relative bg-card ring-1 ring-border flex h-full flex-col overflow-hidden rounded-xl">
        {trailerImageUrl && !trailerImageError ? (
          <Image
            src={trailerImageUrl}
            alt={`${title} Trailer`}
            width={400}
            height={225}
            onError={() => setTrailerImageError(true)}
          />
        ) : (
          <p>Image non disponible</p>
        )}
        <div className="p-10 pt-4">
          <div>
            <h2>Producers:</h2>
            <ul>
              {producers.length > 0 ? (
                producers.map((producer) => (
                  <li key={producer.mal_id}>{producer.name}</li>
                ))
              ) : (
                <li>Producers non disponibles</li>
              )}
            </ul>
          </div>
          <div>
            <h2>Licensors:</h2>
            <ul>
              {licensors.length > 0 ? (
                licensors.map((licensor) => (
                  <li key={licensor.mal_id}>{licensor.name}</li>
                ))
              ) : (
                <li>Licensors non disponibles</li>
              )}
            </ul>
          </div>
          <div>
            <h2>Studios:</h2>
            <ul>
              {studios.length > 0 ? (
                studios.map((studio) => (
                  <li key={studio.mal_id}>{studio.name}</li>
                ))
              ) : (
                <li>Studios non disponibles</li>
              )}
            </ul>
          </div>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm" />
    </div>
  );
}
