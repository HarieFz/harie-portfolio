"use client";

import { useContext, useEffect } from "react";
import About from "./components/about";
import Experience from "./components/experience";
import Projects from "./components/projects";
import HighlightContext from "./contexts/highlight.context";
import TechnicalSkills from "./components/technical-skills";
import Certifications from "./components/certifications";
import Footer from "./components/footer";
import useInView from "./hooks/useInView";
import ProfileSidebar from "./components/profile-sidebar";

export default function Home() {
  const { setHighlight } = useContext(HighlightContext);
  const { inView: aboutView } = useInView({ id: "#about", threshold: 0.5 });
  const { inView: experienceView } = useInView({ id: "#experience", threshold: 0.2 });
  const { inView: projectsView } = useInView({ id: "#projects", threshold: 0.2 });
  const { inView: technicalSkillsView } = useInView({ id: "#technical-skills", threshold: 0.5 });
  const { inView: certificationsView } = useInView({ id: "#certifications", threshold: 0.1 });

  useEffect(() => {
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
    <>
      <div className="relative max-w-7xl max-[1400px]:max-w-6xl w-full h-full mx-auto grid grid-cols-12 gap-5">
        <aside className="col-span-5 flex flex-col justify-between max-h-[718px]">
          <ProfileSidebar />
        </aside>
        <main className="col-span-7 flex flex-col gap-3 overflow-y-auto">
          <About />
          <Experience />
          <Projects />
          <TechnicalSkills />
          <Certifications />
          <Footer />
        </main>
      </div>
    </>
  );
}
