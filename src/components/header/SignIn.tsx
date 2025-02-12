"use client";

import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";
import { signIn } from "next-auth/react";

export default function SignIn() {
  return (
    <Button onClick={() => signIn("github", { redirectTo: "/" })}>
      Sign In <Github />
    </Button>
  );
}
