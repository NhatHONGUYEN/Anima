"use client";

import React from "react";

import { Badge } from "../ui/badge";
import { Star } from "lucide-react";
import { HeroHeaderProps, Theme } from "@/lib/types";

export default function HeroHeader({
  title,
  rank,
  synopsis,
  themes,
}: HeroHeaderProps) {
  const stars = Array.from(
    { length: Math.min(rank, 5) },
    (_, index) => index + 1
  );

  return (
    <div className="relative lg:col-span-3">
      <div className="absolute inset-px rounded-lg ring-1 ring-border bg-card max-lg:rounded-t-[2rem] lg:rounded-tl-[2rem]" />
      <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)] lg:rounded-tl-[calc(2rem+1px)] min-h-[300px] lg:min-h-[400px]">
        <div className="p-10 flex flex-col justify-center h-full">
          <h1 className="mb-4">{title}</h1>
          <div className="flex gap-4 mb-4">
            {themes.map((theme: Theme) => (
              <Badge variant="accent" key={theme.mal_id}>
                {theme.name}
              </Badge>
            ))}
          </div>
          <div className="mt-2 max-w-lg flex items-center mb-4">
            {stars.map((star) => (
              <Star
                key={star}
                className="size-5 fill-amber-500 text-amber-500"
              />
            ))}
          </div>
          <p className="mt-4 max-w-lg">{synopsis}</p>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm max-lg:rounded-t-[2rem] lg:rounded-tl-[2rem]" />
    </div>
  );
}
