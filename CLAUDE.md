# CLAUDE.md

## Project Overview

This is a Next.js portfolio website for **Prasetyo Adi Wijonarko** (also known as Prasetyo Adi / Adi).

The portfolio presents Prasetyo as a Computer Science student at **Universitas Indonesia / Fasilkom UI** with interests in full-stack development, backend engineering, frontend engineering, software engineering, and gerontechnology-related projects.

## Tech Stack

- **Next.js 15** (App Router, Turbopack in dev)
- **React 19**
- **TypeScript** (strict mode)
- **Tailwind CSS v3** (PostCSS + Autoprefixer)
- **Framer Motion v12** — animations and transitions
- **Inter** (Google Font via `next/font/google`)
- **clsx** — conditional class merging
- **lucide-react** + **react-icons** — icons
- **react-hot-toast** — toast notifications
- **react-intersection-observer** — scroll-based section detection
- **react-swipeable** — swipe gesture support
- **react-vertical-timeline-component** — experience timeline
- **resend** — transactional email API
- **@react-email/components** + **@react-email/tailwind** — email templates

## Common Commands

Package manager: **npm**

```bash
npm install        # install dependencies
npm run dev        # start dev server (Turbopack)
npm run build      # production build
npm run start      # run production server
npm run lint       # ESLint (next/core-web-vitals + next/typescript)
npm run typecheck  # TypeScript check (tsc --noEmit)
```

No test runner is configured. Skip the test step in the verification checklist.

## Folder Structure

```
app/
  layout.tsx              # Root layout: Inter font, metadata, background blobs, Header + Footer
  page.tsx                # Home page: composes all section components
  globals.css             # Global styles

components/
  intro.tsx               # Hero / intro section
  about.tsx               # About section
  projects.tsx            # Projects section (grid)
  project.tsx             # Individual project card + modal
  articles.tsx            # Articles section (grid)
  article.tsx             # Individual article card
  experiences.tsx         # Experiences section (timeline)
  contact.tsx             # Contact form section
  header.tsx              # Sticky navigation header
  footer.tsx              # Footer
  section-divider.tsx     # Visual divider between sections
  submit-btn.tsx          # Animated submit button for contact form
  api/
    send.ts               # Server action / API handler for contact form (uses resend)
  ui/
    noitification.tsx     # Custom notification UI component

context/
  active-section-context.tsx  # React context tracking the currently visible section

email/
  contact-form-email.tsx  # React Email template for contact form submissions

lib/
  data.ts     # ALL portfolio content: links, experiencesData, projectsData, articlesData, techIcons
  hooks.ts    # useSectionInView — connects react-intersection-observer to ActiveSectionContext
  types.ts    # SectionName type (derived from links array in data.ts)
  utils.ts    # Utility functions (e.g. getErrorMessage, validateString)

public/
  my-photo.jpg            # Profile photo
  *.png / *.jpg           # Project screenshots and article thumbnails
```

## Architecture Guidelines

- **Single-page layout**: the site is one scrollable page; sections are identified by hash IDs.
- **Content is centralized**: all portfolio data (nav links, experiences, projects, articles, tech icons) lives in `lib/data.ts`. Never scatter the same data across multiple components.
- **`useSectionInView` is the bridge**: every major section uses this hook to register itself with `ActiveSectionContext`. Do not bypass it when adding new sections.
- **Route files stay thin**: `app/page.tsx` and `app/layout.tsx` handle composition and metadata only.
- **Reusable UI vs section components**: keep generic UI primitives in `components/ui/`; keep section-level components directly in `components/`.
- **No over-engineering**: avoid unnecessary abstractions, wrapper components, or HOCs unless the task clearly requires them.
- **Preserve existing behavior** unless the task explicitly asks to change it.
- **`@/` path alias** maps to the project root (`tsconfig.json` paths).

## Content Guidelines

Use the following profile context when working on portfolio content:

- **Name**: Prasetyo Adi Wijonarko / Prasetyo Adi
- **Background**: Computer Science student at Universitas Indonesia / Fasilkom UI
- **Interests**: full-stack development, backend engineering, frontend engineering, software engineering, and data-related engineering when relevant
- **Experience to include when requested**: Fullstack Developer at MSI
- **Project highlight to include when requested**: **TuwaCare** — a gerontechnology platform for older adults and caregivers with schedules, reminders, health notes, SOS, cognitive games, forum, and an AI voice assistant

For TuwaCare, relevant technical highlights include:
- Flutter mobile frontend
- FastAPI backend
- PostgreSQL
- Redis
- Celery Beat / Celery Worker
- Firebase Cloud Messaging
- Google OAuth
- AI Voice Assistant pipeline: Speech-to-Text → LLM Function Calling → Tool Execution → Text-to-Speech

Do not invent fake dates, fake links, fake GitHub URLs, fake company details, or fake metrics.

## UI/UX Direction

When asked to improve the UI, follow this direction:

- Minimalist but fun
- Modern, clean, polished, and eye-catching
- Professional enough for recruiters and technical reviewers
- Use whitespace, clear hierarchy, bento/card-based layouts, subtle borders, soft shadows, and tasteful accent colors
- Prefer smooth micro-interactions and light parallax only when appropriate
- Do not make the UI overly crowded or overly corporate

## Animation Guidelines

- Framer Motion is already installed — use it for all animations.
- Keep animation smooth, subtle, and performance-friendly.
- Avoid scroll hijacking and large layout shifts.
- Support `prefers-reduced-motion`.
- Do not add a new animation dependency unless the task requires it or the user approves it.

## Accessibility and Performance

- Use semantic HTML with a clear heading hierarchy.
- Ensure images have meaningful `alt` text.
- Use `next/image` for all images in `public/` and `next/font` for fonts (already set up).
- Keep color contrast readable.
- Ensure keyboard navigation remains usable.
- Avoid unnecessary `"use client"` directives — prefer Server Components where possible.
- Avoid unused imports, dead code, and debug `console.log`.

## Claude Code Workflow

Before making significant changes:

1. Read this `CLAUDE.md`.
2. **Check `graphify-out/graph.json` first** when the question is about the codebase structure, relationships, data flow, or "how does X work" — run `/graphify query "<question>"` against the existing graph before reading files manually.
3. Audit the relevant files.
4. Make a short plan.
5. Apply changes incrementally.
6. Preserve existing content and behavior unless asked otherwise.
7. Run available verification commands: `npm run lint` and `npm run typecheck`.
8. Summarize modified files and any unresolved issues.

## Skills, Superpowers, and Subagents

No project-level `.claude/` folder exists in this repository.

Global Claude Code skills are available from `~/.claude/` and include:

- **Superpowers** workflow/skills — composable skills for systematic debugging, TDD, plan writing, code review, brainstorming, and more. Use them before large or risky tasks.
- **`/impeccable`** (`frontend-design` skill) — use for UI redesign, visual polish, and frontend improvement tasks.
- **`/graphify`** — knowledge graph of this codebase lives in `graphify-out/`. Query it with `/graphify query "<question>"` for codebase questions.
- **`/code-review`** — use before merging significant changes.

Use these only when they add value. Do not invent unavailable skills or subagents.

## Verification Checklist

Before finishing implementation tasks, verify:

- [ ] Existing behavior is preserved unless intentionally changed.
- [ ] Code is readable and maintainable.
- [ ] Portfolio content and data remain in `lib/data.ts`, not scattered in components.
- [ ] No fake data, fake links, or fake dates were added.
- [ ] Responsive behavior is not broken.
- [ ] Accessibility basics are respected (semantic HTML, alt text, contrast, keyboard nav).
- [ ] `npm run lint` passes (or failures are documented).
- [ ] `npm run typecheck` passes (or failures are documented).
