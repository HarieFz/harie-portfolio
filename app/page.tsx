"use client";

import Experience from "@/components/Experience";
import Work from "@/components/Work";
import Hero from "@/components/Hero";
import AboutMe from "@/components/AboutMe";
import Skills from "@/components/Skills";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Background } from "@/components/Background";
import { useState } from "react";
import Preloader from "@/components/Preloader";

export default function Home() {
  const [playHero, setPlayHero] = useState(false);

  return (
    <>
      <Preloader
        onComplete={() => {
          setPlayHero(true);
        }}
      />

      <Header playAnimation={playHero} />

      <main>
        <Background>
          <Hero playAnimation={playHero} />

          <AboutMe />

          <Experience />

          <Work />

          <Skills />
        </Background>
      </main>

      <Footer />
    </>
  );
}
