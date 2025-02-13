"use client";

import { HeroHeaderProps } from "@/lib/types";
import React from "react";

export default function HeroHeader({
  title,
  score,
  scoredBy,
  rank,
  synopsis,
  themes,
}: HeroHeaderProps) {
  return (
    <div className="relative lg:col-span-3">
      <div className="absolute inset-px rounded-lg ring-1 ring-border bg-card max-lg:rounded-t-[2rem] lg:rounded-tl-[2rem]" />
      <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)] lg:rounded-tl-[calc(2rem+1px)]">
        <div className="p-10 pt-4">
          <h3 className="font-semibold">{title}</h3>
          <div className="mt-2 flex gap-4">
            {themes.map((theme) => (
              <p key={theme.mal_id}>{theme.name}</p>
            ))}
          </div>
          <p className="mt-2 max-w-lg">
            {score} / 10 - {scoredBy} - {rank}
          </p>
          <p className="mt-2 max-w-lg">{synopsis}</p>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm max-lg:rounded-t-[2rem] lg:rounded-tl-[2rem]" />
    </div>
  );
}
