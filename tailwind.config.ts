import type { Config } from 'tailwindcss'

const config: Config = {
    content: [
        './app/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './content/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                // Single source of truth — blue-on-paper palette.
                // Namespaced under `brand` so Tailwind's defaults stay intact.
                brand: {
                    // Dark theme — semantic tokens so every component flips together.
                    paper: '#0B1E36',       // page background (matches `night`)
                    surface: '#16294A',     // cards / raised surfaces (lifted off paper)
                    soft: '#20375A',        // soft fills, chips, dividers
                    ink: '#EAF1FB',         // headings + primary text (near-white)
                    muted: '#93A6C3',       // secondary text (slate-blue)
                    primary: '#5B93D6',     // links, buttons, interactive (bright on dark)
                    'primary-dark': '#3F72AF',
                    night: '#0B1E36',       // deepest navy base
                    'night-deep': '#06101F', // vignette / overlays / orb cores
                    // Warm accent — the second color that breaks the blue monotony.
                    accent: '#F7C948',
                    'accent-dark': '#E0A92E',
                },
            },
            fontFamily: {
                display: ['var(--font-display)', 'system-ui', 'sans-serif'],
                sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
            },
            borderRadius: {
                '4xl': '2rem',
            },
            boxShadow: {
                // Tuned for a dark canvas — depth comes from shadow + the light hairline border.
                soft: '0 1px 2px rgba(0,0,0,0.30), 0 14px 34px -20px rgba(0,0,0,0.65)',
                lift: '0 24px 52px -24px rgba(0,0,0,0.75)',
            },
            keyframes: {
                // A highlight that sweeps across the Waveform's track (left → right).
                sheen: {
                    '0%': { transform: 'translateX(-100%)' },
                    '100%': { transform: 'translateX(200%)' },
                },
            },
            animation: {
                sheen: 'sheen 2.4s ease-in-out infinite',
            },
        },
    },
    plugins: [],
}

export default config
