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
import { ThumbsDown, ThumbsUp } from "lucide-react";
import Image from "next/image";
import FADE_DOWN_ANIMATION from "@/animations/FADE_DOWN_ANIMATION";

export default function AnimeReviews({ id }: { id: number }) {
  const { data, error, isLoading } = useAnimeReviews(id);
  const animeRewies: AnimeReview[] = data?.data ?? [];
  const shortReviews = animeRewies.slice(0, 6);

  if (isLoading) return <Loader />;
  if (error) return <div>Error: {error.message}</div>;
  if (!animeRewies.length)
    return (
      <div className="container pt-32">
        <FADE_DOWN_ANIMATION>
          <div className="text-center flex flex-col items-center justify-center space-y-4">
            <h1>No Reviews</h1>
            <Image
              className="rounded-xl"
              src="/gif/saitama.gif"
              width={300}
              height={300}
              alt="No Reviews"
            />
          </div>
        </FADE_DOWN_ANIMATION>
      </div>
    );

  return (
    <section className="py-32">
      <FADE_DOWN_ANIMATION>
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
                    <div className="h-full">
                      <div className="flex h-full flex-col justify-between rounded-lg border p-6">
                        <div className="flex h-20 items-center gap-4">
                          <Avatar className="size-10 rounded-full object-cover ring-1 ring-input">
                            <AvatarImage
                              src={review.user.images.webp.image_url}
                              alt={review.user.username}
                            />
                          </Avatar>
                          <div className="text-sm">
                            <h2>{review.user.username}</h2>
                            <p>{new Date(review.date).toLocaleDateString()}</p>
                            <p>score : {review.score} </p>
                          </div>
                          <div className="size-10 text-primary pl-12">
                            {review.score > 5 ? <ThumbsUp /> : <ThumbsDown />}
                          </div>
                        </div>

                        <div className="mt-6 flex gap-4 leading-5">
                          <q>{reviewText} ...</q>
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
          </Carousel>
        </div>
      </FADE_DOWN_ANIMATION>
    </section>
  );
}
