import FADE_DOWN_ANIMATION from "@/animations/FADE_DOWN_ANIMATION";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FaqItems } from "@/lib/data";
import { FaqProps } from "@/lib/types";
import Image from "next/image";

export default function Faq({ heading = "FAQ", items = FaqItems }: FaqProps) {
  return (
    <section className="pb-24">
      <FADE_DOWN_ANIMATION>
        <div className="container mx-auto">
          <h1
            className="mb-4  pl-3 flex items-center
         gap-4 text-3xl font-semibold md:mb-11 md:text-5xl"
          >
            {heading}{" "}
            <Image
              src="/levi.png"
              className="rounded-full w-40 sm:w-96"
              alt="levi ackerman"
              width={400}
              height={400}
            />
          </h1>
          {items.map((item, index) => (
            <Accordion key={index} type="single" collapsible>
              <AccordionItem value={`item-${index}`}>
                <AccordionTrigger className="hover:text-foreground/60 hover:no-underline">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent>{item.answer}</AccordionContent>
              </AccordionItem>
            </Accordion>
          ))}
        </div>
      </FADE_DOWN_ANIMATION>
    </section>
  );
}
