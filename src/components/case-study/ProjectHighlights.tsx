import Image from "next/image";

import ScrollReveal from "@/components/ui/ScrollReveal";

interface HighlightItem {
  number: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  caption: string;
  background: string;
}

interface ProjectHighlightsProps {
  heading: string;
  highlight: string;
  description: string;
  items: HighlightItem[];
  display?: "desktop" | "mobile";
}

export default function ProjectHighlights({
  heading,
  highlight,
  description,
  items,
  display = "desktop",
}: Readonly<ProjectHighlightsProps>) {
  const isMobile = display === "mobile";

  return (
    <section id="highlights" className="bg-[#E9E5DC] px-6 py-20 sm:px-10 lg:px-14 lg:py-28">
      <div className="mx-auto max-w-350">
        {/* Section Label */}
        <ScrollReveal y={16} duration={0.7}>
          <div className="mb-14 flex items-center justify-between border-b border-black/15 pb-5 lg:mb-20">
            <p className="font-body text-[10px] uppercase tracking-[0.2em] text-olive">03 / Selected Highlights</p>

            <span className="font-body text-[10px] uppercase tracking-[0.2em] text-black/45">Project Details</span>
          </div>
        </ScrollReveal>

        {/* Heading */}
        <div className="mb-16 max-w-3xl lg:mb-24">
          <ScrollReveal y={48} duration={1.1} delay={0.1}>
            <h2 className="font-display text-[clamp(3.25rem,6vw,6.5rem)] leading-[0.95] tracking-tighter text-charcoal">
              {heading} <span className="italic text-olive">{highlight}</span>
            </h2>
          </ScrollReveal>

          <ScrollReveal y={24} duration={0.9} delay={0.2}>
            <p className="font-body mt-7 max-w-xl text-sm leading-7 text-black/60">{description}</p>
          </ScrollReveal>
        </div>

        {/* Highlights */}
        <div className="space-y-20 lg:space-y-32">
          {items.map((item, index) => {
            const reverse = index % 2 !== 0;

            return (
              <article key={item.number} className="grid items-center gap-10 lg:grid-cols-2 lg:gap-20">
                {/* Visual */}
                <div className={reverse ? "lg:order-2" : ""}>
                  <ScrollReveal variant="scale" duration={1.15}>
                    <div className="relative overflow-hidden rounded-sm" style={{ backgroundColor: item.background }}>
                      {isMobile ? (
                        <div className="flex min-h-110 items-center justify-center px-10 py-12 sm:min-h-140 sm:py-16 lg:min-h-155">
                          <div className="w-full max-w-52 sm:max-w-60 lg:max-w-65">
                            <div className="overflow-hidden rounded-[2.5rem] border-[7px] border-charcoal bg-charcoal shadow-[0_25px_60px_rgba(0,0,0,0.16)]">
                              <div className="relative aspect-9/19 overflow-hidden rounded-4xl bg-white">
                                <Image
                                  src={item.image}
                                  alt={item.imageAlt}
                                  fill
                                  sizes="(max-width: 640px) 208px, 260px"
                                  className="object-contain"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      ) : (
                        <div className="relative aspect-5/4 p-8 sm:p-12">
                          <Image
                            src={item.image}
                            alt={item.imageAlt}
                            fill
                            sizes="(max-width: 1024px) 100vw, 50vw"
                            className="object-contain p-8 sm:p-12"
                          />
                        </div>
                      )}

                      <p className="font-body absolute bottom-5 left-5 text-[10px] uppercase tracking-[0.15em] text-charcoal/55 sm:bottom-7 sm:left-7">
                        {item.caption}
                      </p>
                    </div>
                  </ScrollReveal>
                </div>

                {/* Content */}
                <div className={`max-w-lg ${reverse ? "lg:order-1 lg:pr-8" : "lg:pl-8"}`}>
                  {/* Label */}
                  <ScrollReveal y={16} duration={0.7}>
                    <span className="font-body text-[10px] uppercase tracking-[0.2em] text-olive">
                      Highlight / {item.number}
                    </span>
                  </ScrollReveal>

                  {/* Divider */}
                  <ScrollReveal variant="fade-in" duration={0.8} delay={0.08}>
                    <div className="mt-6 h-px w-12 bg-olive/40" />
                  </ScrollReveal>

                  {/* Title */}
                  <ScrollReveal y={32} duration={1} delay={0.12}>
                    <h3 className="font-display mt-8 text-[clamp(2.75rem,4vw,4.75rem)] leading-[0.98] tracking-[-0.045em] text-charcoal">
                      {item.title}
                    </h3>
                  </ScrollReveal>

                  {/* Description */}
                  <ScrollReveal y={24} duration={0.9} delay={0.2}>
                    <p className="font-body mt-7 max-w-md text-sm leading-7 text-black/65">{item.description}</p>
                  </ScrollReveal>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
