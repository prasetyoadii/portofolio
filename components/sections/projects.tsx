"use client";

import { useSectionInView } from "@/lib/hooks";
import { projects } from "@/content/portfolio";
import { SectionHeader } from "@/components/ui/section-header";
import { Reveal } from "@/components/ui/reveal";
import { ProjectCard } from "@/components/project/project-card";

export default function Projects() {
    const { ref } = useSectionInView("Projects", 0.15);

    // The featured project leads as a full-width showcase; the rest fill a bento.
    const featured = projects.find((p) => p.featured);
    const rest = projects.filter((p) => !p.featured);

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

            <div className="mt-10 space-y-6">
                {featured && (
                    <Reveal>
                        <ProjectCard project={featured} />
                    </Reveal>
                )}

                <div className="grid gap-6 sm:grid-cols-2">
                    {rest.map((project, i) => (
                        <Reveal key={project.title} delay={i * 0.05} subtle>
                            <ProjectCard project={project} />
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
