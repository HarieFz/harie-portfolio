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
        <div className="mb-16 flex items-center justify-between border-b border-olive-dark/15 pb-5 lg:mb-24">
          <p className="font-body text-[10px] uppercase tracking-[0.2em] text-olive">05 / Tech Stack & Reflection</p>

          <span className="font-body text-[10px] uppercase tracking-[0.2em] text-olive">Behind The Build</span>
        </div>

        {/* Heading */}
        <div className="mb-16 grid gap-8 lg:mb-24 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <h2
              id="reflection-title"
              className="font-display text-[clamp(3.5rem,6vw,7rem)] leading-[0.95] tracking-[-0.055em]"
            >
              {heading}
              <br />
              <span className="italic text-[#737B58]">{highlight}</span>
            </h2>
          </div>

          <div className="flex items-end lg:col-span-4">
            <p className="font-body max-w-sm text-sm leading-8 text-olive-dark/75 sm:text-base">{description}</p>
          </div>
        </div>

        {/* Content */}
        <div className="grid border-t border-olive-dark/15 lg:grid-cols-12">
          {/* Tech Stack */}
          <div className="py-10 lg:col-span-6 lg:border-r lg:border-olive-dark/15 lg:py-14 lg:pr-16">
            <p className="font-body mb-10 text-[10px] uppercase tracking-[0.2em] text-olive">01 / Technologies</p>

            <div className="border-t border-olive-dark/15">
              {techStack.map((group, index) => (
                <div
                  key={group.category}
                  className="grid gap-3 border-b border-olive-dark/15 py-6 sm:grid-cols-12 sm:gap-6"
                >
                  <span className="font-body text-[10px] tracking-[0.14em] text-olive sm:col-span-1">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div className="sm:col-span-11">
                    <h3 className="font-display text-2xl tracking-[-0.035em] sm:text-3xl">{group.category}</h3>

                    <p className="font-body mt-3 text-sm leading-7 text-olive-dark/70">
                      {group.technologies.join(" · ")}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Reflection */}
          <div className="border-t border-olive-dark/15 py-10 lg:col-span-6 lg:border-t-0 lg:py-14 lg:pl-16">
            <p className="font-body mb-10 text-[10px] uppercase tracking-[0.2em] text-olive">02 / Reflection</p>

            <h3 className="font-display max-w-lg text-[clamp(2.5rem,4vw,4.5rem)] leading-[0.95] tracking-[-0.045em]">
              {reflection.title}
            </h3>

            <div className="mt-10 space-y-6">
              {reflection.paragraphs.map((paragraph, index) => (
                <p key={index + 1} className="font-body max-w-lg text-sm leading-8 text-olive-dark/75 sm:text-base">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>

        {/* Section Footer */}
        <div className="mt-12 flex items-center justify-between border-t border-olive-dark/15 pt-5 lg:mt-16">
          <p className="font-body text-[10px] uppercase tracking-[0.18em] text-olive">
            Always Learning, Always Building
          </p>

          <span className="font-display text-2xl italic text-[#737B58]">Harie.</span>
        </div>
      </div>
    </section>
  );
}
