import { profile, siteUrl, socials } from "@/content/portfolio";

/**
 * Structured data (schema.org) for the portfolio — a Person and the WebSite it
 * lives on. Rendered server-side as JSON-LD so crawlers and rich results can
 * read it without executing client JS. Content is sourced from the central
 * `content/portfolio` data, so it never drifts from what's on the page.
 */
export function JsonLd() {
    const personId = `${siteUrl}/#person`;

    const person = {
        "@context": "https://schema.org",
        "@type": "Person",
        "@id": personId,
        name: profile.name,
        url: siteUrl,
        image: `${siteUrl}/my-photo.jpg`,
        jobTitle: profile.role,
        // description: profile.subheadline,
        email: `mailto:${profile.email}`,
        alumniOf: {
            "@type": "CollegeOrUniversity",
            name: "Universitas Indonesia",
        },
        knowsAbout: [
            "Full Stack Development",
            "Backend Engineering",
            "Frontend Engineering",
            "Software Engineering",
            "Next.js",
            "React",
            "Flutter",
            "FastAPI",
            "UI/UX",
        ],
        sameAs: socials.map((social) => social.href),
    };

    const website = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        name: "Prasetyo Adi — Portfolio",
        url: siteUrl,
        // description: profile.subheadline,
        inLanguage: "en",
        author: { "@id": personId },
    };

    return (
        <script
            type="application/ld+json"
            // JSON.stringify output is safe to inline; no user input is involved.
            dangerouslySetInnerHTML={{ __html: JSON.stringify([person, website]) }}
        />
    );
}
