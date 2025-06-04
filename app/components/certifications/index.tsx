import Image from "next/image";
import React from "react";
import Certificate1 from "../../../public/images/certificate-1.png";
import Certificate2 from "../../../public/images/certificate-2.png";

const data = [
  {
    image: Certificate1,
    title: "How to be an Ideal Top Search ReactJS Front-End Engineer Program",
    issuing_organization: "Alterra Academy",
    description: `<p class="lg:mb-2 mb-1">Learned front-end engineering using React.js, React Hooks, React Router, state management, GraphQL (Apollo), Git, clean code practices, and testing.</p> <p>Project: led the React.js team in developing a Learning Management System (LMS); collaborated with UI/UX designers, back-end, and QA teams; delivered a functional learning platform with responsive UI and integrated front-end with RESTful APIs.</p>`,
    tech: ["React.js", "Next.js", "React Router", "GraphQL", "Git"],
  },
  {
    image: Certificate2,
    title: "Fullstack Web Development Wave 2",
    issuing_organization: "Binar Academy",
    description: `<p class="lg:mb-2 mb-1">Learned fullstack web development with JavaScript, Node.js, Express, PostgreSQL, React.js, RESTful API, Git, and Agile methodology.</p> <p>Project: led a cross-functional team (frontend & backend) to build an e-commerce platform; managed team coordination, ensured backend–frontend integration, and delivered a fully functional MVP with additional features.</p>`,
    tech: ["React.js", "Next.js", "Express.js", "Javascript", "Git"],
  },
];

export default function Certifications() {
  return (
    <section id="certifications">
      <div className="lg:mb-8">
        <div className="lg:hidden block w-fit">
          <h1 className="font-bold text-xs text-white mb-2">CERTIFICATIONS</h1>
          <div className="w-full h-0.5 bg-white rounded-4xl" />
        </div>

        <div className="flex flex-col gap-3">
          {data.map((item, index, { length }) => (
            <div key={index}>
              <div className="lg:grid lg:grid-cols-12 lg:gap-8 lg:p-6 hover-gradient-border max-lg:py-3">
                <div className="hidden lg:block lg:col-span-3 w-full lg:aspect-[155/30] lg:shrink-0">
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

                    <div className="block lg:hidden w-32.5 h-22.5 mb-3">
                      <Image
                        src={item.image}
                        alt="certificate-1"
                        width={0}
                        height={0}
                        sizes="100vw"
                        className="object-cover rounded-lg"
                      />
                    </div>

                    <div
                      dangerouslySetInnerHTML={{ __html: item.description }}
                      className="lg:text-base text-2xs text-justify text-white"
                    />
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

              {length - 1 === index ? null : (
                <div className="lg:grid lg:grid-cols-12 lg:gap-8 pt-3">
                  <div className="lg:col-span-3 lg:block hidden" />
                  <div className="lg:col-span-9 w-full h-[0.5px] bg-[#EBEDF0]/40" />
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
