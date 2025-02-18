"use client";

import React, { useState } from "react";
import Loader from "./ui/loader";
import { useAnimeReviews } from "@/hooks/useTopAnime";
import { AnimeReview } from "@/lib/types";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { Avatar, AvatarImage } from "./ui/avatar";

export default function AnimeReviews({ id }: { id: number }) {
  const { data, error, isLoading } = useAnimeReviews(id);
  const animeRewies: AnimeReview[] = data?.data ?? [];
  const shortReviews = animeRewies.slice(0, 6);

  const [expandedReviews, setExpandedReviews] = useState<number[]>([]);

  const toggleExpand = (mal_id: number) => {
    setExpandedReviews((prev) =>
      prev.includes(mal_id)
        ? prev.filter((id) => id !== mal_id)
        : [...prev, mal_id]
    );
  };

  if (isLoading) return <Loader />;
  if (error) return <div>Error: {error.message}</div>;
  if (!animeRewies.length) return <div>Reviews not found</div>;

  return (
    <section className="py-32">
      <div className="container">
        <Carousel className="w-full">
          <div className="mb-8 flex justify-between px-1 lg:mb-12">
            <h2 className="text-2xl font-semibold lg:text-5xl">
              Why Clients Love Us
            </h2>
            <div className="flex items-center space-x-2">
              <CarouselPrevious className="static translate-y-0" />
              <CarouselNext className="static translate-y-0" />
            </div>
          </div>
          <CarouselContent>
            {shortReviews.map((review) => {
              const isExpanded = expandedReviews.includes(review.mal_id);
              const reviewText = isExpanded
                ? review.review
                : review.review.slice(0, 300);

              return (
                <CarouselItem
                  key={review.mal_id}
                  className="basis-full md:basis-1/2 lg:basis-1/3"
                >
                  <div className="h-full p-1">
                    <div className="flex h-full flex-col justify-between rounded-lg border p-6">
                      <q className="leading-7 text-foreground/70">
                        {reviewText}
                        {review.review.length > 300 && (
                          <>
                            {!isExpanded ? "..." : ""}
                            <button
                              onClick={() => toggleExpand(review.mal_id)}
                              className="text-blue-500 ml-2"
                            >
                              {isExpanded ? "Voir moins" : "Voir plus"}
                            </button>
                          </>
                        )}
                      </q>
                      <div className="mt-6 flex gap-4 leading-5">
                        <Avatar className="size-9 rounded-full ring-1 ring-input">
                          <AvatarImage
                            src={review.user.images.webp.image_url}
                            alt={review.user.username}
                          />
                        </Avatar>
                        <div className="text-sm">
                          <p className="font-medium">{review.user.username}</p>
                          <p className="text-muted-foreground">
                            {new Date(review.date).toLocaleDateString()}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              );
            })}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
}
