"use client";

import { useState } from "react";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";
import { Images } from "lucide-react";
import type { Project } from "@/types/portfolio";
import { Badge } from "@/components/ui/badge";
import { YouTubeEmbed } from "@/components/ui/youtube-embed";
import { ProjectModal } from "@/components/project/project-modal";
import { cn } from "@/lib/cn";

/**
 * Project card with two faces:
 *  - `featured` renders as a wide, gold-accented showcase (the centerpiece).
 *  - the default renders a compact bento tile with an image peek that opens a
 *    swipeable gallery on click — surfaced clearly with a keyboard-reachable
 *    "View screenshots" control so the affordance is never hidden.
 * The tech-stack overflow ("+N") expands in place to reveal the remaining tags.
 */
export function ProjectCard({ project }: { project: Project }) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [showAllTags, setShowAllTags] = useState(false);

    const images = project.imageUrl ?? [];
    const hasGallery = images.length > 0;

    const isFigma = project.github?.includes("figma.com");
    const linkHref = project.demo ?? project.github;
    const linkLabel = project.demo
        ? "Live demo"
        : isFigma
          ? "View prototype"
          : "View on GitHub";

    const VISIBLE_TAGS = project.featured ? 8 : 5;
    const hiddenCount = project.tags.length - VISIBLE_TAGS;
    const visibleTags = showAllTags ? project.tags : project.tags.slice(0, VISIBLE_TAGS);

    const openGallery = () => hasGallery && setIsModalOpen(true);

    // Shared bits ------------------------------------------------------------
    const tagRow = (
        <div className="flex flex-wrap items-center gap-1.5">
            {visibleTags.map((tag) => (
                <Badge key={tag}>{tag}</Badge>
            ))}
            {hiddenCount > 0 && (
                <button
                    type="button"
                    onClick={(e) => {
                        e.stopPropagation();
                        setShowAllTags((v) => !v);
                    }}
                    aria-expanded={showAllTags}
                    className="rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary/60 focus-visible:ring-offset-2 focus-visible:ring-offset-brand-surface"
                >
                    <Badge className="transition-colors hover:bg-brand-accent/25">
                        {showAllTags ? "Show less" : `+${hiddenCount} more`}
                    </Badge>
                </button>
            )}
        </div>
    );

    const actions = (hasGallery || linkHref) && (
        <div className="mt-auto flex flex-wrap items-center gap-2 pt-1">
            {hasGallery && (
                <button
                    type="button"
                    onClick={(e) => {
                        e.stopPropagation();
                        setIsModalOpen(true);
                    }}
                    className="inline-flex items-center gap-1.5 rounded-full bg-brand-primary px-4 py-2 text-sm font-medium text-white shadow-soft transition-all hover:-translate-y-0.5 hover:bg-brand-primary-dark active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary/60 focus-visible:ring-offset-2 focus-visible:ring-offset-brand-surface"
                >
                    <Images className="h-4 w-4" />
                    View {images.length} screenshot{images.length > 1 ? "s" : ""}
                </button>
            )}

            {linkHref && (
                <a
                    href={linkHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="inline-flex items-center gap-1.5 rounded-full border border-[color:var(--line)] bg-brand-surface px-4 py-2 text-sm font-medium text-brand-ink transition-all hover:-translate-y-0.5 hover:border-brand-primary/40 hover:text-brand-primary active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary/60 focus-visible:ring-offset-2 focus-visible:ring-offset-brand-surface"
                >
                    {isFigma ? (
                        <FiArrowUpRight className="h-4 w-4" />
                    ) : (
                        <FaGithub className="h-4 w-4" />
                    )}
                    {linkLabel}
                </a>
            )}
        </div>
    );

    // Featured showcase ------------------------------------------------------
    if (project.featured) {
        return (
            <>
                <article className="relative overflow-hidden rounded-[1.75rem] border border-brand-accent/25 bg-brand-surface p-6 shadow-lift ring-1 ring-brand-accent/10 sm:p-8">
                    {/* Gold ambient — marks this as the elevated, one-of-a-kind tile. */}
                    <div
                        aria-hidden
                        className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-brand-accent/10 blur-3xl"
                    />
                    {/* Row 1 — Title + Description | Video */}
                    <div className="relative grid gap-6 lg:grid-cols-[1.55fr_1fr] lg:gap-8">
                        <div className="flex flex-col">
                            <div className="flex flex-wrap items-center gap-2.5">
                                <Badge>{project.type}</Badge>
                            </div>
                            <h3 className="mt-4 font-display text-2xl font-bold tracking-tight text-brand-ink sm:text-3xl">
                                {project.title}
                            </h3>
                            <p className="mt-1 font-medium text-brand-accent">{project.tagline}</p>
                            <p className="mt-3 max-w-xl text-sm text-brand-muted sm:text-base">
                                {project.description}
                            </p>
                        </div>

                        {project.videoUrl ? (
                            <div className="hidden lg:block">
                                <YouTubeEmbed url={project.videoUrl} title={project.title} />
                            </div>
                        ) : (
                            <div
                                aria-hidden
                                className="relative hidden overflow-hidden rounded-3xl border border-brand-accent/20 bg-gradient-to-br from-brand-night to-brand-night-deep p-6 lg:flex lg:flex-col lg:items-center lg:justify-center"
                            >
                                <div className="absolute inset-0 bg-grid-dark opacity-50" />
                                <div className="absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_30%,rgba(247,201,72,0.16),transparent_70%)]" />
                                <p className="relative mt-5 text-center font-display text-sm font-semibold text-white">
                                    No video demo available
                                </p>
                            </div>
                        )}
                    </div>

                    {/* Row 2 — Highlights + Tags + Actions */}
                    <div className="mt-6 border-t border-brand-accent/15 pt-6">
                        {project.highlights && (
                            <ul className="grid gap-x-5 gap-y-2 sm:grid-cols-2">
                                {project.highlights.map((highlight) => (
                                    <li
                                        key={highlight}
                                        className="flex items-start gap-2 text-sm text-brand-ink"
                                    >
                                        <span
                                            aria-hidden
                                            className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brand-accent"
                                        />
                                        <span>{highlight}</span>
                                    </li>
                                ))}
                            </ul>
                        )}
                        <div className="mt-4 space-y-3">
                            {tagRow}
                            {actions}
                        </div>
                    </div>
                </article>

                <ProjectModal
                    project={project}
                    isOpen={isModalOpen}
                    onClose={() => setIsModalOpen(false)}
                />
            </>
        );
    }

    // Default bento tile -----------------------------------------------------
    return (
        <>
            <article
                onClick={openGallery}
                className={cn(
                    "group flex h-full flex-col overflow-hidden rounded-3xl border border-[color:var(--line)] bg-brand-surface shadow-soft transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]",
                    hasGallery &&
                        "cursor-pointer hover:-translate-y-1 hover:border-brand-primary/40 hover:shadow-lift",
                )}
            >
                {/* Image peek — first screenshot, fading into the card surface. */}
                {hasGallery && (
                    <div className="relative aspect-[16/10] overflow-hidden">
                        <Image
                            src={images[0]}
                            alt={`${project.title} preview`}
                            fill
                            sizes="(max-width: 640px) 90vw, 460px"
                            className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.04]"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-brand-surface via-brand-surface/15 to-transparent" />
                        <span className="absolute left-3 top-3">
                            <Badge className="bg-brand-night/70 backdrop-blur">{project.type}</Badge>
                        </span>
                        {images.length > 1 && (
                            <span className="absolute right-3 top-3 inline-flex items-center gap-1 rounded-full bg-brand-night/70 px-2.5 py-1 text-xs font-medium text-white backdrop-blur">
                                <Images className="h-3.5 w-3.5" />
                                {images.length}
                            </span>
                        )}
                    </div>
                )}

                <div className="flex flex-1 flex-col gap-4 p-5 sm:p-6">
                    {!hasGallery && (
                        <div className="flex items-center gap-2.5">
                            <Badge>{project.type}</Badge>
                        </div>
                    )}

                    <div>
                        <h3 className="font-display text-lg font-semibold text-brand-ink sm:text-xl">
                            {project.title}
                        </h3>
                        <p className="mt-0.5 text-sm font-medium text-brand-primary">
                            {project.tagline}
                        </p>
                    </div>

                    <p className="text-sm text-brand-muted">{project.description}</p>

                    {tagRow}
                    {actions}
                </div>
            </article>

            <ProjectModal
                project={project}
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />
        </>
    );
}
