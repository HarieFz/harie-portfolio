"use client";

import { RefObject, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

interface TypingItem {
  ref: RefObject<HTMLElement | null>;
  text: string;
}

interface UseTypingTextOptions {
  items: TypingItem[];
  totalDuration?: number;
  start?: string;
  once?: boolean;
  cursor?: boolean;
}

export function useTypingText({
  items,
  totalDuration = 3,
  start = "top 70%",
  once = true,
  cursor = true,
}: UseTypingTextOptions) {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (!items.length) return;

      const timeline = gsap.timeline({
        paused: true,
      });

      items.forEach((item) => {
        if (!item.ref.current) return;

        const element = item.ref.current;

        element.textContent = "";

        timeline.to(
          {},
          {
            duration: totalDuration / items.length,
            ease: "none",

            onUpdate() {
              const progress = this.progress();
              const characterCount = Math.floor(progress * item.text.length);

              element.textContent = item.text.slice(0, characterCount);
            },
          },
        );
      });

      const cursorElements = items.map((item) => item.ref.current?.nextElementSibling).filter(Boolean);

      if (cursor) {
        gsap.set(cursorElements, {
          opacity: 0,
        });
      }

      ScrollTrigger.create({
        trigger: containerRef.current,
        start,
        once,

        onEnter: () => {
          timeline.play();

          if (cursor) {
            gsap.to(cursorElements, {
              opacity: 0,
              duration: 0.5,
              repeat: -1,
              yoyo: true,
              ease: "steps(1)",
            });
          }
        },
      });
    },
    {
      scope: containerRef,
      dependencies: [items, totalDuration, start, once, cursor],
    },
  );

  return {
    containerRef,
  };
}
