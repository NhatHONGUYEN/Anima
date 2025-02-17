"use client";

import Link from "next/link";
import { Clapperboard } from "lucide-react";
import { sections } from "@/lib/data";

export const Footer = () => {
  return (
    <section className="py-32">
      <div className="container">
        <footer>
          <div className="flex flex-col items-center justify-between gap-10 text-center lg:flex-row lg:text-left">
            <div className="flex w-full max-w-96 shrink flex-col items-center justify-between gap-6 lg:items-start">
              <div>
                <span className="flex items-center justify-center gap-4 lg:justify-start">
                  <Clapperboard className="text-primary" strokeWidth={1} />
                  <h1>Anima</h1>
                </span>
                <p className="mt-6 text-sm text-muted-foreground">
                  A collection of 100+ responsive HTML templates for your
                  startup business or side project.
                </p>
              </div>
              <ul className="flex items-center space-x-6 text-muted-foreground">
                {sections[1].links.map((link, linkIdx) => (
                  <li key={linkIdx} className="font-medium hover:text-primary">
                    <Link
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {}
                      {"icon" in link && <link.icon className="size-6" />}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-6 lg:gap-20">
              {sections.map((section, sectionIdx) => (
                <div key={sectionIdx}>
                  <h3 className="mb-6 font-bold">{section.title}</h3>
                  <ul className="space-y-4 text-sm text-muted-foreground">
                    {section.links.map((link, linkIdx) => (
                      <li key={linkIdx} className="hover:text-primary">
                        {section.title === "Social" ? (
                          <Link
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {link.name}
                          </Link>
                        ) : (
                          <Link href={link.href}>{link.name}</Link>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-20 flex flex-col justify-between gap-4 border-t pt-8 text-center text-sm font-medium text-muted-foreground lg:flex-row lg:items-center lg:text-left">
            <p>© 2024 Nhat.deV. All rights reserved.</p>
            <div className="flex justify-center gap-4 lg:justify-start">
              <p> Terms and Conditions</p>

              <p> Privacy Policy</p>
            </div>
          </div>
        </footer>
      </div>
    </section>
  );
};
