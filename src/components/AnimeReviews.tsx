"use client";

import React from "react";
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

  if (isLoading) return <Loader />;
  if (error) return <div>Error: {error.message}</div>;
  if (!animeRewies.length)
    return (
      <div className="container py-32">
        <div className="text-center">
          <h1>No Reviews</h1>
        </div>
      </div>
    );

  return (
    <section className="py-32">
      <div className="container">
        <Carousel className="w-full">
          <div className="mb-8 flex justify-between px-1 lg:mb-12">
            <h1>Reviews</h1>
            <div className="flex items-center space-x-2">
              <CarouselPrevious className="static translate-y-0" />
              <CarouselNext className="static translate-y-0" />
            </div>
          </div>
          <CarouselContent>
            {shortReviews.map((review) => {
              const reviewText = review.review.slice(0, 500);

              return (
                <CarouselItem
                  key={review.mal_id}
                  className="basis-full md:basis-1/2 lg:basis-1/3"
                >
                  <div className="h-full p-1">
                    <div className="flex h-full flex-col justify-between rounded-lg border p-6">
                      <q>{reviewText} ...</q>
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
                          <p>score : {review.score} </p>
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
