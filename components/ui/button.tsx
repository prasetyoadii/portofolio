import Link from "next/link";
import type { MouseEventHandler, ReactNode } from "react";
import { cn } from "@/lib/cn";

type Variant = "primary" | "secondary" | "ghost" | "accent";
type Size = "sm" | "md";

// NOTE: `cn` is plain clsx (no tailwind-merge), so the focus-ring *color* and
// *offset color* live per-variant — never in `base` — to avoid two conflicting
// utilities both surviving into the class list (light default vs dark accent).
const base =
    "inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all duration-200 will-change-transform focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-60";

const ringOnPaper = "focus-visible:ring-brand-primary/60 focus-visible:ring-offset-brand-paper";

const variantStyles: Record<Variant, string> = {
    primary:
        "bg-gradient-to-r from-brand-primary to-brand-primary-dark text-white shadow-soft hover:-translate-y-0.5 hover:shadow-lift active:translate-y-0 " +
        ringOnPaper,
    secondary:
        "border border-[color:var(--line)] bg-brand-surface text-brand-ink shadow-soft hover:-translate-y-0.5 hover:border-brand-primary/40 active:translate-y-0 " +
        ringOnPaper,
    ghost: "text-brand-muted hover:bg-brand-soft/50 hover:text-brand-ink " + ringOnPaper,
    // Warm CTA for dark surfaces (the hero). Ring offset sits on the night bg.
    accent:
        "bg-gradient-to-r from-brand-accent to-brand-accent-dark text-brand-night shadow-[0_12px_30px_-12px_rgba(247,201,72,0.65)] hover:-translate-y-0.5 hover:shadow-[0_18px_42px_-14px_rgba(247,201,72,0.8)] active:translate-y-0 focus-visible:ring-brand-accent/70 focus-visible:ring-offset-brand-night",
};

const sizeStyles: Record<Size, string> = {
    sm: "h-9 px-4 text-sm",
    md: "h-11 px-5 text-sm sm:text-base",
};

interface ButtonProps {
    children: ReactNode;
    href?: string;
    onClick?: MouseEventHandler<HTMLElement>;
    variant?: Variant;
    size?: Size;
    className?: string;
    type?: "button" | "submit";
    disabled?: boolean;
    "aria-label"?: string;
}

export function Button({
    children,
    href,
    onClick,
    variant = "primary",
    size = "md",
    className,
    type = "button",
    disabled,
    ...rest
}: ButtonProps) {
    const classes = cn(base, variantStyles[variant], sizeStyles[size], className);

    if (href) {
        const isExternal = /^https?:\/\//.test(href);
        if (isExternal) {
            return (
                <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={onClick}
                    className={classes}
                    {...rest}
                >
                    {children}
                </a>
            );
        }
        return (
            <Link href={href} onClick={onClick} className={classes} {...rest}>
                {children}
            </Link>
        );
    }

    return (
        <button type={type} onClick={onClick} disabled={disabled} className={classes} {...rest}>
            {children}
        </button>
    );
}
