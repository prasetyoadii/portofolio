import { cn } from "@/lib/cn";

interface WaveformProps {
    className?: string;
    bars?: number;
    size?: "sm" | "md" | "lg";
    tone?: "primary" | "accent";
}

const heights = {
    sm: "h-4",
    md: "h-5",
    lg: "h-7",
} as const;

const tones = {
    primary: "from-brand-primary to-brand-primary-dark",
    accent: "from-brand-accent to-brand-accent-dark",
} as const;

/**
 * The site's signature motif: a small voice waveform that nods to TuwaCare's
 * AI voice assistant + the accessibility theme. Purely decorative; the
 * `prefers-reduced-motion` rule in globals.css freezes the animation.
 */
export function Waveform({ className, bars = 5, size = "sm", tone = "primary" }: WaveformProps) {
    return (
        <span aria-hidden className={cn("inline-flex items-end gap-[3px]", heights[size], className)}>
            {Array.from({ length: bars }).map((_, i) => (
                <span
                    key={i}
                    className={cn(
                        "block h-full w-[3px] origin-bottom rounded-full bg-gradient-to-t animate-wave",
                        tones[tone],
                    )}
                    style={{ animationDelay: `${i * 0.12}s` }}
                />
            ))}
        </span>
    );
}
