"use client";

import { Clapperboard, Menu } from "lucide-react";
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
import CustomButton from "../CustomButton";
import { signOut } from "next-auth/react";

const navigationLinks = [
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

const handleSignOut = () => {
  signOut({ redirectTo: "/" });
};

export default function Header() {
  return (
    <section className="py-4">
      <div className="container mx-auto">
        <nav className="flex items-center justify-between relative z-20">
          <Link href={"/"} className="flex items-center gap-4">
            <Clapperboard className="text-primary" strokeWidth={1} />
            <h1>Anima</h1>
          </Link>

          {/* Categories - Visible only on lg screens */}
          <div className="hidden lg:block">
            <NavigationMenu>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Categories</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid w-[600px] grid-cols-2 p-3">
                    {navigationLinks.map(({ href, title, description }) => (
                      <NavigationMenuLink
                        key={href}
                        href={href}
                        className="rounded-md p-3 transition-colors hover:bg-muted/70"
                      >
                        <div>
                          <p className="mb-1 font-semibold">{title}</p>
                          <p>{description}</p>
                        </div>
                      </NavigationMenuLink>
                    ))}
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenu>
          </div>

          <AnimeSearch />

          {/* User connection and burger menu */}
          <div className="hidden items-center gap-4 lg:flex">
            <HeaderUserConnection />
          </div>

          {/* BURGER MENU */}
          <div className="lg:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon">
                  <Menu className="size-4" />
                </Button>
              </SheetTrigger>
              <SheetContent className="overflow-y-auto">
                <SheetHeader>
                  <SheetTitle>
                    <HeaderUserConnection />
                  </SheetTitle>
                </SheetHeader>
                <div className="grid pt-8 gap-4 grid-cols-1 ">
                  {navigationLinks.map(({ href, title, description }) => (
                    <Link
                      key={href}
                      href={href}
                      className="rounded-md p-3 transition-colors hover:bg-muted/70"
                    >
                      <div>
                        <p className="mb-1 font-semibold">{title}</p>
                        <p>{description}</p>
                      </div>
                    </Link>
                  ))}
                  <CustomButton label="Sign Out" onClick={handleSignOut} />
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </nav>
      </div>
    </section>
  );
}
