import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Harie Fairuz Zaki - Front-End Web Developer",
    short_name: "Harie",
    description:
      "Hi! I'm Harie Fairuz Zaki, a front-end web developer passionate about crafting intuitive, responsive, and visually engaging websites, with a focus on building web applications using React.js and Next.js. I'm currently open to job opportunities—let's connect!",
    start_url: "/",
    display: "standalone",
    background_color: "#0f172a",
    theme_color: "#0f172a",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "478x478",
        type: "image/x-icon",
      },
      {
        src: "/icon.jpg",
        sizes: "478x478",
        type: "jpg",
      },
      {
        src: "/apple-icon.jpg",
        sizes: "478x478",
        type: "jpg",
      },
    ],
  };
}
