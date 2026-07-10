"use client";

import Image from "next/image";
import { FiArrowUpRight } from "react-icons/fi";
import { useSectionInView } from "@/lib/hooks";
import { articles } from "@/content/portfolio";
import type { ArticleItem } from "@/types/portfolio";
import { SectionHeader } from "@/components/ui/section-header";
import { Reveal } from "@/components/ui/reveal";

function ArticleCard({ article }: { article: ArticleItem }) {
    return (
        <a
            href={article.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex h-full w-[16rem] flex-shrink-0 snap-start flex-col overflow-hidden rounded-3xl border border-[color:var(--line)] bg-brand-surface/70 shadow-soft backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand-accent/40 hover:shadow-lift focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent/60 focus-visible:ring-offset-2 focus-visible:ring-offset-brand-paper sm:w-[19rem]"
        >
            <div className="relative aspect-[16/10] overflow-hidden bg-gradient-to-br from-brand-soft/40 to-brand-surface">
                <Image
                    src={article.imageUrl}
                    alt={article.title}
                    fill
                    sizes="(max-width: 640px) 80vw, 320px"
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
            </div>
            <div className="flex flex-1 flex-col p-5">
                <h3 className="line-clamp-2 min-h-[2.75rem] font-display text-base font-semibold text-brand-ink transition-colors group-hover:text-brand-primary">
                    {article.title}
                </h3>
                <p className="mt-2 line-clamp-3 min-h-[3.75rem] flex-1 text-sm text-brand-muted">
                    {article.description}
                </p>
                {/* Whole card is the link, so this is a styled cue (not a nested button). */}
                <span className="mt-4 inline-flex items-center justify-center gap-1.5 self-start rounded-full border border-brand-accent/40 px-4 py-2 text-sm font-semibold text-brand-accent transition-colors group-hover:bg-brand-accent group-hover:text-brand-night">
                    Read article
                    <FiArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
            </div>
        </a>
    );
}

export default function Articles() {
    const { ref } = useSectionInView("Articles", 0.15);

    return (
        <section ref={ref} id="articles" className="scroll-mt-24 py-20 sm:py-24">
            <SectionHeader
                eyebrow="Writing"
                title={
                    <>
                        Notes &amp;{" "}
                        <span className="bg-gradient-to-r from-brand-primary to-brand-primary-dark bg-clip-text text-transparent">
                            articles
                        </span>
                    </>
                }
                description="I write about software engineering, testing, and team workflows on Medium."
            />

            <Reveal className="mt-10">
                {/* Edge-fade mask dissolves cards into the scroll edges — a quiet "more this way" cue. */}
                <div className="hide-scrollbar -mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-4 [mask-image:linear-gradient(to_right,transparent,#000_4%,#000_96%,transparent)] sm:-mx-6 sm:px-6">
                    {articles.map((article) => (
                        <ArticleCard key={article.url} article={article} />
                    ))}
                </div>
            </Reveal>
        </section>
    );
}
