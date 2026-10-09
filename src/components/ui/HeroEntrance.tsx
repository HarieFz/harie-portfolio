"use client";

import { useEffect, useRef } from "react";
import type { ReactNode } from "react";
import gsap from "gsap";

interface HeroEntranceProps {
  children: ReactNode;
  ready: boolean;
}

export default function HeroEntrance({ children, ready }: Readonly<HeroEntranceProps>) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ready || !containerRef.current) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reducedMotion) return;

    const elements = containerRef.current.querySelectorAll("[data-hero-reveal]");

    if (!elements.length) return;

    const animation = gsap.fromTo(
      elements,
      {
        autoAlpha: 0,
        y: 35,
      },
      {
        autoAlpha: 1,
        y: 0,
        duration: 0.9,
        stagger: 0.14,
        ease: "power3.out",
        clearProps: "transform",
      },
    );

    return () => {
      animation.kill();
    };
  }, [ready]);

  return <div ref={containerRef}>{children}</div>;
}
