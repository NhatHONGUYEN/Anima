"use client";

import UserHero from "./UserHero";
import NoUserHero from "./NoUserHero";
import { useSessionStore } from "@/lib/store";
import { useSession } from "next-auth/react";
import { useEffect } from "react";

export default function Hero() {
  const { data: session } = useSession();
  const setUserId = useSessionStore((state) => state.setUserId);

  // Affiche la session dans la console pour déboguer
  console.log("Session:", session);

  // Stocke l'ID de l'utilisateur dans le store Zustand
  useEffect(() => {
    if (session?.user?.id) {
      console.log("User ID found:", session.user.id);
      setUserId(session.user.id);
    } else {
      console.log("User ID not found in session:", session);
    }
  }, [session, setUserId]);

  return session ? <UserHero /> : <NoUserHero />;
}
