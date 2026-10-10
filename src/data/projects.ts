export type CaseStudyType = "visual" | "technical" | "hybrid";

export interface Project {
  id: number;
  slug: string;
  title: string;
  category: string;
  description: string;
  image: string;
  year: string;
  role: string;
  liveUrl?: string;
  caseStudyType?: CaseStudyType;
}

export const projects: Project[] = [
  {
    id: 1,
    slug: "harie-digital-invitation",
    title: "Harie Digital Invitation",
    category: "Personal Product / Web Platform",
    description:
      "A digital wedding invitation platform combining thoughtful design, personalized experiences, and an end-to-end invitation management workflow.",
    image: "/images/projects/invitation/cover.webp",
    year: "2026",
    role: "Design & Development",
    liveUrl: "https://invitation.byharie.com",
    caseStudyType: "visual",
  },
  {
    id: 2,
    slug: "gold-to-mecca-umrah",
    title: "Gold to Mecca — Umrah",
    category: "Fintech / WebView Application",
    description:
      "A gold-based Umrah savings platform featuring financial planning, gold trading, and travel package booking.",
    image: "/images/projects/gtm-umrah/cover.webp",
    year: "2025",
    role: "Frontend Development",
    caseStudyType: "visual",
  },
  {
    id: 3,
    slug: "gold-to-mecca-hajj",
    title: "Gold to Mecca — Hajj",
    category: "Fintech / WebView Application",
    description:
      "A Hajj-focused gold savings experience supporting travel planning, asset management, and gold transactions.",
    image: "/images/projects/gtm-hajj/cover.webp",
    year: "2025",
    role: "Frontend Development",
    caseStudyType: "visual",
  },
  {
    id: 4,
    slug: "gold-to-mecca-admin",
    title: "Gold to Mecca — Admin",
    category: "Fintech / Internal Management Platform",
    description:
      "An internal management platform supporting travel operations, financial workflows, and administrative processes within the Gold to Mecca ecosystem.",
    image: "/images/projects/gtm-admin/cover.webp",
    year: "2025",
    role: "Frontend Development",
    caseStudyType: "technical",
  },
  {
    id: 5,
    slug: "axel-intelligence",
    title: "Axel Intelligence",
    category: "Developer Tools / API Platform",
    description: "An API integration platform combining developer tools, AI-assisted interactions, and API discovery.",
    image: "/images/projects/axel/cover.webp",
    year: "2025",
    role: "Frontend Development",
    caseStudyType: "hybrid",
  },
  {
    id: 6,
    slug: "tunas-unggul",
    title: "Tunas Unggul",
    category: "Education / Management System",
    description: "A school management platform supporting academic administration, financial workflows, and reporting.",
    image: "/images/projects/tunas-unggul/cover.webp",
    year: "2024",
    role: "Frontend Development",
    caseStudyType: "technical",
  },
];
