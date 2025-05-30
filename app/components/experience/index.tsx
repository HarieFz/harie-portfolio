import React from "react";
import ArrowRight from "../../../public/icons/arrow-right.svg";
import Chain from "../../../public/icons/link.svg";
import Link from "next/link";

const data = [
  {
    start_date: "Apr 2024",
    end_date: "Present",
    title: "Front-End Web Developer",
    company: "PT. Sinergi Nusantara Integrasi",
    description:
      "Experienced Frontend Developer skilled in building web applications with React.js and Next.js, focusing on modular and reusable components. Collaborated with backend teams and UI/UX designers to create functional, visually appealing interfaces. Proficient in state management (Redux/Context API), REST API integration, and styling with Tailwind CSS. Worked across multiple industries including education, clinic and outsourcing.",
    web_name: [
      { name: "Mitra Group", link: "https://mitragroup.co.id/" },
      { name: "Rekrutmen Mitra Group", link: "https://rekrutmen.mitragroup.co.id/job-vacancy/public" },
      { name: "Naara", link: "https://naara.id/" },
      { name: "Tunas Unggul", link: "" },
    ],
    tech: ["React.js", "Next.js", "TailwindCSS", "Material UI", "Redux", "TanSatck Query", "Axios", "REST API"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="flex flex-col gap-3 mb-6">
      {data.map((item, index) => (
        <div key={index} className="grid grid-cols-12 gap-8 p-6 hover-gradient-border">
          <div className="col-span-3">
            <time className="text-nowrap text-[#EBEDF0]/80">
              {item.start_date} - {item.end_date}
            </time>
          </div>
          <div className="col-span-9 flex flex-col gap-6">
            <div className="flex flex-col gap-3">
              <h1 className="font-bold text-2xl text-white">{item.title}</h1>
              <h2 className="text-xl text-[#EBEDF0]/80">{item.company}</h2>
              <p className="text-justify text-white">{item.description}</p>
            </div>
            <div className="flex items-center gap-4">
              {item.web_name.map((web, index) => (
                <Link key={index} href={web.link} target="_blank" className="flex items-center gap-2">
                  <Chain />
                  <p className="font-bold text-xs text-white">{web.name}</p>
                </Link>
              ))}
            </div>
            <div className="flex flex-wrap items-center gap-3">
              {item.tech.map((tech, index) => (
                <div key={index} className="bg-[#2489FF]/25 rounded px-1.5 py-1">
                  <p className="font-bold text-xs text-[#2489FF]">{tech}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}

      <Link href="#" className="flex items-center gap-3 text-white px-6 group transition-all hover:text-[#2489FF]">
        View Full Resume{" "}
        <span className="group-hover:translate-x-1.5 group-hover:-translate-y-0.5 -rotate-45">
          <ArrowRight className="w-3.5 h-3.5 text-white group-hover:text-[#2489FF]" />
        </span>
      </Link>
    </section>
  );
}
