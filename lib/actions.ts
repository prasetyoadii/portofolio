"use server";

import { Resend } from "resend";
import { validateString, getErrorMessage } from "@/lib/utils";

type SendEmailResult =
    | { success: true; id: string }
    | { success: false; error: string };

const isValidEmail = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

export const sendEmail = async (formData: FormData): Promise<SendEmailResult> => {
    const rawSenderEmail = formData.get("senderEmail");
    const rawMessage = formData.get("message");

    if (!validateString(rawSenderEmail, 500)) {
        return { success: false, error: "Please enter a valid email address." };
    }
    if (!validateString(rawMessage, 5000)) {
        return { success: false, error: "Please enter a message." };
    }

    const senderEmail = rawSenderEmail.trim();
    const message = rawMessage.trim();

    if (!senderEmail || !isValidEmail(senderEmail)) {
        return { success: false, error: "Please enter a valid email address." };
    }
    if (!message) {
        return { success: false, error: "Please enter a message." };
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
        console.error("RESEND_API_KEY is not configured.");
        return {
            success: false,
            error: "Email service is not configured. Please contact me directly.",
        };
    }

    try {
        const resend = new Resend(apiKey);
        const { data, error } = await resend.emails.send({
            from: "Adi Portfolio <onboarding@resend.dev>",
            to: ["prasetyowijanarko6@gmail.com"],
            subject: `Contact form message from ${senderEmail}`,
            replyTo: senderEmail,
            text: `Message from: ${senderEmail}\n\n${message}`,
        });

        if (error) {
            console.error("Resend rejected the contact email:", error);
            return {
                success: false,
                error: error.message || "The email service rejected the message.",
            };
        }

        if (!data) {
            console.error("Resend returned neither data nor an error.");
            return {
                success: false,
                error: "The email service returned an invalid response.",
            };
        }

        return { success: true, id: data.id };
    } catch (error: unknown) {
        console.error("Failed to send contact email:", error);
        return { success: false, error: getErrorMessage(error) };
    }
};
