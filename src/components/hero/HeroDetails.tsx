"use client";

import React, { useState } from "react";
import Image from "next/image";
import { HeroDetailsProps } from "@/lib/types";
import AccordionSection from "../AccordionSection";

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
          <div className="flex items-center justify-center h-full">
            <p>404 Not Found</p>
          </div>
        )}
        <div className="p-10 pt-4">
          <AccordionSection title="Producers" items={producers} />
          <AccordionSection title="Licensors" items={licensors} />
          <AccordionSection title="Studios" items={studios} />
        </div>
      </div>
      <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm" />
    </div>
  );
}
