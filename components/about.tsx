"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { useSectionInView } from "@/lib/hooks";
import { techIcons } from "@/lib/data";
import { FaUser } from 'react-icons/fa';

export default function About() {
    const { ref } = useSectionInView("About", 0.2);

    return (
        <section
            ref={ref}
            id="about"
            className="flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-white/5 scroll-mt-16"
        >
            <div className="w-full max-w-4xl mx-auto text-center my-20">
                <motion.div
                    className="inline-flex items-center justify-center p-3 bg-sky-50 text-sky-600 rounded-full mb-4"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4 }}
                >
                    <FaUser className="text-xl" />
                </motion.div>
                <motion.div
                    className="text-center mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-3">
                        About <span className="text-sky-600">Me</span>
                    </h2>
                    <div className="w-24 h-1.5 bg-sky-600 rounded-full mx-auto" />
                </motion.div>

                <motion.div
                    className="text-gray-700 text-center text-lg sm:text-xl leading-relaxed space-y-6 max-w-3xl mx-auto mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                >
                    <p>
                        I&apos;m a passionate web developer who enjoys solving real-world problems through clean, scalable code.
                        While I enjoy working across the full stack, I feel most in my element when working on the backend, designing APIs,
                        architecting systems, and managing databases.
                    </p>
                    <p>
                        My background spans multiple technologies and frameworks, and I&apos;m always excited to explore new tools that help build better applications.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="relative"
                >
                    <div className="absolute -top-20 -right-20 w-40 h-40 bg-sky-200/30 rounded-full blur-3xl z-0" />
                    <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-gray-300/20 rounded-full blur-3xl z-0" />

                    <div className="relative z-10 bg-white/40 backdrop-blur-xl rounded-3xl border border-gray-200 shadow-xl p-10">
                        <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-5">
                            {techIcons.map((tech, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{
                                        duration: 0.3,
                                        delay: index * 0.03,
                                        type: "spring",
                                        stiffness: 100
                                    }}
                                    whileHover={{
                                        y: -6,
                                        scale: 1.05
                                    }}
                                    className="flex flex-col items-center justify-center p-4 bg-white/50 rounded-3xl border border-gray-100 shadow-sm transition-all duration-300"
                                >
                                    <div className="text-3xl mb-2" style={{ color: tech.color }}>
                                        {React.createElement(tech.icon)}
                                    </div>
                                    <span className="text-xs text-gray-600 font-medium">{tech.name}</span>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}