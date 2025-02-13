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

export default function Header() {
  return (
    <section className="py-4 ">
      <div className="container mx-auto">
        <nav className="flex items-center justify-between">
          <Link href={"/"} className="flex items-center gap-4">
            <Clapperboard className="text-primary" strokeWidth={1} />
            <span className=" font-semibold">Anima</span>
          </Link>
          <div className="flex-grow text-center">
            <span className=" font-semibold">All Movie Series</span>
          </div>
          <div className="hidden items-center gap-4 lg:flex">
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
                      <span className=" font-semibold">Anima</span>
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
