"use client";

import React from 'react';
import { projectsData } from "@/lib/data";
import { motion, useScroll, useTransform } from "framer-motion";
import { FaGithub } from 'react-icons/fa';
import Image from "next/image";

type Project = (typeof projectsData)[number];

export function ProjectCard({ title, type, description, tags, imageUrl, github }: Project) {
    const ref = React.useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["0 1", "1.2 1"]
    });

    const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.85, 0.95]);
    const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.7, 1]);

    return (
        <motion.div
            ref={ref}
            style={{
                scale: scaleProgess,
                opacity: opacityProgess,
            }}
            className="group"
        >
            {type === 'Mobile' ? (
                <MobileProject
                    title={title}
                    description={description}
                    tags={tags}
                    imageUrl={imageUrl}
                    github={github}
                />
            ) : (
                <WebProject
                    title={title}
                    description={description}
                    tags={tags}
                    imageUrl={imageUrl}
                    github={github}
                />
            )}
        </motion.div>
    );
}



export function MobileProject({ title, description, tags, imageUrl, github }: Omit<Project, 'type'>) {
    return (
        <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-white/90 backdrop-blur-xl rounded-3xl shadow-xl border border-gray-200 hover:shadow-2xl transition-all duration-300 flex flex-1 md:grid-cols-2 h-[22rem] overflow-hidden"
        >
            <div className="p-5 sm:p-7 flex flex-col h-full ">
                <div className="flex-1 space-y-2 sm:space-y-3 md:space-y-4">
                    <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold text-gray-800 line-clamp-2">
                        {title}
                        <div className="w-10 sm:w-12 h-1 bg-sky-600 rounded-full mt-1.5 sm:mt-2 max-w-full" />
                    </h3>
                    <p className="text-sm sm:text-sm md:text-base text-black leading-relaxed line-clamp-3 sm:line-clamp-4">
                        {description}
                    </p>
                </div>

                <div className="mt-4 sm:mt-auto space-y-3 sm:space-y-4">
                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                        {tags.map((tag, index) => (
                            <motion.span
                                key={index}
                                whileHover={{ scale: 1.05 }}
                                className="px-1 py-1 sm:px-3 sm:py-1 bg-sky-100/80 text-sky-700 text-xs sm:text-sm rounded-full font-medium border border-sky-100"
                            >
                                {tag}
                            </motion.span>
                        ))}
                    </div>

                    <div className="flex pt-1 pb-0">
                        <motion.a
                            href={github}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{
                                scale: 1.03,
                                y: -2
                            }}
                            className="flex items-center justify-center gap-1 sm:gap-2 px-2.5 py-1.5 sm:px-4 sm:py-2 md:px-5 md:py-2.5 bg-sky-600 text-white rounded-full hover:bg-sky-700 transition-all duration-200 text-xs sm:text-sm font-medium shadow-md"
                        >
                            <FaGithub className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5" />
                            <span className="hidden xs:inline">View on GitHub</span>
                            <span className="xs:hidden">GitHub</span>
                        </motion.a>
                    </div>
                </div>
            </div>

            <div className="relative h-full w-full overflow-hidden ">
                <Image
                    src={imageUrl[0]}
                    alt={title}
                    quality={95}
                    fill
                    className="object-contain object-center p-4 hover:scale-105 transition-transform duration-300"
                />
            </div>
        </motion.div>
    );
}


export function WebProject({ title, description, tags, imageUrl, github }: Omit<Project, 'type'>) {
    return (
        <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-white/40 backdrop-blur-xl rounded-3xl shadow-xl border border-gray-200 overflow-hidden hover:shadow-2xl transition-all duration-300 flex flex-col h-auto min-h-[28rem] sm:h-[32rem]"
        >
            <div className="relative h-48 sm:h-56 md:h-64 lg:h-72 w-full bg-gradient-to-br from-sky-50 to-white/70 overflow-hidden">
                <Image
                    src={imageUrl[0]}
                    alt={title}
                    quality={95}
                    fill
                    className="object-cover object-center hover:scale-105 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white/10 to-transparent"></div>
            </div>

            <div className="p-4 sm:p-6 md:p-8 flex flex-col flex-1">
                <div className="mb-3 sm:mb-4">
                    <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 line-clamp-2">
                        {title}
                    </h3>
                    <div className="w-12 h-1 bg-sky-600 rounded-full mt-2"></div>
                </div>

                <p className="text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed mb-4 flex-1 line-clamp-4 sm:line-clamp-5">
                    {description}
                </p>

                <div className="mb-4">
                    <div className="flex flex-wrap gap-1 sm:gap-1.5 md:gap-2">
                        {tags.slice(0, 6).map((tag, index) => (
                            <motion.span
                                key={index}
                                whileHover={{ scale: 1.05 }}
                                className="px-2 py-0.5 sm:px-2.5 sm:py-1 bg-sky-100/80 text-sky-700 text-[10px] sm:text-xs md:text-sm rounded-full font-medium border border-sky-100"
                            >
                                {tag}
                            </motion.span>
                        ))}
                        {tags.length > 6 && (
                            <span className="px-2 py-0.5 sm:px-2.5 sm:py-1 bg-sky-50/80 text-sky-600 text-[10px] sm:text-xs md:text-sm rounded-full font-medium border border-sky-50">
                                +{tags.length - 6}
                            </span>
                        )}
                    </div>
                </div>

                <div className="flex flex-row gap-2 sm:gap-3 mt-auto">
                    <motion.a
                        href={github[0]}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{
                            scale: 1.03,
                            y: -2
                        }}
                        className="flex items-center justify-center gap-1 sm:gap-2 px-3 py-1.5 sm:px-4 sm:py-2 md:px-5 md:py-2.5 bg-sky-600 text-white rounded-full hover:bg-sky-700 transition-all duration-200 text-xs sm:text-sm font-medium shadow-md"
                    >
                        <FaGithub className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5" />
                        <span className="hidden xs:inline">View on GitHub</span>
                        <span className="xs:hidden">GitHub</span>
                    </motion.a>
                </div>
            </div>
        </motion.div>
    );
}