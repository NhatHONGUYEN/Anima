"use client";

import { useSession } from "next-auth/react";
import { signOut } from "next-auth/react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import SignIn from "./SignIn";
import { useSessionStore } from "@/lib/store";
import { useEffect } from "react"; // Import useEffect

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
          <div className="flex items-center gap-2">
            {session?.user?.image ? (
              <Image
                src={session.user.image}
                alt="user avatar"
                width={32}
                height={32}
                className="rounded-full ring-2 ring-primary/10 hover:ring-primary/30 transition-all"
              />
            ) : null}
          </div>
          <Button onClick={() => signOut()}>Déconnexion</Button>
        </div>
      ) : (
        <SignIn buttonText="Sign In" />
      )}
    </>
  );
}
