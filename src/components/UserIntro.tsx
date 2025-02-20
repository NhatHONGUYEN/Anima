import { ArrowRight, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function UserIntro() {
  const router = useRouter();

  return (
    <section className="overflow-hidden py-32">
      <div className="container flex flex-col items-center text-center">
        <p>Hello!</p>
        <h1 className="my-3 text-pretty text-2xl font-bold sm:text-4xl md:my-6 lg:text-5xl">
          Explore and Check Your Likes
        </h1>
        <p className="mb-6 max-w-xl md:mb-12">
          Discover and explore your favorite animes! Dive into the world of
          animated series and share your favorites.
        </p>
        <div className="flex w-full flex-col justify-center gap-2 sm:flex-row">
          <Button
            className="cursor-pointer transition-all bg-primary text-primary-foreground px-6 py-2 rounded-lg
border-secondary-foreground
border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
active:border-b-[2px] active:brightness-90 active:translate-y-[2px]"
            onClick={() => router.push("/all")}
          >
            <ArrowRight className="mr-2 size-4" />
            Explore Now
          </Button>
          <Button
            onClick={() => router.push("/likes")}
            variant="outline"
            className="w-full sm:w-auto"
          >
            Check Your <Heart className="mr-2 size-4" />
          </Button>
        </div>
      </div>
      <div className="mt-16 flex flex-col items-center justify-center lg:mt-32">
        <div className="b relative mx-auto aspect-square w-[95%] max-w-[31.25rem] sm:w-full">
          <div className="z-5 absolute inset-0 m-auto flex aspect-[29/36] w-4/5 max-w-[16rem] translate-x-[-75%] translate-y-[10%] rotate-[-15deg] scale-[0.85] justify-center rounded-lg border border-border bg-accent opacity-60 md:w-[21.25rem] md:max-w-[21.25rem]">
            <Image
              src="/detective_conan.gif"
              alt="hero"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" // Add sizes prop
              style={{ objectFit: "cover" }} // Use style prop instead of objectFit
              className="rounded-lg"
              priority
            />
          </div>
          <div className="absolute inset-0 z-10 m-auto flex aspect-[29/36] w-4/5 max-w-[16rem] justify-center rounded-lg border border-border bg-accent md:w-[21.25rem] md:max-w-[21.25rem]">
            <Image
              src="/detective_conan.gif"
              alt="hero"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" // Add sizes prop
              style={{ objectFit: "cover" }} // Use style prop instead of objectFit
              className="rounded-lg"
              priority
            />
          </div>
          <div className="z-5 absolute inset-0 m-auto flex aspect-[29/36] w-4/5 max-w-[16rem] translate-x-[75%] translate-y-[10%] rotate-[15deg] scale-[0.85] justify-center rounded-lg border border-border bg-accent opacity-60 md:w-[21.25rem] md:max-w-[21.25rem]">
            <Image
              src="/detective_conan.gif"
              alt="hero"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" // Add sizes prop
              style={{ objectFit: "cover" }} // Use style prop instead of objectFit
              className="rounded-lg"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
