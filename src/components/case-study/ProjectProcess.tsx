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
        <div className="mb-16 flex items-center justify-between border-b border-olive-dark/15 pb-5 lg:mb-24">
          <p className="font-body text-[10px] uppercase tracking-[0.2em] text-olive">02 / The Process</p>

          <span className="font-body text-[10px] uppercase tracking-[0.2em] text-olive">Behind The Work</span>
        </div>

        {/* Heading */}
        <div className="mb-16 max-w-5xl lg:mb-24">
          <h2
            id="process-title"
            className="font-display text-[clamp(3.5rem,6vw,7rem)] leading-[0.95] tracking-[-0.055em]"
          >
            {heading}
            <br />
            <span className="italic text-[#737B58]">{highlight}</span>
          </h2>
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
              <p className="font-body mb-8 text-[10px] uppercase tracking-[0.2em] text-olive">{column.label}</p>

              {/* Title */}
              <h3 className="font-display max-w-lg text-[clamp(2.5rem,4vw,4.5rem)] leading-[0.95] tracking-[-0.045em]">
                {column.title}
              </h3>

              {/* Description */}
              <p className="font-body mt-8 max-w-lg text-sm leading-8 text-olive-dark/75 sm:text-base">
                {column.description}
              </p>

              {/* Key Points */}
              <div className="mt-12 border-t border-olive-dark/15">
                {column.points.map((point, pointIndex) => (
                  <div key={point} className="flex items-start gap-5 border-b border-olive-dark/15 py-5">
                    <span className="font-body pt-1 text-[10px] tracking-[0.14em] text-olive">
                      {String(pointIndex + 1).padStart(2, "0")}
                    </span>

                    <p className="font-body text-sm leading-7 text-olive-dark/80">{point}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Closing Detail */}
        <div className="mt-12 flex items-center justify-between border-t border-olive-dark/15 pt-5 lg:mt-10">
          <p className="font-body text-[10px] uppercase tracking-[0.18em] text-olive">From Concept to Experience</p>

          <span aria-hidden="true" className="font-display text-2xl italic text-[#737B58]">
            Harie.
          </span>
        </div>
      </div>
    </section>
  );
}
