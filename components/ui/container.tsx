import type { ElementType, ReactNode } from "react";
import { cn } from "@/lib/cn";

interface ContainerProps {
    children: ReactNode;
    className?: string;
    /** Render as a different element (e.g. "section", "footer"). Defaults to div. */
    as?: ElementType;
}

/** Consistent max-width + horizontal padding for every page region. */
export function Container({ children, className, as: Tag = "div" }: ContainerProps) {
    return (
        <Tag className={cn("mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8", className)}>
            {children}
        </Tag>
    );
}
