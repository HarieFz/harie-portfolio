import Experience from "@/components/Experience";
import Work from "@/components/Work";
import Hero from "@/components/Hero";
import AboutMe from "@/components/AboutMe";
import Skills from "@/components/Skills";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Background } from "@/components/Background";
import FallingObjects from "@/components/FallingObjects";
export default function Home() {
  return (
    <>
      <Header />

      <main>
        <Background>
          <FallingObjects />
          <Hero />

          <AboutMe />

          <Experience />

          <Work />

          <Skills />
        </Background>
      </main>

      <Footer />
    </>
  );
}
