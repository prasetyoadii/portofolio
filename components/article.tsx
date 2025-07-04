"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { FiArrowRight } from "react-icons/fi";
import { articlesData } from "@/lib/data";

type ArticleProps = (typeof articlesData)[number];

export function Article({ title, url, imageUrl, description }: ArticleProps) {
    return (
        <motion.div
            whileHover={{ scale: 1.02, y: -4 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="h-full w-full flex flex-col group bg-white/40 backdrop-blur-sm border border-gray-100 rounded-2xl sm:rounded-3xl shadow-md hover:shadow-lg transition-all duration-300"
            style={{ minHeight: '350px' }}
        >
            <div className="relative h-36 xs:h-40 sm:h-44 md:h-48 lg:h-52 overflow-hidden bg-gradient-to-br from-sky-50 to-white/70 rounded-t-2xl sm:rounded-t-3xl">
                <Image
                    src={imageUrl}
                    alt={title}
                    fill
                    className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 480px) 80vw, (max-width: 640px) 75vw, (max-width: 768px) 320px, (max-width: 1024px) 350px, 380px"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-sky-900/10 via-transparent to-transparent" />
            </div>

            <div className="p-3 xs:p-4 sm:p-5 md:p-6 flex-1 flex flex-col">
                <h3 className="text-base xs:text-lg sm:text-xl font-semibold text-gray-800 mb-1.5 sm:mb-2 group-hover:text-sky-700 transition-colors line-clamp-2 hyphens-auto">
                    {title}
                </h3>
                <div className="w-8 sm:w-10 h-0.5 bg-sky-200 rounded-full mb-2 sm:mb-3"></div>
                <p className="text-gray-600 mb-3 sm:mb-4 flex-1 text-xs sm:text-sm leading-relaxed line-clamp-3 hyphens-auto">
                    {description}
                </p>

                <motion.a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ x: 5 }}
                    className="inline-flex items-center justify-center gap-1.5 text-xs sm:text-sm font-medium px-4 py-2 text-white bg-sky-600 hover:bg-sky-700 rounded-full transition-all duration-300 w-fit shadow-sm"
                >
                    Read Article
                    <FiArrowRight className="text-sm sm:text-base transition-transform group-hover:translate-x-1" />
                </motion.a>
            </div>
        </motion.div>
    );
}