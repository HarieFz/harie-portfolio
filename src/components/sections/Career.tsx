import { ArrowDownRight, Asterisk } from "lucide-react";

import ScrollReveal from "@/components/ui/ScrollReveal";

export default function Career() {
  return (
    <section
      id="career"
      aria-labelledby="career-title"
      className="relative overflow-hidden bg-[#F6F2E9] px-6 py-20 text-[#222819] sm:px-10 lg:px-14 lg:py-32"
    >
      <div className="mx-auto max-w-400">
        {/* Section Header */}
        <ScrollReveal y={16} duration={0.7}>
          <div className="mb-14 flex items-center justify-between border-b border-[#222819]/15 pb-5 lg:mb-20">
            <p className="font-manrope text-[10px] uppercase tracking-[0.2em] text-[#535B43]">03 / The Journey</p>

            <Asterisk size={24} strokeWidth={1.2} aria-hidden="true" />
          </div>
        </ScrollReveal>

        {/* Main Heading */}
        <div className="max-w-5xl">
          <ScrollReveal y={48} duration={1.1} delay={0.1}>
            <h2
              id="career-title"
              className="font-display text-[clamp(3.5rem,7vw,8rem)] leading-[0.95] tracking-[-0.055em]"
            >
              More than
              <br />
              <span className="italic text-[#737B58]">just a resume.</span>
            </h2>
          </ScrollReveal>
        </div>

        {/* Editorial Narrative */}
        <div className="mt-14 grid gap-8 lg:mt-24 lg:grid-cols-12">
          {/* Side Label */}
          <div className="hidden lg:col-span-4 lg:block">
            <ScrollReveal y={20} duration={0.8}>
              <div className="flex items-center gap-4">
                <span className="h-px w-8 bg-[#737B58]" />

                <p className="font-manrope text-[10px] uppercase tracking-[0.18em] text-[#535B43]">
                  Experience & Growth
                </p>
              </div>
            </ScrollReveal>
          </div>

          {/* Narrative */}
          <div className="lg:col-span-7">
            <ScrollReveal y={28} duration={0.9} delay={0.1}>
              <p className="font-manrope text-base leading-8 text-[#222819]/85 sm:text-lg">
                My journey as a frontend developer has taken me across different industries, from financial technology
                and API platforms to healthcare and education. Through professional roles and freelance collaborations,
                I&apos;ve worked on diverse products, solved real-world challenges, and learned to balance technical
                decisions with meaningful user experiences.
              </p>
            </ScrollReveal>

            <ScrollReveal y={24} duration={0.9} delay={0.2}>
              <p className="font-manrope mt-6 text-sm leading-7 text-[#222819]/75 sm:text-base sm:leading-8">
                Beyond professional work, I also enjoy building products of my own, including a digital wedding
                invitation platform that brings together design, development, and a personal creative vision. Each
                experience continues to shape how I think, collaborate, and grow as a developer.
              </p>
            </ScrollReveal>
          </div>
        </div>

        {/* Bottom Detail */}
        <ScrollReveal variant="fade-in" duration={1} delay={0.15}>
          <div className="mt-20 flex items-center justify-between border-t border-[#222819]/15 pt-5 lg:mt-32">
            <p className="font-manrope text-[10px] uppercase tracking-[0.16em] text-[#535B43]">
              Experience / Collaboration / Growth
            </p>

            <ArrowDownRight size={24} strokeWidth={1.2} aria-hidden="true" />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
