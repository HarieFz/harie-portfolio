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
    <section id="certifications" className="flex flex-col gap-3">
      {data.map((item, index) => (
        <div key={index} className="grid grid-cols-12 gap-8 p-6 hover-gradient-border">
          <div className="col-span-3 w-full aspect-[155/30] shrink-0">
            <Image
              src={item.image}
              alt="certificate-1"
              width={0}
              height={0}
              sizes="100vw"
              className="object-cover rounded-lg"
            />
          </div>

          <div className="col-span-9 flex flex-col gap-6">
            <div>
              <h1 className="font-bold text-2xl text-white mb-3">{item.title}</h1>
              <h2 className="text-xl text-[#EBEDF0]/80 mb-3">{item.issuing_organization}</h2>
              <p className="text-justify text-white">{item.description}</p>
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
    </section>
  );
}
