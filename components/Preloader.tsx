"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import Logo from "@/public/images/logo.png";

gsap.registerPlugin(useGSAP);

interface PreloaderProps {
  onComplete?: () => void;
}

export default function Preloader({ onComplete }: Readonly<PreloaderProps>) {
  const container = useRef<HTMLDivElement>(null);
  const logo = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        onComplete,
      });

      tl.fromTo(
        logo.current,
        {
          opacity: 0,
          y: 20,
          scale: 0.95,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          ease: "power3.out",
        },
      )

        // Hold logo
        .to(
          {},
          {
            duration: 0.7,
          },
        )

        // Logo exit
        .to(logo.current, {
          opacity: 0,
          y: -30,
          duration: 0.4,
          ease: "power2.in",
        })

        // Curtain reveal
        .to(container.current, {
          yPercent: -100,
          duration: 1.1,
          ease: "power4.inOut",
        });
    },
    {
      scope: container,
    },
  );

  return (
    <div ref={container} className="fixed inset-0 z-9999 flex items-center justify-center bg-[#F5F3EE]">
      <div ref={logo}>
        <Image src={Logo} alt="logo" width={0} height={0} priority className="w-50 h-auto" />
      </div>
    </div>
  );
}
