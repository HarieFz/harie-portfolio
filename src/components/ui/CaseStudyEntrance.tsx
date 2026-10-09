"use client";

import { useEffect, useRef } from "react";
import type { ReactNode } from "react";

import gsap from "gsap";

interface CaseStudyEntranceProps {
  children: ReactNode;
}

export default function CaseStudyEntrance({ children }: Readonly<CaseStudyEntranceProps>) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const context = gsap.context(() => {
      const timeline = gsap.timeline({
        defaults: {
          ease: "power3.out",
        },
      });

      timeline
        .fromTo(
          "[data-case-header]",
          { autoAlpha: 0, y: 16 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.7,
          },
        )
        .fromTo(
          "[data-case-category]",
          { autoAlpha: 0, y: 20 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.7,
          },
          "-=0.35",
        )
        .fromTo(
          "[data-case-title]",
          { autoAlpha: 0, y: 48 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 1.1,
          },
          "-=0.4",
        )
        .fromTo(
          "[data-case-description]",
          { autoAlpha: 0, y: 28 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.9,
          },
          "-=0.7",
        )
        .fromTo(
          "[data-case-meta]",
          { autoAlpha: 0, y: 20 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.12,
          },
          "-=0.5",
        )
        .fromTo(
          "[data-case-visual]",
          { autoAlpha: 0, y: 48, scale: 0.97 },
          {
            autoAlpha: 1,
            y: 0,
            scale: 1,
            duration: 1.3,
            clearProps: "transform",
          },
          "-=0.45",
        );
    }, container);

    return () => context.revert();
  }, []);

  return <div ref={containerRef}>{children}</div>;
}
