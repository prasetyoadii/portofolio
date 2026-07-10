"use client";

import { Layers, ShieldCheck, Lightbulb } from "lucide-react";
import { useSectionInView } from "@/lib/hooks";
import { profile } from "@/content/portfolio";
import { SectionHeader } from "@/components/ui/section-header";
import { Reveal } from "@/components/ui/reveal";
import { Card } from "@/components/ui/card";

const focusAreas = ["Backend", "Frontend", "Mobile Android"];

const values = [
    {
        icon: Lightbulb,
        title: "Under stand & Architect",
        body: "I start by deeply understanding the requirement, then translate it into a system architecture that actually fits the problem.",
    },
    {
        icon: Layers,
        title: "Build End-to-End",
        body: "From architecture design, database schema, and backend logic to the frontend UI, then a CI/CD pipeline that ships it to production.",
    },
    {
        icon: ShieldCheck,
        title: "Engineer for Quality",
        body: "SOLID principles and clean code as the foundation, backed by SonarQube, Sentry, Prometheus, and Grafana to keep systems observable and maintainable.",
    },
];

export default function About() {
    const { ref } = useSectionInView("About", 0.3);

    return (
        <section ref={ref} id="about" className="scroll-mt-24 py-20 sm:py-24">
            {/* Tinted panel — a soft blue wash sets this section apart from the paper. */}
            <div className="overflow-hidden rounded-[1.75rem] border border-[color:var(--line)] bg-gradient-to-b from-brand-soft/55 to-brand-surface/40 p-2 backdrop-blur-sm sm:rounded-[2.5rem] sm:p-10 lg:p-14">
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
                />

                <Reveal className="mx-auto mt-8 max-w-2xl space-y-4 text-pretty text-center text-base leading-relaxed text-brand-muted sm:text-lg">
                    {profile.about.map((paragraph, i) => (
                        <p key={i}>{paragraph}</p>
                    ))}
                </Reveal>

                {/* Asymmetric bento — a tall colored anchor, one wide tile, two standard. */}
                <div className="mx-auto mt-10 grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {/* Focus — the tall, fully colored anchor of the bento. */}
                    <Reveal className="lg:row-span-2">
                        <Card className="relative flex h-full flex-col justify-between gap-6 overflow-hidden border-transparent bg-gradient-to-br from-brand-primary to-brand-primary-dark p-6 text-white shadow-lift sm:p-7">
                            {/* Faint grid + glow keep the colored tile from reading flat. */}
                            <span
                                aria-hidden
                                className="pointer-events-none absolute inset-0 bg-grid-dark opacity-40"
                            />
                            <span
                                aria-hidden
                                className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-brand-accent/20 blur-3xl"
                            />
                            <div className="relative">
                                <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-white">
                                    {/* <Waveform size="sm" tone="accent" /> */}
                                    Focus
                                </span>
                                <h3 className="mt-4 font-display text-2xl font-bold leading-tight">
                                    Where I spend my time
                                </h3>
                                <p className="mt-2 text-sm text-white/75">
                                    Comfortable working across multiple stacks and experienced in
                                 </p>
                            </div>
                            <div className="relative flex flex-wrap gap-2">
                                {focusAreas.map((area) => (
                                    <span
                                        key={area}
                                        className="rounded-full border border-white/25 bg-white/10 px-3 py-1.5 text-sm font-medium text-white"
                                    >
                                        {area}
                                    </span>
                                ))}
                            </div>
                        </Card>
                    </Reveal>

                    {values.map((value, i) => {
                        const Icon = value.icon;
                        // The first value tile spans wide; the rest stay standard — varied sizes.
                        const isWide = i === 0;
                        return (
                            <Reveal
                                key={value.title}
                                delay={(i + 1) * 0.08}
                                className={isWide ? "lg:col-span-2" : undefined}
                            >
                                <Card
                                    interactive
                                    className={
                                        isWide
                                            ? "bg-grid flex h-full items-start gap-4 p-6 sm:items-center sm:gap-5"
                                            : "flex h-full flex-col p-6"
                                    }
                                >
                                    <span className="inline-flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-brand-accent/10 text-brand-accent ring-1 ring-brand-accent/15">
                                        <Icon className="h-5 w-5" />
                                    </span>
                                    <div className={isWide ? "" : "mt-4"}>
                                        <h3 className="font-display text-base font-semibold text-brand-ink">
                                            {value.title}
                                        </h3>
                                        <p className="mt-1 text-sm text-brand-muted">{value.body}</p>
                                    </div>
                                </Card>
                            </Reveal>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
