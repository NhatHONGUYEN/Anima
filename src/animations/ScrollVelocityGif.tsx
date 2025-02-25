"use client";

import { ScrollVelocity } from "@/components/ui/scroll-velocity";
import Image from "next/image";
import FADE_DOWN_ANIMATION from "./FADE_DOWN_ANIMATION";
import { ANIME_THUMBNAILS } from "@/lib/data";

const VELOCITIES = [3, -3];
const IMAGE_SIZES = "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw";
const CHECK_ANIME_TEXT = "Please Check Anime !!!";
const CHECK_ANIME_VELOCITY = 5; // Define a constant for the velocity value

export default function ScrollVelocityGif() {
  return (
    <div className="container pt-32">
      <FADE_DOWN_ANIMATION>
        <div className="flex flex-col space-y-5 py-10">
          {VELOCITIES.map((v, index) => (
            <ScrollVelocity key={index} velocity={v}>
              {ANIME_THUMBNAILS.map(({ title, thumbnail }) => (
                <div
                  key={title}
                  className="relative h-[6rem] w-[9rem] md:h-[8rem] md:w-[12rem] xl:h-[12rem] xl:w-[18rem] max-w-full"
                >
                  <Image
                    src={thumbnail}
                    alt={title}
                    fill
                    sizes={IMAGE_SIZES}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
              ))}
            </ScrollVelocity>
          ))}
          <ScrollVelocity velocity={CHECK_ANIME_VELOCITY}>
            {CHECK_ANIME_TEXT}
          </ScrollVelocity>
        </div>
      </FADE_DOWN_ANIMATION>
    </div>
  );
}
