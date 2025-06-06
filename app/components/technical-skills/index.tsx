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
    tech: ["REST API", "Fetch", "Axios", "TanStack Query (React Query)", "SWR", "RTK Query", "Firebase"],
  },
  {
    title: "Tools & Collaboration",
    tech: ["Figma", "Git", "Github", "Postman", "Swagger", "Scrum", "Agile Methodologies"],
  },
];

export default function TechnicalSkills() {
  return (
    <section id="technical-skills">
      <div className="lg:mb-8">
        <div className="lg:hidden block w-fit mb-3">
          <h2 className="font-bold text-xs text-white mb-2">TECHNICAL SKILLS</h2>
          <div className="w-full h-0.5 bg-white rounded-4xl" />
        </div>

        <div className="lg:ps-6 lg:py-6">
          {data.map((item, index, { length }) => (
            <div key={index}>
              <div className="lg:grid lg:grid-cols-12 lg:gap-8 lg:pe-6">
                <div className="lg:col-span-3 max-lg:mb-3">
                  <h3 className="lg:text-base text-xs text-[#EBEDF0]/80">{item.title}</h3>
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
                <div className="lg:grid lg:grid-cols-12 lg:gap-8 lg:my-6 my-3">
                  <div className="lg:col-span-3 lg:block hidden" />
                  <div className="lg:col-span-9 w-full h-[0.5px] bg-[#EBEDF0]/40" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="lg:block hidden w-full h-[0.5px] bg-[#EBEDF0]/40" />
    </section>
  );
}
