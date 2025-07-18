import React from "react";
import { technicalSkillsData } from "@/data/technicalSkills";

export default function TechnicalSkills() {
  return (
    <section id="technical-skills">
      <div className="lg:mb-8">
        {/* Judul ketika ukuran layar mobile */}
        <div className="lg:hidden block w-fit mb-3">
          <h2 className="font-bold text-xs text-white mb-2">TECHNICAL SKILLS</h2>
          <div className="w-full h-0.5 bg-white rounded-4xl" />
        </div>

        {/* List technical skills */}
        <div className="lg:ps-6 lg:py-6">
          {technicalSkillsData?.map((item, index, { length }) => (
            <div key={index}>
              <div className="lg:grid lg:grid-cols-12 lg:gap-8 lg:pe-6">
                {/* Judul */}
                <div className="lg:col-span-3 max-lg:mb-3">
                  <h3 className="lg:text-base text-xs text-[#EBEDF0]/80">{item.title}</h3>
                </div>

                {/* Tech stack */}
                <div className="lg:col-span-9 flex flex-wrap items-center gap-3">
                  {item.tech.map((tech, i) => (
                    <div key={i} className="card-tech">
                      <p className="font-bold lg:text-xs text-2xs text-[#2489FF]">{tech}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Garis pembatas antar konten */}
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

      {/* Garis pembatas */}
      <div className="lg:block hidden w-full h-[0.5px] bg-[#EBEDF0]/40" />
    </section>
  );
}
