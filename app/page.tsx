import { Container } from "@/components/ui/container";
import Hero from "@/components/sections/hero";
import About from "@/components/sections/about";
import Experience from "@/components/sections/experience";
import Projects from "@/components/sections/projects";
import Skills from "@/components/sections/skills";
import Articles from "@/components/sections/articles";
import Contact from "@/components/sections/contact";

export default function Home() {
  return (
    <>
      {/* Full-bleed dark "spotlight" hero — manages its own Container inside. */}
      <Hero />
      <Container className="flex flex-col">
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Articles />
        <Contact />
      </Container>
    </>
  );
}
