import Image from "next/image";
import React from "react";
import Certificate1 from "../../../public/images/certificate-1.png";
import Certificate2 from "../../../public/images/certificate-2.png";

const data = [
  {
    image: Certificate1,
    title: "How to be an Ideal Top Search ReactJS Front-End Engineer Program",
    issuing_organization: "Alterra Academy",
    description:
      "Developed a Portfolio Maker web application for a university's Career Development Center to assist alumni in easily creating personal portfolios for professional use.",
    tech: ["React.js"],
  },
  {
    image: Certificate2,
    title: "Fullstack Web Development Wave 2",
    issuing_organization: "Binar Academy",
    description:
      "Developed a Portfolio Maker web application for a university's Career Development Center to assist alumni in easily creating personal portfolios for professional use.",
    tech: ["React.js"],
  },
];

export default function Certifications() {
  return (
    <section id="certifications">
      <h1 className="lg:hidden block font-bold text-xs text-white mb-2">CERTIFICATIONS</h1>
      <div className="flex flex-col gap-3">
        {data.map((item, index) => (
          <div
            key={index}
            className="lg:grid lg:grid-cols-12 lg:gap-8 lg:p-6 hover-gradient-border max-lg:flex max-lg:flex-col-reverse max-lg:gap-3 max-lg:py-3"
          >
            <div className="lg:col-span-3 w-full lg:aspect-[155/30] lg:shrink-0 max-lg:w-32.5 max-lg:h-22.5">
              <Image
                src={item.image}
                alt="certificate-1"
                width={0}
                height={0}
                sizes="100vw"
                className="object-cover rounded-lg"
              />
            </div>

            <div className="lg:col-span-9 flex flex-col lg:gap-6 gap-3">
              <div>
                <h1 className="font-bold lg:text-2xl text-xs text-white lg:mb-3 mb-2">{item.title}</h1>
                <h2 className="lg:text-xl text-xs text-[#EBEDF0]/80 lg:mb-3 mb-2">{item.issuing_organization}</h2>
                <p className="lg:text-base text-2xs text-justify text-white">{item.description}</p>
              </div>
              <div className="flex items-center gap-3">
                {item.tech.map((tech, i) => (
                  <div key={i} className="card-tech">
                    <p className="font-bold lg:text-xs text-2xs text-[#2489FF]">{tech}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
