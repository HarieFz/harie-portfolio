import { ArrowDownRight, ArrowUpRight, Asterisk } from "lucide-react";

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
              className="font-display text-[clamp(2.75rem,5.5vw,6rem)] leading-[0.9] tracking-[-0.055em]"
            >
              The path
              <br />
              <span className="italic text-[#737B58]">so far.</span>
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
                My path into frontend development began in 2022 with two intensive bootcamps, where I led the capstone
                teams in both programs. Since 2023, I’ve been building web applications professionally.
              </p>
            </ScrollReveal>

            <ScrollReveal y={24} duration={0.9} delay={0.2}>
              <p className="font-manrope mt-8 text-base leading-8 text-[#222819]/70">
                I started as a freelance developer, building a real-time facial recognition attendance system and a
                portfolio platform for university alumni. In 2024, I joined PT. Sinergi Nusantara Integrasi, where I
                worked on the frontend of a school management system, a recruitment portal, and a clinic website with
                online appointment booking.
              </p>
            </ScrollReveal>

            <ScrollReveal y={20} duration={0.9} delay={0.3}>
              <p className="font-manrope mt-8 text-base leading-8 text-[#222819]/70">
                In 2025, through Sinergi, I joined the Axel Intelligence project as a contract developer, contributing
                to an API integration hub for Telkom Indonesia. My work focused on building its in-browser API testing
                interface. I now work at PT. Bullion Ecosystem International, developing Vue.js applications across gold
                trading and Umrah services, from gold savings plans to installment payment features for Umrah packages.
              </p>
            </ScrollReveal>

            {/* CV Link */}
            <ScrollReveal y={20} duration={0.9} delay={0.4}>
              <a
                href="/file/Harie-Fairuz-Zaki-CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="font-manrope mt-10 inline-flex items-center gap-3 border-b border-[#222819]/30 pb-1 text-sm text-[#222819] transition-colors duration-300 hover:border-[#737B58] hover:text-[#737B58] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#737B58]"
              >
                View full CV
                <ArrowUpRight size={16} strokeWidth={1.4} aria-hidden="true" />
              </a>
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
