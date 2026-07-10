"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { experiences } from "@/content/portfolio";
import { SectionHeader } from "@/components/ui/section-header";
import { Reveal } from "@/components/ui/reveal";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/cn";
import { EASE } from "@/lib/animation";

export default function Experience() {
    const { ref } = useSectionInView("Experience", 0.2);
    const reduce = useReducedMotion();

    return (
        <section ref={ref} id="experience" className="scroll-mt-24 py-20 sm:py-24">
            <SectionHeader
                eyebrow="Experience"
                title="Where I've contributed"
                description="The experiences that have shaped my technical and professional journey"
                align="left"
            />

            <ol className="relative mt-10">
                {/* Connector: a faint static track with a gold→blue fill that draws in on scroll. */}
                <span
                    aria-hidden
                    className="absolute left-[7px] top-2 h-[calc(100%-1rem)] w-px bg-[color:var(--line)] sm:left-[9px]"
                />
                <motion.span
                    aria-hidden
                    className="absolute left-[7px] top-2 h-[calc(100%-1rem)] w-px origin-top bg-gradient-to-b from-brand-accent via-brand-primary to-transparent sm:left-[9px]"
                    initial={{ scaleY: reduce ? 1 : 0 }}
                    whileInView={{ scaleY: 1 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: reduce ? 0 : 1.1, ease: EASE }}
                />
                {experiences.map((experience, i) => {
                    // The current role (period "Present") is the highlighted, gold card.
                    const isPresent = i === 0;
                    return (
                        <li
                            key={`${experience.organization}-${i}`}
                            className={cn("relative pl-8 sm:pl-10", i > 0 && "mt-5")}
                        >
                            <span
                                aria-hidden
                                className={cn(
                                    "absolute left-0 top-2 flex h-[15px] w-[15px] items-center justify-center rounded-full border-2 border-brand-paper bg-gradient-to-br shadow-soft sm:h-[19px] sm:w-[19px]",
                                    isPresent
                                        ? "from-brand-accent to-brand-accent-dark ring-2 ring-brand-accent/50 ring-offset-1 ring-offset-brand-paper"
                                        : "from-brand-primary to-brand-primary-dark",
                                )}
                            />
                            <Reveal delay={i * 0.06}>
                                {/* Gradient layers over the Card's surface color — no class conflict. */}
                                <Card
                                    className={cn(
                                        "p-5 sm:p-6",
                                        isPresent &&
                                            "bg-gradient-to-br from-brand-accent to-brand-accent-dark",
                                    )}
                                >
                                    <div className="flex flex-wrap items-center justify-between gap-2">
                                        <h3
                                            className={cn(
                                                "font-display text-lg font-semibold",
                                                isPresent ? "text-brand-night" : "text-brand-ink",
                                            )}
                                        >
                                            {experience.role}
                                        </h3>
                                        {isPresent ? (
                                            <span className="inline-flex items-center gap-1.5 rounded-full border border-brand-night/25 bg-brand-night/10 px-2.5 py-1 text-xs font-semibold text-brand-night">
                                                <span className="h-1.5 w-1.5 rounded-full bg-brand-night" />
                                                {experience.period}
                                            </span>
                                        ) : (
                                            <Badge>{experience.period}</Badge>
                                        )}
                                    </div>
                                    <p
                                        className={cn(
                                            "mt-0.5 text-sm font-medium",
                                            isPresent ? "text-brand-night/75" : "text-brand-primary",
                                        )}
                                    >
                                        {experience.organization}
                                    </p>
                                    <ul
                                        className={cn(
                                            "mt-3 space-y-1.5 text-sm",
                                            isPresent ? "text-brand-night/80" : "text-brand-muted",
                                        )}
                                    >
                                        {experience.points.map((point, j) => (
                                            <li key={j} className="flex gap-2">
                                                <span
                                                    aria-hidden
                                                    className={cn(
                                                        "mt-2 h-1 w-1 flex-shrink-0 rounded-full",
                                                        isPresent ? "bg-brand-night/50" : "bg-brand-muted/60",
                                                    )}
                                                />
                                                <span>{point}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </Card>
                            </Reveal>
                        </li>
                    );
                })}
            </ol>
        </section>
    );
}
