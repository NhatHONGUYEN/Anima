"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Button } from "../ui/button";

type HeroListProps<T> = {
  items: T[];
  title: string;
  getImageUrl: (item: T) => string;
  getName: (item: T) => string;
  noItemsMessage: string;
};

export default function HeroList<T>({
  items,
  title,
  getImageUrl,
  getName,
  noItemsMessage,
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
      <div className="absolute inset-px rounded-lg ring-1 ring-border bg-card max-lg:rounded-t-[2rem] lg:rounded-br-[2rem]" />
      <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)] lg:rounded-br-[calc(2rem+1px)] min-h-[300px] lg:min-h-[400px]">
        <h1 className="mb-8 text-center font-bold">{title}</h1>
        <div className="container grid gap-8 md:grid-cols-2">
          {displayedItems.length > 0 ? (
            displayedItems.map((item, index) => (
              <div key={index}>
                <Image
                  alt={`Image of ${getName(item)}`}
                  src={getImageUrl(item) || "/path/to/default/image.jpg"}
                  className="rounded-lg w-full h-40 object-cover object-center"
                  width={400}
                  height={400}
                />
                <p className="py-8 text-center">{getName(item)}</p>
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
