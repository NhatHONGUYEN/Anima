"use client";

import React from "react";
import Image from "next/image";
import { BentoGridEpisodesProps } from "@/lib/types";

import { ScrollArea } from "../ui/scroll-area";

export default function BentoGridEpisodes({
  episodes,
}: BentoGridEpisodesProps) {
  return (
    <div className="relative lg:col-span-2">
      {/* Background effect */}
      <div className="absolute inset-px rounded-xl  " />

      <div className="relative  flex h-[600px]  flex-col overflow-hidden rounded-xl ">
        <ScrollArea className="p-10 ">
          {/* Vérification si des épisodes existent */}
          {!episodes || episodes.length === 0 ? (
            <div className="flex flex-col justify-center items-center h-full min-h-[500px]">
              <h1 className="mb-4 text-center">
                Sorry ! <br /> No Episodes
              </h1>
              <Image
                src="/sorry.gif"
                alt="no episode"
                width={400}
                height={400}
                className="rounded-lg object-cover"
              />
            </div>
          ) : (
            <>
              <h1 className="pb-4 text-center">Episodes</h1>
              <div className="flex flex-col  gap-4">
                {episodes.map((episode) => (
                  <div key={episode.mal_id}>
                    {/* Image de l'épisode */}
                    <div className="relative  ">
                      {episode?.images?.jpg?.image_url ? (
                        <Image
                          src={episode.images.jpg.image_url}
                          alt={`Episode ${episode.mal_id}`}
                          width={400}
                          height={400}
                          className="rounded-lg w-auto h-auto object-cover"
                          priority
                        />
                      ) : (
                        <div className="flex justify-center items-center ">
                          <h1 className="text-center">
                            Sorry <br /> No Image
                          </h1>
                          <Image
                            src="/sorry.gif"
                            alt="no episode"
                            width={100}
                            height={100}
                            className="rounded-lg object-cover"
                          />
                        </div>
                      )}
                    </div>
                    {/* Titre de l'épisode */}
                    <p className="text-center py-4">
                      {episode.title.length > 16
                        ? `${episode.title.slice(0, 16)}...`
                        : episode.title}
                    </p>
                  </div>
                ))}
              </div>
            </>
          )}
        </ScrollArea>
      </div>

      {/* Contour avec effet de shadow */}
      <div className="pointer-events-none ring-1 ring-border absolute inset-px rounded-lg shadow-sm " />
    </div>
  );
}
