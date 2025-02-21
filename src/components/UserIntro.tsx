import Image from "next/image";
import CustomButton from "./CustomButton";
import { ImageProps } from "@/lib/types";

export default function UserIntro() {
  const imageProps: ImageProps = {
    src: "/detective_conan.gif",
    alt: "Détective Conan",
    fill: true,
    sizes: "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
    style: { objectFit: "cover" },
    className: "rounded-lg",
    priority: true,
  };
  const renderImage = (transformProps: string) => (
    <div
      className={`absolute inset-0 m-auto flex aspect-[29/36] w-4/5 max-w-[16rem] justify-center rounded-lg border border-border bg-accent md:w-[21.25rem] md:max-w-[21.25rem] ${transformProps}`}
    >
      <Image {...imageProps} alt={imageProps.alt} />
    </div>
  );

  return (
    <section className="overflow-hidden py-32">
      <div className="container mx-auto flex flex-col items-center text-center">
        <p>Hello!</p>
        <h1 className="my-3 text-pretty text-2xl font-bold sm:text-4xl md:my-6 lg:text-5xl">
          Explore and Check Your Likes
        </h1>
        <p className="mb-6 max-w-xl md:mb-12">
          Discover and explore your favorite animes! Dive into the world of
          animated series and share your favorites.
        </p>
        <div className="flex w-full flex-col justify-center gap-2 sm:flex-row">
          <CustomButton label="Explore Now" href="/all" />
          <CustomButton
            label="Check Your Likes"
            variant="outline"
            href="/likes"
          />
        </div>
      </div>
      <div className="mt-16 flex flex-col items-center justify-center lg:mt-32">
        <div className="relative mx-auto aspect-square w-[95%] max-w-[31.25rem] sm:w-full">
          {renderImage(
            "translate-x-[-75%] translate-y-[10%] rotate-[-15deg] scale-[0.85] opacity-60"
          )}
          {renderImage("z-10")}
          {renderImage(
            "translate-x-[75%] translate-y-[10%] rotate-[15deg] scale-[0.85] opacity-60"
          )}
        </div>
      </div>
    </section>
  );
}
