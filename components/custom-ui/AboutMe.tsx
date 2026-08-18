"use client";

import Image from "next/image";
import IconArrowTopRight from "@/public/icons/arrow-top-right.svg";
import IconInstagram from "@/public/icons/instagram.svg";
import IconGithub from "@/public/icons/github.svg";
import PhotoProfile from "@/public/images/photo-profile.jpg";
import Signature from "@/public/images/signature-harie.svg";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function AboutMe() {
  const sectionRef = useRef<HTMLElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const maskRevealRef = useRef<SVGRectElement>(null);

  useGSAP(
    () => {
      const section = sectionRef.current;
      const reveal = maskRevealRef.current;

      if (!section || !reveal) return;

      //
      gsap.set(reveal, {
        attr: {
          width: 0,
        },
      });

      const tl = gsap.timeline({
        paused: true,
      });

      tl.to(reveal, {
        attr: {
          width: 1672,
        },
        duration: 2.5,
        ease: "power2.inOut",
      });

      ScrollTrigger.create({
        trigger: section,
        start: "top 80%",

        onEnter: () => {
          tl.restart();
        },

        onEnterBack: () => {
          tl.restart();
        },
      });
    },
    {
      scope: svgRef,
    },
  );

  return (
    <section
      ref={sectionRef}
      className="relative z-30 max-w-7xl mx-auto w-full min-h-dvh flex items-center justify-center mb-24 lg:mb-0"
    >
      <div className="flex flex-col lg:flex-row items-center gap-10 lg:items-start lg:gap-30">
        <div className="relative w-full max-w-88">
          {/* Foto yang di-mask */}
          <div className="masking-photo relative aspect-square w-full">
            <Image
              src={Signature}
              alt="signature"
              width={0}
              height={0}
              sizes="100vw"
              className="absolute left-0 top-0 w-40"
            />

            <Image
              src={PhotoProfile}
              alt="Harie"
              width={0}
              height={0}
              sizes="100vw"
              className="h-full w-full object-cover"
            />
          </div>

          {/* Social buttons */}
          <div className="absolute bottom-3 left-4 z-50 flex flex-col gap-2">
            <div className="flex size-8 items-center justify-center rounded-full bg-white">
              <Image src={IconInstagram} alt="Instagram" width={0} height={0} sizes="100vw" className="size-5" />
            </div>

            <div className="flex size-8 items-center justify-center rounded-full bg-white">
              <Image src={IconGithub} alt="Github" width={0} height={0} sizes="100vw" className="size-5" />
            </div>

            <div className="flex size-8 items-center justify-center rounded-full bg-black">
              <Image
                src={IconArrowTopRight}
                alt="Arrow top right"
                width={0}
                height={0}
                sizes="100vw"
                className="size-7"
              />
            </div>
          </div>
        </div>

        <p className="w-full px-8 text-2xl lg:text-4xl leading-normal text-white flex flex-col gap-3">
          <span className="mb-2">
            I build digital products where thoughtful UX meets solid engineering — focused on scalable frontend
            architecture, reusable systems, and products built to evolve.
          </span>
          <span>
            <span className="text-white/70">Experienced across</span> fintech, API platforms, healthcare, and education,{" "}
            <span className="text-white/70">turning complex ideas into production-ready applications.</span>
          </span>
        </p>
      </div>
    </section>
  );
}
