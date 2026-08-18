"use client";

const SKILL_GROUPS = [
  {
    number: "01",
    title: "Core Web Development",
    description: "The foundations behind every interface I build.",
    skills: ["HTML5", "CSS", "JavaScript", "TypeScript"],
  },
  {
    number: "02",
    title: "Frontend Frameworks & Libraries",
    description: "The tools I use to build scalable, interactive products.",
    skills: [
      "React.js",
      "Next.js",
      "Vue.js",
      "Tailwind CSS",
      "Material UI",
      "ShadCN UI",
      "Recharts",
      "Framer Motion",
      "Pinia",
      "Zustand",
      "Redux",
      "Redux Toolkit",
      "React Router",
      "React Hook Form",
      "Zod",
      "Yup",
    ],
  },
  {
    number: "03",
    title: "API & Data Handling",
    description: "Connecting interfaces with reliable data flows.",
    skills: ["REST APIs", "Axios", "TanStack Query", "SWR", "RTK Query"],
  },
  {
    number: "04",
    title: "Tools & Collaboration",
    description: "The tools that keep development and collaboration moving.",
    skills: ["Figma", "Git", "GitHub", "Postman", "Swagger", "Scrum", "Agile Methodologies"],
  },
];

export default function Skills() {
  return (
    <section className="relative overflow-hidden lg:py-32 text-white">
      <div className="mx-auto w-full max-w-7xl px-8 md:px-10">
        {/* Header */}
        <div className="mb-12 lg:mb-24 flex flex-col items-center justify-center text-center">
          <h2 className="w-full md:max-w-5xl text-4xl font-medium leading-[1.05] tracking-tight md:text-6xl">
            <span>A technical stack built for</span> <br />{" "}
            <span className="text-white/50 text-nowrap text-3xl">thoughtful interfaces.</span>
          </h2>

          <p className="mt-8 max-w-xl text-base leading-relaxed text-white/70">
            From frontend architecture and state management to APIs, tooling, and collaboration.
          </p>
        </div>

        {/* Skills */}
        <div className="border-t border-white/20">
          {SKILL_GROUPS.map((group) => (
            <div
              key={group.number}
              className="
            grid gap-8
            border-b border-white/20
            py-12
            md:grid-cols-12
            md:gap-10
          "
            >
              {/* Number */}
              <div className="md:col-span-1">
                <span className="font-mono text-xs text-white/70">{group.number}</span>
              </div>

              {/* Category */}
              <div className="md:col-span-4">
                <h3 className="text-lg font-medium tracking-tight">{group.title}</h3>

                <p className="mt-3 max-w-xs text-sm leading-relaxed text-white/70">{group.description}</p>
              </div>

              {/* Skills */}
              <div className="md:col-span-7">
                <div className="flex flex-wrap gap-x-6 gap-y-3">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="
                    group
                    relative
                    text-sm
                    text-white/70
                    transition-colors
                    duration-300
                    hover:text-white

                    after:absolute
                    after:-bottom-1
                    after:left-0
                    after:h-px
                    after:w-0
                    after:bg-[#F5F0E6]
                    after:transition-all
                    after:duration-300
                    hover:after:w-full
                  "
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
