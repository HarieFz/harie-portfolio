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
  const { inView: experienceView } = useInView({ id: "#experience", threshold: 0.3 });
  const { inView: projectsView } = useInView({ id: "#projects", threshold: 0.3 });
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
    <div className="h-dvh">
      <div className="lg:h-full lg:overflow-hidden">
        <div className="relative 2xl:max-w-7xl xl:max-w-6xl lg:max-w-4xl w-full h-full mx-auto">
          <div className="w-full h-full lg:flex lg:items-center lg:justify-center">
            <div className="lg:grid lg:grid-cols-12 lg:gap-5 lg:max-h-[calc(100dvh-200px)] max-h-for-small-screen h-full">
              <aside className="lg:col-span-5 flex flex-col justify-between lg:max-h-[600px] max-lg:mb-5">
                <ProfileSidebar />
              </aside>
              <main className="lg:col-span-7 flex flex-col lg:gap-8 gap-6 lg:overflow-y-auto">
                <About />
                <Experience />
                <Projects />
                <TechnicalSkills />
                <Certifications />
                <Footer />
              </main>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
