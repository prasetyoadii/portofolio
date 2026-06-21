"use client";

import { useSectionInView } from "@/lib/hooks";
import { experiences } from "@/content/portfolio";
import { SectionHeader } from "@/components/ui/section-header";
import { Reveal } from "@/components/ui/reveal";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/cn";

export default function Experience() {
    const { ref } = useSectionInView("Experience", 0.2);

    return (
        <section ref={ref} id="experience" className="scroll-mt-24 py-20 sm:py-24">
            <SectionHeader
                eyebrow="Experience"
                title="Where I've contributed"
                description="A short trail of roles where I shipped real work."
                align="left"
            />

            <ol className="relative mt-10 space-y-5 before:absolute before:left-[7px] before:top-2 before:h-[calc(100%-1rem)] before:w-px before:bg-[color:var(--line)] sm:before:left-[9px]">
                {experiences.map((experience, i) => {
                    // The current role (period "Present") is the highlighted, gold card.
                    const isPresent = i === 0;
                    return (
                        <li key={`${experience.organization}-${i}`} className="relative pl-8 sm:pl-10">
                            <span
                                aria-hidden
                                className={cn(
                                    "absolute left-0 top-2 flex h-[15px] w-[15px] items-center justify-center rounded-full border-2 border-brand-paper bg-gradient-to-br shadow-soft sm:h-[19px] sm:w-[19px]",
                                    isPresent
                                        ? "from-brand-accent to-brand-accent-dark"
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
                                            <span className="inline-flex items-center rounded-full border border-brand-night/20 bg-brand-night/10 px-2.5 py-1 text-xs font-semibold text-brand-night">
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
