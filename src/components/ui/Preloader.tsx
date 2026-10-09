"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

interface PreloaderProps {
  onComplete: () => void;
}

export default function Preloader({ onComplete }: Readonly<PreloaderProps>) {
  const containerRef = useRef<HTMLDivElement>(null);
  const wordmarkRef = useRef<HTMLParagraphElement>(null);
  const progressRef = useRef<HTMLSpanElement>(null);
  const completeRef = useRef(onComplete);

  const [visible, setVisible] = useState(true);

  useEffect(() => {
    completeRef.current = onComplete;
  }, [onComplete]);

  useEffect(() => {
    const container = containerRef.current;
    const wordmark = wordmarkRef.current;
    const progress = progressRef.current;

    if (!container || !wordmark || !progress) return;

    const heroTitle = document.querySelector<HTMLElement>("[data-hero-title]");

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let completed = false;
    let overlay: HTMLDivElement | null = null;

    const finish = () => {
      if (completed) return;
      completed = true;

      if (heroTitle) {
        gsap.set(heroTitle, { clearProps: "visibility,opacity" });
      }

      overlay?.remove();
      setVisible(false);
      completeRef.current();
    };

    if (reducedMotion || !heroTitle) {
      finish();
      return;
    }

    // Heading asli tetap di layout, tetapi disembunyikan
    // sampai wordmark overlay selesai mendarat.
    gsap.set(heroTitle, { autoAlpha: 0 });

    const counter = { value: 0 };

    // Overlay berada di luar preloader agar tidak terpotong.
    overlay = document.createElement("div");

    overlay.setAttribute("aria-hidden", "true");

    Object.assign(overlay.style, {
      position: "fixed",
      inset: "0",
      zIndex: "110",
      pointerEvents: "none",
      overflow: "visible",
    });

    const flyingWordmark = heroTitle.cloneNode(true) as HTMLElement;

    flyingWordmark.removeAttribute("id");
    flyingWordmark.removeAttribute("data-hero-title");

    Object.assign(flyingWordmark.style, {
      position: "absolute",
      margin: "0",
      transformOrigin: "top left",
      whiteSpace: "nowrap",
      color: "#F6F2E9",
    });

    overlay.appendChild(flyingWordmark);
    document.body.appendChild(overlay);

    const placeWordmark = () => {
      const source = wordmark.getBoundingClientRect();
      const target = heroTitle.getBoundingClientRect();

      const scaleX = source.width / target.width;
      const scaleY = source.height / target.height;

      gsap.set(flyingWordmark, {
        x: source.left,
        y: source.top,
        scaleX,
        scaleY,
        autoAlpha: 0,
      });
    };

    // Pastikan font sudah siap sebelum mengukur.
    let timeline: gsap.core.Timeline | null = null;
    let cancelled = false;

    const start = async () => {
      await document.fonts.ready;

      if (cancelled) return;

      placeWordmark();

      timeline = gsap.timeline({
        onComplete: finish,
      });

      timeline
        .fromTo(
          wordmark,
          {
            autoAlpha: 0,
            y: 24,
          },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.9,
            ease: "power3.out",
            immediateRender: false,
          },
        )
        .to(
          counter,
          {
            value: 100,
            duration: 1.35,
            ease: "power2.inOut",
            onUpdate: () => {
              progress.textContent = String(Math.round(counter.value)).padStart(3, "0");
            },
          },
          "-=0.25",
        )
        .add(() => {
          // Ukur ulang jika viewport berubah saat loading.
          placeWordmark();

          gsap.set(wordmark, { autoAlpha: 0 });
          gsap.set(flyingWordmark, { autoAlpha: 1 });
        })
        .to(container, {
          autoAlpha: 0,
          duration: 0.55,
          ease: "power2.inOut",
        })
        .to(
          flyingWordmark,
          {
            x: () => heroTitle.getBoundingClientRect().left,
            y: () => heroTitle.getBoundingClientRect().top,
            scaleX: 1,
            scaleY: 1,
            duration: 1.15,
            ease: "power3.inOut",
          },
          "<",
        )
        .add(() => {
          gsap.set(heroTitle, { autoAlpha: 1 });
          gsap.set(flyingWordmark, { autoAlpha: 0 });
        });
    };

    void start();

    return () => {
      cancelled = true;
      timeline?.kill();
      overlay?.remove();

      gsap.set(heroTitle, { clearProps: "visibility,opacity" });
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-100 flex flex-col items-center justify-center overflow-hidden bg-olive-dark text-[#F6F2E9]"
      role="status"
      aria-label="Loading portfolio"
    >
      <div className="text-center">
        <p
          ref={wordmarkRef}
          className="invisible translate-y-6 font-display text-[clamp(5rem,16vw,15rem)] leading-[0.8] tracking-[-0.075em]"
        >
          HARIE.
        </p>

        <p className="font-body mt-5 text-[10px] uppercase tracking-[0.3em] text-white/70">Portfolio / 2026</p>
      </div>

      <div className="absolute bottom-10 left-6 right-6 flex items-end justify-between border-t border-white/20 pt-5 sm:left-10 sm:right-10 lg:left-14 lg:right-14">
        <p className="font-body text-[10px] uppercase tracking-[0.2em] text-white/70">Loading Experience</p>

        <span ref={progressRef} className="font-body text-2xl tabular-nums sm:text-5xl">
          000
        </span>
      </div>
    </div>
  );
}
