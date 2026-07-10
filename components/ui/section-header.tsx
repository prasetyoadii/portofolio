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
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-accent/25 bg-brand-accent/[0.08] px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-brand-accent shadow-[0_0_0_1px_rgba(247,201,72,0.04)_inset] backdrop-blur-sm">
                {/* <Waveform size="sm" tone="accent" /> */}
                {eyebrow}
            </span>
            <h2 className="text-balance font-display text-3xl font-bold tracking-tight text-brand-ink [text-shadow:0_1px_24px_rgba(11,30,54,0.6)] sm:text-4xl md:text-5xl">
                {title}
            </h2>
            {/* Signature gold hairline — a recurring accent that anchors every section start. */}
            <span
                aria-hidden
                className={cn(
                    "h-px rounded-full bg-gradient-to-r",
                    align === "center"
                        ? "w-16 from-transparent via-brand-accent/70 to-transparent"
                        : "w-12 from-brand-accent/80 to-transparent",
                )}
            />
            {description ? (
                <p className="text-pretty text-base text-brand-muted sm:text-lg">{description}</p>
            ) : null}
        </Reveal>
    );
}
