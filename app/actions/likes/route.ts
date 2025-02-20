"use server";

import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const userId = searchParams.get("userId");
    const mal_id = parseInt(searchParams.get("mal_id") || "0", 10);

    if (!userId || !mal_id) {
      return NextResponse.json(
        { message: "Invalid userId or mal_id" },
        { status: 400 }
      );
    }

    const existingLike = await prisma.like.findUnique({
      where: { userId_mal_id: { userId, mal_id } },
    });

    return NextResponse.json({ isLiked: !!existingLike });
  } catch (error) {
    console.error("Error fetching like status:", error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}

export async function POST(req: Request) {
  try {
    const { userId, mal_id } = await req.json();
    console.log("toggleLike called with:", { userId, mal_id });

    if (!userId || !mal_id) {
      return NextResponse.json(
        { message: "Invalid userId or mal_id" },
        { status: 400 }
      );
    }

    const existingLike = await prisma.like.findUnique({
      where: { userId_mal_id: { userId, mal_id } },
    });

    if (existingLike) {
      await prisma.like.delete({
        where: { userId_mal_id: { userId, mal_id } },
      });

      return NextResponse.json({ liked: false });
    } else {
      await prisma.like.create({
        data: { userId, mal_id },
      });

      return NextResponse.json({ liked: true });
    }
  } catch (error) {
    console.error("Error in toggleLike:", error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
