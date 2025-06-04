import React from "react";

export default function About() {
  return (
    <section id="about">
      <div className="lg:mb-8 lg:px-6">
        <div className="lg:hidden block w-fit mb-3">
          <h1 className="font-bold text-xs text-white mb-2">ABOUT</h1>
          <div className="w-full h-0.5 bg-white rounded-4xl" />
        </div>

        <p className="text-justify lg:text-base text-2xs text-white lg:py-6">
          I am a Front-End Developer focused on building web applications using React.js and Next.js. Committed to
          creating responsive, well-structured, and user-friendly interfaces, I consistently write clean and
          maintainable code. With a strong passion for learning, I actively keep up with the latest frontend
          technologies to improve application performance and deliver an optimal user experience.
        </p>
      </div>

      <div className="lg:block hidden w-full h-[0.5px] bg-[#EBEDF0]/40" />
    </section>
  );
}
