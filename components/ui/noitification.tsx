"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiCheckCircle, FiXCircle } from "react-icons/fi";

export type NotificationType = "success" | "error";

interface NotificationProps {
  show: boolean;
  type: NotificationType;
  message: string;
}

export default function Notification({ show, type, message }: NotificationProps) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          className="fixed bottom-5 right-5 z-50 max-w-md"
        >
          <div
            className={`${type === "success"
                ? "bg-green-50 border-green-200 text-green-800"
                : "bg-red-50 border-red-200 text-red-800"
              } px-4 py-3 rounded-lg shadow-lg border flex items-center gap-3`}
          >
            {type === "success" ? (
              <FiCheckCircle className="text-xl text-green-500" />
            ) : (
              <FiXCircle className="text-xl text-red-500" />
            )}
            <span>{message}</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}