"use client";

import { useLikeStore } from "@/lib/store";
import LikedAnimesList from "./LikedAnimesList";
import EmptyState from "./EmptyState";

export default function LikesPage() {
  const { likedAnimes } = useLikeStore();

  return (
    <div>{likedAnimes.length > 0 ? <LikedAnimesList /> : <EmptyState />}</div>
  );
}
