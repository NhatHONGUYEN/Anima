"use client";

import React from "react";
import Image from "next/image";
import { ContentHeroProps } from "@/lib/types";

export default function ContentHero({
  title,
  score,
  scoredBy,
  rank,
  synopsis,
  themes,
  trailerEmbedUrl,
  trailerImageUrl,
  largeImageUrl,
  producers,
  licensors,
  studios,
  episodes,
}: ContentHeroProps) {
  return (
    <section className="pb-16">
      <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
        <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-6 lg:grid-rows-1">
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
          <div className="relative lg:col-span-2 lg:grid-rows-1">
            <div className="absolute inset-px rounded-lg lg:rounded-bl-[2rem]" />
            <div className="relative ring-1 ring-border flex h-full flex-col overflow-hidden rounded-xl lg:rounded-bl-[calc(2rem+1px)]">
              {largeImageUrl ? (
                <Image
                  src={largeImageUrl}
                  alt={`${title} Large`}
                  width={400}
                  height={600}
                />
              ) : (
                <p>Image non disponible</p>
              )}
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm lg:rounded-bl-[2rem]" />
          </div>
          <div className="relative lg:col-span-2">
            <div className="absolute inset-px rounded-lg" />
            <div className="relative bg-card ring-1 ring-border flex h-full flex-col overflow-hidden rounded-xl">
              {trailerImageUrl ? (
                <Image
                  src={trailerImageUrl}
                  alt={`${title} Trailer`}
                  width={400}
                  height={225}
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
          {episodes && episodes.length > 0 && (
            <div className="relative lg:col-span-2">
              <div className="absolute inset-px rounded-lg max-lg:rounded-b-[2rem] lg:rounded-br-[2rem]" />
              <div className="relative bg-card flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-br-[calc(2rem+1px)]">
                <div className="p-10 mx-auto">
                  <h2 className="pb-4">Episodes:</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {episodes.slice(0, 6).map((episode) => (
                      <div key={episode.mal_id} className="flex gap-4">
                        <div>
                          <p className="pb-2">
                            {episode.title.length > 16
                              ? `${episode.title.slice(0, 10)}...`
                              : episode.title}
                          </p>
                          {episode.images.jpg.image_url ? (
                            <Image
                              src={episode.images.jpg.image_url}
                              alt={`Episode ${episode.mal_id} image`}
                              width={150}
                              height={150}
                              className="rounded-lg"
                            />
                          ) : (
                            <p>Image non disponible</p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="pointer-events-none ring-1 ring-border absolute inset-px rounded-lg shadow-sm max-lg:rounded-b-[2rem] lg:rounded-br-[2rem]" />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
