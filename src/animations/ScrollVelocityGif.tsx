"use client";

import { ScrollVelocity } from "@/components/ui/scroll-velocity";
import Image from "next/image";
import FADE_DOWN_ANIMATION from "./FADE_DOWN_ANIMATION";

const images = [
  {
    title: "Dan1",
    thumbnail: "/dandan (1).gif",
  },
  {
    title: "Dan2",
    thumbnail: "/dandan (2).gif",
  },
  {
    title: "Dan3",
    thumbnail: "/dandan (3).gif",
  },
  {
    title: "Dan4",
    thumbnail: "/dandan (4).gif",
  },

  {
    title: "Dan5",
    thumbnail: "/dandan (1).gif",
  },
  {
    title: "Dan6",
    thumbnail: "/dandan (2).gif",
  },
  {
    title: "Dan7",
    thumbnail: "/dandan (3).gif",
  },
  {
    title: "Dan8",
    thumbnail: "/dandan (4).gif",
  },
];

const velocity = [3, -3];

export default function ScrollVelocityGif() {
  return (
    <div className=" container pt-32 ">
      <FADE_DOWN_ANIMATION>
        <div className="flex flex-col space-y-5 py-10">
          {velocity.map((v, index) => (
            <ScrollVelocity key={index} velocity={v}>
              {images.map(({ title, thumbnail }) => (
                <div
                  key={title}
                  className="relative h-[6rem] w-[9rem] md:h-[8rem] md:w-[12rem] xl:h-[12rem] xl:w-[18rem] max-w-full"
                >
                  <Image
                    src={thumbnail}
                    alt={title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="h-full w-full object-cover object-center"
                  />
                </div>
              ))}
            </ScrollVelocity>
          ))}
          <ScrollVelocity velocity={5}>Please Check Anime !!!</ScrollVelocity>
        </div>
      </FADE_DOWN_ANIMATION>
    </div>
  );
}
