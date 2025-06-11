import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import RippleCursor from "@/components/RippleCursor";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Harie Fairuz Zaki - Front-End Web Developer",
  description:
    "Hi! I'm Harie Fairuz Zaki, a front-end web developer passionate about crafting intuitive, responsive, and visually engaging websites, with a focus on building web applications using React.js and Next.js. I'm currently open to job opportunities—let's connect!",
  keywords: [
    "Harie",
    "Fairuz",
    "Zaki",
    "Harie Fairuz Zaki",
    "Portfolio",
    "Front-End Web Developer",
    "React JS Developer",
    "Next JS Developer",
  ],
  authors: [{ name: "Harie Fairuz Zaki", url: "https://harie-portfolio.vercel.app/" }],
  creator: "Harie Fairuz Zaki",
  robots: "index, follow",
  openGraph: {
    title: "Harie Fairuz Zaki",
    description:
      "Hi! I'm Harie Fairuz Zaki, a front-end web developer passionate about crafting intuitive, responsive, and visually engaging websites, with a focus on building web applications using React.js and Next.js. I'm currently open to job opportunities—let's connect!",
    type: "website",
    url: "https://harie-portfolio.vercel.app/",
    images: "https://res.cloudinary.com/harie/image/upload/q_auto/v1749025011/Profile_Photo_-_mini_eipm1x.jpg",
    siteName: "Harie Fairuz Zaki Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Harie Fairuz Zaki",
    description:
      "Hi! I'm Harie Fairuz Zaki, a front-end web developer passionate about crafting intuitive, responsive, and visually engaging websites, with a focus on building web applications using React.js and Next.js. I'm currently open to job opportunities—let's connect!",
    images: "https://res.cloudinary.com/harie/image/upload/q_auto/v1749025011/Profile_Photo_-_mini_eipm1x.jpg",
    creator: "Harie Fairuz Zaki",
  },
};

const mainPersonSchema = {
  "@context": "https://schema.org",
  "@type": ["Person", "WebSite"],

  // Person Information
  name: "Harie Fairuz Zaki",
  jobTitle: "Front-End Developer",
  description:
    "Hi! I'm Harie Fairuz Zaki, a front-end web developer passionate about crafting intuitive, responsive, and visually engaging websites, with a focus on building web applications using React.js and Next.js. I'm currently open to job opportunities—let's connect!",

  // Contact & Social
  url: "https://harie-portfolio.vercel.app",
  email: "mailto:hfairuzzaki@gmail.com",
  sameAs: ["https://github.com/HarieFz", "https://www.linkedin.com/in/harie-fairuz-zaki-691b05136/"],

  // Skills & Expertise
  knowsAbout: [
    "React.js",
    "Next.js",
    "JavaScript",
    "TypeScript",
    "TailwindCSS",
    "Material UI",
    "Redux",
    "REST API",
    "Frontend Development",
    "Web Development",
  ],

  // Work Experience
  worksFor: {
    "@type": "Organization",
    name: "PT. Sinergi Nusantara Integrasi",
  },

  // Website Schema
  mainEntity: {
    "@type": "WebSite",
    name: "Harie Fairuz Zaki - Front-End Web Developer",
    url: "https://harie-portfolio.vercel.app",
    description:
      "Professional portfolio showcasing frontend development projects and expertise in React.js, Next.js, and modern web technologies",
    author: {
      "@type": "Person",
      name: "Harie Fairuz Zaki",
    },
  },
};

const professionalServiceSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Frontend Development Services",
  description:
    "Professional frontend development services specializing in React.js, Next.js, and modern web applications",
  areaServed: {
    "@type": "Country",
    name: "Indonesia",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Frontend Development Packages",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "React.js Web Application Development",
          description:
            "Building modern web applications using React.js with focus on responsive design and user experience",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Next.js Front-End Development",
          description: "Developing front-end with Next.js, including SSR and static site generation",
        },
      },
    ],
  },
  provider: {
    "@type": "Person",
    name: "Harie Fairuz Zaki",
    jobTitle: "Front-End Web Developer",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased relative bg-dark-navy max-lg:py-8 max-lg:px-6`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(mainPersonSchema).replace(/</g, "\\u003c"),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(professionalServiceSchema).replace(/</g, "\\u003c"),
          }}
        />
        <RippleCursor />
        {children}
      </body>
    </html>
  );
}
