"use client";

import { useState } from "react";
import { Play } from "lucide-react";

function extractVideoId(url: string): string | null {
    const patterns = [
        /youtube\.com\/watch\?v=([a-zA-Z0-9_-]{11})/,
        /youtu\.be\/([a-zA-Z0-9_-]{11})/,
        /youtube\.com\/embed\/([a-zA-Z0-9_-]{11})/,
    ];
    for (const pattern of patterns) {
        const match = url.match(pattern);
        if (match) return match[1];
    }
    return null;
}

interface YouTubeEmbedProps {
    url: string;
    title: string;
}

export function YouTubeEmbed({ url, title }: YouTubeEmbedProps) {
    const [loaded, setLoaded] = useState(false);
    const videoId = extractVideoId(url);

    if (!videoId) return null;

    const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;

    if (loaded) {
        return (
            <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-brand-accent/20">
                <iframe
                    src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                    title={`${title} demo`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute inset-0 h-full w-full"
                />
            </div>
        );
    }

    return (
        <button
            type="button"
            onClick={() => setLoaded(true)}
            className="group relative aspect-video w-full overflow-hidden rounded-2xl border border-brand-accent/20 bg-brand-night"
        >
            {/* Thumbnail */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
                src={thumbnailUrl}
                alt={`${title} video demo thumbnail`}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-brand-night/40 transition-colors group-hover:bg-brand-night/20" />

            {/* Play button */}
            <span className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-brand-accent/90 text-brand-night shadow-lg transition-transform group-hover:scale-110">
                <Play className="ml-1 h-7 w-7 fill-current" />
            </span>

            {/* Label */}
            <span className="absolute bottom-3 left-3 rounded-full bg-brand-night/70 px-3 py-1 text-xs font-medium text-white backdrop-blur">
                ▶ Watch demo
            </span>
        </button>
    );
}
