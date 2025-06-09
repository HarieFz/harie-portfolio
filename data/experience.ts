interface ExperienceTypes {
  start_date: string;
  end_date: string;
  title: string;
  company: string;
  description: string;
  demo: { name: string; link: string }[] | [];
  tech: string[];
}

const experienceData: ExperienceTypes[] = [
  {
    start_date: "Apr 2024",
    end_date: "Present",
    title: "Front-End Web Developer",
    company: "PT. Sinergi Nusantara Integrasi",
    description:
      "<p>Experienced Front-End Developer skilled in building web applications with React.js and Next.js, focusing on modular and reusable components. Collaborated with backend teams and UI/UX designers to create functional, visually appealing interfaces. Worked across multiple industries including education, clinic and outsourcing.</p>",
    demo: [
      { name: "Tunas Unggul", link: "/projects/tunas-unggul" },
      { name: "Naara", link: "/projects/naara" },
      { name: "Mitra Group", link: "/projects/mitra-group" },
      { name: "Rekrutmen Mitra Group", link: "/projects/rekrutmen-mitra-group" },
    ],
    tech: ["React.js", "Next.js", "TailwindCSS", "Material UI", "Redux", "TanStack Query", "Axios", "REST API"],
  },
  {
    start_date: "Mar 2023",
    end_date: "Feb 2024",
    title: "Web Developer",
    company: "Freelance",
    description:
      "<p>Worked on multiple freelance web projects for educational institutions, focusing on real-time applications and user experience.</p>",
    demo: [
      {
        name: "Real-Time Facial Recognition Attendance System",
        link: "/projects/real-time-facial-recognition-attendance-system",
      },
      { name: "Portfolio Maker", link: "/projects/portfolio-maker" },
    ],
    tech: ["React.js", "Firebase", "Bootstrap", "face-api.js", "Twilio"],
  },
];

export { experienceData };
