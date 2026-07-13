import Link from "next/link";
import { navLinks, profile } from "@/content/portfolio";
import { Container } from "@/components/ui/container";
import { SocialLinks } from "@/components/ui/social-links";

export default function Footer() {
    return (
        <Container as="footer" className="mt-10 pb-12">
            {/* Gradient hairline — a softer edge than a flat full-width rule. */}
            <div
                aria-hidden
                className="h-px w-full bg-gradient-to-r from-transparent via-[color:var(--line)] to-transparent"
            />
            <div className="flex flex-col items-center gap-8 pt-8 sm:flex-row sm:items-start sm:justify-between">
                <div className="text-center sm:text-left">
                    <Link
                        href="#home"
                        className="inline-flex items-center gap-2 font-display text-lg font-bold text-brand-ink"
                    >
                        {profile.shortName}
                    </Link>
                    <p className="mt-2 max-w-xs text-sm text-brand-muted">
                        {profile.role} · {profile.location}. Open to opportunities.
                    </p>
                </div>

                <nav aria-label="Footer" className="flex flex-wrap justify-center gap-x-5 gap-y-2">
                    {navLinks.map((link) => (
                        <Link
                            key={link.hash}
                            href={link.hash}
                            className="text-sm text-brand-muted underline-offset-4 transition-colors hover:text-brand-ink hover:underline hover:decoration-brand-accent/60"
                        >
                            {link.name}
                        </Link>
                    ))}
                </nav>
            </div>

            <div className="mt-6 flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
                <span className="text-xs text-brand-muted">
                    © {new Date().getFullYear()} {profile.name}. All rights reserved.
                </span>
                <SocialLinks variant="bare" size="sm" />
            </div>
        </Container>
    );
}
