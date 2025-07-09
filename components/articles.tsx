"use client";

import React, { useRef } from 'react';
import { motion } from "framer-motion";
import { articlesData } from "@/lib/data";
import { Article } from './article';
import { useSectionInView } from "@/lib/hooks";
import { FaBookOpen } from 'react-icons/fa';

export default function Articles() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { ref } = useSectionInView("Articles", 0.2);

    return (
        <section
            ref={ref}
            id="articles"
            className="py-20 overflow-hidden "
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-xs sm:max-w-sm md:max-w-2xl lg:max-w-3xl mx-auto mb-8 sm:mb-10 md:mb-12">
                    <motion.div
                        className="inline-flex items-center justify-center p-2 sm:p-2.5 md:p-3 bg-sky-50 text-sky-600 rounded-full mb-3 sm:mb-4"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4 }}
                    >
                        <FaBookOpen className="text-base sm:text-lg md:text-xl" />
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-3xl sm:text-4xl md:text-5xl  font-bold text-gray-800 mb-2 sm:mb-3"

                    >
                        My <span className="text-sky-600">Articles</span>
                    </motion.h2>

                    <div className="w-12 sm:w-14 md:w-16 h-0.5 sm:h-1 md:h-1.5 bg-sky-600 rounded-full mx-auto mt-1 sm:mt-2 mb-2 sm:mb-3 md:mb-4"></div>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-600"
                    >
                        Sharing my thoughts and insights about technology and development
                    </motion.p>
                </div>

                <div className="relative px-[27rem] sm:px-[25rem] md:px-[18rem] lg:px-[4rem] xl:px-0">
                    <div
                        ref={containerRef}
                        className="flex overflow-x-auto scroll-smooth snap-x snap-mandatory gap-3 sm:gap-4 px-1 pb-8 hide-scrollbar"
                    >
                        {articlesData.map((article, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                                className="flex-shrink-0 w-[11rem] sm:w-[11rem] md:w-[20rem] mx-auto snap-center"
                            >
                                <Article {...article} />
                            </motion.div>
                        ))}
                    </div>
                </div>
                <div className="flex justify-center mt-4 md:hidden">
                    <div className="flex gap-1.5">
                        {[...Array(Math.min(3, articlesData.length))].map((_, i) => (
                            <div key={i} className="w-1.5 h-1.5 rounded-full bg-gray-300" />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}