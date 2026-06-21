"use client";

import { useState } from "react";
import { FaPaperPlane } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "@/lib/actions";
import { profile } from "@/content/portfolio";
import { SectionHeader } from "@/components/ui/section-header";
import { SocialLinks } from "@/components/ui/social-links";
import { Reveal } from "@/components/ui/reveal";
import { Card } from "@/components/ui/card";
import Notification, { type NotificationType } from "@/components/ui/notification";

const inputStyles =
    "w-full rounded-2xl border border-[color:var(--line)] bg-brand-paper px-4 py-3 text-sm text-brand-ink shadow-sm transition-colors placeholder:text-brand-muted/70 focus:border-brand-primary/50 focus:outline-none focus:ring-2 focus:ring-brand-primary/20";

export default function Contact() {
    const { ref } = useSectionInView("Contact", 0.4);
    const [sending, setSending] = useState(false);
    const [notification, setNotification] = useState<{
        show: boolean;
        type: NotificationType;
        message: string;
    }>({ show: false, type: "success", message: "" });

    const showNotification = (type: NotificationType, message: string) => {
        setNotification({ show: true, type, message });
        setTimeout(() => setNotification((prev) => ({ ...prev, show: false })), 4000);
    };

    return (
        <section ref={ref} id="contact" className="scroll-mt-24 py-20 sm:py-24">
            <SectionHeader
                eyebrow="Contact"
                title={
                    <>
                        Let&apos;s build{" "}
                        <span className="bg-gradient-to-r from-brand-primary to-brand-primary-dark bg-clip-text text-transparent">
                            something
                        </span>
                    </>
                }
                description="Have a role, a project, or just want to say hi? Reach out — I'll reply."
            />

            {/* Centered link group — email + socials */}
            <Reveal className="mt-8 flex flex-col items-center gap-4">
                <a
                    href={`mailto:${profile.email}`}
                    className="inline-flex items-center gap-2 rounded-full border border-[color:var(--line)] bg-brand-surface px-5 py-2.5 font-display text-sm font-semibold text-brand-ink shadow-soft transition-all hover:-translate-y-0.5 hover:border-brand-primary/40 hover:text-brand-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary/60 focus-visible:ring-offset-2 focus-visible:ring-offset-brand-paper"
                >
                    <FaPaperPlane className="h-3.5 w-3.5 text-brand-primary" />
                    {profile.email}
                </a>
                <SocialLinks className="justify-center" />
            </Reveal>

            {/* Centered form */}
            <Reveal className="mx-auto mt-10 max-w-xl">
                <Card className="p-6 sm:p-8">
                    <form
                        id="contact-form"
                        className="flex flex-col gap-4"
                        action={async (formData) => {
                            setSending(true);
                            try {
                                const result = await sendEmail(formData);
                                if (!result.success) {
                                    showNotification("error", result.error);
                                    return;
                                }
                                showNotification("success", "Message sent successfully!");
                                const form = document.getElementById("contact-form");
                                if (form instanceof HTMLFormElement) form.reset();
                            } catch {
                                showNotification(
                                    "error",
                                    "Unable to send the message. Please try again.",
                                );
                            } finally {
                                setSending(false);
                            }
                        }}
                    >
                        <div>
                            <label htmlFor="senderEmail" className="sr-only">
                                Your email
                            </label>
                            <input
                                id="senderEmail"
                                name="senderEmail"
                                type="email"
                                required
                                maxLength={500}
                                placeholder="Your email"
                                className={inputStyles}
                            />
                        </div>
                        <div>
                            <label htmlFor="message" className="sr-only">
                                Your message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                required
                                maxLength={5000}
                                placeholder="Your message"
                                className={`${inputStyles} h-40 resize-none`}
                            />
                        </div>
                        <button
                            type="submit"
                            disabled={sending}
                            className="group inline-flex h-12 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-brand-primary to-brand-primary-dark px-6 text-sm font-medium text-white shadow-soft transition-all hover:-translate-y-0.5 hover:shadow-lift focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary/60 focus-visible:ring-offset-2 focus-visible:ring-offset-brand-paper disabled:pointer-events-none disabled:opacity-70"
                        >
                            {sending ? (
                                <>
                                    <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white" />
                                    Sending…
                                </>
                            ) : (
                                <>
                                    Send message
                                    <FaPaperPlane className="h-3 w-3 opacity-80 transition-transform group-hover:translate-x-1" />
                                </>
                            )}
                        </button>
                    </form>
                </Card>
            </Reveal>

            <Notification
                show={notification.show}
                type={notification.type}
                message={notification.message}
            />
        </section>
    );
}
