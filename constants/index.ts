interface VerticalItem {
  id: number;
  title: string;
  subtitle?: string;
  date?: string;
  body: string;
}

export const CAREER_JOURNEY: VerticalItem[] = [
  {
    id: 1,
    title: "Experience That Shapes My Journey",
    body: "Every company brought different products, challenges, and perspectives. Here's the journey that shaped how I think, collaborate, and build as a Frontend Engineer.",
  },
  {
    id: 2,
    title: "PT. Bullion Ecosystem International",
    subtitle: "Frontend Web Developer",
    date: "Aug 2025 — Present",
    body: "Developing WebView and Admin Panel applications for a gold trading and Umrah ecosystem. Building features for gold savings, financial planning, and package purchasing while focusing on scalable architecture, maintainable code, and seamless user experiences.",
  },
  {
    id: 3,
    title: "PT. Telkom Indonesia",
    subtitle: "Frontend Web Developer",
    date: "Jul 2025 — Oct 2025",
    body: "Contributed to Axel Intelligence, an API integration platform that simplifies API discovery,documentation, testing, and AI-assisted workflows. Built production-ready interfaces with React and TypeScript, working closely with cross-functional teams to deliver developer-focused experiences.",
  },
  {
    id: 4,
    title: "PT. Sinergi Nusantara Integrasi",
    subtitle: "Frontend Web Developer",
    date: "Apr 2024 — Jul 2025",
    body: "Worked on multiple business-oriented products across healthcare, education, recruitment, and corporate websites. Built scalable frontend applications, integrated REST APIs, and collaborated with multidisciplinary teams to deliver reliable digital solutions.",
  },
  {
    id: 5,
    title: "Freelance",
    subtitle: "Web Developer",
    date: "Mar 2023 — Feb 2024",
    body: "Partnered with clients on custom web applications, including real-time attendance systems and portfolio platforms. This experience strengthened my problem-solving skills and reinforced the importance of writing flexible, maintainable software.",
  },
];
