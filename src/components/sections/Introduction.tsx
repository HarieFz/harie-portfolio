import { ArrowUpRight } from "lucide-react";

import ScrollReveal from "@/components/ui/ScrollReveal";
import AnchorLink from "../ui/AnchorLink";

export default function Introduction() {
  return (
    <section
      id="introduction"
      aria-labelledby="introduction-title"
      className="relative overflow-hidden bg-[#F6F2E9] px-6 py-20 text-[#222819] sm:px-10 lg:px-14 lg:py-32"
    >
      <div className="mx-auto max-w-400">
        {/* Section Label */}
        <ScrollReveal y={16} duration={0.7}>
          <div className="mb-14 flex items-center justify-between border-b border-[#222819]/15 pb-5 lg:mb-20">
            <div className="flex items-center gap-4">
              <span aria-hidden="true" className="h-px w-8 bg-[#737B58]" />

              <p className="font-manrope text-[10px] uppercase tracking-[0.2em]">An Introduction</p>
            </div>

            <span className="font-manrope text-xs text-[#222819]/60">01 / 05</span>
          </div>
        </ScrollReveal>

        {/* Editorial Layout */}
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
          {/* Heading */}
          <div className="lg:col-span-8">
            <ScrollReveal y={48} duration={1.1} delay={0.1}>
              <h2
                id="introduction-title"
                className="font-display max-w-4xl text-[clamp(3.5rem,7vw,8rem)] leading-[0.95] tracking-[-0.055em]"
              >
                Interfaces built
                <br />
                with <span className="italic text-[#737B58]">intention.</span>
              </h2>
            </ScrollReveal>
          </div>

          {/* Description & CTA */}
          <div className="flex flex-col justify-end lg:col-span-4 lg:pb-2">
            <ScrollReveal y={28} duration={0.9} delay={0.2}>
              <p className="font-manrope max-w-sm text-base leading-7 text-[#222819]/75">
                I bring design and development together to create digital experiences that feel intuitive, considered,
                and built to last.
              </p>
            </ScrollReveal>

            <ScrollReveal y={20} duration={0.8} delay={0.3}>
              <AnchorLink
                href="#about"
                className="font-manrope group mt-8 inline-flex min-h-11 w-fit items-center gap-4 text-sm font-medium"
              >
                <span>More About Me</span>

                <span className="flex size-10 items-center justify-center rounded-full border border-[#222819]/30 transition-colors duration-300 group-hover:bg-[#222819] group-hover:text-[#F6F2E9] motion-reduce:transition-none">
                  <ArrowUpRight size={18} aria-hidden="true" />
                </span>
              </AnchorLink>
            </ScrollReveal>
          </div>
        </div>

        {/* Bottom Detail */}
        <ScrollReveal variant="fade-in" duration={1} delay={0.15}>
          <div className="mt-20 flex flex-wrap items-center justify-between gap-4 border-t border-[#222819]/15 pt-5 lg:mt-32">
            <p className="font-manrope text-[10px] uppercase tracking-[0.16em] text-[#222819]/70">
              Design-minded. Development-driven.
            </p>

            <span className="font-manrope text-[10px] uppercase tracking-[0.16em] text-[#222819]/70">
              Scroll to discover
            </span>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
