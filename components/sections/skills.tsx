"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { skillGroups, techIcons } from "@/content/portfolio";
import { SectionHeader } from "@/components/ui/section-header";
import { Reveal } from "@/components/ui/reveal";
import { Card } from "@/components/ui/card";
import { EASE } from "@/lib/animation";

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
                    <Reveal key={group.label} delay={i * 0.06} subtle>
                        <Card interactive className="h-full p-5 sm:p-6">
                            <div className="flex items-center justify-between gap-3">
                                <h3 className="flex items-center gap-2 font-display text-sm font-semibold uppercase tracking-wider text-brand-accent">
                                    <span aria-hidden className="h-3.5 w-1 rounded-full bg-gradient-to-b from-brand-accent to-brand-accent-dark" />
                                    {group.label}
                                </h3>
                                {/* Numbered accent — tabular figures, a quiet group marker. */}
                                <span className="font-display text-xs font-semibold tabular-nums text-brand-muted/55">
                                    {String(i + 1).padStart(2, "0")}
                                </span>
                            </div>
                            <div className="mt-3.5 flex flex-wrap gap-2">
                                {group.skills.map((skill) => (
                                    <span
                                        key={skill}
                                        className="cursor-default rounded-full border border-[color:var(--line)] bg-brand-soft/40 px-3 py-1.5 text-sm font-medium text-brand-ink transition-colors duration-200 hover:border-brand-primary/45 hover:bg-brand-primary/10 hover:text-brand-primary"
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
                                    initial={{ opacity: 0, scale: 0.9, y: 8 }}
                                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.32, delay: reduce ? 0 : i * 0.035, ease: EASE }}
                                    whileHover={reduce ? undefined : { y: -6 }}
                                    className="group/icon relative flex flex-col items-center gap-2"
                                    title={tech.name}
                                >
                                    {/* Each logo's own brand color blooms behind the tile on hover. */}
                                    <span
                                        aria-hidden
                                        className="pointer-events-none absolute top-0 h-12 w-12 rounded-2xl opacity-0 blur-xl transition-opacity duration-300 group-hover/icon:opacity-60"
                                        style={{ backgroundColor: tech.color }}
                                    />
                                    {/* Light tile keeps each logo's true brand color readable on the dark canvas. */}
                                    <span
                                        className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-2xl shadow-soft ring-1 ring-black/5 transition-transform duration-300 group-hover/icon:scale-110"
                                        style={{ color: tech.color }}
                                        aria-hidden
                                    >
                                        <Icon />
                                    </span>
                                    <span className="text-[0.7rem] font-medium text-brand-muted transition-colors duration-200 group-hover/icon:text-brand-ink">
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
