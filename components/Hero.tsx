"use client";

import Image from "next/image";
import { useRef } from "react";
import gsap from "gsap";
import BgHero from "@/public/images/bg-hero.webp";
import SakuraFlowerLeft from "@/public/images/left-sakura.png";
import SakuraFlowerRight from "@/public/images/right-sakura.png";
import { useScrambleText } from "@/hooks/useScrambleText";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const heroImageRef = useRef<HTMLDivElement>(null);
  const heroImageMobileRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.to([heroImageRef.current, heroImageMobileRef.current], {
        scale: 1,
        duration: 1.5,
        ease: "expo.out",
      });
    },
    { scope: sectionRef },
  );

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
      <section ref={sectionRef} className="font-tiktok-sans relative mx-auto w-full h-dvh lg:py-25">
        {/* Laptop */}
        <div>
          {/* Copywriting */}
          <div className="px-8">
            <div className="hidden relative z-30 w-full lg:grid md:grid-cols-3 gap-y-10">
              <div>
                <p ref={roleRef} className="font-semibold text-2xl" />
              </div>
              <div>
                <p className="font-mochiy-pop-one text-sm">
                  <span ref={tagline1Ref} className="block" />
                  <span ref={tagline2Ref} className="block" />
                </p>
              </div>
              <div>
                <p ref={descriptionRef} className="font-bold text-lg" />
              </div>
            </div>

            <div className="hidden lg:block w-[70%] absolute z-30 bottom-15 items-end">
              <p className="font-black text-6xl uppercase leading-[0.88] tracking-[-0.045em]">
                <span ref={headlineLine1Ref} className="block" />

                <span ref={headlineLine2Ref} className="block" />

                <span ref={headlineLine3Ref} className="block" />
              </p>
            </div>
          </div>

          {/* Background Image */}
          <div className="hidden lg:block pointer-events-none absolute z-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div ref={heroImageRef} className="scale-75">
              <div className="animate-float">
                <Image
                  src={BgHero}
                  alt="Background Hero"
                  width={0}
                  height={0}
                  sizes="100vw"
                  priority
                  className="w-150"
                />
              </div>
            </div>
          </div>

          <div className="hidden lg:block pointer-events-none absolute z-20 top-0 left-0">
            <Image
              src={SakuraFlowerLeft}
              alt="Background Hero"
              width={0}
              height={0}
              sizes="100vw"
              priority
              className="w-auto h-[70vh]"
            />
          </div>

          <div className="hidden lg:block pointer-events-none absolute z-20 top-0 right-0">
            <Image
              src={SakuraFlowerRight}
              alt="Background Hero"
              width={0}
              height={0}
              sizes="100vw"
              priority
              className="w-auto h-[70vh]"
            />
          </div>
        </div>

        {/* MOBILE */}
        <div className="lg:hidden relative w-full h-full">
          <div className="relative z-30 px-8 py-24 flex flex-col items-start gap-8">
            <div className="w-full h-20">
              <p ref={headlineLineMobileRef} className="font-geist-pixel font-black text-2xl uppercase" />
            </div>

            <div ref={heroImageMobileRef} className="pointer-events-none scale-75">
              <div className="animate-float">
                <Image src={BgHero} alt="Background Hero" width={0} height={0} sizes="100vw" priority />
              </div>
            </div>

            <div>
              <p ref={descriptionMobileRef} className="text-xl" />
            </div>
          </div>

          <div className="pointer-events-none w-full absolute bottom-0 left-0">
            <Image
              src={SakuraFlowerLeft}
              alt="Background Hero"
              width={0}
              height={0}
              sizes="100vw"
              priority
              className="w-full h-auto"
            />
          </div>

          <div className="pointer-events-none w-full absolute top-0 right-0">
            <Image
              src={SakuraFlowerRight}
              alt="Background Hero"
              width={0}
              height={0}
              sizes="100vw"
              priority
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
