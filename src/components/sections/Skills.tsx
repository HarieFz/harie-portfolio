import { ArrowDownRight, Asterisk } from "lucide-react";

import ScrollReveal from "@/components/ui/ScrollReveal";

const skillGroups = [
  {
    number: "01",
    title: "Core & Frontend",
    skills: ["HTML5", "CSS", "JavaScript", "TypeScript", "React", "Next.js", "Vue.js"],
  },
  {
    number: "02",
    title: "UI & State Management",
    skills: [
      "Tailwind CSS",
      "Material UI",
      "shadcn/ui",
      "Recharts",
      "Framer Motion",
      "Pinia",
      "Zustand",
      "Redux Toolkit",
      "React Router",
    ],
  },
  {
    number: "03",
    title: "Forms, APIs & Data",
    skills: ["REST APIs", "Axios", "TanStack Query", "SWR", "RTK Query", "React Hook Form", "Zod", "Yup"],
  },
  {
    number: "04",
    title: "Tools & Collaboration",
    skills: ["Figma", "Git", "GitHub", "Postman", "Swagger", "Scrum", "Agile Methodologies"],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      aria-labelledby="skills-title"
      className="relative overflow-hidden bg-[#F6F2E9] px-6 py-20 text-[#222819] sm:px-10 lg:px-14 lg:py-32"
    >
      <div className="mx-auto max-w-400">
        {/* Section Header */}
        <ScrollReveal y={16} duration={0.7}>
          <div className="mb-14 flex items-center justify-between border-b border-[#222819]/15 pb-5 lg:mb-20">
            <p className="font-manrope text-[10px] uppercase tracking-[0.2em] text-[#535B43]">
              05 / Skills & Expertise
            </p>

            <Asterisk size={24} strokeWidth={1.2} aria-hidden="true" />
          </div>
        </ScrollReveal>

        {/* Heading */}
        <div className="mb-16 max-w-5xl lg:mb-24">
          <ScrollReveal y={48} duration={1.1} delay={0.1}>
            <h2
              id="skills-title"
              className="font-display text-[clamp(3.5rem,7vw,8rem)] leading-[0.95] tracking-[-0.055em]"
            >
              The tools behind
              <br />
              <span className="italic text-[#737B58]">the craft.</span>
            </h2>
          </ScrollReveal>

          <ScrollReveal y={24} duration={0.9} delay={0.2}>
            <p className="font-manrope mt-8 max-w-md text-sm leading-7 text-[#222819]/70 sm:text-base">
              A collection of technologies and tools I use to build thoughtful, functional, and maintainable digital
              experiences.
            </p>
          </ScrollReveal>
        </div>

        {/* Skills List */}
        <div className="border-t border-[#222819]/15">
          {skillGroups.map((group) => (
            <div
              key={group.number}
              className="group grid gap-5 border-b border-[#222819]/15 py-8 transition-colors duration-300 hover:bg-[#737B58]/5 sm:py-10 lg:grid-cols-12 lg:gap-8 lg:py-12"
            >
              {/* Number */}
              <div className="lg:col-span-1">
                <ScrollReveal y={16} duration={0.7}>
                  <span className="font-manrope text-[10px] tracking-[0.16em] text-[#535B43]">{group.number}</span>
                </ScrollReveal>
              </div>

              {/* Category */}
              <div className="lg:col-span-4">
                <ScrollReveal y={24} duration={0.85} delay={0.08}>
                  <h3 className="font-display text-[clamp(2rem,3vw,3.5rem)] leading-none tracking-[-0.04em] transition-transform duration-300 group-hover:translate-x-1">
                    {group.title}
                  </h3>
                </ScrollReveal>
              </div>

              {/* Technologies */}
              <div className="lg:col-span-7 lg:pt-1">
                <ScrollReveal y={20} duration={0.85} delay={0.16}>
                  <p className="font-manrope max-w-xl text-sm leading-8 text-[#222819]/70 sm:text-base">
                    {group.skills.join(" · ")}
                  </p>
                </ScrollReveal>
              </div>
            </div>
          ))}
        </div>

        {/* Section Footer */}
        <ScrollReveal variant="fade-in" duration={1} delay={0.1}>
          <div className="mt-20 flex flex-wrap items-center justify-between gap-4 border-t border-[#222819]/15 pt-5 lg:mt-32">
            <p className="font-manrope text-[10px] uppercase tracking-[0.16em] text-[#535B43]">
              Continuously Learning, Always Building
            </p>

            <ArrowDownRight size={20} strokeWidth={1.2} aria-hidden="true" />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
