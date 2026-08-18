"use client";

import Image from "next/image";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import BgHero from "@/public/images/bg-hero.webp";
import { useScrambleText } from "@/hooks/useScrambleText";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const heroImageRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const image = heroImageRef.current;

      if (!image) return;

      gsap.to(image, {
        scale: 1,
        duration: 1.5,
        ease: "expo.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const roleRef = useRef<HTMLParagraphElement>(null);
  const tagline1Ref = useRef<HTMLParagraphElement>(null);
  const tagline2Ref = useRef<HTMLParagraphElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const descriptionMobileRef = useRef<HTMLParagraphElement>(null);
  const headlineLine1Ref = useRef<HTMLSpanElement>(null);
  const headlineLine2Ref = useRef<HTMLSpanElement>(null);
  const headlineLine3Ref = useRef<HTMLSpanElement>(null);
  const headlineLineMobileRef = useRef<HTMLParagraphElement>(null);

  useScrambleText({
    totalDuration: 1.5,

    items: [
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
        text: "I'm Harie, a Frontend Engineer who enjoys solving problems beyond the interface. From crafting polished user experiences to designing scalable frontend architectures, I build products that are made to last—not just to launch.",
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
  });

  return (
    <div className="relative w-full overflow-hidden">
      <section ref={sectionRef} className="relative mx-auto w-full min-h-dvh px-8 lg:py-25 lg:max-w-7xl">
        <div className="hidden relative z-30 w-full lg:grid md:grid-cols-3 gap-y-10 text-white">
          <div>
            <p ref={roleRef} className="font-semibold text-2xl" />
          </div>
          <div>
            <p className="font-inter">
              <span ref={tagline1Ref} className="block" />
              <span ref={tagline2Ref} className="block" />
            </p>
          </div>
          <div>
            <p ref={descriptionRef} className="text-lg" />
          </div>
        </div>

        <div className="hidden lg:block w-[70%] absolute z-30 bottom-15 items-end before:absolute before:inset-0 before:-z-10 before:bg-[radial-gradient(ellipse_60%_70%_at_center,rgba(180,35,25,0.7)_0%,rgba(180,35,25,0.45)_35%,rgba(180,35,25,0.12)_65%,transparent_100%)]">
          <p className="font-geist-pixel font-black text-6xl uppercase leading-[0.88] tracking-[-0.045em] text-white">
            <span ref={headlineLine1Ref} className="block" />

            <span ref={headlineLine2Ref} className="block" />

            <span ref={headlineLine3Ref} className="block" />
          </p>
        </div>

        <div
          ref={heroImageRef}
          className="hidden lg:block pointer-events-none absolute z-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-75"
        >
          <div className="animate-float">
            <Image src={BgHero} alt="Background Hero" width={0} height={0} sizes="100vw" priority />
          </div>
        </div>

        {/* MOBILE */}
        <div className="lg:hidden relative z-30 w-full min-h-dvh h-full py-24 flex flex-col gap-8">
          <div className="h-20">
            <p
              ref={headlineLineMobileRef}
              className="lg:hidden font-geist-pixel font-black text-2xl uppercase leading-[0.88] tracking-[-0.045em] text-white"
            />
          </div>

          <div ref={heroImageRef} className="pointer-events-none scale-75">
            <div className="animate-float">
              <Image src={BgHero} alt="Background Hero" width={0} height={0} sizes="100vw" priority />
            </div>
          </div>

          <div>
            <p ref={descriptionMobileRef} className="text-lg" />
          </div>
        </div>
      </section>

      <div className="w-full absolute inset-0 overflow-hidden">
        <div
          className="absolute inset-0 opacity-100"
          style={{
            background: "radial-gradient(100% 100% at 0% 0%, rgb(255, 111, 89) 0%, rgb(227, 66, 52) 100%)",
            mask: "radial-gradient(125% 100% at 0% 0%, rgb(0, 0, 0) 0%, rgba(0, 0, 0, 0.224) 88.2883%, rgba(0, 0, 0, 0) 100%)",
          }}
        >
          {/* Skewed fading blue streaks */}
          <div
            className="absolute inset-0 opacity-8"
            style={{
              background: "linear-gradient(rgb(255, 247, 243) 0%, rgba(255, 247, 243, 0) 100%)",
              mask: "linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 20%, rgba(0, 0, 0, 0) 36%, rgb(0, 0, 0) 55%, rgba(0, 0, 0, 0.13) 67%, rgb(0, 0, 0) 78%, rgba(0, 0, 0, 0) 97%)",
              transform: "skewX(45deg)",
            }}
          />
          <div
            className="absolute inset-0 opacity-8"
            style={{
              background: "linear-gradient(rgb(255, 247, 243) 0%, rgba(255, 247, 243, 0) 100%)",
              mask: "linear-gradient(90deg, rgba(0, 0, 0, 0) 11%, rgb(0, 0, 0) 25%, rgba(0, 0, 0, 0.55) 41%, rgba(0, 0, 0, 0.13) 67%, rgb(0, 0, 0) 78%, rgba(0, 0, 0, 0) 97%)",
              transform: "skewX(45deg)",
            }}
          />
          <div
            className="absolute inset-0 opacity-8"
            style={{
              background: "linear-gradient(rgb(255, 247, 243) 0%, rgba(255, 247, 243, 0) 100%)",
              mask: "linear-gradient(90deg, rgba(0, 0, 0, 0) 9%, rgb(0, 0, 0) 20%, rgba(0, 0, 0, 0.55) 28%, rgba(0, 0, 0, 0.424) 40%, rgb(0, 0, 0) 48%, rgba(0, 0, 0, 0.267) 54%, rgba(0, 0, 0, 0.13) 78%, rgb(0, 0, 0) 88%, rgba(0, 0, 0, 0) 97%)",
              transform: "skewX(45deg)",
            }}
          />
          <div
            className="absolute inset-0 opacity-8"
            style={{
              background: "linear-gradient(rgb(255, 247, 243) 0%, rgba(255, 247, 243, 0) 100%)",
              mask: "linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 17%, rgba(0, 0, 0, 0.55) 26%, rgb(0, 0, 0) 35%, rgba(0, 0, 0, 0) 47%, rgba(0, 0, 0, 0.13) 69%, rgb(0, 0, 0) 79%, rgba(0, 0, 0, 0) 97%)",
              transform: "skewX(45deg)",
            }}
          />
          <div
            className="absolute inset-0 opacity-8"
            style={{
              background: "linear-gradient(rgb(255, 247, 243) 0%, rgba(255, 247, 243, 0) 100%)",
              mask: "linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 20%, rgba(0, 0, 0, 0.55) 27%, rgb(0, 0, 0) 42%, rgba(0, 0, 0, 0) 48%, rgba(0, 0, 0, 0.13) 67%, rgb(0, 0, 0) 74%, rgb(0, 0, 0) 82%, rgba(0, 0, 0, 0.47) 88%, rgba(0, 0, 0, 0) 97%)",
              transform: "skewX(45deg)",
            }}
          />
        </div>
      </div>
    </div>
  );
}
