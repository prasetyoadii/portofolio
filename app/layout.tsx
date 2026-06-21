import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import ActiveSectionContextProvider from "@/context/active-section-context";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { siteUrl } from "@/content/portfolio";
import { JsonLd } from "@/components/seo/json-ld";

const display = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const sans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const title = "Prasetyo Adi Wijonarko — Fullstack Developer";
const description =
  "Prasetyo Adi Wijonarko — Computer Science student at Universitas Indonesia and a fullstack developer building accessible, human-centered software across backend, frontend, and mobile.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: "%s · Prasetyo Adi",
  },
  description,
  applicationName: "Prasetyo Adi — Portfolio",
  keywords: [
    "Prasetyo Adi Wijonarko",
    "Prasetyo Adi",
    "Fullstack Developer",
    "Software Engineer",
    "Backend Engineer",
    "Next.js Developer",
    "React Developer",
    "Flutter Developer",
    "FastAPI Backend Developer",
    "UI/UX",
    "Computer Science Universitas Indonesia",
    "Fasilkom UI",
    "Portfolio",
  ],
  authors: [{ name: "Prasetyo Adi Wijonarko", url: siteUrl }],
  creator: "Prasetyo Adi Wijonarko",
  publisher: "Prasetyo Adi Wijonarko",
  alternates: {
    canonical: "/",
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title,
    description,
    url: siteUrl,
    type: "website",
    locale: "en_US",
    siteName: "Prasetyo Adi — Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0B1E36",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable} !scroll-smooth`}>
      {/* suppressHydrationWarning: browser extensions (e.g. Grammarly) inject
          attributes onto <body> before hydration, which otherwise trips React's
          server/client mismatch check. Scoped to this element only. */}
      <body
        suppressHydrationWarning
        className="relative min-h-screen overflow-x-hidden bg-brand-paper font-sans text-brand-ink antialiased"
      >
        {/* Ambient background — one continuous dark gradient with blue + gold
            glows that carry past the hero, plus a faint dot grid. */}
        <div aria-hidden className="pointer-events-none fixed inset-0 -z-[100] overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(180deg,#0B1E36_0%,#0A1730_45%,#0A1224_100%)]" />
          <div className="absolute -top-40 right-[-10rem] h-[34rem] w-[34rem] rounded-full bg-brand-primary/20 blur-[130px]" />
          <div className="absolute top-[42%] left-[-12rem] h-[32rem] w-[32rem] rounded-full bg-brand-accent/10 blur-[150px]" />
          <div className="absolute bottom-[-6rem] right-[12%] h-[28rem] w-[28rem] rounded-full bg-brand-primary/12 blur-[130px]" />
          <div className="absolute bottom-[6%] left-[18%] h-[22rem] w-[22rem] rounded-full bg-brand-accent/[0.07] blur-[130px]" />
          <div className="absolute inset-0 bg-grid-dark opacity-60" />
        </div>

        <JsonLd />

        <ActiveSectionContextProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </ActiveSectionContextProvider>
      </body>
    </html>
  );
}
