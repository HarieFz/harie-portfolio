import ScrollReveal from "@/components/ui/ScrollReveal";

interface OverviewPoint {
  number: string;
  title: string;
  description: string;
}

interface ProjectOverviewProps {
  heading: string;
  highlight: string;
  paragraphs: string[];
  points: OverviewPoint[];
}

export default function ProjectOverview({ heading, highlight, paragraphs, points }: Readonly<ProjectOverviewProps>) {
  return (
    <section
      id="overview"
      aria-labelledby="overview-title"
      className="bg-[#E9E5DC] px-6 py-20 text-olive-dark sm:px-10 lg:px-14 lg:py-32"
    >
      <div className="mx-auto max-w-350">
        {/* Section Label */}
        <ScrollReveal y={16} duration={0.7}>
          <div className="mb-16 flex items-center justify-between border-b border-olive-dark/15 pb-5 lg:mb-24">
            <p className="font-body text-[10px] uppercase tracking-[0.2em] text-olive">01 / The Overview</p>

            <span className="font-body text-[10px] uppercase tracking-[0.2em] text-olive">About The Project</span>
          </div>
        </ScrollReveal>

        {/* Main Content */}
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
          {/* Heading */}
          <div className="lg:col-span-7">
            <ScrollReveal y={48} duration={1.1} delay={0.1}>
              <h2
                id="overview-title"
                className="font-display text-[clamp(3.5rem,6vw,7rem)] leading-[0.95] tracking-[-0.055em]"
              >
                {heading}
                <br />
                <span className="italic text-[#737B58]">{highlight}</span>
              </h2>
            </ScrollReveal>
          </div>

          {/* Description */}
          <div className="flex flex-col justify-end gap-6 lg:col-span-5 lg:pb-2">
            {paragraphs.map((paragraph, index) => (
              <ScrollReveal key={index + 1} y={24} duration={0.9} delay={index * 0.12}>
                <p className="font-body max-w-lg text-sm leading-8 text-olive-dark/75 sm:text-base">{paragraph}</p>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* Overview Points */}
        <div className="mt-20 grid gap-10 border-t border-olive-dark/15 pt-10 sm:grid-cols-3 lg:mt-28 lg:gap-12 lg:pt-12">
          {points.map((point, index) => (
            <ScrollReveal key={point.number} y={32} duration={0.95} delay={index * 0.12}>
              <div>
                <span className="font-body text-[10px] tracking-[0.16em] text-olive">{point.number}</span>

                <h3 className="font-display mt-6 text-3xl tracking-[-0.035em] sm:text-4xl">{point.title}</h3>

                <p className="font-body mt-4 max-w-sm text-sm leading-7 text-olive-dark/70">{point.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
