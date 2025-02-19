"use client";

import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";

interface SignInProps {
  buttonText: string;
}

export default function SignIn({ buttonText }: SignInProps) {
  return (
    <Button onClick={() => signIn("github", { redirectTo: "/" })}>
      {buttonText}
    </Button>
  );
}
