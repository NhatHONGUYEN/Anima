"use client";

import React from "react";
import CustomButton from "@/components/customButton/CustomButton";
import { MoveLeft } from "lucide-react";
import FADE_DOWN_ANIMATION from "@/animations/FADE_DOWN_ANIMATION";

const OOPS_TEXT = "Oops";
const NO_LIKES_TITLE = "No Anime Likes yet";
const EXPLORE_PROMPT = "Maybe you should explore some animes first";
const BUTTON_LABEL = "Check our Anime List";
const BUTTON_HREF = "/all";

export default function EmptyState() {
  return (
    <FADE_DOWN_ANIMATION>
      <div className="mx-auto max-w-7xl px-6 py-32 text-center sm:py-40 lg:px-8">
        <p className="text-base/8 font-semibold text-white">{OOPS_TEXT}</p>
        <h1 className="mt-4 text-5xl font-semibold tracking-tight text-balance text-primary-foreground sm:text-7xl">
          {NO_LIKES_TITLE}
        </h1>
        <p className="mt-6">{EXPLORE_PROMPT}</p>
        <div className="mt-10 flex justify-center">
          <CustomButton
            icon={MoveLeft}
            label={BUTTON_LABEL}
            href={BUTTON_HREF}
          />
        </div>
      </div>
    </FADE_DOWN_ANIMATION>
  );
}
