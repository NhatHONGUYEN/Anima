"use client";

import { Button } from "@/components/ui/button";
import { signIn } from "@/lib/auth";
import { Github } from "lucide-react";

export default function SignIn() {
  return (
    <Button onClick={() => signIn("github", { redirectTo: "/" })}>
      Sign In <Github />
    </Button>
  );
}
