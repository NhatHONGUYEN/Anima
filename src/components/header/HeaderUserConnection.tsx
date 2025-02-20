"use client";

import { useSession } from "next-auth/react";
import { signOut } from "next-auth/react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import SignIn from "./SignIn";
import { useSessionStore } from "@/lib/store";
import { useEffect } from "react"; // Import useEffect
import FullyHeart from "../FullyHeart";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuTrigger,
} from "../ui/navigation-menu";

export default function HeaderUserConnection() {
  const { data: session } = useSession();
  const setUserId = useSessionStore((state) => state.setUserId);

  // Utilise useEffect pour mettre à jour l'état
  useEffect(() => {
    if (session?.user?.id) {
      setUserId(session.user.id);
    }
  }, [session, setUserId]);

  return (
    <>
      {session?.user ? (
        <div className="flex items-center gap-4">
          <FullyHeart />
          <div className="flex justify-center items-center gap-2">
            <NavigationMenu>
              <NavigationMenuItem>
                <NavigationMenuTrigger>
                  {session?.user?.image ? (
                    <Image
                      src={session.user.image}
                      alt="user avatar"
                      width={32}
                      height={32}
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

                    <Button variant={"ghost"} onClick={() => signOut()}>
                      <p>Déconnexion</p>
                    </Button>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenu>
          </div>
        </div>
      ) : (
        <SignIn buttonText="Sign In" />
      )}
    </>
  );
}
