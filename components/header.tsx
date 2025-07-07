"use client";

import React from "react";
import { motion } from "framer-motion";
import { links } from "@/lib/data";
import Link from "next/link";
import clsx from "clsx";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function Header() {
    const { activeSection, setActiveSection, setTimeOfLastClick } =
        useActiveSectionContext();

    return (
        <header className="z-[999] relative ">
            <motion.div
                className="fixed top-0 left-1/2 h-[4.5rem] w-full rounded-none border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-4 sm:h-[3rem] sm:w-[35rem] sm:rounded-full lg:w-[40rem]"
                initial={{ y: -100, x: "-50%", opacity: 0 }}
                animate={{ y: 0, x: "-50%", opacity: 1 }}
            ></motion.div>

            <nav className="flex fixed top-0 left-1/2 h-[4.5rem] -translate-x-1/2 sm:top-4 sm:h-[3rem]">
                <ul className="flex w-[22rem] items-center justify-center gap-y-1 text-[0.65rem] sm:text-[0.9rem] font-medium sm:w-[initial] sm:flex-nowrap sm:gap-5 ">
                    {links.map((link) => (
                        <motion.li
                            className="h-2/3 flex items-center justify-center relative"
                            key={link.hash}
                            initial={{ y: -100, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                        >
                            <Link
                                className={clsx(
                                    "flex w-full items-center justify-center px-3 py-2 transition duration-300",
                                    activeSection === link.name
                                        ? "text-black font-semibold"
                                        : "text-gray-400 hover:text-gray-700 hover: font-semibold"
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
                                    ></motion.span>
                                )}
                            </Link>
                        </motion.li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}