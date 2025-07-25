"use server";

import { Resend } from "resend";
import { validateString, getErrorMessage } from "@/lib/utils";
// import ContactFormEmail from "@/email/contact-form-email";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
    const senderEmail = formData.get("senderEmail");
    const message = formData.get("message");

    if (!validateString(senderEmail, 500)) {
        return {
            error: "Invalid sender email",
        };
    }
    if (!validateString(message, 5000)) {
        return {
            error: "Invalid message",
        };
    }

    let data;
    try {
        await resend.emails.send({
            from: 'Adi Portfolio <onboarding@resend.dev>',
            to: ['prasetyowijanarko6@gmail.com'],
            subject: `Contact form message from ${formData.get('senderEmail')}`,
            replyTo: formData.get('senderEmail') as string,
            text: `Message from: ${formData.get('senderEmail')}\n\n${formData.get('message')}`,
        });
    } catch (error: unknown) {
        return {
            error: getErrorMessage(error),
        };
    }

    return {
        data,
    };
};