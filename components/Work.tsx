"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Work1 from "@/public/images/work-1.webp";
import Work2 from "@/public/images/work-2.webp";
import Work3 from "@/public/images/work-3.webp";
import Work4 from "@/public/images/work-4.webp";
import Work5 from "@/public/images/work-5.webp";
import Work6 from "@/public/images/work-6.webp";
import Work7 from "@/public/images/work-7.webp";
import Work8 from "@/public/images/work-8.webp";
import Image, { StaticImageData } from "next/image";

gsap.registerPlugin(ScrollTrigger, useGSAP);

interface BoxItem {
  number: string;
  image: StaticImageData;
  title: string;
}

const BOX_GAP = 32;

const BOXES: BoxItem[] = [
  { number: "01", image: Work6, title: "Gold to Mecca" },
  { number: "02", image: Work7, title: "Gold to Mecca with BPKH" },
  { number: "03", image: Work5, title: "Gold to Mecca Admin" },
  { number: "04", image: Work1, title: "Axel Inteligence" },
  { number: "05", image: Work2, title: "Tunas Unggul" },
  { number: "06", image: Work8, title: "Naara Skincare" },
  { number: "07", image: Work3, title: "Mitra Group Landing Page" },
  { number: "08", image: Work4, title: "Mitra Group Career" },
];

export default function Work() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      const track = trackRef.current;
      const section = sectionRef.current;
      if (!track || !section) return;

      const getViewportWidth = () => document.documentElement.clientWidth;

      const applyTrackPadding = () => {
        const boxSize = window.innerHeight * 0.6;
        const sidePadding = Math.max((getViewportWidth() - boxSize) / 2, 0);
        gsap.set(track, {
          paddingLeft: sidePadding,
          paddingRight: sidePadding,
        });
      };

      applyTrackPadding();

      const getScrollDistance = () => {
        const lastBox = track.lastElementChild as HTMLElement;
        if (!lastBox) return 0;

        const viewportCenter = getViewportWidth() / 2;
        const lastBoxCenter = lastBox.offsetLeft + lastBox.offsetWidth / 2;

        return lastBoxCenter - viewportCenter;
      };

      gsap.to(track, {
        x: () => -getScrollDistance(),
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => `+=${getScrollDistance()}`,
          pin: true,
          scrub: 1,
          invalidateOnRefresh: true,
          onRefreshInit: applyTrackPadding,
        },
      });
    },
    { scope: sectionRef },
  );

  return (
    <section className="relative z-30 text-white mb-24 lg:mb-0">
      <div className="w-full mx-auto flex flex-col items-center justify-center gap-4 lg:gap-8 text-center">
        <p className="max-w-5xl text-4xl font-medium leading-[1.05] tracking-tight md:text-6xl">Work I'm Proud Of</p>
        <p className="max-w-xl text-base leading-relaxed text-white/60">
          More than finished screens, these projects represent the problems solved, the systems designed, and the
          collaboration behind every product I've helped bring to life.
        </p>
      </div>

      <div ref={sectionRef} className="hidden lg:block relative w-full overflow-hidden">
        <div ref={trackRef} className="flex h-dvh items-center" style={{ gap: BOX_GAP }}>
          {BOXES.map((box) => (
            <div
              key={box.number}
              className="relative flex aspect-square h-[60vh] shrink-0 flex-col justify-between overflow-hidden rounded-2xl p-8"
            >
              <Image src={box.image} alt={box.title} fill className="object-cover" />

              <div className="absolute inset-0 bg-black/5" />

              <div className="relative z-10">
                <span className="text-sm font-mono font-medium text-white">{box.number}</span>
              </div>

              <div className="relative z-10 w-fit h-fit px-3 py-1 bg-linear-0 from-black/0 via-black/30 to-black/0">
                <h3 className="w-fit text-xl font-semibold leading-snug text-white">{box.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile */}
      <div className="lg:hidden flex flex-col items-center gap-8 px-8 mt-8">
        {BOXES.map((box) => (
          <div
            key={box.number}
            className="relative flex aspect-square h-[40vh] flex-col justify-between overflow-hidden rounded-2xl p-6"
          >
            <Image src={box.image} alt={box.title} fill className="object-cover" />

            <div className="absolute inset-0 bg-black/5" />

            <div className="relative z-10">
              <span className="text-sm font-mono font-medium text-white">{box.number}</span>
            </div>

            <div className="relative z-10 w-fit h-fit px-3 py-1 bg-linear-0 from-black/0 via-black/30 to-black/0">
              <h3 className="w-fit text-xl font-semibold leading-snug text-white">{box.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
