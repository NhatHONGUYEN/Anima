"use client";

import React from "react";
import { useAnimeDetails } from "@/hooks/useTopAnime";
import Image from "next/image";
import { Anime, Episode } from "@/lib/types";
import { useAnimeEpisodes } from "../../hooks/useTopAnime";

export default function Hero() {
  const { data: animeDetail, error, isLoading } = useAnimeDetails(38524);
  const {
    data: animeEpisodes,
    error: episodesError,
    isLoading: episodesLoading,
  } = useAnimeEpisodes(38524);

  if (isLoading || episodesLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  if (episodesError) return <div>Error: {episodesError.message}</div>;

  const anime: Anime | undefined = animeDetail?.data;
  if (!anime) return <div>Anime not found</div>;

  const episodes: Episode[] | undefined = animeEpisodes?.data;
  if (!episodes) return <div>Episodes not found</div>;

  return (
    <div>
      <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
        <div className="mt-10 grid grid-cols-1  gap-4 sm:mt-16 lg:grid-cols-6 lg:grid-rows-1">
          <div className="relative lg:col-span-3  ">
            <div className="absolute inset-px rounded-lg ring-1 ring-border bg-card max-lg:rounded-t-[2rem] lg:rounded-tl-[2rem]" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)] lg:rounded-tl-[calc(2rem+1px)]">
              <div className="p-10 pt-4">
                <h3 className=" font-semibold ">{anime.title}</h3>
                <div className="mt-2 flex gap-4 ">
                  {anime.themes.map((theme) => (
                    <p key={theme.mal_id}>{theme.name}</p>
                  ))}
                </div>
                <p className="mt-2 max-w-lg  ">
                  {anime.score} / 10 - {anime.scored_by} - {anime.rank}
                </p>
                <p className="mt-2 max-w-lg  ">{anime.synopsis}</p>
              </div>
            </div>
            <div className="pointer-events-none  absolute inset-px rounded-lg  shadow-sm  max-lg:rounded-t-[2rem] lg:rounded-tl-[2rem]" />
          </div>
          <div className="relative  lg:col-span-3">
            <div className="relative ring-1 ring-border flex h-full flex-col overflow-hidden rounded-xl lg:rounded-tr-[calc(2rem+1px)]">
              {anime.trailer?.embed_url ? (
                <div className="video-container w-full h-full">
                  <iframe
                    src={`${anime.trailer.embed_url}?autoplay=1`}
                    title="Anime Trailer"
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
            <div className="absolute  inset-px rounded-lg  lg:rounded-bl-[2rem]" />
            <div className="relative  ring-1 ring-border flex h-full flex-col overflow-hidden rounded-xl lg:rounded-bl-[calc(2rem+1px)]">
              {anime.images?.jpg?.large_image_url && (
                <Image
                  src={anime.images.jpg.large_image_url}
                  alt={`${anime.title} Large`}
                  width={400}
                  height={600}
                />
              )}
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg  shadow-sm  lg:rounded-bl-[2rem]" />
          </div>
          <div className="relative  lg:col-span-2">
            <div className="absolute inset-px rounded-lg " />
            <div className="relative bg-card ring-1 ring-border flex h-full flex-col overflow-hidden rounded-xl ">
              {anime.trailer?.images?.maximum_image_url && (
                <Image
                  src={anime.trailer.images.maximum_image_url}
                  alt={`${anime.title} Trailer`}
                  width={400}
                  height={225}
                />
              )}
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
            <div className="pointer-events-none absolute inset-px rounded-lg  shadow-sm " />
          </div>
          <div className="relative  lg:col-span-2">
            <div className="absolute inset-px rounded-lg  max-lg:rounded-b-[2rem] lg:rounded-br-[2rem]" />
            <div className="relative bg-card   flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-br-[calc(2rem+1px)]">
              <div className="p-10 mx-auto ">
                <h2 className="pb-4">Episode:</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
                  {episodes?.slice(0, 6).map((episode: Episode) => (
                    <div key={episode.mal_id} className="flex gap-4">
                      <div>
                        <p className="pb-2">
                          {episode.title.length > 16
                            ? `${episode.title.slice(0, 10)}...`
                            : episode.title}
                        </p>
                        <Image
                          src={episode.images.jpg.image_url}
                          alt={`Episode ${episode.mal_id} image`}
                          width={150}
                          height={150}
                          className="rounded-lg"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="pointer-events-none ring-1 ring-border absolute inset-px rounded-lg  shadow-sm  max-lg:rounded-b-[2rem] lg:rounded-br-[2rem]" />
          </div>
        </div>
      </div>
    </div>
  );
}
