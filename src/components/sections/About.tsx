import Image from "next/image";
import { ArrowDownRight, Asterisk } from "lucide-react";

export default function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-title"
      className="relative overflow-hidden bg-[#E9E5DC] px-6 py-20 text-[#222819] sm:px-10 lg:px-14 lg:py-28"
    >
      <div className="mx-auto max-w-400">
        {/* Section Header */}
        <div className="mb-14 flex items-center justify-between border-b border-[#222819]/15 pb-5">
          <p className="font-manrope text-[10px] uppercase tracking-[0.2em] text-[#535B43]">02 / About Me</p>

          <Asterisk size={24} strokeWidth={1.2} aria-hidden="true" />
        </div>

        {/* Main Content */}
        <div className="grid items-start gap-8 sm:gap-10 lg:grid-cols-12 lg:gap-8">
          {/* Heading */}
          <div className="lg:col-span-8">
            <h2
              id="about-title"
              className="font-display max-w-4xl text-[clamp(3.25rem,6vw,7rem)] leading-[0.98] tracking-[-0.055em]"
            >
              A little about
              <br />
              <span className="italic text-[#737B58]">the person</span>
              <br />
              behind the code.
            </h2>
          </div>

          {/* Portrait */}
          <div className="flex justify-start lg:col-span-4 lg:justify-end lg:pt-4">
            <figure className="w-36 sm:w-44 lg:w-60">
              <div className="relative aspect-3/4 overflow-hidden rounded-sm bg-[#C9C6B7]">
                <Image
                  src="/images/about/portrait.jpeg"
                  alt="Portrait of Harie"
                  fill
                  sizes="(min-width: 1024px) 240px, (min-width: 640px) 176px, 144px"
                  className="object-cover"
                />
              </div>

              <figcaption className="font-manrope mt-3 text-[10px] uppercase tracking-[0.14em] text-[#535B43]">
                Behind the screen
              </figcaption>
            </figure>
          </div>
        </div>

        {/* Description */}
        <div className="mt-14 grid gap-8 border-t border-[#222819]/15 pt-8 lg:mt-20 lg:grid-cols-12">
          <div className="lg:col-span-3">
            <p className="font-manrope text-xs uppercase tracking-[0.16em] text-[#535B43]">Who I Am</p>
          </div>

          <div className="lg:col-span-7">
            <p className="font-manrope max-w-2xl text-base leading-8 text-[#222819]/80 sm:text-lg">
              I'm a frontend developer focused on building responsive, accessible, and thoughtfully crafted web
              interfaces. I enjoy bringing visual ideas to life through clean, maintainable code.
            </p>

            <p className="font-manrope mt-5 max-w-2xl text-sm leading-7 text-[#222819]/65">
              Beyond making things look good, I care about how they work and feel. From subtle interactions to the
              smallest layout details, I aim to create experiences that are consistent, intuitive, and purposeful.
            </p>
          </div>

          <div className="hidden justify-end lg:col-span-2 lg:flex">
            <ArrowDownRight size={28} strokeWidth={1.2} aria-hidden="true" />
          </div>
        </div>

        {/* Bottom Detail */}
        <div className="mt-20 flex flex-wrap items-center justify-between gap-4 border-t border-[#222819]/15 pt-5">
          <p className="font-manrope text-[10px] uppercase tracking-[0.16em] text-[#535B43]">
            Design-minded. Development-driven.
          </p>

          <p className="font-manrope text-[10px] uppercase tracking-[0.16em] text-[#535B43]">
            Frontend Development / UI Implementation
          </p>
        </div>
      </div>
    </section>
  );
}
