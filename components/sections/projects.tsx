"use client";

import { useSectionInView } from "@/lib/hooks";
import { projects } from "@/content/portfolio";
import { SectionHeader } from "@/components/ui/section-header";
import { Reveal } from "@/components/ui/reveal";
import { ProjectCard } from "@/components/project/project-card";

export default function Projects() {
    const { ref } = useSectionInView("Projects", 0.15);

    // Featured projects lead the list; order is otherwise preserved.
    const ordered = [...projects].sort(
        (a, b) => Number(Boolean(b.featured)) - Number(Boolean(a.featured)),
    );

    return (
        <section ref={ref} id="projects" className="scroll-mt-24 py-20 sm:py-24">
            <SectionHeader
                eyebrow="Projects"
                title={
                    <>
                        Things I&apos;ve{" "}
                        <span className="bg-gradient-to-r from-brand-primary to-brand-primary-dark bg-clip-text text-transparent">
                            built
                        </span>
                    </>
                }
                description="From a real-client warehouse app to a gerontech platform with an AI voice assistant."
            />

            <div className="mx-auto mt-10 flex max-w-3xl flex-col gap-6">
                {ordered.map((project, i) => (
                    <Reveal key={project.title} delay={i * 0.05}>
                        <ProjectCard project={project} />
                    </Reveal>
                ))}
            </div>
        </section>
    );
}
