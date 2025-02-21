"use client";

import { signIn, useSession } from "next-auth/react";
import { signOut } from "next-auth/react";
import Image from "next/image";
import { useLikeStore } from "@/lib/store";
import FullyHeart from "@/components/FullyHeart";
import { Badge } from "@/components/ui/badge";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import CustomButton from "@/components/CustomButton";
import SkeletonButton from "../SkeletonButton";

export default function HeaderUserConnection() {
  const { data: session, status } = useSession();
  const likedAnimes = useLikeStore((state) => state.likedAnimes);

  const handleSignIn = () => {
    signIn("github", { redirectTo: "/" });
  };

  const handleSignOut = () => {
    signOut({ redirectTo: "/" });
  };

  return (
    <>
      {status === "loading" && !session ? (
        <SkeletonButton />
      ) : session?.user ? (
        <div className="flex items-center gap-4">
          <div className="relative">
            <FullyHeart />
            <Badge className="absolute hover:bg-primary-foreground -top-1 left-full min-w-5 rounded-full -translate-x-4 border-2 border-primary-foreground px-2 text-xs font-semibold bg-primary-foreground text-primary">
              {likedAnimes.length}
            </Badge>
          </div>
          <div className="flex justify-center items-center gap-2">
            <NavigationMenu>
              <NavigationMenuItem>
                <NavigationMenuTrigger>
                  {session.user.image ? (
                    <Image
                      src={session.user.image}
                      alt="user avatar"
                      width={20}
                      height={20}
                      className="rounded-full ring-2 ring-primary/10 hover:ring-primary/30 transition-all"
                    />
                  ) : null}
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="flex w-72 flex-col gap-2 p-4">
                    <NavigationMenuLink
                      href="/all"
                      className="rounded-md p-3 transition-colors hover:bg-muted/70"
                    >
                      <div>
                        <p className="mb-1 font-semibold">All</p>
                        <p>View all items</p>
                      </div>
                    </NavigationMenuLink>

                    <NavigationMenuLink
                      href="/upcoming"
                      className="rounded-md p-3 transition-colors hover:bg-muted/70"
                    >
                      <div>
                        <p className="mb-1 font-semibold">Upcoming</p>
                        <p>Check what&apos;s coming next</p>
                      </div>
                    </NavigationMenuLink>

                    <NavigationMenuLink
                      href="/bypopularity"
                      className="rounded-md p-3 transition-colors hover:bg-muted/70"
                    >
                      <div>
                        <p className="mb-1 font-semibold">Popularity</p>
                        <p>Most popular items</p>
                      </div>
                    </NavigationMenuLink>

                    <NavigationMenuLink
                      href="/favorite"
                      className="rounded-md p-3 transition-colors hover:bg-muted/70"
                    >
                      <div>
                        <p className="mb-1 font-semibold">Favorite</p>
                        <p>Your favorite selections</p>
                      </div>
                    </NavigationMenuLink>

                    <CustomButton label="Sign Out" onClick={handleSignOut} />
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenu>
          </div>
        </div>
      ) : (
        <CustomButton label="Sign In" onClick={handleSignIn} />
      )}
    </>
  );
}
