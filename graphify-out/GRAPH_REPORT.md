# Graph Report - .  (2026-06-20)

## Corpus Check
- 46 files · ~90,411 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 221 nodes · 265 edges · 31 communities (25 shown, 6 thin omitted)
- Extraction: 97% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS · INFERRED: 1 edges (avg confidence: 0.95)
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- [[_COMMUNITY_Portfolio UI Components|Portfolio UI Components]]
- [[_COMMUNITY_Runtime Dependencies|Runtime Dependencies]]
- [[_COMMUNITY_TypeScript Config|TypeScript Config]]
- [[_COMMUNITY_Dev Build Tools|Dev Build Tools]]
- [[_COMMUNITY_Contact & Email API|Contact & Email API]]
- [[_COMMUNITY_Project Showcase Components|Project Showcase Components]]
- [[_COMMUNITY_Best Practice Articles|Best Practice Articles]]
- [[_COMMUNITY_Dulang Warehouse App|Dulang Warehouse App]]
- [[_COMMUNITY_Next.js Project Setup|Next.js Project Setup]]
- [[_COMMUNITY_Dulang Verify Feature|Dulang Verify Feature]]
- [[_COMMUNITY_App Layout & Footer|App Layout & Footer]]
- [[_COMMUNITY_Snapmosphere Weather App|Snapmosphere Weather App]]
- [[_COMMUNITY_ESLint Configuration|ESLint Configuration]]
- [[_COMMUNITY_Dulang Products Screen|Dulang Products Screen]]
- [[_COMMUNITY_Heuristic Evaluation|Heuristic Evaluation]]
- [[_COMMUNITY_Flutter Security Article|Flutter Security Article]]
- [[_COMMUNITY_Teamwork & Productivity|Teamwork & Productivity]]
- [[_COMMUNITY_Human Team Management|Human Team Management]]
- [[_COMMUNITY_Medium Clone UI|Medium Clone UI]]
- [[_COMMUNITY_Quality Assurance|Quality Assurance]]
- [[_COMMUNITY_Test-Driven Development|Test-Driven Development]]
- [[_COMMUNITY_Email Contact Template|Email Contact Template]]
- [[_COMMUNITY_Project Monitoring|Project Monitoring]]
- [[_COMMUNITY_Reusable UI Components|Reusable UI Components]]
- [[_COMMUNITY_Snackventure App|Snackventure App]]
- [[_COMMUNITY_Flutter Unit Testing|Flutter Unit Testing]]
- [[_COMMUNITY_Next.js Config|Next.js Config]]
- [[_COMMUNITY_PostCSS Config|PostCSS Config]]
- [[_COMMUNITY_Tailwind Config|Tailwind Config]]
- [[_COMMUNITY_Profile Photo|Profile Photo]]

## God Nodes (most connected - your core abstractions)
1. `compilerOptions` - 16 edges
2. `useSectionInView()` - 14 edges
3. `useActiveSectionContext()` - 7 edges
4. `Penerapan Best Practice dalam Pemrograman (Article)` - 7 edges
5. `scripts` - 6 edges
6. `Next.js Portfolio Project` - 6 edges
7. `Onboarding Welcome Screen` - 6 edges
8. `Programming Principles` - 5 edges
9. `sendEmail()` - 4 edges
10. `Products Screen` - 4 edges

## Surprising Connections (you probably didn't know these)
- `Contact()` --calls--> `useSectionInView()`  [EXTRACTED]
  components/contact.tsx → lib/hooks.ts
- `Projects()` --calls--> `useSectionInView()`  [EXTRACTED]
  components/projects.tsx → lib/hooks.ts
- `About()` --calls--> `useSectionInView()`  [EXTRACTED]
  components/about.tsx → lib/hooks.ts
- `Articles()` --calls--> `useSectionInView()`  [EXTRACTED]
  components/articles.tsx → lib/hooks.ts
- `Experiences()` --calls--> `useSectionInView()`  [EXTRACTED]
  components/experiences.tsx → lib/hooks.ts

## Import Cycles
- None detected.

## Hyperedges (group relationships)
- **hyperedge_nextjs_font_project** — readme_nextjs_project, readme_next_font, readme_geist_font [EXTRACTED 1.00]

## Communities (31 total, 6 thin omitted)

### Community 0 - "Portfolio UI Components"
Cohesion: 0.12
Nodes (18): About(), Article(), ArticleProps, Articles(), Experiences(), Header(), Intro(), ActiveSectionContext (+10 more)

### Community 1 - "Runtime Dependencies"
Cohesion: 0.08
Nodes (24): dependencies, clsx, framer-motion, lucide-react, next, react, react-dom, @react-email/components (+16 more)

### Community 2 - "TypeScript Config"
Cohesion: 0.10
Nodes (19): compilerOptions, allowJs, esModuleInterop, incremental, isolatedModules, jsx, lib, module (+11 more)

### Community 3 - "Dev Build Tools"
Cohesion: 0.14
Nodes (14): devDependencies, autoprefixer, eslint, eslint-config-next, @eslint/eslintrc, postcss, tailwindcss, @tailwindcss/postcss (+6 more)

### Community 4 - "Contact & Email API"
Cohesion: 0.26
Nodes (7): resend, sendEmail(), Contact(), getErrorMessage(), validateString(), NotificationProps, NotificationType

### Community 5 - "Project Showcase Components"
Cohesion: 0.28
Nodes (4): Project, ProjectCard(), Projects(), projectsData

### Community 6 - "Best Practice Articles"
Cohesion: 0.39
Nodes (8): Penerapan Best Practice dalam Pemrograman (Article), Prasetyo Adi Wijonarko, Best Practice, Medium (Publishing Platform), Object-Oriented Programming (OOP), Programming Principles, Reactive Programming, SOLID Principles

### Community 7 - "Dulang Warehouse App"
Cohesion: 0.29
Nodes (8): Dulang Smartwarehouse App, Inventory Management Feature, Mobile App UI (iOS Mockup), Next/Arrow CTA Button, Onboarding Welcome Screen, Onboarding Pagination Dots, Skip Button, Warehouse Workers Illustration

### Community 8 - "Next.js Project Setup"
Cohesion: 0.32
Nodes (8): app/page.tsx Entry Point, create-next-app CLI, Development Server, Geist Font Family, next/font Font Optimization, Next.js Framework, Next.js Portfolio Project, Vercel Deployment Platform

### Community 9 - "Dulang Verify Feature"
Cohesion: 0.33
Nodes (7): Dulang Smart Warehouse App, Dulang Verify Screenshot, iPhone 14 Pro Verified Item, Mobile UI (iOS Mockup), Riwayat Verifikasi Screen, Stock Verification, Verification History Feature

### Community 11 - "Snapmosphere Weather App"
Cohesion: 0.40
Nodes (6): Dark Theme Design, iPhone Mockup Screenshot, Rainy Night Weather Icon, Snapmosphere App, Splash Screen UI, Weather Mobile Application

### Community 12 - "ESLint Configuration"
Cohesion: 0.40
Nodes (4): compat, __dirname, eslintConfig, __filename

### Community 13 - "Dulang Products Screen"
Cohesion: 0.50
Nodes (5): Dulang Smart Warehouse App, Dulang Product, iPhone 14 Pro Product Card, Products Screen, Samsung Smart TV Product Card

### Community 14 - "Heuristic Evaluation"
Cohesion: 0.50
Nodes (5): Heuristic Evaluation and UI Design Enhancement, Heuristic Evaluation, Medium Article Screenshot, UI Design Enhancement, User Experience (UX)

### Community 15 - "Flutter Security Article"
Cohesion: 0.50
Nodes (5): Prasetyo Adi Wijonarko, Flutter, Medium Article on Secure Programming, Mobile App Security, Secure Your Mobile App — Praktik Secure Programming di Proyek Flutter

### Community 16 - "Teamwork & Productivity"
Cohesion: 0.50
Nodes (5): Medium Article: Teamwork With Tools, Prasetyo Adi Wijonarko, Meningkatkan Produktivitas (Increasing Productivity), Software Development Tools & Platforms, Teamwork With Tools

### Community 17 - "Human Team Management"
Cohesion: 0.67
Nodes (4): Medium Article - Human Management in a Team, Prasetyo Adi Wijonarko, Management Manusia di Dalam Sebuah Tim, Team Management / Manajemen Manusia

### Community 18 - "Medium Clone UI"
Cohesion: 0.67
Nodes (4): Start Reading CTA Button, Hero Section, Medium Clone, Navigation Bar

### Community 19 - "Quality Assurance"
Cohesion: 0.83
Nodes (4): Blog Article on Medium, Code Quality, Quality Assurance: Static Analysis, Static Analysis

### Community 20 - "Test-Driven Development"
Cohesion: 0.67
Nodes (4): TDD in Software Engineering - Medium Article Screenshot, Prasetyo Adi Wijonarko, Medium Publishing Platform, Test-Driven Development (TDD)

### Community 22 - "Project Monitoring"
Cohesion: 0.67
Nodes (3): Monitoring Your Project with Sentry - Medium Article Screenshot, Blog Post: Monitoring Your Project with Sentry, Sentry

### Community 23 - "Reusable UI Components"
Cohesion: 1.00
Nodes (3): Membangun UI yang Konsisten dengan Reusable Component, Prasetyo Adi Wijonarko (Author), Reusable Component (UI Concept)

### Community 24 - "Snackventure App"
Cohesion: 0.67
Nodes (3): Snackventure Brand Identity, Start Your Snackventure CTA, Snackventure App

### Community 25 - "Flutter Unit Testing"
Cohesion: 0.67
Nodes (3): Unit Testing di Flutter: Teknik Stub dan Mock - Article Screenshot, Flutter Unit Testing with Stub and Mock Techniques, Medium Blog Article - Unit Testing di Flutter

## Knowledge Gaps
- **101 isolated node(s):** `inter`, `metadata`, `resend`, `ArticleProps`, `Project` (+96 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **6 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `devDependencies` connect `Dev Build Tools` to `Runtime Dependencies`?**
  _High betweenness centrality (0.017) - this node is a cross-community bridge._
- **Why does `useSectionInView()` connect `Portfolio UI Components` to `Contact & Email API`, `Project Showcase Components`?**
  _High betweenness centrality (0.013) - this node is a cross-community bridge._
- **What connects `inter`, `metadata`, `resend` to the rest of the system?**
  _101 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Portfolio UI Components` be split into smaller, more focused modules?**
  _Cohesion score 0.12310606060606061 - nodes in this community are weakly interconnected._
- **Should `Runtime Dependencies` be split into smaller, more focused modules?**
  _Cohesion score 0.08 - nodes in this community are weakly interconnected._
- **Should `TypeScript Config` be split into smaller, more focused modules?**
  _Cohesion score 0.1 - nodes in this community are weakly interconnected._
- **Should `Dev Build Tools` be split into smaller, more focused modules?**
  _Cohesion score 0.14285714285714285 - nodes in this community are weakly interconnected._