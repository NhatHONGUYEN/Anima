"use client";

import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { AccordionSectionProps } from "@/lib/types";

export default function AccordionSection({
  title,
  items,
}: AccordionSectionProps) {
  return (
    <Accordion type="single" collapsible>
      <AccordionItem value={title.toLowerCase()}>
        <AccordionTrigger>
          <div className=" sm:py-1 lg:py-2 ">
            <h1>{title}:</h1>
          </div>
        </AccordionTrigger>
        <AccordionContent className="sm:mb-1 lg:mb-2">
          <ul>
            {items.length > 0 ? (
              items.map((item) => <li key={item.mal_id}>{item.name}</li>)
            ) : (
              <li>{title} non disponibles</li>
            )}
          </ul>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
