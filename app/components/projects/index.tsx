import React from "react";
import Image from "next/image";
import ArrowRight from "../../../public/icons/arrow-right.svg";
import Chain from "../../../public/icons/link.svg";
import Link from "next/link";
import { projectsData } from "@/data/projects";
import { slugify } from "@/utils/slugify";

export default function Projects() {
  return (
    <section id="projects">
      <div className="lg:mb-8 flex flex-col gap-3">
        <div className="lg:hidden block w-fit">
          <h2 className="font-bold text-xs text-white mb-2">PROJECTS</h2>
          <div className="w-full h-0.5 bg-white rounded-4xl" />
        </div>

        {projectsData.slice(0, 3).map((item, index, { length }) => (
          <Link href={`/projects/${slugify(item.title)}`} key={index}>
            <div className="lg:grid lg:grid-cols-12 lg:gap-8 lg:p-6 max-lg:py-3 hover-gradient-border">
              <div className="realtive hidden lg:block col-span-3 aspect-[155/120] rounded-lg">
                <Image
                  src={item.thumbnail}
                  alt={`img-${index + 1}`}
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="w-full h-full object-cover object-top rounded-[inherit]"
                  loading="lazy"
                />
              </div>

              <div className="lg:col-span-9 flex flex-col lg:gap-6 gap-3">
                <div>
                  <h3 className="font-bold lg:text-2xl text-xs text-white lg:mb-3 mb-2">{item.title}</h3>
                  <div className="lg:hidden block w-[116.5px] h-22.5 mb-3 rounded-lg">
                    <Image
                      src={item.thumbnail}
                      alt={`img-${index + 1}`}
                      width={0}
                      height={0}
                      sizes="100vw"
                      className="w-full h-full object-cover object-top rounded-[inherit]"
                      loading="lazy"
                    />
                  </div>

                  <div
                    dangerouslySetInnerHTML={{ __html: item.description }}
                    className="text-justify lg:text-base text-2xs text-white line-clamp-4"
                  ></div>
                </div>
                <div className="flex items-center gap-2">
                  <Chain />
                  <p className="font-bold lg:text-xs text-2xs text-white">{item?.demo?.name}</p>
                </div>
                <div className="flex flex-wrap items-center lg:gap-3 gap-2">
                  {item.tech.map((tech, i) => (
                    <div key={i} className="card-tech">
                      <p className="font-bold lg:text-xs text-2xs text-[#2489FF]">{tech}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {length - 1 === index ? null : (
              <div className="max-lg:hidden grid grid-cols-12 gap-8 px-6 pt-3">
                <div className="col-span-3" />
                <div className="col-span-9 w-full h-[0.5px] bg-[#EBEDF0]/40" />
              </div>
            )}

            <div className="lg:hidden block pt-3">
              <div className="lg:col-span-9 w-full h-[0.5px] bg-[#EBEDF0]/40" />
            </div>
          </Link>
        ))}

        <Link
          href="projects"
          className="flex items-center gap-3 lg:px-6 font-medium text-white hover:text-[#2489FF] underline underline-offset-4 group transition-all"
        >
          <span className="lg:text-base text-2xs">View All {projectsData.length} Projects</span>{" "}
          <span className="group-hover:translate-x-1.5">
            <ArrowRight className="lg:w-3.5 lg:h-3.5 w-2.5 h-2.5 text-white group-hover:text-[#2489FF]" />
          </span>
        </Link>
      </div>

      <div className="lg:block hidden w-full h-[0.5px] bg-[#EBEDF0]/40" />
    </section>
  );
}
