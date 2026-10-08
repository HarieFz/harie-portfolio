import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowUpRight } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      aria-labelledby="hero-title"
      className="relative isolate min-h-svh overflow-hidden bg-[#222819] text-[#F6F2E9]"
    >
      {/* Desktop Background */}
      <Image
        src="/images/hero/hero-background.webp"
        alt=""
        fill
        priority
        sizes="(min-width: 768px) 100vw, 1px"
        className="z-0 hidden object-cover object-center md:block"
      />

      {/* Mobile Background */}
      <Image
        src="/images/hero/hero-background-mobile.webp"
        alt=""
        fill
        priority
        sizes="(max-width: 767px) 100vw, 1px"
        className="z-0 object-cover object-center md:hidden"
      />

      {/* Overlay */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-linear-to-b from-black/10 via-transparent to-black/20"
      />

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-svh w-full max-w-400 flex-col px-6 pt-32 pb-8 sm:px-10 lg:px-14 lg:pt-28 lg:pb-12">
        {/* Main Typography */}
        <div className="flex justify-center">
          <h1
            id="hero-title"
            className="font-display text-center text-[clamp(5rem,16vw,15rem)] leading-[0.8] tracking-[-0.075em]"
          >
            HARIE.
          </h1>
        </div>

        <div className="min-h-24 flex-1" aria-hidden="true" />

        {/* Bottom Bar */}
        <div className="flex items-end justify-between gap-6">
          <Link href="#projects" className="font-manrope group inline-flex min-h-11 items-center gap-4 text-sm">
            <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-[#F6F2E9] text-[#222819] transition-transform duration-300 group-hover:rotate-45 motion-reduce:transition-none">
              <ArrowUpRight size={20} aria-hidden="true" />
            </span>

            <span>Explore Projects</span>
          </Link>

          {/* Scroll Indicator */}
          <div aria-hidden="true" className="hidden items-center gap-4 pb-3 lg:flex">
            <span className="font-manrope text-[10px] uppercase tracking-[0.16em] text-white/80">
              Scroll to Explore
            </span>

            <span className="h-px w-8 bg-white/60" />

            <div className="animate-bounce">
              <ArrowDown size={16} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
