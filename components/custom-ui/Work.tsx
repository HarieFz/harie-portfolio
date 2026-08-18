"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Axel from "@/public/images/image.png";
import Image, { StaticImageData } from "next/image";

gsap.registerPlugin(ScrollTrigger, useGSAP);

interface BoxItem {
  number: string;
  image: StaticImageData;
  title: string;
}

const BOX_WIDTH = 380;
const BOX_GAP = 32;

const BOXES: BoxItem[] = [
  { number: "01", image: Axel, title: "Riset & Discovery" },
  { number: "02", image: Axel, title: "Strategi & Perencanaan" },
  { number: "03", image: Axel, title: "Desain & Prototipe" },
  { number: "04", image: Axel, title: "Pengembangan Produk" },
  { number: "05", image: Axel, title: "Peluncuran & Evaluasi" },
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
        const sidePadding = Math.max((getViewportWidth() - BOX_WIDTH) / 2, 0);
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
              className="relative flex h-[60vh] shrink-0 flex-col justify-between overflow-hidden rounded-2xl p-8"
              style={{ width: BOX_WIDTH }}
            >
              <Image
                src={box.image}
                alt={box.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 80vw, 400px"
              />

              <div className="absolute inset-0 bg-black/10" />

              <div className="relative z-10">
                <span className="text-sm font-mono font-medium text-neutral-300">{box.number}</span>
              </div>

              <h3 className="relative z-10 w-fit text-2xl font-semibold leading-snug text-white before:absolute before:inset-0 before:-z-10 before:bg-[radial-gradient(ellipse_60%_70%_at_center,rgba(0,0,0,0.7)_0%,rgba(0,0,0,0.45)_35%,rgba(0,00,00,0.12)_65%,transparent_100%)]">
                {box.title}
              </h3>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile */}
      <div className="lg:hidden flex flex-col items-center gap-8 px-8 mt-8">
        {BOXES.map((box) => (
          <div
            key={box.number}
            className="relative w-full flex h-[50vh] flex-col justify-between overflow-hidden rounded-2xl p-8"
          >
            <Image src={box.image} alt={box.title} fill className="object-cover" sizes="100vw" />

            <div className="absolute inset-0 bg-black/10" />

            <div className="relative z-10">
              <span className="text-sm font-mono font-medium text-neutral-300">{box.number}</span>
            </div>

            <h3 className="relative z-10 w-fit text-2xl font-semibold leading-snug text-white before:absolute before:inset-0 before:-z-10 before:bg-[radial-gradient(ellipse_60%_70%_at_center,rgba(0,0,0,0.7)_0%,rgba(0,0,0,0.45)_35%,rgba(0,00,00,0.12)_65%,transparent_100%)]">
              {box.title}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
}
