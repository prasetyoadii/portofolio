import React from "react";
import { FaLinkedin, FaGithub, FaMedium, FaInstagram } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="mb-10 px-4 text-gray-500">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                <span className="text-xs">
                    &copy; 2025 Prasetyo Adi Wijonarko. All rights reserved.
                </span>

                <div className="flex justify-center items-center gap-4">
                    <a
                        href="https://www.linkedin.com/in/prasetyo-adi-548454242/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-500 hover:text-blue-600 transition-colors duration-300"
                        aria-label="LinkedIn"
                    >
                        <FaLinkedin size={20} />
                    </a>

                    <a
                        href="https://github.com/prasetyoadii"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-500 hover:text-gray-900 transition-colors duration-300"
                        aria-label="GitHub"
                    >
                        <FaGithub size={20} />
                    </a>

                    <a
                        href="https://medium.com/@prasetyowijanarko6"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-500 hover:text-green-600 transition-colors duration-300"
                        aria-label="Medium"
                    >
                        <FaMedium size={20} />
                    </a>

                    <a
                        href="http://instagram.com/prstadi26/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-500 hover:text-pink-600 transition-colors duration-300"
                        aria-label="Instagram"
                    >
                        <FaInstagram size={20} />
                    </a>
                </div>
            </div>
        </footer>
    );
}