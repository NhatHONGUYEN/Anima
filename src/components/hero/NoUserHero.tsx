import { Heart } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";
import { avatars } from "@/lib/data";
import CustomButton from "../CustomButton";
import { signIn } from "next-auth/react";
import FADE_DOWN_ANIMATION from "@/animations/FADE_DOWN_ANIMATION";

export default function NoUserHero() {
  const handleSignIn = () => {
    signIn("github", { redirectTo: "/" });
  };

  return (
    <section className="py-12  md:py-32">
      <FADE_DOWN_ANIMATION>
        <div className="container mx-auto ">
          <div className="flex flex-col gap-4 md:flex-row">
            <div className="flex text-center md:text-left flex-col gap-6">
              <h1 className="text-4xl lg:w-96  font-medium leading-tight lg:text-6xl">
                Explore the World of Anime
              </h1>
              <h2 className="text-2xl font-medium leading-tight lg:text-4xl"></h2>
              <p className="mx-auto md:mx-0 max-w-[80%]">
                Dive into exclusive content, behind-the-scenes insights, and
                more. Enhance your anime experience and join our community.
              </p>
              <div className="relative mx-auto md:mx-0 z-10 flex flex-wrap items-center gap-6">
                <CustomButton label="Become a member" onClick={handleSignIn} />
                <Image
                  className="w-16 h-16 bg-secondary rounded-full border-4 border-primary-foreground"
                  src="/seraph.gif"
                  alt="Seraph animation"
                  width={40}
                  height={40}
                />
              </div>
            </div>
            <div>
              <div className="hidden sm:block relative mx-auto mt-28 h-[21.25rem] w-[21.25rem] rounded-full bg-secondary md:mx-0 md:mt-0 lg:h-[25rem] lg:w-[25rem]">
                <div className="absolute bottom-0 left-1/2 w-[21.25rem] -translate-x-1/2 overflow-hidden rounded-b-full lg:w-[25rem]">
                  <Image
                    src="/sasuke.webp"
                    alt="Sasuke character"
                    className=" w-full translate-y-20 scale-90 object-cover object-center "
                    width={425}
                    height={425}
                    priority
                  />
                </div>
                <div className="absolute -right-5 bottom-10 flex w-[17.5rem] items-center justify-center gap-1 rounded-full bg-primary-foreground px-4 py-3 shadow-md">
                  <div className="flex -space-x-[0.875rem]">
                    {avatars.map(({ src, fallback, alt }, i) => (
                      <Avatar
                        key={i}
                        className="flex h-12 w-12 flex-shrink-0 rounded-full border-4 border-primary-foreground object-cover"
                      >
                        <AvatarImage src={src} alt={alt} />
                        <AvatarFallback>{fallback}</AvatarFallback>
                      </Avatar>
                    ))}
                  </div>
                  <div className="flex-1 text-sm text-gray-800">
                    7000+ people already joined
                  </div>
                </div>
                <div className="absolute right-0 top-0 flex h-[6.25rem] w-[6.25rem] rotate-12 rounded-3xl border-8 border-primary-foreground bg-primary lg:h-[6.875rem] lg:w-[6.875rem]">
                  <Heart className="m-auto h-[2.5rem] w-[2.5rem] stroke-primary-foreground lg:h-[3.125rem] lg:w-[3.125rem]" />
                </div>
                <div className="absolute -left-10 top-1/3 flex h-[6.25rem] w-[6.25rem] -rotate-12 rounded-3xl border-8 border-primary-foreground bg-primary lg:h-[6.875rem] lg:w-[6.875rem]">
                  <Heart className="m-auto h-[3.5rem] w-[3.5rem]  fill-primary-foreground lg:h-[4.5rem] lg:w-[4.5rem]" />
                </div>
              </div>
            </div>
          </div>
          <div className="mt-20 rounded-3xl  border p-6">
            <div className=" flex w-full flex-col md:flex-row">
              <div className="flex flex-1 flex-col gap-3 border-b-[1px] p-6 md:border-b-0 md:border-r-[1px]">
                <div className="text-2xl font-medium text-primary lg:text-4xl">
                  500+
                </div>
                <div className="text-muted-foreground lg:text-lg">
                  Anime Series
                </div>
              </div>
              <div className="flex flex-1 flex-col gap-3 border-b-[1px] p-6 md:border-b-0 md:border-r-[1px]">
                <div className="text-2xl font-medium text-primary lg:text-4xl">
                  1000+
                </div>
                <div className="text-muted-foreground lg:text-lg">
                  Hours of Content
                </div>
              </div>
              <div className="flex flex-1 flex-col gap-3 p-6">
                <div className="text-2xl font-medium text-primary lg:text-4xl">
                  99%
                </div>
                <div className="text-muted-foreground lg:text-lg">
                  User Satisfaction Rating
                </div>
              </div>
            </div>
          </div>
        </div>
      </FADE_DOWN_ANIMATION>
    </section>
  );
}
