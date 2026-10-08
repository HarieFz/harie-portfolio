export interface Project {
  id: number;
  slug: string;
  title: string;
  category: string;
  description: string;
  image: string;
  year: string;
}

export const projects: Project[] = [
  {
    id: 1,
    slug: "harie-digital-invitation",
    title: "Harie Digital Invitation",
    category: "Personal Product / Web Platform",
    description:
      "A digital wedding invitation platform combining thoughtful design, personalized experiences, and an end-to-end invitation management workflow.",
    image: "/images/projects/undangan-digital.webp",
    year: "2026",
  },
  {
    id: 2,
    slug: "gold-to-mecca-umrah",
    title: "Gold to Mecca — Umrah",
    category: "Fintech / WebView Application",
    description:
      "A gold-based Umrah savings platform featuring financial planning, gold trading, and travel package booking.",
    image: "/images/projects/gtm-home.webp",
    year: "2025",
  },
  {
    id: 3,
    slug: "gold-to-mecca-hajj",
    title: "Gold to Mecca — Hajj",
    category: "Fintech / WebView Application",
    description:
      "A Hajj-focused gold savings experience supporting travel planning, asset management, and gold transactions.",
    image: "/images/projects/gtm_haji-home.webp",
    year: "2025",
  },
  {
    id: 4,
    slug: "gold-to-mecca-admin",
    title: "Gold to Mecca — Admin",
    category: "Fintech / Admin Dashboard",
    description:
      "A centralized platform for managing travel agencies, packages, financial transactions, and operational workflows.",
    image: "/images/projects/gtm_admin-paket_gtm.webp",
    year: "2025",
  },
  {
    id: 5,
    slug: "axel-intelligence",
    title: "Axel Intelligence",
    category: "Developer Tools / API Platform",
    description:
      "An API integration hub designed to simplify discovery, documentation, approval workflows, and in-browser testing.",
    image: "/images/projects/axel-landing_crop.webp",
    year: "2025",
  },
  {
    id: 6,
    slug: "tunas-unggul",
    title: "Tunas Unggul",
    category: "Education / Management System",
    description:
      "A comprehensive school management platform connecting academic operations, administration, finance, and reporting.",
    image: "/images/projects/tunas_unggul-home.webp",
    year: "2024",
  },
];
