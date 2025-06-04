import React from "react";
import Chain from "../../../public/icons/link.svg";
import Link from "next/link";

const data = [
  {
    start_date: "Apr 2024",
    end_date: "Present",
    title: "Front-End Web Developer",
    company: "PT. Sinergi Nusantara Integrasi",
    description:
      "<p>Experienced Frontend Developer skilled in building web applications with React.js and Next.js, focusing on modular and reusable components. Collaborated with backend teams and UI/UX designers to create functional, visually appealing interfaces. Proficient in state management (Redux/Context API), REST API integration, and styling with Tailwind CSS. Worked across multiple industries including education, clinic and outsourcing.</p>",
    web_name: [
      { name: "Mitra Group", link: "https://mitragroup.co.id/" },
      { name: "Rekrutmen Mitra Group", link: "https://rekrutmen.mitragroup.co.id/job-vacancy/public" },
      { name: "Naara", link: "https://naara.id/" },
      { name: "Tunas Unggul", link: "" },
    ],
    tech: ["React.js", "Next.js", "TailwindCSS", "Material UI", "Redux", "TanStack Query", "Axios", "REST API"],
  },
  {
    start_date: "Mar 2023",
    end_date: "Feb 2024",
    title: "Web Developer",
    company: "Freelance",
    description:
      "<p>Worked on multiple freelance web projects for educational institutions, focusing on real-time applications and user experience.</p> <br/> <p>Projects:</p> <ul><li>Facial Recognition Attendance System for a high school: Real-time facial recognition using face-api.js, React.js, Firebase, Twilio integration for SMS alerts.</li> <li>Portfolio Maker Web App for a university's Career Development Center: Built with React.js and Firebase, enabling alumni to build job-ready personal portfolios with ease.</li></ul>",
    web_name: [
      { name: "Facial Recognition Attendance System", link: "/" },
      { name: "Portfolio Maker Web App", link: "/" },
    ],
    tech: ["React.js", "Firebase", "Bootstrap", "face-api.js", "Twilio"],
  },
];

export default function Experience() {
  return (
    <section id="experience">
      <div className="lg:mb-8">
        <div className="lg:hidden block w-fit">
          <h1 className="font-bold text-xs text-white mb-2">EXPERIENCE</h1>
          <div className="w-full h-0.5 bg-white rounded-4xl" />
        </div>

        <div className="flex flex-col lg:gap-3">
          {data.map((item, index, { length }) => (
            <div key={index}>
              <div className="lg:grid lg:grid-cols-12 lg:gap-8 lg:p-6 max-lg:py-3 hover-gradient-border">
                <div className="lg:col-span-3 max-lg:mb-0.5">
                  <time className="xl:text-nowrap lg:text-base text-xs text-[#EBEDF0]/80">
                    {item.start_date} - {item.end_date}
                  </time>
                </div>
                <div className="lg:col-span-9 flex flex-col lg:gap-6 gap-3">
                  <div className="flex flex-col lg:gap-3 gap-1.5">
                    <h1 className="font-bold lg:text-2xl text-xs text-white">{item.title}</h1>
                    <h2 className="lg:text-xl text-xs text-[#EBEDF0]/80 max-lg:mb-1.5">{item.company}</h2>
                    <div
                      dangerouslySetInnerHTML={{ __html: item.description }}
                      className="lg:text-base text-2xs text-justify text-white [&>ul]:list-inside [&>ul]:list-disc"
                    />
                  </div>
                  <div className="flex flex-wrap items-center gap-4">
                    {item.web_name.map((web, index) => (
                      <Link key={index} href={web.link} target="_blank" className="flex items-center gap-2">
                        <Chain />
                        <p className="font-bold lg:text-xs text-2xs text-white">{web.name}</p>
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
