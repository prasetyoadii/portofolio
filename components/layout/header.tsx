"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { navLinks } from "@/content/portfolio";
import { useActiveSectionContext } from "@/context/active-section-context";
import { cn } from "@/lib/cn";
import { EASE } from "@/lib/animation";

export default function Header() {
    const { activeSection, setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const reduce = useReducedMotion();

    // The gliding gold pill is the nav's signature motion — a soft, slightly
    // springy ease reads more fluid than a stiff snap.
    const pillTransition = reduce
        ? { duration: 0 }
        : { type: "spring" as const, bounce: 0.2, duration: 0.55 };

    const handleNavClick = (name: (typeof navLinks)[number]["name"]) => {
        setActiveSection(name);
        setTimeOfLastClick(Date.now());
        setIsMenuOpen(false);
    };

    return (
        <header className="relative z-[999]">
            {/* Desktop pill nav — centered. NOTE: Framer writes an inline `transform`,
                which overrides a Tailwind `-translate-x-1/2`; the -50% must live in the
                motion values (x) to keep the pill centered. */}
            <motion.nav
                className="fixed left-1/2 top-4 z-50 hidden md:block"
                initial={{ x: "-50%", y: -80, opacity: 0 }}
                animate={{ x: "-50%", y: 0, opacity: 1 }}
                transition={{ type: "spring", stiffness: 280, damping: 26 }}
                aria-label="Primary"
            >
                <ul className="flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-2 py-1.5 text-sm font-medium shadow-soft backdrop-blur-md">
                    {navLinks.map((link) => {
                        const isActive = activeSection === link.name;
                        return (
                            <li key={link.hash} className="relative">
                                <Link
                                    href={link.hash}
                                    onClick={() => handleNavClick(link.name)}
                                    aria-current={isActive ? "true" : undefined}
                                    className={cn(
                                        "relative block rounded-full px-3.5 py-1.5 transition-all duration-300",
                                        isActive
                                            ? "text-brand-night"
                                            : "text-white/65 hover:bg-white/5 hover:text-white",
                                    )}
                                >
                                    {isActive && (
                                        <motion.span
                                            layoutId="activeSection"
                                            className="absolute inset-0 -z-10 rounded-full bg-gradient-to-r from-brand-accent to-brand-accent-dark"
                                            transition={pillTransition}
                                        />
                                    )}
                                    {link.name}
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </motion.nav>

            {/* Mobile menu button */}
            <div className="fixed left-0 right-0 top-0 z-50 flex h-16 items-center justify-between px-4 md:hidden">
                <Link
                    href="#home"
                    onClick={() => handleNavClick("Home")}
                    className="rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 font-display text-sm font-bold text-brand-ink shadow-soft backdrop-blur-md"
                >
                    Adi<span className="text-brand-accent">.</span>
                </Link>

                <button
                    type="button"
                    onClick={() => setIsMenuOpen((open) => !open)}
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    aria-expanded={isMenuOpen}
                    aria-controls="mobile-menu"
                    className="flex h-11 w-11 flex-col items-center justify-center gap-[5px] rounded-2xl border border-white/10 bg-white/5 shadow-soft backdrop-blur-md transition-transform active:scale-95"
                >
                    <motion.span
                        className="block h-0.5 w-5 rounded-full bg-brand-ink"
                        animate={{ rotate: isMenuOpen ? 45 : 0, y: isMenuOpen ? 7 : 0 }}
                        transition={{ duration: 0.25 }}
                    />
                    <motion.span
                        className="block h-0.5 w-5 rounded-full bg-brand-ink"
                        animate={{ opacity: isMenuOpen ? 0 : 1 }}
                        transition={{ duration: 0.25 }}
                    />
                    <motion.span
                        className="block h-0.5 w-5 rounded-full bg-brand-ink"
                        animate={{ rotate: isMenuOpen ? -45 : 0, y: isMenuOpen ? -7 : 0 }}
                        transition={{ duration: 0.25 }}
                    />
                </button>
            </div>

            {/* Mobile dropdown */}
            <AnimatePresence>
                {isMenuOpen && (
                    <>
                        <motion.div
                            className="fixed inset-0 z-40 bg-brand-night-deep/60 backdrop-blur-sm md:hidden"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsMenuOpen(false)}
                        />
                        <motion.nav
                            id="mobile-menu"
                            aria-label="Mobile"
                            className="fixed left-3 right-3 top-[4.5rem] z-50 overflow-hidden rounded-3xl border border-white/10 bg-brand-surface/95 p-2 shadow-lift backdrop-blur-xl md:hidden"
                            initial={{ opacity: 0, y: -16 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -16 }}
                            transition={{ duration: 0.25 }}
                        >
                            <ul className="flex flex-col">
                                {navLinks.map((link, i) => {
                                    const isActive = activeSection === link.name;
                                    return (
                                        <motion.li
                                            key={link.hash}
                                            initial={{ opacity: 0, x: reduce ? 0 : -10 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{
                                                delay: reduce ? 0 : 0.05 + i * 0.04,
                                                duration: 0.25,
                                                ease: EASE,
                                            }}
                                        >
                                            <Link
                                                href={link.hash}
                                                onClick={() => handleNavClick(link.name)}
                                                aria-current={isActive ? "true" : undefined}
                                                className={cn(
                                                    "flex items-center justify-between rounded-2xl px-4 py-3 text-sm font-medium transition-colors",
                                                    isActive
                                                        ? "bg-brand-accent/15 text-brand-accent"
                                                        : "text-white/70 hover:bg-white/[0.06] hover:text-white",
                                                )}
                                            >
                                                {link.name}
                                                {isActive && (
                                                    <span className="h-1.5 w-1.5 rounded-full bg-brand-accent" />
                                                )}
                                            </Link>
                                        </motion.li>
                                    );
                                })}
                            </ul>
                        </motion.nav>
                    </>
                )}
            </AnimatePresence>
        </header>
    );
}
