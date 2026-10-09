"use client";

import { createContext, useCallback, useContext, useEffect, useRef, useState, type ReactNode } from "react";
import { usePathname, useRouter } from "next/navigation";
import gsap from "gsap";

interface PageTransitionContextValue {
  navigate: (href: string) => void;
  skipHomePreloader: boolean;
  homeReady: boolean;
}

const PageTransitionContext = createContext<PageTransitionContextValue | null>(null);

export function usePageTransition() {
  const context = useContext(PageTransitionContext);

  if (!context) {
    throw new Error("PageTransition provider is missing");
  }

  return context;
}

export default function PageTransition({ children }: Readonly<{ children: ReactNode }>) {
  const router = useRouter();
  const pathname = usePathname();

  const overlayRef = useRef<HTMLDivElement>(null);
  const isTransitioning = useRef(false);
  const previousPath = useRef(pathname);
  const tweenRef = useRef<gsap.core.Tween | null>(null);

  // Homepage transition coordination.
  const [skipHomePreloader, setSkipHomePreloader] = useState(false);
  const [homeReady, setHomeReady] = useState(true);

  const navigate = useCallback(
    (href: string) => {
      if (isTransitioning.current) return;

      const destination = new URL(href, window.location.href);

      if (destination.origin !== window.location.origin) return;

      const nextPath = `${destination.pathname}${destination.search}${destination.hash}`;

      if (destination.pathname === window.location.pathname) {
        router.push(nextPath);
        return;
      }

      const overlay = overlayRef.current;

      const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      if (!overlay || reducedMotion) {
        router.push(nextPath, { scroll: true });
        return;
      }

      isTransitioning.current = true;

      // Skip homepage preloader when returning from a case study.
      if (destination.pathname === "/") {
        setSkipHomePreloader(true);
        setHomeReady(false);
      }

      tweenRef.current?.kill();

      gsap.set(overlay, {
        y: 0,
        yPercent: 100,
        visibility: "visible",
      });

      tweenRef.current = gsap.to(overlay, {
        yPercent: 0,
        duration: 0.8,
        ease: "power3.inOut",
        overwrite: true,
        onComplete: () => {
          router.push(nextPath, { scroll: true });
        },
      });
    },
    [router],
  );

  useEffect(() => {
    if (previousPath.current === pathname) return;

    previousPath.current = pathname;

    if (!isTransitioning.current) return;

    const overlay = overlayRef.current;
    if (!overlay) return;

    tweenRef.current?.kill();

    gsap.set(overlay, {
      y: 0,
      yPercent: 0,
      visibility: "visible",
    });

    tweenRef.current = gsap.to(overlay, {
      yPercent: -100,
      duration: 0.85,
      ease: "power3.inOut",
      overwrite: true,
      onComplete: () => {
        gsap.set(overlay, {
          visibility: "hidden",
          y: 0,
          yPercent: 100,
        });

        isTransitioning.current = false;

        // Start homepage Hero Entrance after overlay exits.
        if (pathname === "/") {
          setHomeReady(true);
        }
      },
    });
  }, [pathname]);

  useEffect(() => {
    return () => {
      tweenRef.current?.kill();
    };
  }, []);

  return (
    <PageTransitionContext.Provider
      value={{
        navigate,
        skipHomePreloader,
        homeReady,
      }}
    >
      {children}

      <div
        ref={overlayRef}
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-100 flex items-center justify-center bg-olive-dark"
        style={{
          visibility: "hidden",
        }}
      >
        <span className="font-display text-[clamp(4rem,12vw,9rem)] leading-none tracking-[-0.07em] text-[#F6F2E9]">
          Harie<span className="text-[#B5BDA0]">.</span>
        </span>
      </div>
    </PageTransitionContext.Provider>
  );
}
