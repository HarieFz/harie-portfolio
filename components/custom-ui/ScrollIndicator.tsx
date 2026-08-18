"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

export default function ScrollIndicator() {
  const containerRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const container = containerRef.current;
    const dot = dotRef.current;

    if (!container || !dot) return;

    let hideTimeout: ReturnType<typeof setTimeout>;

    const showIndicator = () => {
      gsap.to(container, {
        autoAlpha: 1,
        duration: 0.25,
        ease: "power2.out",
      });
    };

    const hideIndicator = () => {
      gsap.to(container, {
        autoAlpha: 0,
        duration: 0.4,
        ease: "power2.out",
      });
    };

    const handleScroll = (event: Event) => {
      const customEvent = event as CustomEvent<{
        progress: number;
      }>;

      const progress = customEvent.detail.progress;

      const maxY = container.offsetHeight - dot.offsetHeight;

      // Move indicator
      gsap.to(dot, {
        y: progress * maxY,
        duration: 0.35,
        ease: "power3.out",
        overwrite: true,
      });

      // Show
      showIndicator();

      // Reset hide timer
      clearTimeout(hideTimeout);

      hideTimeout = setTimeout(() => {
        hideIndicator();
      }, 1500);
    };

    window.addEventListener("lenis-scroll", handleScroll);

    return () => {
      window.removeEventListener("lenis-scroll", handleScroll);

      clearTimeout(hideTimeout);
    };
  });

  return (
    <div
      ref={containerRef}
      className="
      hidden
      lg:block
        pointer-events-none
        fixed
        right-6
        top-1/2
        z-100
        h-40
        w-3
        -translate-y-1/2
        opacity-0
      "
    >
      {/* Track */}
      <div
        className="
          absolute
          left-1/2
          top-0
          h-full
          w-1.5
          -translate-x-1/2
          rounded-full
          bg-white/20
        "
      />

      {/* Thumb */}
      <div
        ref={dotRef}
        className="
          absolute
          left-1/2
          top-0
          w-1.5
          h-7
          -translate-x-1/2
          rounded-full
          bg-white
          shadow-[0_0_12px_rgba(255,255,255,0.3)]
        "
      />
    </div>
  );
}
