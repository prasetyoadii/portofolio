import Link from "next/link";
import { navLinks, profile } from "@/content/portfolio";
import { Container } from "@/components/ui/container";
import { SocialLinks } from "@/components/ui/social-links";

export default function Footer() {
    return (
        <Container as="footer" className="mt-10 pb-12">
            <div className="flex flex-col items-center gap-8 border-t border-[color:var(--line)] pt-8 sm:flex-row sm:items-start sm:justify-between">
                <div className="text-center sm:text-left">
                    <Link href="#home" className="font-display text-lg font-bold text-brand-ink">
                        {profile.shortName}
                        <span className="text-brand-primary">.</span>
                    </Link>
                    <p className="mt-2 max-w-xs text-sm text-brand-muted">
                        {profile.role} · {profile.location}. Open to opportunities and good
                        conversations.
                    </p>
                </div>

                <nav aria-label="Footer" className="flex flex-wrap justify-center gap-x-5 gap-y-2">
                    {navLinks.map((link) => (
                        <Link
                            key={link.hash}
                            href={link.hash}
                            className="text-sm text-brand-muted transition-colors hover:text-brand-ink"
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
