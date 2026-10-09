import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import About from "@/components/sections/About";
import Career from "@/components/sections/Career";
import Introduction from "@/components/sections/Introduction";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import HomeExperience from "@/components/ui/HomeExperience";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="relative min-h-screen bg-olive-dark">
        <HomeExperience />
        <Introduction />
        <About />
        <Career />
        <Projects />
        <Skills />
      </main>

      <Footer />
    </>
  );
}
