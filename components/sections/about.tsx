"use client";

import { Layers, ShieldCheck, HeartHandshake } from "lucide-react";
import { useSectionInView } from "@/lib/hooks";
import { profile } from "@/content/portfolio";
import { SectionHeader } from "@/components/ui/section-header";
import { Reveal } from "@/components/ui/reveal";
import { Card } from "@/components/ui/card";

const focusAreas = ["Backend", "Frontend", "Mobile"];

const values = [
    {
        icon: Layers,
        title: "End-to-end",
        body: "From database to UI — I ship features across the whole stack.",
    },
    {
        icon: ShieldCheck,
        title: "Reliable",
        body: "Clean, tested code that stays maintainable as it grows.",
    },
    {
        icon: HeartHandshake,
        title: "Human-centered",
        body: "Accessible software that genuinely helps the people using it.",
    },
];

export default function About() {
    const { ref } = useSectionInView("About", 0.3);

    return (
        <section ref={ref} id="about" className="scroll-mt-24 py-20 sm:py-24">
            {/* Tinted panel — a soft blue wash sets this section apart from the paper. */}
            <div className="overflow-hidden rounded-[1.75rem] border border-[color:var(--line)] bg-gradient-to-b from-brand-soft/55 to-brand-surface/40 p-6 backdrop-blur-sm sm:rounded-[2.5rem] sm:p-10 lg:p-14">
                <SectionHeader
                    eyebrow="About"
                    title={
                        <>
                            A bit about{" "}
                            <span className="bg-gradient-to-r from-brand-primary to-brand-primary-dark bg-clip-text text-transparent">
                                me
                            </span>
                        </>
                    }
                    description="Software engineer in the making, building systems that stay clean as they grow."
                />

                <Reveal className="mx-auto mt-8 max-w-2xl space-y-4 text-pretty text-center text-base leading-relaxed text-brand-muted sm:text-lg">
                    {profile.about.map((paragraph, i) => (
                        <p key={i}>{paragraph}</p>
                    ))}
                </Reveal>

                <div className="mx-auto mt-10 grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    {/* Focus — the one fully colored card. */}
                    <Reveal>
                        <Card className="flex h-full flex-col items-center justify-center gap-3 border-transparent bg-gradient-to-br from-brand-primary to-brand-primary-dark p-6 text-center text-white shadow-lift">
                            <h3 className="font-display text-base font-semibold">Focus</h3>
                            <p className="text-sm text-white/80">Where I spend my time.</p>
                            <div className="mt-1 flex flex-wrap justify-center gap-2">
                                {focusAreas.map((area) => (
                                    <span
                                        key={area}
                                        className="rounded-full border border-white/25 bg-white/15 px-2.5 py-1 text-xs font-medium text-white"
                                    >
                                        {area}
                                    </span>
                                ))}
                            </div>
                        </Card>
                    </Reveal>

                    {values.map((value, i) => {
                        const Icon = value.icon;
                        return (
                            <Reveal key={value.title} delay={(i + 1) * 0.08}>
                                <Card className="flex h-full flex-col items-center p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-brand-primary/40 hover:shadow-lift">
                                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-primary/10 text-brand-primary">
                                        <Icon className="h-5 w-5" />
                                    </span>
                                    <h3 className="mt-4 font-display text-base font-semibold text-brand-ink">
                                        {value.title}
                                    </h3>
                                    <p className="mt-1 text-sm text-brand-muted">{value.body}</p>
                                </Card>
                            </Reveal>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
