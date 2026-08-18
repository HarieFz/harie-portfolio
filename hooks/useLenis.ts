"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function useLenis() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    const raf = (time: number) => {
      lenis.raf(time * 1000);
    };

    const handleScroll = (data: {
      scroll: number;
      limit: number;
      progress: number;
      velocity: number;
      direction: number;
    }) => {
      ScrollTrigger.update();

      window.dispatchEvent(
        new CustomEvent("lenis-scroll", {
          detail: data,
        }),
      );
    };

    const handleBackToTop = () => {
      lenis.scrollTo(0, {
        duration: 1.2,
      });
    };

    lenis.on("scroll", handleScroll);

    window.addEventListener("back-to-top", handleBackToTop);

    gsap.ticker.add(raf);
    gsap.ticker.lagSmoothing(0);

    const refresh = () => {
      ScrollTrigger.refresh(true);
    };

    requestAnimationFrame(refresh);

    document.fonts.ready.then(() => {
      refresh();
    });

    window.addEventListener("load", refresh);

    return () => {
      window.removeEventListener("load", refresh);

      window.removeEventListener("back-to-top", handleBackToTop);

      lenis.off("scroll", handleScroll);

      gsap.ticker.remove(raf);

      lenis.destroy();
    };
  }, []);
}
