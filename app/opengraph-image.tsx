import { ImageResponse } from "next/og";
import { profile } from "@/content/portfolio";

// Branded 1200×630 social card, generated at build time with next/og (built
// into Next — no extra dependency). Mirrors the site's dark navy + gold-accent
// identity. Also serves as the Twitter card image via fallback.
export const alt = "Prasetyo Adi Wijonarko — Fullstack Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
    return new ImageResponse(
        (
            <div
                style={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    padding: "80px",
                    background:
                        "linear-gradient(135deg, #0B1E36 0%, #0A1730 55%, #06101F 100%)",
                    color: "#EAF1FB",
                    fontFamily: "sans-serif",
                }}
            >
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "16px",
                        fontSize: 28,
                        color: "#F7C948",
                        fontWeight: 600,
                        letterSpacing: "0.04em",
                    }}
                >
                    <div
                        style={{
                            width: 14,
                            height: 14,
                            borderRadius: "50%",
                            background: "#F7C948",
                        }}
                    />
                    PORTFOLIO
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
                    <div
                        style={{
                            fontSize: 80,
                            fontWeight: 700,
                            lineHeight: 1.05,
                            letterSpacing: "-0.02em",
                        }}
                    >
                        {profile.name}
                    </div>
                    <div style={{ fontSize: 40, fontWeight: 600, color: "#5B93D6" }}>
                        {profile.role}
                    </div>
                    {/* <div style={{ fontSize: 28, color: "#93A6C3", maxWidth: 900 }}>
                        {profile.subheadline}
                    </div> */}
                </div>

                <div style={{ fontSize: 24, color: "#93A6C3" }}>
                    Next.js · React · Flutter · FastAPI
                </div>
            </div>
        ),
        { ...size },
    );
}
