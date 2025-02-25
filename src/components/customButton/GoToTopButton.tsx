"use client";

import { useEffect, useState } from "react";
import { Button } from "../ui/button";

export default function GoToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 0) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  if (!isVisible) {
    return null;
  }

  const goToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const Icon = ({ className }: { className?: string }) => (
    <span className={className}>↑</span>
  );
  const label = "Go to top";

  return (
    <div className="fixed bottom-4 right-4">
      <Button
        className="cursor-pointer transition-all text-xs px-6 py-2 rounded-lg border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px] active:border-b-[2px] active:brightness-90 active:translate-y-[2px] bg-primary text-primary-foreground border-secondary-foreground"
        onClick={goToTop}
      >
        <Icon className="mr-2 size-4" />
        {label}
      </Button>
    </div>
  );
}
