import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";

interface FaqItem {
  question: string;
  answer: string;
}

interface Faq1Props {
  heading?: string;
  items?: FaqItem[];
}

export default function Faq({
  heading = "FAQ",
  items = [
    {
      question: "Why use a FAQ?",
      answer: "Because I just want to have a little chat with you.",
    },
    {
      question: "Why did I start this project?",
      answer:
        "I really love watching anime, and I'm particularly fascinated by animation, like the latest season of One Piece or Attack on Titan. They inspired me to start this project.",
    },
    {
      question: "Which stack do I use?",
      answer:
        "Next.js, Tailwind CSS, TypeScript, Vercel, TanStack Query, Prisma, PostgreSQL, Auth.js, Zustand, and Motion.",
    },
    {
      question: "Do you appreciate the project?",
      answer:
        "At first, I never expected this project to go so far, which is why my Git repository isn't very well organized. But I really want to improve it. It has been an amazing experience to learn this stack. So if you like this project, just share it with others and help me land a job!",
    },
  ],
}: Faq1Props) {
  return (
    <section className="pb-24">
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
    </section>
  );
}
