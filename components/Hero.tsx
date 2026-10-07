"use client";

import Image from "next/image";
import { useLayoutEffect, useMemo, useRef, useState } from "react";
import { useScrambleText } from "@/hooks/useScrambleText";
import { useGSAP } from "@gsap/react";
import { useTheme } from "@/hooks/ThemeContext";
import gsap from "gsap";

import BgHero from "@/public/images/bg-hero.webp";
import LeafDayLeft from "@/public/images/left-leaf.png";
import LeafDuskLeft from "@/public/images/left-leaf-dusk.png";
import LeafNightLeft from "@/public/images/left-leaf-night.png";
import LeafDayRight from "@/public/images/right-leaf.png";
import LeafDuskRight from "@/public/images/right-leaf-dusk.png";
import LeafNightRight from "@/public/images/right-leaf-night.png";

gsap.registerPlugin(useGSAP);

interface HeroProps {
  playAnimation: boolean;
}

export default function Hero({ playAnimation }: Readonly<HeroProps>) {
  const sectionRef = useRef<HTMLElement>(null);

  const heroImageRef = useRef<HTMLDivElement>(null);
  const heroImageMobileRef = useRef<HTMLDivElement>(null);

  const leafLeftRef = useRef<HTMLDivElement>(null);
  const leafRightRef = useRef<HTMLDivElement>(null);

  const leafLeftMobileRef = useRef<HTMLDivElement>(null);
  const leafRightMobileRef = useRef<HTMLDivElement>(null);

  const roleRef = useRef<HTMLParagraphElement>(null);
  const tagline1Ref = useRef<HTMLParagraphElement>(null);
  const tagline2Ref = useRef<HTMLParagraphElement>(null);

  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const descriptionMobileRef = useRef<HTMLParagraphElement>(null);

  const headlineLine1Ref = useRef<HTMLSpanElement>(null);
  const headlineLine2Ref = useRef<HTMLSpanElement>(null);
  const headlineLine3Ref = useRef<HTMLSpanElement>(null);
  const headlineLineMobileRef = useRef<HTMLParagraphElement>(null);

  const { activeTheme } = useTheme();
  const [leafTheme, setLeafTheme] = useState(activeTheme);

  const leafLeftImages = {
    day: LeafDayLeft,
    dusk: LeafDuskLeft,
    night: LeafNightLeft,
  };

  const leafRightImages = {
    day: LeafDayRight,
    dusk: LeafDuskRight,
    night: LeafNightRight,
  };

  useGSAP(
    () => {
      if (!playAnimation) return;

      const tl = gsap.timeline({
        defaults: {
          ease: "expo.out",
        },
      });

      /*
       * Initial state
       */
      gsap.set([leafLeftRef.current, leafLeftMobileRef.current], {
        x: "-30%",
        y: "-5%",
        opacity: 0,
        rotate: -8,
      });

      gsap.set([leafRightRef.current, leafRightMobileRef.current], {
        x: "30%",
        y: "-5%",
        opacity: 0,
        rotate: 8,
      });

      gsap.set([heroImageRef.current, heroImageMobileRef.current], {
        scale: 0,
      });

      /*
       * Leaf left
       */
      tl.to(
        [leafLeftRef.current, leafLeftMobileRef.current],
        {
          x: 0,
          y: 0,
          opacity: 1,
          rotate: 0,
          duration: 1.4,
        },
        0.2,
      );

      /*
       * Leaf right
       */
      tl.to(
        [leafRightRef.current, leafRightMobileRef.current],
        {
          x: 0,
          y: 0,
          opacity: 1,
          rotate: 0,
          duration: 1.4,
        },
        0.2,
      );

      /*
       * Hero image
       */
      tl.to(
        [heroImageRef.current, heroImageMobileRef.current],
        {
          scale: 1,
          duration: 1.5,
          ease: "expo.out",
        },
        0,
      );
    },
    {
      scope: sectionRef,
      dependencies: [playAnimation],
      revertOnUpdate: true,
    },
  );

  useLayoutEffect(() => {
    if (!playAnimation) return;

    const left = leafLeftRef.current;
    const right = leafRightRef.current;

    if (!left || !right) return;

    const tl = gsap.timeline();

    tl.to([left, right], {
      opacity: 0,
      x: (index) => (index === 0 ? "-30%" : "30%"),
      duration: 0.35,
    });

    tl.call(() => {
      setLeafTheme(activeTheme);
    });

    tl.set([left, right], {
      x: (index) => (index === 0 ? "-30%" : "30%"),
    });

    tl.to([left, right], {
      opacity: 1,
      x: 0,
      duration: 0.8,
      ease: "expo.out",
    });

    return () => {
      tl.kill();
    };
  }, [activeTheme]);

  const scrambleItems = useMemo(
    () => [
      {
        ref: roleRef,
        text: "Frontend Engineer",
      },
      {
        ref: tagline1Ref,
        text: "Designing for users.",
      },
      {
        ref: tagline2Ref,
        text: "Engineering for the future.",
      },
      {
        ref: descriptionRef,
        text: "I'm Harie, a Frontend Engineer who solves problems beyond the interface—from polished experiences to scalable architectures. I build products made to last.",
      },
      {
        ref: descriptionMobileRef,
        text: "I'm Harie, a Frontend Engineer who solves problems beyond the interface—from polished experiences to scalable architectures. I build products made to last.",
      },
      {
        ref: headlineLine1Ref,
        text: "I BUILD PRODUCTS PEOPLE",
      },
      {
        ref: headlineLine2Ref,
        text: "ENJOY—AND CODE TEAMS",
      },
      {
        ref: headlineLine3Ref,
        text: "ENJOY MAINTAINING",
      },
      {
        ref: headlineLineMobileRef,
        text: "I BUILD PRODUCTS PEOPLE ENJOY—AND CODE TEAMS ENJOY MAINTAINING",
      },
    ],
    [],
  );

  useScrambleText({
    start: playAnimation,
    totalDuration: 1.5,
    items: scrambleItems,
  });

  return (
    <div className="relative w-full overflow-hidden">
      <section ref={sectionRef} className="font-tiktok-sans relative mx-auto h-dvh w-full lg:py-25">
        {/* DESKTOP */}
        <div>
          {/* Copywriting */}
          <div className="px-8">
            <div className="relative z-30 hidden w-full gap-y-10 md:grid md:grid-cols-3 lg:grid">
              <div>
                <p ref={roleRef} className="text-2xl font-semibold" />
              </div>

              <div>
                <p className="font-mochiy-pop-one text-sm">
                  <span ref={tagline1Ref} className="block" />
                  <span ref={tagline2Ref} className="block" />
                </p>
              </div>

              <div>
                <p ref={descriptionRef} className="font-inter text-base font-semibold" />
              </div>
            </div>

            <div className="absolute bottom-15 z-30 hidden w-[70%] items-end lg:block">
              <p className="text-6xl font-black uppercase leading-[0.88] tracking-[-0.045em]">
                <span ref={headlineLine1Ref} className="block" />

                <span ref={headlineLine2Ref} className="block" />

                <span ref={headlineLine3Ref} className="block" />
              </p>
            </div>
          </div>

          {/* Hero Image */}
          <div className="pointer-events-none absolute left-1/2 top-1/2 z-20 hidden -translate-x-1/2 -translate-y-1/2 lg:block">
            <div ref={heroImageRef} className="scale-0">
              <div className="animate-float">
                <Image src={BgHero} alt="" priority className="w-150" />
              </div>
            </div>
          </div>

          {/* Left Leaf */}
          <div
            ref={leafLeftRef}
            className="pointer-events-none absolute left-0 top-0 z-20 hidden lg:block"
            style={{
              opacity: 0,
              transform: "translate(-30%, -5%) rotate(-8deg)",
            }}
          >
            <Image src={leafLeftImages[leafTheme]} alt="" priority className="h-[70vh] w-auto" />
          </div>

          {/* Right Leaf */}
          <div
            ref={leafRightRef}
            className="pointer-events-none absolute right-0 top-0 z-20 hidden lg:block"
            style={{
              opacity: 0,
              transform: "translate(-30%, -5%) rotate(-8deg)",
            }}
          >
            <Image src={leafRightImages[leafTheme]} alt="" priority className="h-[70vh] w-auto" />
          </div>
        </div>

        {/* MOBILE */}
        <div className="relative h-full w-full lg:hidden">
          <div className="relative z-30 flex flex-col items-start gap-8 px-8 py-24">
            {/* Mobile headline */}
            <div className="h-22 w-full">
              <p ref={headlineLineMobileRef} className="font-geist-pixel text-2xl font-black uppercase" />
            </div>

            {/* Mobile hero */}
            <div ref={heroImageMobileRef} className="pointer-events-none scale-75">
              <div className="animate-float">
                <Image src={BgHero} alt="" priority className="w-full" />
              </div>
            </div>

            {/* Mobile description */}
            <div>
              <p ref={descriptionMobileRef} className="text-xl font-semibold" />
            </div>
          </div>

          {/* Mobile left leaf */}
          <div ref={leafLeftMobileRef} className="pointer-events-none absolute bottom-0 left-0 z-20 w-full opacity-0">
            <Image src={leafLeftImages[leafTheme]} alt="" priority className="h-auto w-full" />
          </div>

          {/* Mobile right leaf */}
          <div ref={leafRightMobileRef} className="pointer-events-none absolute right-0 top-0 z-20 w-full opacity-0">
            <Image src={leafRightImages[leafTheme]} alt="" priority className="h-auto w-full" />
          </div>
        </div>
      </section>
    </div>
  );
}
