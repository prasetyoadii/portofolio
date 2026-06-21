import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type Tone = "default" | "primary" | "solid" | "accent" | "gold";

const tones: Record<Tone, string> = {
    default: "border-[color:var(--line)] bg-brand-soft/40 text-brand-muted",
    primary: "border-brand-primary/30 bg-brand-primary/15 text-brand-primary",
    solid: "border-transparent bg-brand-primary text-white",
    // Gold accent — soft chip + solid spotlight, for highlights like "Featured".
    accent: "border-brand-accent/30 bg-brand-accent/15 text-brand-accent",
    gold: "border-transparent bg-gradient-to-r from-brand-accent to-brand-accent-dark text-brand-night",
};

interface BadgeProps {
    children: ReactNode;
    tone?: Tone;
    className?: string;
}

export function Badge({ children, tone = "accent", className }: BadgeProps) {
    return (
        <span
            className={cn(
                "inline-flex items-center rounded-full border px-2.5 py-1 text-xs font-medium",
                tones[tone],
                className,
            )}
        >
            {children}
        </span>
    );
}
