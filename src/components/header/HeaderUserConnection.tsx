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

const navLinks = [
  { href: "/all", title: "All", description: "View all items" },
  {
    href: "/upcoming",
    title: "Upcoming",
    description: "Check what’s coming next",
  },
  {
    href: "/bypopularity",
    title: "Popularity",
    description: "Most popular items",
  },
  {
    href: "/favorite",
    title: "Favorite",
    description: "Your favorite selections",
  },
];

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

          {/* Afficher la navigation menu uniquement sur les écrans lg et plus */}
          <div className="hidden lg:flex justify-center items-center gap-2">
            <NavigationMenu>
              <NavigationMenuItem>
                <NavigationMenuTrigger>
                  {session.user.image && (
                    <Image
                      src={session.user.image}
                      alt="user avatar"
                      width={32}
                      height={32}
                      className="rounded-full ring-2 ring-primary/10 hover:ring-primary/30 transition-all"
                    />
                  )}
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="flex w-72 flex-col gap-2 p-4">
                    {navLinks.map((link) => (
                      <NavigationMenuLink
                        key={link.href}
                        href={link.href}
                        className="rounded-md p-3 transition-colors hover:bg-muted/70"
                      >
                        <div>
                          <p className="mb-1 font-semibold">{link.title}</p>
                          <p>{link.description}</p>
                        </div>
                      </NavigationMenuLink>
                    ))}
                    <CustomButton label="Sign Out" onClick={handleSignOut} />
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenu>
          </div>

          {/* Afficher l'avatar uniquement sur les écrans plus petits (mobile) */}
          <div className="flex  mx-auto gap-4  lg:hidden">
            {session.user.image && (
              <>
                <Image
                  src={session.user.image}
                  alt="user avatar"
                  width={30}
                  height={30}
                  className="rounded-full w-full h-full  "
                />

                {session.user.email && (
                  <p className="pt-2">{session.user.email}</p>
                )}
              </>
            )}
          </div>
        </div>
      ) : (
        <div>
          <CustomButton label="Sign In" onClick={handleSignIn} />
        </div>
      )}
    </>
  );
}
