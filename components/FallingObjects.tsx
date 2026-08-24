"use client";

import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import KelopakBunga1 from "@/public/images/kelopak-bunga-1.png";
import KelopakBunga2 from "@/public/images/kelopak-bunga-2.png";
import KelopakBunga3 from "@/public/images/kelopak-bunga-3.png";
import KelopakBunga4 from "@/public/images/kelopak-bunga-4.png";
import KelopakBunga5 from "@/public/images/kelopak-bunga-5.png";
import KelopakBunga6 from "@/public/images/kelopak-bunga-6.png";

gsap.registerPlugin(useGSAP);

const stickers = [
  KelopakBunga1,
  KelopakBunga2,
  KelopakBunga3,
  KelopakBunga4,
  KelopakBunga5,
  KelopakBunga6,
  KelopakBunga1,
  KelopakBunga2,
  KelopakBunga3,
  KelopakBunga4,
  KelopakBunga5,
  KelopakBunga6,
];

export default function FallingObjects() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const elements = gsap.utils.toArray<HTMLElement>(".falling-sticker");

      elements.forEach((element) => {
        const height = window.innerHeight;

        const randomX = gsap.utils.random(5, 95);
        const randomY = gsap.utils.random(-height, height * 0.5);

        const randomScale = gsap.utils.random(0.5, 1);
        const randomRotation = gsap.utils.random(-180, 180);

        gsap.set(element, {
          left: `${randomX}%`,
          top: randomY,
          scale: randomScale,
          rotation: randomRotation,
        });

        const fallDuration = gsap.utils.random(12, 20);

        const driftX = gsap.utils.random(-120, 120);

        const timeline = gsap.timeline({
          repeat: -1,

          delay: gsap.utils.random(0, 6),

          onRepeat: () => {
            gsap.set(element, {
              left: `${gsap.utils.random(5, 95)}%`,
              top: gsap.utils.random(-300, -100),
              x: 0,
              rotation: gsap.utils.random(-180, 180),
              scale: gsap.utils.random(0.5, 1),
            });
          },
        });

        timeline.to(element, {
          y: height + 300,

          x: driftX,

          rotation: `+=${gsap.utils.random(-360, 360)}`,

          duration: fallDuration,

          ease: "none",
        });
      });
    },
    {
      scope: containerRef,
    },
  );

  return (
    <div
      ref={containerRef}
      className="
        pointer-events-none
        fixed
        inset-0
        z-20
        overflow-hidden
      "
      aria-hidden="true"
    >
      {stickers.map((src, index) => (
        <div
          key={index}
          className="
            falling-sticker
            absolute
            left-0
            top-0
            will-change-transform
          "
        >
          <Image
            src={src}
            alt=""
            width={0}
            height={0}
            draggable={false}
            className="
              h-auto
              w-4
              select-none
              sm:w-5
              md:w-7
            "
          />
        </div>
      ))}
    </div>
  );
}
