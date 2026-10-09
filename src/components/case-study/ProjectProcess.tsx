import ScrollReveal from "@/components/ui/ScrollReveal";

interface ProcessColumn {
  label: string;
  title: string;
  description: string;
  points: string[];
}

interface ProjectProcessProps {
  heading: string;
  highlight: string;
  columns: ProcessColumn[];
}

export default function ProjectProcess({ heading, highlight, columns }: Readonly<ProjectProcessProps>) {
  return (
    <section
      id="process"
      aria-labelledby="process-title"
      className="bg-[#F6F2E9] px-6 py-20 text-olive-dark sm:px-10 lg:px-14 lg:py-32"
    >
      <div className="mx-auto max-w-350">
        {/* Section Header */}
        <ScrollReveal y={16} duration={0.7}>
          <div className="mb-16 flex items-center justify-between border-b border-olive-dark/15 pb-5 lg:mb-24">
            <p className="font-body text-[10px] uppercase tracking-[0.2em] text-olive">02 / The Process</p>

            <span className="font-body text-[10px] uppercase tracking-[0.2em] text-olive">Behind The Work</span>
          </div>
        </ScrollReveal>

        {/* Heading */}
        <div className="mb-16 max-w-5xl lg:mb-24">
          <ScrollReveal y={48} duration={1.1} delay={0.1}>
            <h2
              id="process-title"
              className="font-display text-[clamp(3.5rem,6vw,7rem)] leading-[0.95] tracking-[-0.055em]"
            >
              {heading}
              <br />
              <span className="italic text-[#737B58]">{highlight}</span>
            </h2>
          </ScrollReveal>
        </div>

        {/* Challenge & Approach */}
        <div className="grid border-t border-olive-dark/15 lg:grid-cols-2">
          {columns.map((column, index) => (
            <div
              key={column.label}
              className={`py-10 lg:py-14 ${
                index === 0 ? "border-b border-olive-dark/15 lg:border-b-0 lg:border-r lg:pr-16" : "lg:pl-16"
              }`}
            >
              {/* Label */}
              <ScrollReveal y={16} duration={0.7} delay={index * 0.12}>
                <p className="font-body mb-8 text-[10px] uppercase tracking-[0.2em] text-olive">{column.label}</p>
              </ScrollReveal>

              {/* Title */}
              <ScrollReveal y={32} duration={0.95} delay={index * 0.12}>
                <h3 className="font-display max-w-lg text-[clamp(2.5rem,4vw,4.5rem)] leading-[0.95] tracking-[-0.045em]">
                  {column.title}
                </h3>
              </ScrollReveal>

              {/* Description */}
              <ScrollReveal y={24} duration={0.9} delay={0.1 + index * 0.12}>
                <p className="font-body mt-8 max-w-lg text-sm leading-8 text-olive-dark/75 sm:text-base">
                  {column.description}
                </p>
              </ScrollReveal>

              {/* Key Points */}
              <div className="mt-12 border-t border-olive-dark/15">
                {column.points.map((point, pointIndex) => (
                  <div key={point} className="flex items-start gap-5 border-b border-olive-dark/15 py-5">
                    <ScrollReveal y={16} duration={0.75} delay={pointIndex * 0.08}>
                      <span className="font-body pt-1 text-[10px] tracking-[0.14em] text-olive">
                        {String(pointIndex + 1).padStart(2, "0")}
                      </span>
                    </ScrollReveal>

                    <ScrollReveal y={20} duration={0.85} delay={0.08 + pointIndex * 0.08} className="min-w-0 flex-1">
                      <p className="font-body text-sm leading-7 text-olive-dark/80">{point}</p>
                    </ScrollReveal>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Closing Detail */}
        <ScrollReveal variant="fade-in" duration={1} delay={0.1}>
          <div className="mt-12 flex items-center justify-between border-t border-olive-dark/15 pt-5 lg:mt-10">
            <p className="font-body text-[10px] uppercase tracking-[0.18em] text-olive">From Concept to Experience</p>

            <span aria-hidden="true" className="font-display text-2xl italic text-[#737B58]">
              Harie.
            </span>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
