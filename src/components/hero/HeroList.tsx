"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";

type HeroListProps<T> = {
  items: T[];
  title: string;
  getImageUrl: (item: T) => string;
  getName: (item: T) => string;
  noItemsMessage: string;
  isCharacterList?: boolean;
};

export default function HeroList<T>({
  items,
  title,
  getImageUrl,
  getName,
  noItemsMessage,
  isCharacterList = false, // Default to false if not provided
}: HeroListProps<T>) {
  const [visibleCount, setVisibleCount] = useState(4);

  const displayedItems = items.slice(0, visibleCount);

  const handleShowMore = () => {
    setVisibleCount((prevCount) => prevCount + 4);
  };

  const handleShowLess = () => {
    setVisibleCount((prevCount) => Math.max(prevCount - 4, 4));
  };

  return (
    <div className="relative py-16 lg:col-span-3">
      <div
        className={`absolute inset-px rounded-lg ring-1 ring-border bg-card max-lg:rounded-t-[2rem] ${
          isCharacterList ? "lg:rounded-bl-[2rem]" : "lg:rounded-br-[2rem]"
        }`}
      />
      <div
        className={`relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)] ${
          isCharacterList
            ? "lg:rounded-bl-[calc(2rem+1px)]"
            : "lg:rounded-br-[calc(2rem+1px)]"
        } min-h-[300px] lg:min-h-[400px]`}
      >
        <h1 className="mb-8 text-center">{title}</h1>
        <div className="container grid gap-8 md:grid-cols-2">
          {displayedItems.length > 0 ? (
            displayedItems.map((item, index) => (
              <div key={index}>
                <Dialog>
                  <DialogTrigger asChild>
                    <button>
                      <Image
                        alt={`Image of ${getName(item)}`}
                        src={getImageUrl(item) || "/path/to/default/image.jpg"}
                        className="rounded-lg w-80 h-80 mx-auto md:w-full md:h-40 object-cover object-center"
                        width={400}
                        height={400}
                      />
                      <p className="py-8 text-center">{getName(item)}</p>
                    </button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[425px]">
                    <DialogTitle>{getName(item)}</DialogTitle>

                    <Image
                      alt={`Image of ${getName(item)}`}
                      src={getImageUrl(item) || "/path/to/default/image.jpg"}
                      className="rounded-lg w-80 h-80 mx-auto md:w-full md:h-full object-cover object-center"
                      width={500}
                      height={500}
                      priority
                      quality={100}
                    />
                  </DialogContent>
                </Dialog>
              </div>
            ))
          ) : (
            <p className="text-center">{noItemsMessage}</p>
          )}
        </div>
        <div className="mt-4 flex justify-center space-x-4">
          {visibleCount < items.length && (
            <Button onClick={handleShowMore}>Show More</Button>
          )}
          {visibleCount > 4 && (
            <Button variant="outline" onClick={handleShowLess}>
              Show Less
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
