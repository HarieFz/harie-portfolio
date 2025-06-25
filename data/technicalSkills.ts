interface TechnicalSkillsTypes {
  title: string;
  tech: string[];
}

const technicalSkillsData: TechnicalSkillsTypes[] = [
  {
    title: "Core Web Development",
    tech: ["HTML5", "CSS", "Javascript", "Typescript"],
  },
  {
    title: "Frontend Frameworks & Libraries",
    tech: [
      "React.js",
      "Next.js",
      "Tailwind",
      "Material UI",
      "ShadCn/UI",
      "React Router",
      "Redux / Redux Toolkit",
      "React Hook Form",
      "Zod",
      "Rechart",
      "Framer Motion",
    ],
  },
  {
    title: "API & Data Handling",
    tech: ["REST API", "Fetch", "Axios", "TanStack Query (React Query)", "SWR", "RTK Query", "Firebase"],
  },
  {
    title: "Tools & Collaboration",
    tech: ["Figma", "Git", "Github", "Postman", "Swagger", "Scrum", "Agile Methodologies"],
  },
];

export { technicalSkillsData };
