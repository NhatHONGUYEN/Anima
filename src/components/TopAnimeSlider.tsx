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
import { useTopAnime } from "@/hooks/useTopAnime";
import Image from "next/image";
import Link from "next/link";

type Anime = {
  mal_id: number;
  title: string;
  synopsis: string;
  score: number;
  genres: { name: string }[];
  images: {
    jpg: { image_url: string };
    webp: { image_url: string };
  };
};

export default function TopAnimeSlider() {
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

  const { data: topAnime, error, isLoading } = useTopAnime(undefined, 1);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <section className="py-32">
      <div className="container max-w-6xl mx-auto ">
        <div className="mb-8 flex items-end justify-between md:mb-14 lg:mb-16">
          <div className="flex  flex-col gap-4">
            <p className="max-w-lg text-muted-foreground">Trending Movies</p>
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
          <CarouselContent className="ml-5 mr-5 2xl:ml-[calc(50vw-700px+20px)] 2xl:mr-[calc(50vw-700px+20px)]">
            {topAnime.data.map((anime: Anime) => (
              <CarouselItem
                key={anime.mal_id}
                className="max-w-[320px] pl-[20px] lg:max-w-[360px]"
              >
                <div className="group rounded-xl">
                  <div className="group relative h-full min-h-[27rem] max-w-full overflow-hidden rounded-xl md:aspect-[5/4] lg:aspect-[16/9]">
                    <Image
                      src={
                        anime.images.webp
                          ? anime.images.webp.image_url
                          : anime.images.jpg.image_url
                      }
                      alt={anime.title}
                      width={400}
                      height={450}
                      quality={100}
                      className="absolute h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 h-full bg-[linear-gradient(hsl(var(--primary)/0),hsl(var(--primary)/0.4),hsl(var(--primary)/0.8)_100%)] mix-blend-multiply" />
                    <div className="absolute inset-x-0 bottom-0 flex flex-col items-start p-6 text-primary-foreground md:p-8">
                      <h1 className="mb-2 pt-4  font-semibold md:mb-3 md:pt-4 lg:pt-4">
                        {anime.title}
                      </h1>
                      <h3 className="mb-8 line-clamp-2 md:mb-12 lg:mb-9">
                        {anime.synopsis}
                      </h3>
                      <Link
                        href={`/movies/${anime.mal_id}`}
                        className="flex items-center "
                      >
                        Read more{" "}
                        <ArrowRight className="ml-2 size-5 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        <div className="mt-8 flex justify-center gap-2">
          {Array.from({ length: 8 }).map((_, index) => (
            <button
              key={index}
              className={`h-2 w-2 rounded-full transition-colors ${
                currentSlide === index ? "bg-primary" : "bg-primary/20"
              }`}
              onClick={() => carouselApi?.scrollTo(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
