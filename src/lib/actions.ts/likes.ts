"use server";

import { prisma } from "@/lib/prisma";

export async function addLike(userId: string, mal_id: number) {
  try {
    console.log("addLike called with:", { userId, mal_id });

    if (!userId || !mal_id) {
      throw new Error("Invalid userId or mal_id");
    }

    // Check if the anime is already liked
    const existingLike = await prisma.like.findUnique({
      where: { userId_mal_id: { userId, mal_id } },
    });

    if (existingLike) {
      return { liked: false, message: "Already liked" };
    } else {
      await prisma.like.create({
        data: { userId, mal_id },
      });

      return { liked: true, message: "Like added" };
    }
  } catch (error) {
    console.error("Error in addLike:", error);
    return { error: "Something went wrong" };
  }
}
