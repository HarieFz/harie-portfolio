import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";

import PageTransition from "@/components/ui/PageTransition";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = "https://byharie.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "Harie — Frontend Developer",
    template: "%s | Harie",
  },

  description:
    "Portfolio of Harie, a frontend developer crafting thoughtful digital experiences through modern web technologies, creative development, and attention to detail.",

  applicationName: "Harie Portfolio",

  keywords: [
    "Harie",
    "Harie Fairuz Zaki",
    "Frontend Developer",
    "Frontend Engineer",
    "Web Developer",
    "React Developer",
    "Next.js Developer",
    "Creative Developer",
    "Web Portfolio",
  ],

  authors: [{ name: "Harie Fairuz Zaki" }],
  creator: "Harie Fairuz Zaki",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Harie",
    title: "Harie — Frontend Developer",
    description: "Crafting thoughtful digital experiences through design, technology, and creative development.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Harie — Frontend Developer",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Harie — Frontend Developer",
    description: "Crafting thoughtful digital experiences through design, technology, and creative development.",
    images: ["/og-image.jpg"],
  },

  robots: {
    index: true,
    follow: true,
  },

  icons: {
    icon: "/favicon.ico",
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${cormorant.variable} ${manrope.variable} antialiased`}>
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}
