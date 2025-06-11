import React from "react";

// Data
import { aboutData } from "@/data/about";

export default function About() {
  return (
    <section id="about">
      <div className="lg:mb-8 lg:px-6">
        {/* Judul ketika ukuran layara mobile */}
        <div className="lg:hidden block w-fit mb-3">
          <h2 className="font-bold text-xs text-white mb-2">ABOUT</h2>
          <div className="w-full h-0.5 bg-white rounded-4xl" />
        </div>

        {/* Text about */}
        <p className="text-justify lg:text-base text-2xs text-white lg:py-6">{aboutData}</p>
      </div>

      {/* Garis pemisah */}
      <div className="lg:block hidden w-full h-[0.5px] bg-[#EBEDF0]/40" />
    </section>
  );
}
