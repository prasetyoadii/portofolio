import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

interface CardProps {
    children: ReactNode;
    className?: string;
    /** Adds the shared hover-lift (rise + primary hairline + deeper shadow). */
    interactive?: boolean;
}

/** Base surface used across bento tiles and content cards. */
export function Card({ children, className, interactive = false }: CardProps) {
    return (
        <div
            className={cn(
                "card-spot rounded-3xl border border-[color:var(--line)] bg-brand-surface shadow-soft",
                interactive &&
                    "transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:border-brand-primary/40 hover:shadow-lift",
                className,
            )}
        >
            {children}
        </div>
    );
}
