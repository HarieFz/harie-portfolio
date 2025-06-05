"use client";

import React from "react";
import ArrowLeft from "../../public/icons/arrow-left.svg";
import Chain from "../../public/icons/link.svg";
import Image from "next/image";
import Link from "next/link";
import { slugify } from "@/utils/slugify";
import { projectsData } from "@/data/projects";

export default function Projects() {
  return (
    <>
      <Link href="/" className="flex items-center gap-3 mb-3">
        <ArrowLeft className="text-[14px] text-white" />
        <p className="lg:text-2xl text-xs text-white">Harie Fairuz Zaki</p>
      </Link>

      <h1 className="font-bold lg:text-[40px] text-xl text-white">All Projects</h1>

      <div className="w-full h-[0.5px] lg:my-8 my-3 bg-[#EBEDF0]/40" />

      <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-8 gap-3">
        {projectsData.map((item, index) => (
          <Link
            href={`/projects/${slugify(item.title)}`}
            key={index}
            className="lg:grid lg:grid-cols-12 lg:gap-8 lg:p-6 p-3 max-lg:py-3 gradient-border"
          >
            <div className="hidden lg:block col-span-3 w-full aspect-[155/120] shrink-0 rounded-lg">
              <Image
                src={item.thumbnail}
                alt={`img-${index + 1}`}
                width={0}
                height={0}
                sizes="100vw"
                className="w-full h-full object-cover object-top rounded-[inherit]"
              />
            </div>

            <div className="lg:col-span-9 flex flex-col lg:gap-6 gap-3">
              <div>
                <h1 className="font-bold lg:text-2xl text-xs text-white lg:mb-3 mb-2">{item.title}</h1>
                <div className="lg:hidden block w-[116.5px] h-22.5 mb-3">
                  <Image
                    src={item.thumbnail}
                    alt="project"
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="w-full h-full object-cover object-top rounded-lg"
                  />
                </div>

                <div
                  dangerouslySetInnerHTML={{ __html: item.description }}
                  className="text-justify hyphens-auto lg:text-base text-2xs text-white line-clamp-4"
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
          </Link>
        ))}
      </div>
    </>
  );
}
