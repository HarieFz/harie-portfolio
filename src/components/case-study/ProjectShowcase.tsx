import Image from "next/image";

import ScrollReveal from "@/components/ui/ScrollReveal";

interface ShowcaseItem {
  number: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  background: string;
}

interface ProjectShowcaseProps {
  heading: string;
  highlight: string;
  description: string;
  items: ShowcaseItem[];
  display?: "desktop" | "mobile";
}

function ShowcaseVisual({
  item,
  display,
  featured = false,
}: Readonly<{
  item: ShowcaseItem;
  display: "desktop" | "mobile";
  featured?: boolean;
}>) {
  const isMobile = display === "mobile";

  return (
    <div
      className={`relative flex items-center justify-center overflow-hidden rounded-sm ${
        isMobile
          ? featured
            ? "min-h-125 px-8 py-14 sm:min-h-160 sm:py-20 lg:min-h-180"
            : "min-h-110 px-8 py-12 sm:min-h-140 lg:min-h-150"
          : featured
            ? "aspect-16/9 p-8 sm:p-14"
            : "aspect-5/4 p-8 sm:p-12"
      }`}
      style={{ backgroundColor: item.background }}
    >
      {isMobile ? (
        <div
          className={`relative w-full ${
            featured ? "max-w-55 sm:max-w-65 lg:max-w-75" : "max-w-50 sm:max-w-55 lg:max-w-60"
          }`}
        >
          {/* Smartphone Frame */}
          <div className="overflow-hidden rounded-[2.5rem] border-[7px] border-charcoal bg-charcoal shadow-[0_25px_65px_rgba(0,0,0,0.18)] sm:rounded-[3rem] sm:border-8">
            <div className="relative aspect-9/19 overflow-hidden rounded-4xl bg-white sm:rounded-[2.4rem]">
              <Image
                src={item.image}
                alt={item.imageAlt}
                fill
                sizes={featured ? "(max-width: 640px) 220px, 300px" : "(max-width: 640px) 200px, 240px"}
                className="object-contain"
              />
            </div>
          </div>
        </div>
      ) : (
        <div className="relative h-full w-full">
          <Image
            src={item.image}
            alt={item.imageAlt}
            fill
            sizes={featured ? "(max-width: 1024px) 100vw, 1400px" : "(max-width: 1024px) 100vw, 50vw"}
            className="object-contain"
          />
        </div>
      )}

      {/* Decorative Label */}
      <span className="pointer-events-none absolute bottom-5 right-5 font-body text-[10px] uppercase tracking-[0.15em] text-charcoal/50 sm:bottom-7 sm:right-7">
        {item.number} / {display === "mobile" ? "Mobile View" : "Interface"}
      </span>
    </div>
  );
}

export default function ProjectShowcase({
  heading,
  highlight,
  description,
  items,
  display = "desktop",
}: Readonly<ProjectShowcaseProps>) {
  if (items.length === 0) return null;

  const [featured, ...remaining] = items;

  return (
    <section id="showcase" className="bg-[#F6F2E9] px-6 py-20 sm:px-10 lg:px-14 lg:py-28">
      <div className="mx-auto max-w-350">
        {/* Section Header */}
        <ScrollReveal y={16} duration={0.7}>
          <div className="mb-14 flex items-center justify-between border-b border-black/15 pb-5 lg:mb-20">
            <p className="font-body text-[10px] uppercase tracking-[0.2em] text-olive">04 / Visual Showcase</p>

            <span className="font-body text-[10px] uppercase tracking-[0.2em] text-black/45">Selected Screens</span>
          </div>
        </ScrollReveal>

        {/* Heading */}
        <div className="mb-14 max-w-3xl lg:mb-20">
          <ScrollReveal y={48} duration={1.1} delay={0.1}>
            <h2 className="font-display text-[clamp(3.25rem,6vw,6.5rem)] leading-[0.95] tracking-tighter text-charcoal">
              {heading} <span className="italic text-olive">{highlight}</span>
            </h2>
          </ScrollReveal>

          <ScrollReveal y={24} duration={0.9} delay={0.2}>
            <p className="font-body mt-7 max-w-xl text-sm leading-7 text-black/60">{description}</p>
          </ScrollReveal>
        </div>

        {/* Featured Visual */}
        <article>
          <ScrollReveal variant="scale" duration={1.2}>
            <ShowcaseVisual item={featured} display={display} featured />
          </ScrollReveal>

          <div className="mt-6 flex flex-col justify-between gap-3 sm:flex-row sm:items-start sm:gap-8">
            <ScrollReveal y={24} duration={0.9} delay={0.1}>
              <h3 className="font-display text-3xl tracking-[-0.035em] text-charcoal sm:text-4xl">{featured.title}</h3>
            </ScrollReveal>

            <ScrollReveal y={20} duration={0.85} delay={0.2} className="sm:max-w-md">
              <p className="font-body max-w-md text-sm leading-6 text-black/60">{featured.description}</p>
            </ScrollReveal>
          </div>
        </article>

        {/* Secondary Visuals */}
        {remaining.length > 0 && (
          <div className="mt-14 grid gap-12 md:grid-cols-2 md:gap-8 lg:mt-20 lg:gap-10">
            {remaining.map((item, index) => (
              <article key={item.number} className="min-w-0">
                {/* Visual */}
                <ScrollReveal variant="scale" duration={1.1} delay={index % 2 === 1 ? 0.12 : 0}>
                  <ShowcaseVisual item={item} display={display} />
                </ScrollReveal>

                {/* Information */}
                <div className="mt-6">
                  <ScrollReveal y={24} duration={0.9} delay={0.08 + (index % 2) * 0.12}>
                    <h3 className="font-display text-3xl tracking-[-0.035em] text-charcoal sm:text-4xl">
                      {item.title}
                    </h3>
                  </ScrollReveal>

                  <ScrollReveal y={20} duration={0.85} delay={0.16 + (index % 2) * 0.12}>
                    <p className="font-body mt-3 max-w-md text-sm leading-6 text-black/60">{item.description}</p>
                  </ScrollReveal>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
