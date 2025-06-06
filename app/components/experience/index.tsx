import React from "react";
import Chain from "../../../public/icons/link.svg";
import Link from "next/link";
import { experienceData } from "@/data/experience";

export default function Experience() {
  return (
    <section id="experience">
      <div className="lg:mb-8">
        <div className="lg:hidden block w-fit">
          <h2 className="font-bold text-xs text-white mb-2">EXPERIENCE</h2>
          <div className="w-full h-0.5 bg-white rounded-4xl" />
        </div>

        <div className="flex flex-col lg:gap-3">
          {experienceData?.map((item, index, { length }) => (
            <div key={index}>
              <div className="lg:grid lg:grid-cols-12 lg:gap-8 lg:p-6 max-lg:py-3 hover-gradient-border">
                <div className="lg:col-span-3 max-lg:mb-0.5">
                  <time className="xl:text-nowrap lg:text-base text-xs text-[#EBEDF0]/80">
                    {item.start_date} - {item.end_date}
                  </time>
                </div>
                <div className="lg:col-span-9 flex flex-col lg:gap-6 gap-3">
                  <div className="flex flex-col lg:gap-3 gap-1.5">
                    <h3 className="font-bold lg:text-2xl text-xs text-white">{item.title}</h3>
                    <p className="lg:text-xl text-xs text-[#EBEDF0]/80 max-lg:mb-1.5">{item.company}</p>
                    <div
                      dangerouslySetInnerHTML={{ __html: item.description }}
                      className="lg:text-base text-2xs text-justify text-white [&>ul]:list-inside [&>ul]:list-disc"
                    />
                  </div>
                  <div className="flex flex-wrap items-center gap-4">
                    {item?.demo?.map((web, index) => (
                      <Link key={index} href={web?.link} target="_blank" className="flex items-center gap-2">
                        <Chain />
                        <p className="font-bold lg:text-xs text-2xs text-white">{web?.name}</p>
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

              {length - 1 === index ? null : (
                <div className="lg:grid lg:grid-cols-12 lg:gap-8 lg:pt-3">
                  <div className="lg:col-span-3 lg:block hidden" />
                  <div className="lg:col-span-9 max-lg:my-3 w-full h-[0.5px] bg-[#EBEDF0]/40" />
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
