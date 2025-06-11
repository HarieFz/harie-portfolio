"use client";

import { useContext, useEffect } from "react";
import About from "./components/about";
import Experience from "./components/experience";
import Projects from "./components/projects";
import HighlightContext from "./contexts/highlight.context";
import TechnicalSkills from "./components/technical-skills";
import Certifications from "./components/certifications";
import Footer from "./components/footer";
import ProfileSidebar from "./components/profile-sidebar";
import useInView from "./hooks/useInView";

export default function Home() {
  // Mengambil setter dari context global untuk mengatur bagian yang sedang disorot
  const { setHighlight } = useContext(HighlightContext);

  // Menggunakan custom hook useInView untuk melacak visibilitas masing-masing section
  const { inView: aboutView } = useInView({ id: "#about", threshold: 0.5 });
  const { inView: experienceView } = useInView({ id: "#experience", threshold: 0.3 });
  const { inView: projectsView } = useInView({ id: "#projects", threshold: 0.3 });
  const { inView: technicalSkillsView } = useInView({ id: "#technical-skills", threshold: 0.5 });
  const { inView: certificationsView } = useInView({ id: "#certifications", threshold: 0.1 });

  useEffect(() => {
    // Menentukan section mana yang harus disorot berdasarkan urutan prioritas dan visibilitas
    if (aboutView && experienceView) {
      setHighlight("about");
    } else if (!aboutView && experienceView) {
      setHighlight("experience");
    } else if (experienceView && projectsView) {
      setHighlight("experience");
    } else if (!experienceView && projectsView) {
      setHighlight("projects");
    } else if (projectsView && technicalSkillsView) {
      setHighlight("projects");
    } else if (!projectsView && technicalSkillsView) {
      setHighlight("technical-skills");
    } else if (technicalSkillsView && certificationsView) {
      setHighlight("technical-skills");
    } else if (!technicalSkillsView && certificationsView) {
      setHighlight("certifications");
    }
  }, [aboutView, experienceView, projectsView, technicalSkillsView, certificationsView, setHighlight]);

  return (
    <div className="md:grid md:grid-cols-12 md:gap-5 lg:max-h-[calc(100dvh-200px)] max-h-for-small-screen h-full">
      <aside className="md:col-span-5 flex flex-col justify-between md:max-h-[400px] lg:max-h-[600px] max-lg:mb-5">
        <ProfileSidebar />
      </aside>
      <main className="md:col-span-7 flex flex-col lg:gap-8 gap-6 md:overflow-y-auto md:pe-1">
        <About />
        <Experience />
        <Projects />
        <TechnicalSkills />
        <Certifications />
        <Footer />
      </main>
    </div>
  );
}
