"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type { RefObject } from "react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

interface UseScrollTriggerAnimationOptions {
  triggerRef: RefObject<HTMLElement | null>;
  animation: () => gsap.core.Timeline;
  start?: string;
}

export function useScrollTriggerAnimation({
  triggerRef,
  animation,
  start = "top 80%",
}: UseScrollTriggerAnimationOptions) {
  useGSAP(
    () => {
      const trigger = triggerRef.current;

      if (!trigger) return;

      const tl = animation();

      ScrollTrigger.create({
        trigger,
        start,
        animation: tl,
        toggleActions: "restart none restart none",
        markers: true,
      });
    },
    {
      dependencies: [triggerRef, animation, start],
    },
  );
}
