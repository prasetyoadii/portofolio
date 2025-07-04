"use client";

import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { projectsData } from '@/lib/data';
import { ProjectCard } from './project';
import { useSectionInView } from '@/lib/hooks';
import { CgWebsite } from "react-icons/cg";


export default function Projects() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { ref } = useSectionInView("Projects", 0.2);

    return (
        <section
            ref={ref}
            id="projects"
            className="max-w-3xl mx-auto px-4 py-20 min-h-[60vh]">

            <motion.div
                className="text-center mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                <motion.div
                    className="inline-flex items-center justify-center p-3 bg-sky-50 text-sky-600 rounded-full mb-4"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4 }}
                >
                    <CgWebsite className="text-xl" />
                </motion.div>

                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-3">
                    Featured <span className="text-sky-600">Projects</span>
                </h2>
                <div className="w-16 h-1.5 bg-sky-600 rounded-full mx-auto mt-4 mb-6"></div>

                <motion.p
                    className="text-gray-600 max-w-2xl mx-auto text-base sm:text-lg"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    A curated collection of my work that showcases my passion for creating intuitive,
                    scalable solutions across various technologies.
                </motion.p>
            </motion.div>

            <div className="space-y-2"
                ref={containerRef}>
                {projectsData.map((project, index) => (
                    <React.Fragment key={index}>
                        <ProjectCard {...project} />
                    </React.Fragment>
                ))}
            </div>
        </section>
    );
}