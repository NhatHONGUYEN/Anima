"use client";

import React from "react";
import { useAnimeDetails } from "@/hooks/useTopAnime";
import Image from "next/image";
import { Anime } from "@/lib/types";

export default function Hero() {
  const { data: animeDetail, error, isLoading } = useAnimeDetails(38524);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  const anime: Anime | undefined = animeDetail?.data;
  if (!anime) return <div>Anime not found</div>;

  return (
    <div className="bg-white ">
      <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
        <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-6 lg:grid-rows-1">
          <div className="relative lg:col-span-3">
            <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-t-[2rem] lg:rounded-tl-[2rem]" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)] lg:rounded-tl-[calc(2rem+1px)]">
              <div className="p-10 pt-4">
                <h3 className="text-sm/4 font-semibold text-indigo-600">
                  {anime.title}
                </h3>
                <p className="mt-2 text-lg flex gap-4 font-medium tracking-tight text-gray-950">
                  {anime.themes.map((theme) => (
                    <div key={theme.mal_id}>{theme.name}</div>
                  ))}
                </p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-600">
                  {anime.score} / 10 - {anime.scored_by} - {anime.rank}
                </p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-600">
                  {anime.synopsis}
                </p>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg ring-1 shadow-sm ring-black/5 max-lg:rounded-t-[2rem] lg:rounded-tl-[2rem]" />
          </div>
          <div className="relative lg:col-span-3">
            <div className="absolute inset-px rounded-lg bg-white lg:rounded-tr-[2rem]" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] lg:rounded-tr-[calc(2rem+1px)]">
              {anime.trailer?.embed_url ? (
                <div className="video-container">
                  <iframe
                    width={500}
                    height={281}
                    src={anime.trailer.embed_url}
                    title="Anime Trailer"
                    style={{ border: 0 }}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              ) : (
                <p>Trailer non disponible</p>
              )}
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg ring-1 shadow-sm ring-black/5 lg:rounded-tr-[2rem]" />
          </div>
          <div className="relative lg:col-span-2 lg:grid-rows-1">
            <div className="absolute inset-px rounded-lg bg-white lg:rounded-bl-[2rem]" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] lg:rounded-bl-[calc(2rem+1px)]">
              {anime.images?.jpg?.large_image_url && (
                <Image
                  src={anime.images.jpg.large_image_url}
                  alt={`${anime.title} Large`}
                  width={400}
                  height={600}
                />
              )}
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg ring-1 shadow-sm ring-black/5 lg:rounded-bl-[2rem]" />
          </div>
          <div className="relative lg:col-span-2">
            <div className="absolute inset-px rounded-lg bg-white" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)]">
              {anime.trailer?.images?.maximum_image_url && (
                <Image
                  src={anime.trailer.images.maximum_image_url}
                  alt={`${anime.title} Trailer`}
                  width={400}
                  height={225}
                />
              )}
              <div className="p-10 pt-4">
                <h3 className="text-sm/4 font-semibold text-indigo-600">
                  Integrations
                </h3>
                <p className="mt-2 text-lg font-medium tracking-tight text-gray-950">
                  Connect your favorite tools
                </p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-600">
                  Maecenas at augue sed elit dictum vulputate, in nisi aliquam
                  maximus arcu.
                </p>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg ring-1 shadow-sm ring-black/5" />
          </div>
          <div className="relative lg:col-span-2">
            <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-b-[2rem] lg:rounded-br-[2rem]" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-br-[calc(2rem+1px)]">
              <div className="p-10 pt-4">
                <div>
                  <h2>Producers:</h2>
                  <ul>
                    {anime.producers.map((producer) => (
                      <li key={producer.mal_id}>{producer.name}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h2>Licensors:</h2>
                  <ul>
                    {anime.licensors.map((licensor) => (
                      <li key={licensor.mal_id}>{licensor.name}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h2>Studios:</h2>
                  <ul>
                    {anime.studios.map((studio) => (
                      <li key={studio.mal_id}>{studio.name}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg ring-1 shadow-sm ring-black/5 max-lg:rounded-b-[2rem] lg:rounded-br-[2rem]" />
          </div>
        </div>
      </div>
    </div>
  );
}
