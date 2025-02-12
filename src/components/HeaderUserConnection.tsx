"use client";

import { useSession } from "next-auth/react";
import { signOut } from "next-auth/react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import SignIn from "./SignIn";

export default function HeaderUserConnection() {
  const { data: session } = useSession();

  return (
    <>
      {session?.user ? (
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            {session?.user?.image ? (
              <Image
                src={session.user.image}
                alt="user avatar"
                width={32}
                height={32}
                className="rounded-full ring-2 ring-primary/10 hover:ring-primary/30 transition-all"
              />
            ) : (
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                {session.user.name?.[0] || session.user.email?.[0]}
              </div>
            )}
            <div className="hidden sm:flex flex-col text-sm">
              {session.user.name && (
                <span className="font-medium">{session.user.name}</span>
              )}
              {session.user.email && (
                <span className="text-muted-foreground text-xs">
                  {session.user.email}
                </span>
              )}
            </div>
          </div>
          <Button onClick={() => signOut()}>Déconnexion</Button>
        </div>
      ) : (
        <SignIn />
      )}
    </>
  );
}
