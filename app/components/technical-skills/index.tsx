import React from "react";

const data = [
  {
    title: "Core Web Development",
    tech: ["HTML5", "CSS", "Javascript", "Typescript"],
  },
  {
    title: "Frontend Frameworks & Libraries",
    tech: [
      "React.js",
      "Next.js",
      "Tailwind",
      "Material UI",
      "React Router",
      "Redux / Redux Toolkit",
      "React Hook Form",
      "Zod",
      "Rechart",
      "Framer Motion",
    ],
  },
  {
    title: "API & Data Handling",
    tech: ["REST API", "Fetch", "Axios", "Tanstack Query (React Query)", "SWR", "RTK Query", "Firebase"],
  },
  {
    title: "Tools & Collaboration",
    tech: ["Figma", "Git", "Github", "Scrum", "Agile Methodologies"],
  },
];

export default function TechnicalSkills() {
  return (
    <section id="technical-skills">
      <h1 className="lg:hidden block font-bold text-xs text-white">TECHNICAL SKILLS</h1>
      {data.map((item, index, { length }) => (
        <div key={index}>
          <div className="lg:grid lg:grid-cols-12 lg:gap-8 lg:p-6 max-lg:py-3">
            <div className="lg:col-span-3 max-lg:mb-3">
              <p className="lg:text-base text-xs text-[#EBEDF0]/80">{item.title}</p>
            </div>
            <div className="lg:col-span-9 flex flex-wrap items-center gap-3">
              {item.tech.map((tech, i) => (
                <div key={i} className="card-tech">
                  <p className="font-bold lg:text-xs text-2xs text-[#2489FF]">{tech}</p>
                </div>
              ))}
            </div>
          </div>

          {length - 1 === index ? null : (
            <div className="lg:px-6">
              <div className="w-full h-[0.5px] rounded-4xl bg-[#EBEDF0]/40" />
            </div>
          )}
        </div>
      ))}
    </section>
  );
}
