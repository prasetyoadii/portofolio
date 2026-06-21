"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { skillGroups, techIcons } from "@/content/portfolio";
import { SectionHeader } from "@/components/ui/section-header";
import { Reveal } from "@/components/ui/reveal";
import { Card } from "@/components/ui/card";

export default function Skills() {
    const { ref } = useSectionInView("Skills", 0.2);
    const reduce = useReducedMotion();

    return (
        <section ref={ref} id="skills" className="scroll-mt-24 py-20 sm:py-24">
            <SectionHeader
                eyebrow="Skills"
                title={
                    <>
                        Tools I build{" "}
                        <span className="bg-gradient-to-r from-brand-primary to-brand-primary-dark bg-clip-text text-transparent">
                            with
                        </span>
                    </>
                }
                description="Grouped by where they sit in the stack."
            />

            <div className="mx-auto mt-10 grid max-w-4xl gap-4 sm:grid-cols-2">
                {skillGroups.map((group, i) => (
                    <Reveal key={group.label} delay={i * 0.06}>
                        <Card className="h-full p-5 sm:p-6">
                            <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-brand-accent">
                                {group.label}
                            </h3>
                            <div className="mt-3 flex flex-wrap gap-2">
                                {group.skills.map((skill) => (
                                    <span
                                        key={skill}
                                        className="rounded-full border border-[color:var(--line)] bg-brand-soft/40 px-3 py-1.5 text-sm font-medium text-brand-ink"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </Card>
                    </Reveal>
                ))}
            </div>

            {/* Tech marquee-ish icon strip */}
            <Reveal className="mx-auto mt-6 max-w-4xl">
                <Card className="p-6">
                    <div className="grid grid-cols-3 gap-5 sm:grid-cols-5 lg:grid-cols-8">
                        {techIcons.map((tech, i) => {
                            const Icon = tech.icon;
                            return (
                                <motion.div
                                    key={tech.name}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.3, delay: reduce ? 0 : i * 0.03 }}
                                    whileHover={reduce ? undefined : { y: -4 }}
                                    className="flex flex-col items-center gap-2"
                                    title={tech.name}
                                >
                                    {/* Light tile keeps each logo's true brand color readable on the dark canvas. */}
                                    <span
                                        className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-2xl shadow-soft"
                                        style={{ color: tech.color }}
                                        aria-hidden
                                    >
                                        <Icon />
                                    </span>
                                    <span className="text-[0.7rem] font-medium text-brand-muted">
                                        {tech.name}
                                    </span>
                                </motion.div>
                            );
                        })}
                    </div>
                </Card>
            </Reveal>
        </section>
    );
}
