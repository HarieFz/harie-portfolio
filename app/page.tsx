import Experience from "@/components/custom-ui/Experience";
import Work from "@/components/custom-ui/Work";
import Hero from "@/components/custom-ui/Hero";
import AboutMe from "@/components/custom-ui/AboutMe";
import Skills from "@/components/custom-ui/Skills";
import Footer from "@/components/custom-ui/Footer";
import Header from "@/components/custom-ui/Header";
import { Background } from "@/components/custom-ui/Background";

export default function Home() {
  return (
    <>
      <Header />

      <main>
        <Background>
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
