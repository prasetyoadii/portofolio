"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { FaPaperPlane } from "react-icons/fa";
import { sendEmail } from "./api/send";
import Notification, { NotificationType } from "./ui/noitification";

export default function Contact() {
    const { ref } = useSectionInView("Contact");
    const [sending, setSending] = useState(false);
    const [notification, setNotification] = useState<{
        show: boolean;
        type: NotificationType;
        message: string;
    }>({
        show: false,
        type: "success",
        message: "",
    });

    const showNotification = (type: NotificationType, message: string) => {
        setNotification({
            show: true,
            type,
            message,
        });

        setTimeout(() => {
            setNotification(prev => ({ ...prev, show: false }));
        }, 4000);
    };

    return (
        <motion.section
            id="contact"
            ref={ref}
            className="mb-16 sm:mb-20 md:mb-28 w-[min(100%,38rem)] text-center mx-auto px-4 sm:px-6 flex flex-col items-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
        >
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5 }}
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mt-6 sm:mt-12 md:mt-16 mb-4 sm:mb-6 text-center max-w-xs sm:max-w-md md:max-w-xl mx-auto"
            >
                Contact <span className="text-sky-600">Me</span> Here
            </motion.h2>

            <p className="text-gray-600 text-sm sm:text-base mb-4 sm:mb-6 max-w-sm sm:max-w-md mx-auto">
                Please contact me through this form.
            </p>

            <motion.form
                className="flex flex-col w-full max-w-md mx-auto space-y-4 sm:space-y-5"
                action={async (formData) => {
                    setSending(true);

                    try {
                        const response = await sendEmail(formData);
                        const { error } = response;

                        if (error) {
                            showNotification("error", "Failed to send message");
                            return;
                        }

                        showNotification("success", "Message sent successfully!");

                        const form = document.getElementById("contact-form");
                        if (form instanceof HTMLFormElement) {
                            form.reset();
                        }
                    } finally {
                        setSending(false);
                    }
                }}
                id="contact-form"
            >
                <input
                    className="h-12 sm:h-14 px-4 rounded-lg sm:rounded-xl border border-gray-300 bg-white/50 backdrop-blur-sm focus:border-sky-400 focus:outline-none transition-all shadow-sm text-gray-800 text-sm sm:text-base"
                    name="senderEmail"
                    type="email"
                    required
                    maxLength={500}
                    placeholder="Your email"
                />

                <textarea
                    className="h-40 sm:h-52 px-4 py-3 rounded-lg sm:rounded-xl border border-gray-300 bg-white/50 backdrop-blur-sm focus:border-sky-400 focus:outline-none transition-all shadow-sm text-gray-800 text-sm sm:text-base"
                    name="message"
                    placeholder="Your message"
                    required
                    maxLength={5000}
                />

                <button
                    type="submit"
                    disabled={sending}
                    className="group relative h-12 sm:h-14 w-full sm:max-w-xs mx-auto bg-white/20 backdrop-blur-md border border-white/30 text-gray-700 font-medium hover:bg-white/30 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-sky-300 focus:ring-offset-2 disabled:opacity-70 overflow-hidden"
                >
                    <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-sky-100 to-sky-400/30 opacity-60 transition-opacity duration-300 group-hover:opacity-80" />

                    <div className="relative flex items-center justify-center gap-1.5 sm:gap-2 text-sm sm:text-base">
                        {sending ? (
                            <div className="flex items-center gap-2">
                                <div className="h-4 w-4 sm:h-5 sm:w-5 animate-spin rounded-full border-2 border-sky-600 border-t-transparent"></div>
                                <span>Sending...</span>
                            </div>
                        ) : (
                            <>
                                Send Message
                                <FaPaperPlane className="text-[10px] sm:text-xs opacity-70 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                            </>
                        )}
                    </div>
                </button>
            </motion.form>

            {/* Using the separate Notification component */}
            <div className="w-full max-w-md mx-auto mt-3 sm:mt-4">
                <Notification
                    show={notification.show}
                    type={notification.type}
                    message={notification.message}
                />
            </div>
        </motion.section>
    );
}