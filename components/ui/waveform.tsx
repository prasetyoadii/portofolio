import { cn } from "@/lib/cn";

interface WaveformProps {
    className?: string;
    size?: "sm" | "md" | "lg";
    tone?: "primary" | "accent";
}

// Slim track dimensions per size — height stays thin, width grows.
const dims = {
    sm: "h-1 w-8",
    md: "h-1.5 w-12",
    lg: "h-2 w-28",
} as const;

const tones = {
    primary: { track: "bg-brand-primary/25", sheen: "via-brand-primary" },
    accent: { track: "bg-brand-accent/25", sheen: "via-brand-accent" },
} as const;

/**
 * The site's signature motif: a slim track with a soft highlight that sweeps
 * across it — a quiet nod to TuwaCare's AI voice assistant + the accessibility
 * theme. Purely decorative; the `prefers-reduced-motion` rule in globals.css
 * freezes the sweep into a static tinted bar.
 */
export function Waveform({ className, size = "sm", tone = "accent" }: WaveformProps) {
    const t = tones[tone];
    return (
        <span
            aria-hidden
            className={cn(
                "relative inline-block overflow-hidden rounded-full",
                dims[size],
                t.track,
                className,
            )}
        >
            <span
                className={cn(
                    "absolute inset-y-0 left-0 w-1/2 animate-sheen rounded-full bg-gradient-to-r from-transparent to-transparent will-change-transform",
                    t.sheen,
                )}
            />
        </span>
    );
}
