# Graph Report - .  (2026-06-23)

## Corpus Check
- 61 files · ~95,850 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 314 nodes · 512 edges · 97 communities (12 shown, 85 thin omitted)
- Extraction: 94% EXTRACTED · 6% INFERRED · 0% AMBIGUOUS · INFERRED: 31 edges (avg confidence: 0.87)
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- [[_COMMUNITY_App Layout & Metadata|App Layout & Metadata]]
- [[_COMMUNITY_Content Data & UI Utils|Content Data & UI Utils]]
- [[_COMMUNITY_Page Composition & Animation|Page Composition & Animation]]
- [[_COMMUNITY_Build & Package Config|Build & Package Config]]
- [[_COMMUNITY_TypeScript Config|TypeScript Config]]
- [[_COMMUNITY_Section Components|Section Components]]
- [[_COMMUNITY_Architecture Concepts|Architecture Concepts]]
- [[_COMMUNITY_Runtime Dependencies|Runtime Dependencies]]
- [[_COMMUNITY_Server Actions & Email|Server Actions & Email]]
- [[_COMMUNITY_Project Documentation|Project Documentation]]
- [[_COMMUNITY_ESLint Config|ESLint Config]]
- [[_COMMUNITY_Active Section Context|Active Section Context]]
- [[_COMMUNITY_Contact Email Template|Contact Email Template]]
- [[_COMMUNITY_Next.js Config|Next.js Config]]
- [[_COMMUNITY_PostCSS Config|PostCSS Config]]
- [[_COMMUNITY_Module 15|Module 15]]
- [[_COMMUNITY_Module 16|Module 16]]
- [[_COMMUNITY_Module 17|Module 17]]
- [[_COMMUNITY_Module 18|Module 18]]
- [[_COMMUNITY_Module 19|Module 19]]
- [[_COMMUNITY_Module 20|Module 20]]
- [[_COMMUNITY_Module 21|Module 21]]
- [[_COMMUNITY_Module 22|Module 22]]
- [[_COMMUNITY_Module 23|Module 23]]
- [[_COMMUNITY_Module 24|Module 24]]
- [[_COMMUNITY_Module 25|Module 25]]
- [[_COMMUNITY_Module 26|Module 26]]
- [[_COMMUNITY_Module 27|Module 27]]
- [[_COMMUNITY_Module 28|Module 28]]
- [[_COMMUNITY_Module 29|Module 29]]
- [[_COMMUNITY_Module 30|Module 30]]
- [[_COMMUNITY_Module 31|Module 31]]
- [[_COMMUNITY_Module 32|Module 32]]
- [[_COMMUNITY_Module 33|Module 33]]
- [[_COMMUNITY_Module 34|Module 34]]
- [[_COMMUNITY_Module 35|Module 35]]
- [[_COMMUNITY_Module 36|Module 36]]
- [[_COMMUNITY_Module 37|Module 37]]
- [[_COMMUNITY_Module 38|Module 38]]
- [[_COMMUNITY_Module 39|Module 39]]
- [[_COMMUNITY_Module 40|Module 40]]
- [[_COMMUNITY_Module 41|Module 41]]
- [[_COMMUNITY_Module 42|Module 42]]
- [[_COMMUNITY_Module 43|Module 43]]
- [[_COMMUNITY_Module 44|Module 44]]
- [[_COMMUNITY_Module 45|Module 45]]
- [[_COMMUNITY_Module 46|Module 46]]
- [[_COMMUNITY_Module 47|Module 47]]
- [[_COMMUNITY_Module 48|Module 48]]
- [[_COMMUNITY_Module 49|Module 49]]
- [[_COMMUNITY_Module 50|Module 50]]
- [[_COMMUNITY_Module 51|Module 51]]
- [[_COMMUNITY_Module 52|Module 52]]
- [[_COMMUNITY_Module 53|Module 53]]
- [[_COMMUNITY_Module 54|Module 54]]
- [[_COMMUNITY_Module 55|Module 55]]
- [[_COMMUNITY_Module 56|Module 56]]
- [[_COMMUNITY_Module 57|Module 57]]
- [[_COMMUNITY_Module 58|Module 58]]
- [[_COMMUNITY_Module 59|Module 59]]
- [[_COMMUNITY_Module 60|Module 60]]
- [[_COMMUNITY_Module 61|Module 61]]
- [[_COMMUNITY_Module 62|Module 62]]
- [[_COMMUNITY_Module 63|Module 63]]
- [[_COMMUNITY_Module 64|Module 64]]
- [[_COMMUNITY_Module 65|Module 65]]
- [[_COMMUNITY_Module 66|Module 66]]
- [[_COMMUNITY_Module 67|Module 67]]
- [[_COMMUNITY_Module 68|Module 68]]
- [[_COMMUNITY_Module 69|Module 69]]
- [[_COMMUNITY_Module 70|Module 70]]
- [[_COMMUNITY_Module 71|Module 71]]
- [[_COMMUNITY_Module 72|Module 72]]
- [[_COMMUNITY_Module 73|Module 73]]
- [[_COMMUNITY_Module 74|Module 74]]
- [[_COMMUNITY_Module 75|Module 75]]
- [[_COMMUNITY_Module 76|Module 76]]
- [[_COMMUNITY_Module 77|Module 77]]
- [[_COMMUNITY_Module 78|Module 78]]
- [[_COMMUNITY_Module 79|Module 79]]
- [[_COMMUNITY_Module 80|Module 80]]
- [[_COMMUNITY_Module 81|Module 81]]
- [[_COMMUNITY_Module 82|Module 82]]
- [[_COMMUNITY_Module 83|Module 83]]
- [[_COMMUNITY_Module 84|Module 84]]
- [[_COMMUNITY_Module 85|Module 85]]
- [[_COMMUNITY_Module 86|Module 86]]
- [[_COMMUNITY_Module 87|Module 87]]
- [[_COMMUNITY_Module 88|Module 88]]
- [[_COMMUNITY_Module 89|Module 89]]
- [[_COMMUNITY_Module 90|Module 90]]
- [[_COMMUNITY_Module 91|Module 91]]
- [[_COMMUNITY_Module 92|Module 92]]
- [[_COMMUNITY_Module 93|Module 93]]
- [[_COMMUNITY_Module 94|Module 94]]
- [[_COMMUNITY_Module 95|Module 95]]
- [[_COMMUNITY_Module 96|Module 96]]

## God Nodes (most connected - your core abstractions)
1. `cn()` - 28 edges
2. `useSectionInView()` - 20 edges
3. `Reveal()` - 17 edges
4. `compilerOptions` - 17 edges
5. `Waveform()` - 15 edges
6. `Hero()` - 13 edges
7. `Contact()` - 11 edges
8. `Experience()` - 11 edges
9. `EASE` - 11 edges
10. `Home()` - 10 edges

## Surprising Connections (you probably didn't know these)
- `Centralized Content in content/portfolio.ts` --references--> `profile`  [INFERRED]
  CLAUDE.md → content/portfolio.ts
- `Centralized Content in content/portfolio.ts` --references--> `projects`  [INFERRED]
  CLAUDE.md → content/portfolio.ts
- `useSectionInView as Context Bridge Pattern` --references--> `useSectionInView()`  [EXTRACTED]
  CLAUDE.md → lib/hooks.ts
- `navLinks` --implements--> `NavLink`  [INFERRED]
  content/portfolio.ts → types/portfolio.ts
- `Centralized Content in content/portfolio.ts` --references--> `experiences`  [INFERRED]
  CLAUDE.md → content/portfolio.ts

## Import Cycles
- None detected.

## Hyperedges (group relationships)
- **hyperedge_nextjs_font_project** — readme_nextjs_project, readme_next_font, readme_geist_font [EXTRACTED 1.00]
- **Section + useSectionInView + ActiveSectionContext Pattern** — lib_hooks_usesectioninview, context_activesection, sections_hero_hero, sections_about_about, sections_experience_experience, sections_projects_projects, sections_skills_skills, sections_articles_articles, sections_contact_contact [EXTRACTED 0.95]
- **Full SEO Coverage: metadata + OG image + JSON-LD + robots + sitemap** — app_layout_metadata, app_opengraph_opengraphimage, seo_jsonld_jsonld, app_robots_robots, app_sitemap_sitemap [INFERRED 0.95]
- **content/portfolio as Central Data Fan-out to All Sections and SEO** — content_portfolio, app_layout_rootlayout, app_opengraph_opengraphimage, app_robots_robots, app_sitemap_sitemap, layout_footer_footer, layout_header_header, sections_about_about, sections_articles_articles, sections_contact_contact, sections_experience_experience, sections_hero_hero, sections_projects_projects, sections_skills_skills, seo_jsonld_jsonld [EXTRACTED 1.00]
- **Section In-View Tracking Flow: Hook + Context + SectionName** — lib_hooks_usesectioninview, context_activesection_activesectioncontext, content_portfolio_sectionname [EXTRACTED 1.00]
- **Contact Form Email Pipeline: Action + Utils + Email Template** — lib_actions_sendemail, lib_utils_validatestring, email_contactformemail_contactformemail [INFERRED 0.85]
- **Portfolio Content + Type System: content/portfolio.ts + types/portfolio.ts** — content_portfolio_projects, types_portfolio_project, content_portfolio_experiences [EXTRACTED 1.00]

## Communities (97 total, 85 thin omitted)

### Community 0 - "App Layout & Metadata"
Cohesion: 0.10
Nodes (29): display, metadata, RootLayout(), sans, viewport, size, OpengraphImage, robots() (+21 more)

### Community 1 - "Content Data & UI Utils"
Cohesion: 0.11
Nodes (25): App Icon SVG, TuwaCare Gerontechnology Project, projects, cn(), ProjectCard(), ProjectCard, Brand Color Palette (Tailwind Config), Sheen Animation (Tailwind Keyframes) (+17 more)

### Community 2 - "Page Composition & Animation"
Cohesion: 0.24
Nodes (20): Home(), prefers-reduced-motion Accessibility Support, Section Scroll Tracking Pattern, EASE, useSectionInView(), About(), focusAreas, values (+12 more)

### Community 3 - "Build & Package Config"
Cohesion: 0.08
Nodes (23): devDependencies, autoprefixer, eslint, eslint-config-next, @eslint/eslintrc, postcss, tailwindcss, @tailwindcss/postcss (+15 more)

### Community 4 - "TypeScript Config"
Cohesion: 0.10
Nodes (20): compilerOptions, allowArbitraryExtensions, allowJs, esModuleInterop, incremental, isolatedModules, jsx, lib (+12 more)

### Community 5 - "Section Components"
Cohesion: 0.15
Nodes (14): Footer(), [firstName, ...restNameParts], [headlinePre, headlinePost], orbs, restName, Container(), ContainerProps, Orientation (+6 more)

### Community 6 - "Architecture Concepts"
Cohesion: 0.13
Nodes (16): CLAUDE.md Project Documentation, Centralized Content in content/portfolio.ts, useSectionInView as Context Bridge Pattern, Single-Page Portfolio Layout Pattern, articles, experiences, ProjectModal(), ProjectModalProps (+8 more)

### Community 7 - "Runtime Dependencies"
Cohesion: 0.13
Nodes (15): dependencies, clsx, framer-motion, lucide-react, next, react, react-dom, @react-email/components (+7 more)

### Community 8 - "Server Actions & Email"
Cohesion: 0.27
Nodes (8): isValidEmail(), sendEmail(), SendEmailResult, getErrorMessage(), validateString(), Notification(), NotificationProps, NotificationType

### Community 9 - "Project Documentation"
Cohesion: 0.32
Nodes (8): app/page.tsx Entry Point, create-next-app CLI, Development Server, Geist Font Family, next/font Font Optimization, Next.js Framework, Next.js Portfolio Project, Vercel Deployment Platform

### Community 10 - "ESLint Config"
Cohesion: 0.40
Nodes (4): compat, __dirname, eslintConfig, __filename

### Community 11 - "Active Section Context"
Cohesion: 0.67
Nodes (3): ActiveSectionContext, ActiveSectionContextProvider Component, useActiveSectionContext Hook

## Knowledge Gaps
- **186 isolated node(s):** `display`, `sans`, `viewport`, `size`, `slideVariants` (+181 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **85 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `cn()` connect `Content Data & UI Utils` to `App Layout & Metadata`, `Server Actions & Email`, `Page Composition & Animation`, `Section Components`?**
  _High betweenness centrality (0.031) - this node is a cross-community bridge._
- **Why does `Waveform()` connect `Content Data & UI Utils` to `Page Composition & Animation`, `Section Components`?**
  _High betweenness centrality (0.014) - this node is a cross-community bridge._
- **Why does `useSectionInView()` connect `Page Composition & Animation` to `App Layout & Metadata`, `Content Data & UI Utils`, `Section Components`, `Architecture Concepts`, `Server Actions & Email`, `Active Section Context`?**
  _High betweenness centrality (0.013) - this node is a cross-community bridge._
- **Are the 2 inferred relationships involving `cn()` (e.g. with `validateString()` and `@/ Path Alias (tsconfig)`) actually correct?**
  _`cn()` has 2 INFERRED edges - model-reasoned connections that need verification._
- **What connects `display`, `sans`, `viewport` to the rest of the system?**
  _186 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `App Layout & Metadata` be split into smaller, more focused modules?**
  _Cohesion score 0.09615384615384616 - nodes in this community are weakly interconnected._
- **Should `Content Data & UI Utils` be split into smaller, more focused modules?**
  _Cohesion score 0.11088709677419355 - nodes in this community are weakly interconnected._