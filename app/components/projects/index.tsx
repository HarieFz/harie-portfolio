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
];

export default function Projects() {
  return (
    <section id="projects" className="flex flex-col gap-3">
      {data.map((item, index) => (
        <div key={index} className="grid grid-cols-12 gap-8 p-6 hover-gradient-border">
          <div className="col-span-3 w-full aspect-[155/30] shrink-0">
            <Image
              src={item.image}
              alt="project-1"
              width={0}
              height={0}
              sizes="100vw"
              className="object-cover rounded-lg"
            />
          </div>

          <div className="col-span-9 flex flex-col gap-6">
            <div>
              <h1 className="font-bold text-2xl text-white mb-3">{item.title}</h1>
              <p className="text-justify text-white">{item.description}</p>
            </div>
            <div className="flex items-center gap-2">
              <Chain />
              <Link href={item.web_name.link} className="font-bold text-xs text-white">
                {item.web_name.name}
              </Link>
            </div>
            <div className="flex items-center gap-3">
              {item.tech.map((tech, i) => (
                <div key={i} className=" bg-[#2489FF]/25 rounded px-1.5 py-1">
                  <p className="font-bold text-xs text-[#2489FF]">{tech}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}

      <Link
        href="projects"
        className="flex items-center gap-3 text-white px-6 group transition-all hover:text-[#2489FF]"
      >
        View Full Projects{" "}
        <span className="group-hover:translate-x-1.5">
          <ArrowRight className="w-3.5 h-3.5 text-white group-hover:text-[#2489FF]" />
        </span>
      </Link>
    </section>
  );
}
