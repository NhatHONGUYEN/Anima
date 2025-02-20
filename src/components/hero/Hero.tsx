"use client";

import UserHero from "./UserHero";
import NoUserHero from "./NoUserHero";
import { useSessionStore } from "@/lib/store";
import { useSession } from "next-auth/react";
import { useEffect } from "react";

export default function Hero() {
  const { data: session } = useSession();
  const setUserId = useSessionStore((state) => state.setUserId);

  useEffect(() => {
    if (session?.user?.id) {
      setUserId(session.user.id);
    }
  }, [session, setUserId]);

  return session ? <UserHero /> : <NoUserHero />;
}
