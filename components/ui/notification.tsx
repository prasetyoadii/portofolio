"use client";

import { motion, AnimatePresence } from "framer-motion";
import { FiCheckCircle, FiXCircle } from "react-icons/fi";
import { cn } from "@/lib/cn";

export type NotificationType = "success" | "error";

interface NotificationProps {
    show: boolean;
    type: NotificationType;
    message: string;
}

export default function Notification({ show, type, message }: NotificationProps) {
    const isSuccess = type === "success";

    return (
        <AnimatePresence>
            {show && (
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 24 }}
                    role="status"
                    aria-live="polite"
                    className="fixed bottom-5 right-5 z-[9999] max-w-sm"
                >
                    <div
                        className={cn(
                            "flex items-center gap-3 rounded-2xl border px-4 py-3 text-sm shadow-soft backdrop-blur",
                            isSuccess
                                ? "border-emerald-200 bg-emerald-50/90 text-emerald-800"
                                : "border-red-200 bg-red-50/90 text-red-800",
                        )}
                    >
                        {isSuccess ? (
                            <FiCheckCircle className="h-5 w-5 flex-shrink-0 text-emerald-500" />
                        ) : (
                            <FiXCircle className="h-5 w-5 flex-shrink-0 text-red-500" />
                        )}
                        <span>{message}</span>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
