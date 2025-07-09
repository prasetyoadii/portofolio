"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { links } from "@/lib/data";
import Link from "next/link";
import clsx from "clsx";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function Header() {
    const { activeSection, setActiveSection, setTimeOfLastClick } =
        useActiveSectionContext();

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="z-[999] relative">
            <motion.div
                className="fixed top-0 left-1/2 h-[4.5rem] w-full max-w-full rounded-none border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-4 sm:h-[3rem] sm:w-[35rem] sm:rounded-full lg:w-[40rem] hidden md:block"
                initial={{ y: -100, x: "-50%", opacity: 0 }}
                animate={{ y: 0, x: "-50%", opacity: 1 }}
            />
            <motion.div
                className="fixed top-0 left-0 right-0 w-full max-w-full shadow-lg shadow-black/[0.03] md:hidden"
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
            />

            <div className="md:hidden fixed top-0 left-0 right-0 h-[4rem] flex items-center justify-between px-4 z-50">

                <motion.button
                    className="relative flex flex-col justify-center items-center w-12 h-12 bg-gradient-to-br from-white/90 to-gray-50/90 backdrop-blur-md border border-white/50 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    whileTap={{ scale: 0.95 }}
                    whileHover={{
                        scale: 1.05,
                        rotate: isMenuOpen ? 0 : 3
                    }}
                >
                    <motion.span
                        className="block h-0.5 bg-gradient-to-r from-gray-700 to-gray-600 rounded-full"
                        animate={{
                            rotate: isMenuOpen ? 45 : 0,
                            y: isMenuOpen ? 3 : 0,
                            width: isMenuOpen ? "20px" : "18px",
                            background: isMenuOpen
                                ? "linear-gradient(to right, rgb(14, 165, 233), rgb(59, 130, 246))"
                                : "linear-gradient(to right, rgb(55, 65, 81), rgb(75, 85, 99))"
                        }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                    />
                    <motion.span
                        className="block h-0.5 bg-gradient-to-r from-gray-700 to-gray-600 rounded-full mt-1.5"
                        animate={{
                            opacity: isMenuOpen ? 0 : 1,
                            scale: isMenuOpen ? 0 : 1,
                            width: isMenuOpen ? "20px" : "16px"
                        }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                    />
                    <motion.span
                        className="block h-0.5 bg-gradient-to-r from-gray-700 to-gray-600 rounded-full mt-1.5"
                        animate={{
                            rotate: isMenuOpen ? -45 : 0,
                            y: isMenuOpen ? -3 : 0,
                            width: isMenuOpen ? "20px" : "14px",
                            background: isMenuOpen
                                ? "linear-gradient(to right, rgb(14, 165, 233), rgb(59, 130, 246))"
                                : "linear-gradient(to right, rgb(55, 65, 81), rgb(75, 85, 99))"
                        }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                    />

                    <motion.div
                        className="absolute inset-0 rounded-2xl bg-sky-500/20"
                        animate={{
                            scale: isMenuOpen ? [1, 1.2, 1] : 1,
                            opacity: isMenuOpen ? [0.5, 0.8, 0.5] : 0
                        }}
                        transition={{
                            duration: 0.6,
                            repeat: isMenuOpen ? Infinity : 0,
                            ease: "easeInOut"
                        }}
                    />
                </motion.button>


            </div>

            <nav className="hidden md:flex fixed top-0 left-1/2 h-[4.5rem] -translate-x-1/2 sm:top-4 sm:h-[3rem]">
                <ul className="flex w-[22rem] items-center justify-center gap-y-1 text-[0.65rem] sm:text-[0.9rem] font-medium sm:w-[initial] sm:flex-nowrap sm:gap-5">
                    {links.map((link) => (
                        <motion.li
                            className="h-2/3 flex items-center justify-center relative"
                            key={link.hash}
                            initial={{ y: -100, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                        >
                            <Link
                                className={clsx(
                                    "flex w-full items-center justify-center px-3 py-2 transition duration-300 relative",
                                    activeSection === link.name
                                        ? "text-black font-semibold"
                                        : "text-gray-400 hover:text-gray-700 hover:font-semibold"
                                )}
                                href={link.hash}
                                onClick={() => {
                                    setActiveSection(link.name);
                                    setTimeOfLastClick(Date.now());
                                }}
                            >
                                {link.name}

                                {link.name === activeSection && (
                                    <motion.span
                                        className="bg-sky-100 rounded-xl md:rounded-full absolute inset-0 -z-10"
                                        layoutId="activeSection"
                                        transition={{
                                            type: "spring",
                                            stiffness: 380,
                                            damping: 30,
                                        }}
                                    />
                                )}
                            </Link>
                        </motion.li>
                    ))}
                </ul>
            </nav>

            <AnimatePresence>
                {isMenuOpen && (
                    <>
                        <motion.div
                            className="fixed inset-0 bg-black bg-opacity-20 backdrop-blur-sm z-40 md:hidden"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsMenuOpen(false)}
                        />

                        <motion.div
                            className="fixed top-[4rem] left-0 right-0 bg-white bg-opacity-95 backdrop-blur-xl shadow-xl border-t border-gray-100 z-50 md:hidden max-w-full"
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                        >
                            <nav className="px-6 py-4">
                                <ul className="space-y-2">
                                    {links.map((link, index) => (
                                        <motion.li
                                            key={link.hash}
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: index * 0.1 }}
                                        >
                                            <Link
                                                href={link.hash}
                                                className={clsx(
                                                    "block w-full px-4 py-3 rounded-lg text-left transition-all duration-200 relative",
                                                    activeSection === link.name
                                                        ? "text-black font-semibold bg-sky-50 border-l-4 border-sky-500"
                                                        : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                                                )}
                                                onClick={() => {
                                                    setActiveSection(link.name);
                                                    setTimeOfLastClick(Date.now());
                                                    setIsMenuOpen(false);

                                                }}
                                            >
                                                {link.name}
                                                {activeSection === link.name && (
                                                    <motion.div
                                                        className="absolute right-4 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-sky-500 rounded-full"
                                                        layoutId="activeMobileSection"
                                                    />
                                                )}
                                            </Link>
                                        </motion.li>
                                    ))}
                                </ul>
                            </nav>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </header>
    );
}