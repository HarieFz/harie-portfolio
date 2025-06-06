interface Experiencetypes {
  start_date: string;
  end_date: string;
  title: string;
  company: string;
  description: string;
  demo: { name: string; link: string }[] | [];
  tech: string[];
}

const experienceData: Experiencetypes[] = [
  {
    start_date: "Apr 2024",
    end_date: "Present",
    title: "Front-End Web Developer",
    company: "PT. Sinergi Nusantara Integrasi",
    description:
      "<p>Experienced Frontend Developer skilled in building web applications with React.js and Next.js, focusing on modular and reusable components. Collaborated with backend teams and UI/UX designers to create functional, visually appealing interfaces. Proficient in state management (Redux/Context API), REST API integration, and styling with Tailwind CSS. Worked across multiple industries including education, clinic and outsourcing.</p>",
    demo: [
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
    demo: [
      { name: "Facial Recognition Attendance System", link: "/" },
      { name: "Portfolio Maker Web App", link: "/" },
    ],
    tech: ["React.js", "Firebase", "Bootstrap", "face-api.js", "Twilio"],
  },
];

export { experienceData };
