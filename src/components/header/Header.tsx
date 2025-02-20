"use client";

import { Clapperboard, MenuIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import HeaderUserConnection from "./HeaderUserConnection";
import Link from "next/link";
import { AnimeSearch } from "../AnimeSearch";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuTrigger,
} from "../ui/navigation-menu";

export default function Header() {
  return (
    <section className="py-4">
      <div className="container mx-auto">
        <nav className="flex items-center justify-between relative z-20">
          <Link href={"/"} className="flex items-center gap-4">
            <Clapperboard className="text-primary" strokeWidth={1} />
            <h1>Anima</h1>
          </Link>
          <NavigationMenu>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Categories</NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="grid w-[600px] grid-cols-2 p-3">
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
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenu>
          <div className="hidden items-center gap-4 lg:flex">
            <AnimeSearch />
            <HeaderUserConnection />
          </div>
          <Sheet>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="outline" size="icon">
                <MenuIcon className="h-4 w-4" />
              </Button>
            </SheetTrigger>
            <SheetContent side="top" className="max-h-screen overflow-scroll">
              <SheetHeader>
                <SheetTitle>
                  <div className="flex items-center gap-4">
                    <Link href={"/"} className="flex items-center gap-4">
                      <Clapperboard className="text-primary" strokeWidth={1} />
                      <span className="font-semibold">Anima</span>
                    </Link>
                  </div>
                </SheetTitle>
              </SheetHeader>
              <div className="mt-6 flex flex-col gap-4">
                <HeaderUserConnection />
              </div>
            </SheetContent>
          </Sheet>
        </nav>
      </div>
    </section>
  );
}
