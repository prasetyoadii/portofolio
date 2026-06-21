"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronLeft, FaChevronRight, FaTimes } from "react-icons/fa";
import type { Project } from "@/types/portfolio";

interface ProjectModalProps {
    project: Project | null;
    isOpen: boolean;
    onClose: () => void;
}

const slideVariants = {
    enter: (direction: number) => ({ x: direction > 0 ? 180 : -180, opacity: 0 }),
    center: { zIndex: 1, x: 0, opacity: 1 },
    exit: (direction: number) => ({
        zIndex: 0,
        x: direction < 0 ? 180 : -180,
        opacity: 0,
    }),
};

const SWIPE_DISTANCE = 60;
const SWIPE_VELOCITY = 500;
const WHEEL_THRESHOLD = 30;

export function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [direction, setDirection] = useState(0);
    const wheelLocked = useRef(false);
    const wheelTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

    const images = project?.imageUrl ?? [];

    const paginate = useCallback(
        (next: number, forcedDirection?: number) => {
            if (images.length < 2) return;

            setCurrentImageIndex((current) => {
                const normalized = (next + images.length) % images.length;
                if (normalized === current) return current;

                setDirection(forcedDirection ?? (normalized > current ? 1 : -1));
                return normalized;
            });
        },
        [images.length],
    );

    const nextImage = useCallback(() => {
        if (images.length < 2) return;
        setDirection(1);
        setCurrentImageIndex((current) => (current + 1) % images.length);
    }, [images.length]);

    const prevImage = useCallback(() => {
        if (images.length < 2) return;
        setDirection(-1);
        setCurrentImageIndex((current) => (current - 1 + images.length) % images.length);
    }, [images.length]);

    useEffect(() => {
        if (!isOpen) return;

        setCurrentImageIndex(0);
        setDirection(0);
    }, [isOpen, project?.title]);

    useEffect(() => {
        if (!isOpen) return;

        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";

        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") onClose();
            if (event.key === "ArrowRight") nextImage();
            if (event.key === "ArrowLeft") prevImage();
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => {
            document.body.style.overflow = previousOverflow;
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [isOpen, nextImage, onClose, prevImage]);

    useEffect(
        () => () => {
            if (wheelTimer.current) clearTimeout(wheelTimer.current);
        },
        [],
    );

    if (!project || images.length === 0) return null;

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-[9999] flex items-center justify-center bg-brand-night-deep/85 p-3 backdrop-blur-sm sm:p-4"
                    onClick={onClose}
                    role="dialog"
                    aria-modal="true"
                    aria-label={`${project.title} image gallery`}
                >
                    <motion.div
                        initial={{ scale: 0.92, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.92, opacity: 0 }}
                        transition={{ type: "spring", duration: 0.45 }}
                        className="flex h-[90vh] w-full max-w-5xl flex-col overflow-hidden rounded-3xl border border-[color:var(--line)] bg-brand-surface shadow-2xl"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="flex flex-shrink-0 items-center justify-between border-b border-[color:var(--line)] p-3 sm:p-4">
                            <h3 className="px-2 font-display text-sm font-semibold text-brand-ink sm:text-base">
                                {project.title}
                            </h3>
                            <button
                                type="button"
                                onClick={onClose}
                                aria-label="Close gallery"
                                className="rounded-full p-2 text-brand-muted transition-colors hover:bg-white/10 hover:text-brand-ink"
                            >
                                <FaTimes className="h-5 w-5" />
                            </button>
                        </div>

                        <div
                            className="relative flex-1 overflow-hidden bg-brand-paper"
                            onWheel={(event) => {
                                if (
                                    images.length < 2 ||
                                    wheelLocked.current ||
                                    Math.abs(event.deltaX) < WHEEL_THRESHOLD ||
                                    Math.abs(event.deltaX) <= Math.abs(event.deltaY)
                                ) {
                                    return;
                                }

                                wheelLocked.current = true;
                                if (event.deltaX > 0) nextImage();
                                else prevImage();

                                wheelTimer.current = setTimeout(() => {
                                    wheelLocked.current = false;
                                }, 450);
                            }}
                        >
                            <AnimatePresence initial={false} custom={direction}>
                                <motion.div
                                    key={currentImageIndex}
                                    custom={direction}
                                    variants={slideVariants}
                                    initial="enter"
                                    animate="center"
                                    exit="exit"
                                    transition={{
                                        x: {
                                            type: "spring",
                                            stiffness: 260,
                                            damping: 28,
                                            mass: 0.8,
                                        },
                                        opacity: { duration: 0.16 },
                                    }}
                                    drag={images.length > 1 ? "x" : false}
                                    dragConstraints={{ left: 0, right: 0 }}
                                    dragElastic={0.18}
                                    dragMomentum={false}
                                    onDragEnd={(_, { offset, velocity }) => {
                                        const movedFarEnough = Math.abs(offset.x) >= SWIPE_DISTANCE;
                                        const movedFastEnough = Math.abs(velocity.x) >= SWIPE_VELOCITY;

                                        if (!movedFarEnough && !movedFastEnough) return;
                                        if (offset.x < 0 || velocity.x < -SWIPE_VELOCITY) nextImage();
                                        else prevImage();
                                    }}
                                    whileDrag={{ scale: 0.995 }}
                                    className="absolute inset-0 touch-pan-y select-none cursor-grab active:cursor-grabbing"
                                >
                                    <Image
                                        src={images[currentImageIndex]}
                                        alt={`${project.title} — screenshot ${currentImageIndex + 1}`}
                                        fill
                                        className="object-contain p-4"
                                        quality={95}
                                        priority
                                        draggable={false}
                                        sizes="(max-width: 1024px) 100vw, 1024px"
                                    />
                                </motion.div>
                            </AnimatePresence>

                            {images.length > 1 && (
                                <>
                                    <button
                                        type="button"
                                        onClick={prevImage}
                                        aria-label="Previous image"
                                        className="absolute left-3 top-1/2 z-20 -translate-y-1/2 rounded-full border border-[color:var(--line)] bg-brand-surface/90 p-3 text-brand-ink shadow-soft backdrop-blur transition-transform hover:scale-105 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary/70"
                                    >
                                        <FaChevronLeft className="h-4 w-4" />
                                    </button>
                                    <button
                                        type="button"
                                        onClick={nextImage}
                                        aria-label="Next image"
                                        className="absolute right-3 top-1/2 z-20 -translate-y-1/2 rounded-full border border-[color:var(--line)] bg-brand-surface/90 p-3 text-brand-ink shadow-soft backdrop-blur transition-transform hover:scale-105 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary/70"
                                    >
                                        <FaChevronRight className="h-4 w-4" />
                                    </button>
                                    <div
                                        aria-live="polite"
                                        className="pointer-events-none absolute right-3 top-3 z-20 rounded-full bg-brand-night-deep/70 px-2.5 py-1 text-xs text-white"
                                    >
                                        {currentImageIndex + 1} / {images.length}
                                    </div>
                                </>
                            )}
                        </div>

                        {images.length > 1 && (
                            <div className="flex flex-shrink-0 justify-center gap-2 bg-brand-surface py-3">
                                {images.map((_, index) => (
                                    <button
                                        key={index}
                                        type="button"
                                        onClick={() => paginate(index)}
                                        aria-label={`Go to image ${index + 1}`}
                                        className={`h-2 rounded-full transition-all ${
                                            index === currentImageIndex
                                                ? "w-6 bg-brand-primary"
                                                : "w-2 bg-brand-muted/30 hover:bg-brand-muted/50"
                                        }`}
                                    />
                                ))}
                            </div>
                        )}
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
