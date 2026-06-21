import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

interface CardProps {
    children: ReactNode;
    className?: string;
}

/** Base surface used across bento tiles and content cards. */
export function Card({ children, className }: CardProps) {
    return (
        <div
            className={cn(
                "rounded-3xl border border-[color:var(--line)] bg-brand-surface shadow-soft",
                className,
            )}
        >
            {children}
        </div>
    );
}
