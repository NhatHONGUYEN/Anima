"use client";

import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Fuse from "fuse.js";
import { useAnimeList } from "@/hooks/useTopAnime";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { PopoverSkeleton } from "./skeleton/PopoverSkeleton";

export function AnimeSearch() {
  const [open, setOpen] = React.useState(false);
  const [searchQuery, setSearchQuery] = React.useState("");
  const router = useRouter();

  // Use the useAnimeList hook to fetch the anime list
  const { data: animeList, isLoading, isError } = useAnimeList();

  // Configure Fuse.js
  const fuse = React.useMemo(() => {
    const options = {
      keys: ["title", "title_english"], // Fields to search in
      includeScore: true, // Include score in the results
      threshold: 0.3, // Match threshold (lower is stricter)
    };
    return new Fuse(animeList || [], options);
  }, [animeList]);

  // Filter results using Fuse.js
  const filteredResults = React.useMemo(() => {
    if (!searchQuery) return [];
    const results = fuse.search(searchQuery);
    return results.map((result) => result.item);
  }, [searchQuery, fuse]);

  if (isLoading) {
    return <PopoverSkeleton />;
  }

  if (isError) {
    return <p>Error fetching data.</p>;
  }

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="lg:w-96 justify-between"
        >
          {searchQuery || "Search anime..."}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-96 p-0">
        <Command>
          <CommandInput
            placeholder="Type your search..."
            value={searchQuery}
            onValueChange={setSearchQuery}
            className="h-9"
          />
          <CommandList>
            <CommandEmpty>No Anime found</CommandEmpty>
            <CommandGroup>
              {filteredResults.map((anime) => (
                <CommandItem
                  key={anime.mal_id}
                  value={anime.title_english || anime.title}
                  onSelect={() => {
                    router.push(`/movies/${anime.mal_id}`);
                    setOpen(false);
                    setSearchQuery(""); // Clear the search query
                  }}
                >
                  <div className="flex items-center gap-2">
                    <Image
                      src={anime.images.jpg.large_image_url}
                      alt={anime.title_english || anime.title}
                      className="w-8 h-12"
                      width={32}
                      height={48}
                    />
                    <span>{anime.title_english || anime.title}</span>
                  </div>
                  <Check
                    className={cn(
                      "ml-auto",
                      searchQuery === anime.title_english ||
                        searchQuery === anime.title
                        ? "opacity-100"
                        : "opacity-0"
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
