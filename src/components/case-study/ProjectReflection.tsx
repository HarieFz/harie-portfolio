import ScrollReveal from "@/components/ui/ScrollReveal";

interface TechGroup {
  category: string;
  technologies: string[];
}

interface ProjectReflectionProps {
  heading: string;
  highlight: string;
  description: string;
  techStack: TechGroup[];
  reflection: {
    title: string;
    paragraphs: string[];
  };
}

export default function ProjectReflection({
  heading,
  highlight,
  description,
  techStack,
  reflection,
}: Readonly<ProjectReflectionProps>) {
  return (
    <section
      id="reflection"
      aria-labelledby="reflection-title"
      className="bg-[#E9E5DC] px-6 py-20 text-olive-dark sm:px-10 lg:px-14 lg:py-32"
    >
      <div className="mx-auto max-w-350">
        {/* Section Header */}
        <ScrollReveal y={16} duration={0.7}>
          <div className="mb-16 flex items-center justify-between border-b border-olive-dark/15 pb-5 lg:mb-24">
            <p className="font-body text-[10px] uppercase tracking-[0.2em] text-olive">04 / Tech Stack & Reflection</p>

            <span className="font-body text-[10px] uppercase tracking-[0.2em] text-olive">Behind The Build</span>
          </div>
        </ScrollReveal>

        {/* Heading */}
        <div className="mb-16 grid gap-8 lg:mb-24 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <ScrollReveal y={48} duration={1.1} delay={0.1}>
              <h2
                id="reflection-title"
                className="font-display text-[clamp(3.5rem,6vw,7rem)] leading-[0.95] tracking-[-0.055em]"
              >
                {heading}
                <br />
                <span className="italic text-[#737B58]">{highlight}</span>
              </h2>
            </ScrollReveal>
          </div>

          <div className="flex items-end lg:col-span-4">
            <ScrollReveal y={24} duration={0.9} delay={0.2}>
              <p className="font-body max-w-sm text-sm leading-8 text-olive-dark/75 sm:text-base">{description}</p>
            </ScrollReveal>
          </div>
        </div>

        {/* Content */}
        <div className="grid border-t border-olive-dark/15 lg:grid-cols-12">
          {/* Tech Stack */}
          <div className="py-10 lg:col-span-6 lg:border-r lg:border-olive-dark/15 lg:py-14 lg:pr-16">
            <ScrollReveal y={16} duration={0.7}>
              <p className="font-body mb-10 text-[10px] uppercase tracking-[0.2em] text-olive">01 / Technologies</p>
            </ScrollReveal>

            <div className="border-t border-olive-dark/15">
              {techStack.map((group, index) => (
                <div
                  key={group.category}
                  className="grid gap-3 border-b border-olive-dark/15 py-6 sm:grid-cols-12 sm:gap-6"
                >
                  {/* Number */}
                  <div className="sm:col-span-1">
                    <ScrollReveal y={16} duration={0.7}>
                      <span className="font-body text-[10px] tracking-[0.14em] text-olive">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </ScrollReveal>
                  </div>

                  {/* Technology Group */}
                  <div className="sm:col-span-11">
                    <ScrollReveal y={24} duration={0.9} delay={0.08}>
                      <h3 className="font-display text-2xl tracking-[-0.035em] sm:text-3xl">{group.category}</h3>
                    </ScrollReveal>

                    <ScrollReveal y={20} duration={0.85} delay={0.16}>
                      <p className="font-body mt-3 text-sm leading-7 text-olive-dark/70">
                        {group.technologies.join(" · ")}
                      </p>
                    </ScrollReveal>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Reflection */}
          <div className="border-t border-olive-dark/15 py-10 lg:col-span-6 lg:border-t-0 lg:py-14 lg:pl-16">
            <ScrollReveal y={16} duration={0.7} delay={0.1}>
              <p className="font-body mb-10 text-[10px] uppercase tracking-[0.2em] text-olive">02 / Reflection</p>
            </ScrollReveal>

            <ScrollReveal y={32} duration={1} delay={0.15}>
              <h3 className="font-display max-w-lg text-[clamp(2.5rem,4vw,4.5rem)] leading-[0.95] tracking-[-0.045em]">
                {reflection.title}
              </h3>
            </ScrollReveal>

            <div className="mt-10 space-y-6">
              {reflection.paragraphs.map((paragraph, index) => (
                <ScrollReveal key={index + 1} y={24} duration={0.9} delay={index * 0.12}>
                  <p className="font-body max-w-lg text-sm leading-8 text-olive-dark/75 sm:text-base">{paragraph}</p>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>

        {/* Section Footer */}
        <ScrollReveal variant="fade-in" duration={1} delay={0.1}>
          <div className="mt-12 flex items-center justify-between border-t border-olive-dark/15 pt-5 lg:mt-16">
            <p className="font-body text-[10px] uppercase tracking-[0.18em] text-olive">
              Always Learning, Always Building
            </p>

            <span className="font-display text-2xl italic text-[#737B58]">Harie.</span>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
