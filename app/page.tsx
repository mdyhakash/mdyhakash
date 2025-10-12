"use client";

import { useEffect, useState } from "react";
import { Navigation } from "@/components/navigation";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { CurrentlyWorking } from "@/components/currently-working";
import { Projects } from "@/components/projects";
import { Hackathons } from "@/components/hackathons";
import { Achievements } from "@/components/achievements";
import { Education } from "@/components/education";
import { Contact } from "@/components/contact";
import { CustomCursor } from "@/components/custom-cursor";
import { ScrollToTop } from "@/components/scroll-to-top";

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <>
      <CustomCursor />
      <Navigation />
      <main className="relative">
        <Hero />
        <About />
        <CurrentlyWorking />
        <Projects />
        <Hackathons />
        <Achievements />
        <Education />
        <Contact />
      </main>
      <ScrollToTop />
    </>
  );
}
