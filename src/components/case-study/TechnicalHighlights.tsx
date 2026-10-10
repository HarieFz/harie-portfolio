import ScrollReveal from "@/components/ui/ScrollReveal";

interface TechnicalHighlightItem {
  number: string;
  title: string;
  description: string;
}

interface TechnicalHighlightsProps {
  heading: string;
  highlight: string;
  description: string;
  items: TechnicalHighlightItem[];
}

export default function TechnicalHighlights({
  heading,
  highlight,
  description,
  items,
}: Readonly<TechnicalHighlightsProps>) {
  return (
    <section id="highlights" className="bg-[#E9E5DC] px-6 py-20 sm:px-10 lg:px-14 lg:py-28">
      <div className="mx-auto max-w-350">
        {/* Section Label */}
        <ScrollReveal y={16} duration={0.7}>
          <div className="mb-14 flex items-center justify-between border-b border-black/15 pb-5 lg:mb-20">
            <p className="font-body text-[10px] uppercase tracking-[0.2em] text-olive">03 / Key Features</p>

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

        {/* Features */}
        <div className="border-t border-black/15">
          {items.map((item) => (
            <article
              key={item.number}
              className="grid gap-8 border-b border-black/15 py-10 sm:py-14 lg:grid-cols-[0.2fr_0.8fr] lg:gap-16 lg:py-20"
            >
              {/* Number */}
              <ScrollReveal y={16} duration={0.7}>
                <p className="font-body text-[10px] uppercase tracking-[0.2em] text-olive">Feature / {item.number}</p>
              </ScrollReveal>

              {/* Content */}
              <div className="max-w-3xl">
                <ScrollReveal y={32} duration={1}>
                  <h3 className="font-display text-[clamp(2.75rem,4.5vw,5rem)] leading-[0.98] tracking-[-0.045em] text-charcoal">
                    {item.title}
                  </h3>
                </ScrollReveal>

                <ScrollReveal y={24} duration={0.9} delay={0.12}>
                  <p className="font-body mt-6 max-w-xl text-sm leading-7 text-black/65">{item.description}</p>
                </ScrollReveal>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
