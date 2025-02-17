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
                <p className="mt-6  ">
                  {" "}
                  Welcome to Anima, your go-to destination for discovering
                  anime! Explore a wide range of series, from the latest hits to
                  classic favorites. Each anime comes with detailed information,
                  including its title, trailers, reviews, episode list,
                  production details, and more. Whether you&apos;re searching
                  for your next binge or learning more about your favorite
                  shows, Anima has everything you need to dive deeper into the
                  world of anime.{" "}
                </p>
              </div>
              <ul className="flex items-center space-x-6 ">
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
                  <ul className="space-y-4  ">
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
          <div className="mt-20 flex flex-col justify-between gap-4 border-t pt-8 text-center text-sm font-medium  lg:flex-row lg:items-center lg:text-left">
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
