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
    <section id="experience">
      <h1 className="lg:hidden block font-bold text-xs text-white">EXPERIENCE</h1>
      <div className="flex flex-col lg:gap-3 lg:mb-6">
        {data.map((item, index) => (
          <div key={index} className="lg:grid lg:grid-cols-12 lg:gap-8 lg:p-6 max-lg:py-3 hover-gradient-border">
            <div className="lg:col-span-3 max-lg:mb-0.5">
              <time className="xl:text-nowrap lg:text-base text-xs text-[#EBEDF0]/80">
                {item.start_date} - {item.end_date}
              </time>
            </div>
            <div className="lg:col-span-9 flex flex-col lg:gap-6 gap-3">
              <div className="flex flex-col lg:gap-3 gap-1.5">
                <h1 className="font-bold lg:text-2xl text-xs text-white">{item.title}</h1>
                <h2 className="lg:text-xl text-xs text-[#EBEDF0]/80 max-lg:mb-1.5">{item.company}</h2>
                <p className="lg:text-base text-2xs text-justify text-white">{item.description}</p>
              </div>
              <div className="flex flex-wrap items-center gap-4">
                {item.web_name.map((web, index) => (
                  <Link key={index} href={web.link} target="_blank" className="flex items-center gap-2">
                    <Chain />
                    <p className="font-bold lg:text-xs text-2xs text-white">{web.name}</p>
                  </Link>
                ))}
              </div>
              <div className="flex flex-wrap items-center gap-3">
                {item.tech.map((tech, index) => (
                  <div key={index} className="card-tech">
                    <p className="font-bold lg:text-xs text-2xs text-[#2489FF]">{tech}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <Link
        href="#"
        className="flex items-center gap-3 text-white lg:px-6 mb-3 group transition-all hover:text-[#2489FF]"
      >
        <span className="lg:text-base text-xs">View Full Resume</span>{" "}
        <span className="group-hover:translate-x-1.5 group-hover:-translate-y-0.5 -rotate-45">
          <ArrowRight className="w-3.5 h-3.5 text-white group-hover:text-[#2489FF]" />
        </span>
      </Link>
    </section>
  );
}
