import React from "react";
import Image from "next/image";
import ArrowRight from "../../../public/icons/arrow-right.svg";
import Chain from "../../../public/icons/link.svg";
import Project1 from "../../../public/images/project-1.png";
import Link from "next/link";

const data = [
  {
    image: Project1,
    title: "Build a lorem lipsum",
    description:
      "Developed a Portfolio Maker web application for a university's Career Development Center to assist alumni in easily creating personal portfolios for professional use.",
    web_name: { name: "Mitra Group", link: "" },
    tech: ["React.js"],
  },
  {
    image: Project1,
    title: "Build a lorem lipsum",
    description:
      "Developed a Portfolio Maker web application for a university's Career Development Center to assist alumni in easily creating personal portfolios for professional use.",
    web_name: { name: "Mitra Group", link: "" },
    tech: ["React.js"],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="flex flex-col lg:gap-3">
      <h1 className="lg:hidden block font-bold text-xs text-white">PROJECTS</h1>
      {data.map((item, index) => (
        <div
          key={index}
          className="lg:grid lg:grid-cols-12 lg:gap-8 lg:p-6 max-lg:py-3 max-lg:flex max-lg:flex-col-reverse max-lg:gap-3 hover-gradient-border"
        >
          <div className="lg:col-span-3 w-full lg:aspect-[155/30] max-lg:w-[116.5px] max-lg:h-22.5 lg:shrink-0">
            <Image
              src={item.image}
              alt="project-1"
              width={0}
              height={0}
              sizes="100vw"
              className="object-cover rounded-lg"
            />
          </div>

          <div className="lg:col-span-9 flex flex-col lg:gap-6 gap-3">
            <div>
              <h1 className="font-bold lg:text-2xl text-xs text-white lg:mb-3 mb-2">{item.title}</h1>
              <p className="text-justify lg:text-base text-2xs text-white">{item.description}</p>
            </div>
            <div className="flex items-center gap-2">
              <Chain />
              <Link href={item.web_name.link} className="font-bold lg:text-xs text-2xs text-white">
                {item.web_name.name}
              </Link>
            </div>
            <div className="flex items-center lg:gap-3 gap-2">
              {item.tech.map((tech, i) => (
                <div key={i} className="card-tech">
                  <p className="font-bold lg:text-xs text-2xs text-[#2489FF]">{tech}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}

      <Link
        href="projects"
        className="flex items-center gap-3 text-white lg:px-6 max-lg:mb-3 group transition-all hover:text-[#2489FF]"
      >
        <span className="lg:text-base text-xs">View Full Projects</span>{" "}
        <span className="group-hover:translate-x-1.5">
          <ArrowRight className="w-3.5 h-3.5 text-white group-hover:text-[#2489FF]" />
        </span>
      </Link>
    </section>
  );
}
