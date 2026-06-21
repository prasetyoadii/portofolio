import type { ReactNode } from "react";
import { Reveal } from "@/components/ui/reveal";
import { Waveform } from "@/components/ui/waveform";
import { cn } from "@/lib/cn";

interface SectionHeaderProps {
    eyebrow: string;
    title: ReactNode;
    description?: string;
    align?: "center" | "left";
    className?: string;
}

export function SectionHeader({
    eyebrow,
    title,
    description,
    align = "center",
    className,
}: SectionHeaderProps) {
    const alignment =
        align === "center" ? "mx-auto items-center text-center" : "items-start text-left";

    return (
        <Reveal className={cn("flex max-w-2xl flex-col gap-3", alignment, className)}>
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-brand-accent">
                <Waveform size="sm" bars={4} tone="accent" />
                {eyebrow}
            </span>
            <h2 className="text-balance font-display text-3xl font-bold tracking-tight text-brand-ink sm:text-4xl md:text-5xl">
                {title}
            </h2>
            {description ? (
                <p className="text-pretty text-base text-brand-muted sm:text-lg">{description}</p>
            ) : null}
        </Reveal>
    );
}
