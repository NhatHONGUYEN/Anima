"use client";

import { useSession } from "next-auth/react";
import UserHero from "./UserHero";
import NoUserHero from "./NoUserHero";

export default function Hero() {
  const { data: session } = useSession();

  return session?.user ? <UserHero /> : <NoUserHero />;
}
