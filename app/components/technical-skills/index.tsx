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
      {data.map((item, index, { length }) => (
        <div key={index}>
          <div className="grid grid-cols-12 gap-8 p-6">
            <div className="col-span-3">
              <p className="text-[#EBEDF0]/80">{item.title}</p>
            </div>
            <div className="col-span-9 flex flex-wrap items-center gap-3">
              {item.tech.map((tech, i) => (
                <div key={i} className=" bg-[#2489FF]/25 rounded px-1.5 py-1">
                  <p className="font-bold text-xs text-[#2489FF]">{tech}</p>
                </div>
              ))}
            </div>
          </div>

          {length - 1 === index ? null : (
            <div className="px-6">
              <div className="w-full h-[0.5px] rounded-4xl bg-[#EBEDF0]/40" />
            </div>
          )}
        </div>
      ))}
    </section>
  );
}
