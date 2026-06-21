"use client";

import { useState } from "react";
import { FaGithub } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";
import { Images } from "lucide-react";
import type { Project } from "@/types/portfolio";
import { Badge } from "@/components/ui/badge";
import { Waveform } from "@/components/ui/waveform";
import { ProjectModal } from "@/components/project/project-modal";
import { cn } from "@/lib/cn";

/**
 * Project shown as a content-only card. When it has screenshots, the whole card
 * opens a swipeable gallery — surfaced clearly with a "View screenshots" control
 * so the affordance is never hidden. The tech-stack overflow ("+N") expands
 * in place to reveal the remaining tags.
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

    const VISIBLE_TAGS = 6;
    const hiddenCount = project.tags.length - VISIBLE_TAGS;
    const visibleTags = showAllTags ? project.tags : project.tags.slice(0, VISIBLE_TAGS);

    const openGallery = () => hasGallery && setIsModalOpen(true);

    return (
        <>
            <article
                onClick={openGallery}
                className={cn(
                    "group flex flex-col gap-4 rounded-3xl border border-[color:var(--line)] bg-brand-surface p-5 shadow-soft transition-all duration-300 sm:p-6",
                    hasGallery &&
                        "cursor-pointer hover:-translate-y-1 hover:border-brand-primary/40 hover:shadow-lift",
                )}
            >
                {/* Header: project type + (for the lead project) the voice motif */}
                <div className="flex items-center gap-2.5">
                    <Badge>{project.type}</Badge>
                    {project.featured && <Waveform size="sm" bars={4} tone="accent" />}
                </div>

                {/* Title + tagline */}
                <div>
                    <h3 className="font-display text-xl font-semibold text-brand-ink">
                        {project.title}
                    </h3>
                    <p className="mt-0.5 text-sm font-medium text-brand-primary">
                        {project.tagline}
                    </p>
                </div>

                <p className="max-w-2xl text-sm text-brand-muted">{project.description}</p>

                {project.highlights && (
                    <ul className="grid max-w-3xl gap-1.5 sm:grid-cols-2">
                        {project.highlights.map((highlight) => (
                            <li
                                key={highlight}
                                className="flex items-start gap-2 text-sm text-brand-ink"
                            >
                                <span
                                    aria-hidden
                                    className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brand-primary"
                                />
                                <span>{highlight}</span>
                            </li>
                        ))}
                    </ul>
                )}

                {/* Tech stack — overflow expands in place */}
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

                {/* Actions */}
                {(hasGallery || linkHref) && (
                    <div className="mt-auto flex flex-wrap items-center gap-2 pt-1">
                        {hasGallery && (
                            <button
                                type="button"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setIsModalOpen(true);
                                }}
                                className="inline-flex items-center gap-1.5 rounded-full bg-brand-primary px-4 py-2 text-sm font-medium text-white shadow-soft transition-all hover:-translate-y-0.5 hover:bg-brand-primary-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary/60 focus-visible:ring-offset-2 focus-visible:ring-offset-brand-surface"
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
                                className="inline-flex items-center gap-1.5 rounded-full border border-[color:var(--line)] bg-brand-surface px-4 py-2 text-sm font-medium text-brand-ink transition-all hover:-translate-y-0.5 hover:border-brand-primary/40 hover:text-brand-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary/60 focus-visible:ring-offset-2 focus-visible:ring-offset-brand-surface"
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
                )}
            </article>

            <ProjectModal
                project={project}
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />
        </>
    );
}
