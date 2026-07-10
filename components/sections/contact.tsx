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
    "w-full rounded-2xl border border-[color:var(--line)] bg-brand-paper/60 px-4 py-3 text-sm text-brand-ink shadow-[inset_0_1px_2px_rgba(0,0,0,0.25)] transition-all duration-200 placeholder:text-brand-muted/55 hover:border-brand-primary/30 focus:border-brand-primary/60 focus:bg-brand-paper focus:outline-none focus:ring-4 focus:ring-brand-primary/15";

const labelStyles = "mb-1.5 block text-xs font-medium uppercase tracking-wide text-brand-muted";

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
            {/* Asymmetric two-column: the pitch on the left, the form on the right. */}
            <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-14">
                {/* Left — pitch + direct links */}
                <div className="flex flex-col">
                    <SectionHeader
                        align="left"
                        className="max-w-md"
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

                    <Reveal className="mt-8 flex flex-col items-start gap-5">
                        <a
                            href={`mailto:${profile.email}`}
                            className="group inline-flex items-center gap-3 rounded-2xl border border-[color:var(--line)] bg-brand-surface px-4 py-3 shadow-soft transition-all hover:-translate-y-0.5 hover:border-brand-primary/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary/60 focus-visible:ring-offset-2 focus-visible:ring-offset-brand-paper"
                        >
                            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-primary/12 text-brand-primary ring-1 ring-brand-primary/20 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
                                <FaPaperPlane className="h-3.5 w-3.5" />
                            </span>
                            <span className="text-left">
                                <span className="block text-xs text-brand-muted">Email me at</span>
                                <span className="block font-display text-sm font-semibold text-brand-ink">
                                    {profile.email}
                                </span>
                            </span>
                        </a>
                        <SocialLinks />
                    </Reveal>
                </div>

                {/* Right — the form */}
                <Reveal className="lg:pt-2">
                    <Card className="p-6 sm:p-8">
                        <form
                            id="contact-form"
                            className="flex flex-col gap-5"
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
                                <label htmlFor="senderEmail" className={labelStyles}>
                                    Your email
                                </label>
                                <input
                                    id="senderEmail"
                                    name="senderEmail"
                                    type="email"
                                    required
                                    maxLength={500}
                                    placeholder="you@example.com"
                                    className={inputStyles}
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className={labelStyles}>
                                    Your message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    required
                                    maxLength={5000}
                                    placeholder="Tell me a little about what you have in mind…"
                                    className={`${inputStyles} h-40 resize-none`}
                                />
                            </div>
                            {/* Button-in-button: the send glyph lives in its own nested circle. */}
                            <button
                                type="submit"
                                disabled={sending}
                                className="group inline-flex h-12 items-center gap-2 self-start rounded-full bg-gradient-to-r from-brand-primary to-brand-primary-dark py-1 pl-6 pr-2 text-sm font-medium text-white shadow-soft transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lift active:translate-y-0 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary/60 focus-visible:ring-offset-2 focus-visible:ring-offset-brand-paper disabled:pointer-events-none disabled:opacity-70"
                            >
                                {sending ? "Sending…" : "Send message"}
                                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/15 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                                    {sending ? (
                                        <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white" />
                                    ) : (
                                        <FaPaperPlane className="h-3 w-3" />
                                    )}
                                </span>
                            </button>
                        </form>
                    </Card>
                </Reveal>
            </div>

            <Notification
                show={notification.show}
                type={notification.type}
                message={notification.message}
            />
        </section>
    );
}
