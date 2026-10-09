"use client";

import { useCallback, useState } from "react";

import Hero from "@/components/sections/Hero";
import Preloader from "@/components/ui/Preloader";
import HeroEntrance from "@/components/ui/HeroEntrance";
import { usePageTransition } from "@/components/ui/PageTransition";

export default function HomeExperience() {
  const { skipHomePreloader, homeReady } = usePageTransition();

  const [preloaderComplete, setPreloaderComplete] = useState(false);

  const handleComplete = useCallback(() => {
    setPreloaderComplete(true);
  }, []);

  const shouldShowPreloader = !skipHomePreloader && !preloaderComplete;

  const heroReady = skipHomePreloader ? homeReady : preloaderComplete;

  return (
    <>
      {shouldShowPreloader && <Preloader onComplete={handleComplete} />}

      <HeroEntrance ready={heroReady}>
        <Hero />
      </HeroEntrance>
    </>
  );
}
