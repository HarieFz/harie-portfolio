import { aboutData } from "@/data/about";
import React from "react";

export default function About() {
  return (
    <section id="about">
      <div className="lg:mb-8 lg:px-6">
        <div className="lg:hidden block w-fit mb-3">
          <h2 className="font-bold text-xs text-white mb-2">ABOUT</h2>
          <div className="w-full h-0.5 bg-white rounded-4xl" />
        </div>

        <p className="text-justify lg:text-base text-2xs text-white lg:py-6">{aboutData}</p>
      </div>

      <div className="lg:block hidden w-full h-[0.5px] bg-[#EBEDF0]/40" />
    </section>
  );
}
