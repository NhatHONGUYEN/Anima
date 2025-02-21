"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { useAnimeRecommendations } from "@/hooks/useTopAnime";
import AnimeCard from "@/components/AnimeCard";
import Loader from "./ui/loader";

type TopAnimeSliderProps = {
  animeId: number;
};

export default function TopAnimeSlider({ animeId }: TopAnimeSliderProps) {
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (!carouselApi) {
      return;
    }
    const updateSelection = () => {
      setCanScrollPrev(carouselApi.canScrollPrev());
      setCanScrollNext(carouselApi.canScrollNext());
      setCurrentSlide(carouselApi.selectedScrollSnap());
    };
    updateSelection();
    carouselApi.on("select", updateSelection);
    return () => {
      carouselApi.off("select", updateSelection);
    };
  }, [carouselApi]);

  const {
    data: animeRecommendations,
    error,
    isLoading,
  } = useAnimeRecommendations(animeId);

  if (isLoading) return <Loader />;
  if (error) return <div>Error: {error.message}</div>;

  const recommendedAnime = animeRecommendations?.data.slice(0, 8);
  if (!Array.isArray(recommendedAnime) || recommendedAnime.length === 0) {
    return null;
  }

  return (
    <section className=" py-32">
      <div className="container ">
        <div className="mb-8 flex items-end justify-between md:mb-14 lg:mb-16">
          <div className="flex flex-col gap-4">
            <h1>Recommended Anime</h1>
          </div>
          <div className="hidden shrink-0 gap-2 md:flex">
            <Button
              size="icon"
              variant="ghost"
              onClick={() => {
                carouselApi?.scrollPrev();
              }}
              disabled={!canScrollPrev}
              className="disabled:pointer-events-auto"
            >
              <ArrowLeft className="size-5" />
            </Button>
            <Button
              size="icon"
              variant="ghost"
              onClick={() => {
                carouselApi?.scrollNext();
              }}
              disabled={!canScrollNext}
              className="disabled:pointer-events-auto"
            >
              <ArrowRight className="size-5" />
            </Button>
          </div>
        </div>
      </div>
      <div className="w-full">
        <Carousel
          setApi={setCarouselApi}
          opts={{
            breakpoints: {
              "(max-width: 768px)": {
                dragFree: true,
              },
            },
          }}
        >
          <CarouselContent className="ml-5 mr-5 2xl:ml-[calc(50vw-800px)] 2xl:mr-[calc(50vw-900px+20px)]">
            {recommendedAnime.map((recommendation, index) => (
              <CarouselItem
                key={`${recommendation.entry.mal_id}-${index}`}
                className="max-w-[320px] pl-5 lg:max-w-[360px]"
              >
                <AnimeCard anime={recommendation.entry} />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        {recommendedAnime.length > 0 && (
          <div className="mt-8 flex justify-center gap-2">
            {Array.from({ length: Math.min(6, recommendedAnime.length) }).map(
              (_, index) => {
                const step = Math.floor(recommendedAnime.length / 6);
                const targetIndex = step * index;
                return (
                  <button
                    key={`dot-${index}`}
                    className={`h-2 w-2 rounded-full transition-colors ${
                      currentSlide === targetIndex
                        ? "bg-primary"
                        : "bg-primary/20"
                    }`}
                    onClick={() => carouselApi?.scrollTo(targetIndex)}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                );
              }
            )}
          </div>
        )}
      </div>
    </section>
  );
}
