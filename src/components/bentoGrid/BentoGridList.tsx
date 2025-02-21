"use client";

import React, { useState } from "react";
import { BentoGridImageDialog } from "@/animations/BentoGridImageDialog";
import CustomButton from "../CustomButton";

type BentoGridListProps<T> = {
  items: T[];
  title: string;
  getImageUrl: (item: T) => string;
  getName: (item: T) => string;
  noItemsMessage: string;
  isCharacterList?: boolean;
};

export default function BentoGridList<T>({
  items,
  title,
  getImageUrl,
  getName,
  noItemsMessage,
  isCharacterList = false, // Default to false if not provided
}: BentoGridListProps<T>) {
  const [visibleCount, setVisibleCount] = useState(4);

  const displayedItems = items.slice(0, visibleCount);

  const handleShowMore = () => {
    setVisibleCount((prevCount) => prevCount + 4);
  };

  const handleShowLess = () => {
    setVisibleCount((prevCount) => Math.max(prevCount - 4, 4));
  };

  return (
    <div className="relative p-10 lg:col-span-3">
      <div
        className={`absolute inset-px rounded-lg ring-1 ring-border   ${
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
        <div className=" grid gap-8 grid-cols-2">
          {displayedItems.length > 0 ? (
            displayedItems.map((item, index) => (
              <div key={index}>
                <BentoGridImageDialog
                  imageSrc={getImageUrl(item) || "/path/to/default/image.jpg"}
                  imageAlt={`Image of ${getName(item)}`}
                  animationStyle="from-center"
                  name={getName(item)}
                />
              </div>
            ))
          ) : (
            <p className="text-center">{noItemsMessage}</p>
          )}
        </div>
        <div className="mt-8 flex justify-center space-x-4">
          {visibleCount < items.length && (
            <CustomButton label="Show More" onClick={handleShowMore} />
          )}

          {visibleCount > 4 && (
            <CustomButton
              label="Show Less"
              variant="outline"
              onClick={handleShowLess}
            />
          )}
        </div>
      </div>
    </div>
  );
}
