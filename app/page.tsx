import About from "@/components/about";
import Articles from "@/components/articles";
import Contact from "@/components/contact";
import Experiences from "@/components/experiences";
import Intro from "@/components/intro";
import Projects from "@/components/projects";
import SectionDivider from "@/components/section-divider";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Intro />
      <SectionDivider />
      <About />
      <Projects />
      <Articles />
      <Experiences />
      <Contact />
    </main>
  )
}
