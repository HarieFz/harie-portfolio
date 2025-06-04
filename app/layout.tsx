import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import RippleCursor from "@/components/RippleCursor";
import HighlightProvider from "./contexts/highlight.provider";

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Harie Fairuz Zaki",
  description:
    "Hi! I'm Harie Fairuz Zaki, a front-end web developer passionate about crafting intuitive, responsive, and visually engaging websites. I'm currently open to job opportunities—let's connect!",
  keywords: ["Harie", "Harie Fairuz Zaki", "React JS Developer"],
  authors: [{ name: "Harie Fairuz Zaki", url: "https://harie-portfolio.vercel.app/" }],
  creator: "Harie Fairuz Zaki",
  robots: "index, follow",
  openGraph: {
    images: "/images/og-image.jpg",
    title: "Harie Fairuz Zaki",
    description:
      "Hi! I'm Harie Fairuz Zaki, a front-end web developer passionate about crafting intuitive, responsive, and visually engaging websites. I'm currently open to job opportunities—let's connect!",
    url: "https://harie-portfolio.vercel.app/",
  },
  twitter: {
    card: "summary",
    title: "Harie Fairuz Zaki",
    description:
      "Hi! I'm Harie Fairuz Zaki, a front-end web developer passionate about crafting intuitive, responsive, and visually engaging websites. I'm currently open to job opportunities—let's connect!",
    creator: "Harie Fairuz Zaki",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} antialiased relative bg-dark-navy 2xl:pt-25.5 2xl:pb-27.75 lg:pt-20 lg:pb-15 max-lg:my-8 max-lg:px-6`}
      >
        <RippleCursor />
        <HighlightProvider>{children}</HighlightProvider>
      </body>
    </html>
  );
}
