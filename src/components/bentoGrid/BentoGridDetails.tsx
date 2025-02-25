"use client";

import { BentoGridDetailsProps } from "@/lib/types/bentoGrid";
import AccordionSection from "../AccordionSection";

export default function BentoGridDetails({
  producers,
  licensors,
  studios,
}: BentoGridDetailsProps) {
  return (
    <div className="relative lg:col-span-2">
      <div className="absolute inset-px rounded-lg" />
      <div className="relative ring-1 ring-border flex h-full flex-col overflow-hidden rounded-xl">
        <div className="p-10 pt-4">
          <AccordionSection title="Producers" items={producers} />
          <AccordionSection title="Licensors" items={licensors} />
          <AccordionSection title="Studios" items={studios} />
        </div>
      </div>
      <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm" />
    </div>
  );
}
