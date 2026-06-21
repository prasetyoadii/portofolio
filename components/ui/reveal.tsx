"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import type { ReactNode } from "react";
import { EASE } from "@/lib/animation";

interface RevealProps {
    children: ReactNode;
    className?: string;
    delay?: number;
}

/**
 * Fade + rise on scroll-into-view, and fade + scale-down ("collapse") on
 * scroll-out — so sections fold away when you scroll back up and re-expand on
 * the way down. Centralized so sections don't repeat motion variants.
 *
 * Reduced motion: drops to a one-shot opacity fade with no replay or scaling.
 */
export function Reveal({ children, className, delay = 0 }: RevealProps) {
    const reduce = useReducedMotion();

    const variants: Variants = {
        hidden: {
            opacity: 0,
            y: reduce ? 0 : 28,
            scale: reduce ? 1 : 0.97,
            transition: { duration: 0.4, ease: EASE },
        },
        show: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: { duration: 0.55, delay, ease: EASE },
        },
    };

    return (
        <motion.div
            className={className}
            variants={variants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: reduce ?? false, margin: "-80px" }}
        >
            {children}
        </motion.div>
    );
}
