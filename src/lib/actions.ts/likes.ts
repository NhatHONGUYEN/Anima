"use server";

import { prisma } from "@/lib/prisma";

export async function toggleLike(userId: string, mal_id: number) {
  try {
    console.log("toggleLike called with:", { userId, mal_id });

    if (!userId || !mal_id) {
      throw new Error("Invalid userId or mal_id");
    }

    // Vérifier si le like existe déjà
    const existingLike = await prisma.like.findUnique({
      where: { userId_mal_id: { userId, mal_id } },
    });

    if (existingLike) {
      await prisma.like.delete({
        where: { userId_mal_id: { userId, mal_id } },
      });

      return { liked: false };
    } else {
      await prisma.like.create({
        data: { userId, mal_id },
      });

      return { liked: true };
    }
  } catch (error) {
    console.error("Error in toggleLike:", error);
    return { error: "Something went wrong" };
  }
}
