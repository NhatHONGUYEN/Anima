"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Anime } from "@/lib/types";

type AnimeCardProps = {
  anime: Anime;
};

export default function AnimeCard({ anime }: AnimeCardProps) {
  return (
    <div className="group rounded-xl">
      <div className="group relative h-full min-h-[27rem] max-w-full overflow-hidden rounded-xl md:aspect-[5/4] lg:aspect-[16/9]">
        <Image
          src={anime.images.jpg.large_image_url}
          alt={anime.title}
          width={400}
          height={450}
          quality={100}
          className="absolute h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 h-full bg-[linear-gradient(hsl(var(--muted)/0),hsl(var(--muted)/0.4),hsl(var(--muted)/0.8)_100%)] mix-blend-multiply" />
        <div className="absolute inset-x-0 bottom-0 flex flex-col items-start p-6 text-primary-foreground md:p-8">
          <h1 className="mb-2 pt-4 font-semibold md:mb-3 md:pt-4 lg:pt-4">
            {anime.title.length > 30
              ? `${anime.title.slice(0, 30)}...`
              : anime.title}
          </h1>
          <h3 className="mb-8 line-clamp-2 md:mb-12 lg:mb-9">
            {anime.synopsis}
          </h3>
          <Link href={`/movies/${anime.mal_id}`} className="flex items-center ">
            Read more{" "}
            <ArrowRight className="ml-2 size-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </div>
  );
}
