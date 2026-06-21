import { socials } from "@/content/portfolio";
import { cn } from "@/lib/cn";

type Variant = "solid" | "bare" | "glass";
type Size = "sm" | "md";
type Orientation = "horizontal" | "vertical";

interface SocialLinksProps {
    /** "solid" = bordered light chips; "bare" = icon-only; "glass" = for dark surfaces. */
    variant?: Variant;
    size?: Size;
    /** Row (default) or a stacked rail (e.g. the hero's right edge). */
    orientation?: Orientation;
    className?: string;
}

const sizeStyles: Record<Size, string> = {
    sm: "h-9 w-9",
    md: "h-10 w-10",
};

// Ring color + offset color live per-variant (see Button) — `cn` is plain clsx,
// so a light default in a shared `base` would conflict with the dark variant.
const variantStyles: Record<Variant, string> = {
    solid:
        "border border-[color:var(--line)] bg-brand-surface text-brand-muted shadow-soft hover:-translate-y-0.5 hover:border-brand-primary/40 hover:text-brand-primary focus-visible:ring-brand-primary/60 focus-visible:ring-offset-brand-paper",
    bare: "text-brand-muted hover:-translate-y-0.5 hover:text-brand-primary focus-visible:ring-brand-primary/60 focus-visible:ring-offset-brand-paper",
    glass:
        "border border-white/15 bg-white/5 text-white/70 backdrop-blur-sm hover:-translate-y-0.5 hover:border-brand-accent/50 hover:text-brand-accent focus-visible:ring-brand-accent/60 focus-visible:ring-offset-brand-night",
};

/** Shared row/rail of social icon links — used by the hero, contact, and footer. */
export function SocialLinks({
    variant = "solid",
    size = "md",
    orientation = "horizontal",
    className,
}: SocialLinksProps) {
    return (
        <div
            className={cn(
                "flex items-center gap-2",
                orientation === "vertical" ? "flex-col" : "flex-wrap",
                className,
            )}
        >
            {socials.map((social) => {
                const Icon = social.icon;
                return (
                    <a
                        key={social.name}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={social.name}
                        className={cn(
                            "inline-flex items-center justify-center rounded-full transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
                            sizeStyles[size],
                            variantStyles[variant],
                        )}
                    >
                        <Icon className="h-[1.05rem] w-[1.05rem]" />
                    </a>
                );
            })}
        </div>
    );
}
