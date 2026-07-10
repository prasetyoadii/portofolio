"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";
import { profile } from "@/content/portfolio";
import { Button } from "@/components/ui/button";
import { SocialLinks } from "@/components/ui/social-links";
import { Container } from "@/components/ui/container";
import { EASE } from "@/lib/animation";

// Name as a monument: first name on its own line, the rest below it.
const [firstName, ...restNameParts] = profile.name.split(" ");
const restName = restNameParts.join(" ");

// Tie the gold accent into the type by lifting one phrase out of the headline.
const [headlinePre, headlinePost] = profile.headline.split("human-centered");

// Ambient glass spheres — fully static (no motion). Subtle palette rims
// (gold / white / blue) keep them eye-catching without drifting.
const orbs = [
    { className: "h-44 w-44 left-[4%] bottom-[10%]", ring: "ring-1 ring-brand-accent/15" },
    { className: "h-24 w-24 left-[26%] bottom-[24%]", ring: "ring-1 ring-white/10" },
    { className: "h-16 w-16 right-[6%] bottom-[14%]", ring: "ring-1 ring-brand-primary/20" },
];

export default function Hero() {
    const { ref: inViewRef } = useSectionInView("Home", 0.3);
    const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

    const sectionRef = useRef<HTMLElement>(null);
    const reduce = useReducedMotion();
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start start", "end start"],
    });
    const imageY = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [0, -52]);

    const goTo = (name: "Projects" | "Contact") => {
        setActiveSection(name);
        setTimeOfLastClick(Date.now());
    };

    // Honor reduced motion on the load sequence too (JS animations ignore the CSS rule).
    const rise = (y = 16) => (reduce ? { opacity: 0 } : { opacity: 0, y });

    return (
        <section
            ref={sectionRef}
            id="home"
            className="relative isolate flex min-h-[92svh] items-center overflow-hidden bg-brand-night text-white"
        >
            {/* Background: vignette + dotted grid + static glass orbs + seam into the light body */}
            <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
                <div className="absolute inset-0 bg-[radial-gradient(110%_85%_at_75%_15%,rgba(63,114,175,0.22),transparent_60%)]" />
                <div className="absolute inset-0 bg-[radial-gradient(80%_60%_at_15%_85%,rgba(247,201,72,0.10),transparent_60%)]" />
                <div className="absolute inset-0 bg-grid-dark opacity-70" />
                {orbs.map((orb, i) => (
                    <span
                        key={i}
                        className={`absolute rounded-full border border-white/5 bg-[radial-gradient(circle_at_30%_25%,rgba(255,255,255,0.18),rgba(6,16,31,0.95))] shadow-[0_30px_60px_-20px_rgba(0,0,0,0.6)] ${orb.ring} ${orb.className}`}
                    />
                ))}
            </div>

            <Container className="py-28 sm:py-32 lg:py-36">
                <div
                    ref={inViewRef}
                    className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10"
                >
                    {/* Left — the thesis */}
                    <div className="flex flex-col items-start">
                        <motion.span
                            initial={rise(12)}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, ease: EASE }}
                            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-medium text-white/80 backdrop-blur-sm"
                        >
                        </motion.span>

                        <motion.h1
                            initial={rise(20)}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.65, delay: 0.05, ease: EASE }}
                            className="mt-5 font-display text-5xl font-bold uppercase leading-[0.92] tracking-tight sm:text-6xl md:text-7xl xl:text-[5.5rem]"
                        >
                            <span className="block">{firstName}</span>
                            <span className="block text-white/90">{restName}</span>
                        </motion.h1>

                        <motion.p
                            initial={rise(18)}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.12, ease: EASE }}
                            className="mt-6 max-w-xl text-pretty text-base text-white/70 sm:text-lg"
                        >
                            {headlinePre}
                            {/* <span className="font-medium text-brand-accent">human-centered</span> */}
                            {headlinePost}
                        </motion.p>

                        <motion.div
                            initial={rise(18)}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.18, ease: EASE }}
                            className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-3"
                        >
                            <Button variant="accent" href="#projects" onClick={() => goTo("Projects")}>
                                See Work
                                <ArrowRight className="h-4 w-4" />
                            </Button>
                            <Link
                                href="#contact"
                                onClick={() => goTo("Contact")}
                                className="group inline-flex items-center gap-1.5 rounded-full text-sm font-medium text-white/70 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent/60 focus-visible:ring-offset-2 focus-visible:ring-offset-brand-night"
                            >
                                Get in touch
                                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                            </Link>
                        </motion.div>

                        {/* Mobile/tablet socials — the vertical rail takes over on xl+. */}
                        <motion.div
                            initial={rise(18)}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.24, ease: EASE }}
                            className="mt-8 xl:hidden"
                        >
                            <SocialLinks variant="glass" />
                        </motion.div>
                    </div>

                    {/* Right — tilted portrait card (light parallax) */}
                    <motion.div
                        style={{ y: imageY }}
                        initial={reduce ? { opacity: 0 } : { opacity: 0, scale: 0.96, rotate: -1 }}
                        animate={{ opacity: 1, scale: 1, rotate: reduce ? 0 : -4 }}
                        transition={{ duration: 0.8, delay: 0.1, ease: EASE }}
                        className="relative mx-auto w-full max-w-md lg:mx-0"
                    >
                        {/* Gold halo bleeding out behind the card — warmth + depth. */}
                        <div
                            aria-hidden
                            className="absolute -inset-6 -z-10 rounded-[2.5rem] bg-[radial-gradient(60%_60%_at_70%_20%,rgba(247,201,72,0.22),transparent_70%)] blur-2xl"
                        />
                        {/* Stacked backing plate — a second surface peeking out for z-axis depth. */}
                        <div
                            aria-hidden
                            className="absolute inset-0 -z-[5] translate-x-4 translate-y-5 rounded-[2rem] border border-white/10 bg-white/[0.03] shadow-[0_40px_80px_-50px_rgba(0,0,0,0.9)]"
                        />
                        <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-white/10 shadow-[0_50px_90px_-40px_rgba(0,0,0,0.8)] ring-1 ring-white/5">
                            <Image
                                src={profile.avatar}
                                alt={`Portrait of ${profile.name}`}
                                fill
                                sizes="(max-width: 1024px) 90vw, 420px"
                                className="object-cover object-center"
                                priority
                            />
                            {/* Stronger floor gradient grounds the floating credential chip. */}
                            <div className="absolute inset-0 bg-gradient-to-t from-brand-night-deep/80 via-brand-night-deep/10 to-transparent" />
                        </div>

                        {/* Floating credential — overlaps the corner, breaking the frame for depth.
                        <motion.div
                            initial={reduce ? { opacity: 0 } : { opacity: 0, y: 12, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            transition={{ duration: 0.6, delay: 0.55, ease: EASE }}
                            className="absolute -bottom-4 left-4 flex items-center gap-3 rounded-2xl border border-white/12 bg-brand-night/85 px-4 py-2.5 shadow-[0_24px_50px_-24px_rgba(0,0,0,0.85)] backdrop-blur-md"
                        >
                            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-accent/15 ring-1 ring-brand-accent/25">
                                <Waveform size="sm" tone="accent" />
                            </span>
                            <span className="leading-tight">
                                <span className="block font-display text-sm font-semibold text-white">
                                    {profile.role}
                                </span>
                                <span className="block text-xs text-white/55">{profile.location}</span>
                            </span>
                        </motion.div> */}
                    </motion.div>
                </div>
            </Container>

            {/* Vertical social rail — right-edge signature (xl+ only, where there's
                clearance from the portrait card). */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.5, ease: EASE }}
                className="absolute right-5 top-1/2 z-10 hidden -translate-y-1/2 xl:flex xl:flex-col xl:items-center xl:gap-4"
            >
                <SocialLinks variant="glass" orientation="vertical" />
                <span aria-hidden className="h-16 w-px bg-gradient-to-b from-white/30 to-transparent" />
            </motion.div>
        </section>
    );
}
