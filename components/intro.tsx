"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { BsArrowRight, BsLinkedin } from 'react-icons/bs';
import { FaGithub, FaMedium } from 'react-icons/fa';
import { HiMail } from 'react-icons/hi';
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";
// import { Link } from '@react-email/components';

export default function Intro() {
    const { ref } = useSectionInView("Home");
    const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

    return (
        <section
            ref={ref}
            id="home"
            className="flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20">
            <div className="flex flex-col items-center justify-center w-full max-w-6xl mx-auto md:flex-row lg:flex-row mt-10 md:mt-20">
                <motion.div
                    className="flex-shrink-0 w-48 h-48 sm:w-56 sm:h-56 md:w-72 md:h-72 rounded-3xl overflow-hidden border-4 border-white shadow-lg mb-8 md:mb-12 md:mr-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <Image
                        src="/my-photo.jpg"
                        alt="Adi"
                        width={256}
                        height={256}
                        className="w-full h-full object-cover"
                        priority
                    />
                </motion.div>

                <div className="text-center w-full max-w-2xl">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-2xl sm:text-3xl md:text-5xl font-bold text-gray-800 mb-4 sm:mb-6"
                    >
                        Hi, I&apos;m Adi
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-lg sm:text-xl text-gray-600 mb-8 sm:mb-10 px-4 sm:px-5"
                    >
                        I am an undergraduate student at University of Indonesia, majoring in Computer Science. I am passionate about web development and have experience in building full-stack application.
                    </motion.p>

                    <motion.div
                        className="flex flex-wrap justify-center gap-3 sm:gap-4 px-4 sm:px-0"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        <motion.a
                            href="#contact"
                            whileHover={{ y: -4 }}
                            className="group px-4 py-2 sm:px-5 sm:py-2.5 rounded-full bg-sky-100 backdrop-blur-md border border-sky-100 text-black font-medium hover:bg-white/30 transition-all duration-100 flex items-center gap-2 text-sm sm:text-base"
                            onClick={() => {
                                setActiveSection("Contact");
                                setTimeOfLastClick(Date.now());
                            }}
                        >
                            <HiMail className="text-lg" />
                            Contact me
                            <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition-transform duration-300" />
                        </motion.a>

                        <motion.a
                            whileHover={{ y: -4 }}
                            href="https://github.com/prasetyoadii"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-4 py-2 sm:px-5 sm:py-2.5 rounded-full bg-sky-100 backdrop-blur-md border border-sky-100 text-black font-medium hover:bg-white/30 transition-all duration-100 flex items-center gap-2 text-sm sm:text-base"
                        >
                            <FaGithub className="text-lg" />
                            GitHub
                        </motion.a>

                        <motion.a
                            whileHover={{ y: -4 }}
                            href="https://www.linkedin.com/in/prasetyo-adi-548454242/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-4 py-2 sm:px-5 sm:py-2.5 rounded-full bg-sky-100 backdrop-blur-md border border-sky-100 text-black font-medium hover:bg-white/30 transition-all duration-100 flex items-center gap-2 text-sm sm:text-base"
                        >
                            <BsLinkedin className="text-lg" />
                            LinkedIn
                        </motion.a>

                        <motion.a
                            whileHover={{ y: -4 }}
                            href="https://medium.com/@prasetyowijanarko6"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-4 py-2 sm:px-5 sm:py-2.5 rounded-full bg-sky-100 backdrop-blur-md border border-sky-100 text-black font-medium hover:bg-white/30 transition-all duration-100 flex items-center gap-2 text-sm sm:text-base"
                        >
                            <FaMedium className="text-lg" />
                            Medium
                        </motion.a>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}