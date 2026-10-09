"use client";

import { useEffect, useRef } from "react";
import type { ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type RevealVariant = "fade-up" | "fade-in" | "scale";

interface ScrollRevealProps {
  children: ReactNode;
  variant?: RevealVariant;
  delay?: number;
  duration?: number;
  y?: number;
  className?: string;
}

export default function ScrollReveal({
  children,
  variant = "fade-up",
  delay = 0,
  duration = 0.9,
  y = 32,
  className = "",
}: Readonly<ScrollRevealProps>) {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = elementRef.current;

    if (!element) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reducedMotion) return;

    const from =
      variant === "scale"
        ? { autoAlpha: 0, scale: 0.96 }
        : variant === "fade-in"
          ? { autoAlpha: 0 }
          : { autoAlpha: 0, y };

    const animation = gsap.fromTo(element, from, {
      autoAlpha: 1,
      y: 0,
      scale: 1,
      duration,
      delay,
      ease: "power3.out",
      clearProps: "all",
      scrollTrigger: {
        trigger: element,
        start: "top 88%",
        once: true,
      },
    });

    return () => {
      animation.scrollTrigger?.kill();
      animation.kill();
    };
  }, [variant, delay, duration, y]);

  return (
    <div ref={elementRef} className={className}>
      {children}
    </div>
  );
}
