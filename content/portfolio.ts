import type {
    ArticleItem,
    Experience,
    Profile,
    Project,
    SkillGroup,
    SocialLink,
    TechIcon,
} from "@/types/portfolio";

// --- Project + article images -------------------------------------------------
import myPhoto from "@/public/my-photo.jpg";
import dulangImg from "@/public/dulang.png";
import dulangProductImg from "@/public/dulang-product.png";
import dulangVerifyImg from "@/public/dulang-verify.png";
import mediumCloneImg from "@/public/medium-clone.png";
import snackventureImg from "@/public/snackventure.png";
import snapmosphereImg from "@/public/snapmosphere.png";
import monitoringImg from "@/public/monitoring.png";
import manageHumanImg from "@/public/manage-human.png";
import teamworkImg from "@/public/teamwork-tools.png";
import secureMobileImg from "@/public/secure-programming.png";
import qualityAssuranceImg from "@/public/quality-assurance.png";
import reusableComponentImg from "@/public/reusabe-component.png";
import unitTestingImg from "@/public/stub-mock.png";
import tddImg from "@/public/tdd.png";
import bestPracticeImg from "@/public/best-practice.png";
import heuristicEvalImg from "@/public/heuristic-eval.png";

// --- Icons --------------------------------------------------------------------
import {
    FaReact,
    FaLaravel,
    FaPhp,
    FaFigma,
    FaJava,
    FaPython,
    FaGithub,
    FaLinkedin,
    FaMedium,
    FaInstagram,
} from "react-icons/fa";
import {
    SiGooglecloud,
    SiSpringboot,
    SiDjango,
    SiFlutter,
    SiDart,
    SiPostgresql,
    SiSentry,
    SiRedis,
} from "react-icons/si";

// --- Site ---------------------------------------------------------------------
// Canonical origin used for metadataBase, canonical URLs, sitemap, robots, and
// JSON-LD. Override with NEXT_PUBLIC_SITE_URL in the environment.
// NOTE: update the fallback below to the final production domain.
export const siteUrl = (
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://prasetyo-adi.vercel.app"
).replace(/\/$/, "");

// --- Navigation ---------------------------------------------------------------
export const navLinks = [
    { name: "Home", hash: "#home" },
    { name: "About", hash: "#about" },
    { name: "Experience", hash: "#experience" },
    { name: "Projects", hash: "#projects" },
    { name: "Skills", hash: "#skills" },
    { name: "Articles", hash: "#articles" },
    { name: "Contact", hash: "#contact" },
] as const;

export type SectionName = (typeof navLinks)[number]["name"];

// --- Profile ------------------------------------------------------------------
export const profile: Profile = {
    name: "Prasetyo Adi Wijonarko",
    shortName: "Adi",
    role: "Fullstack Developer",
    location: "Universitas Indonesia · Fasilkom",
    headline: "Final-year Computer Science student with hands-on professional experience building full-stack systems, including enterprise applications and AI-integrated mobile applications",
    about: [
        "Comfortable working across multiple stacks and experienced in end-to-end development, from design to deployment and CI/CD.Seeking a full-stack or backend engineering role where I can apply this experience to build reliable, production-ready systems"
    ],
    email: "adidudadi02@gmail.com",
    avatar: myPhoto,
};

// --- Social links -------------------------------------------------------------
export const socials: SocialLink[] = [
    { name: "GitHub", href: "https://github.com/prasetyoadii", icon: FaGithub },
    {
        name: "LinkedIn",
        href: "https://www.linkedin.com/in/prasetyo-adi-wijonarko/",
        icon: FaLinkedin,
    },
    { name: "Medium", href: "https://medium.com/@prasetyowijanarko6", icon: FaMedium },
    { name: "Instagram", href: "http://instagram.com/prstadi26/", icon: FaInstagram },
];

// --- Experience ---------------------------------------------------------------
export const experiences: Experience[] = [
    {
        role: "Fullstack Developer Intern",
        organization: "Magna Solusi Indonesia",
        period: "Aug 2025 - Mar 2026",
        points: [
            "Developed an e-procurement system, a school management system, and an HRIS (Human Resource Information System) using .NET, Angular, Java, and PostgreSQL.",
            "Developed master data module for an e-procurement system using .NET and Angular.",
            "Refactored and fixed existing code in a school management system using Java and Angular.",
            "Developed HRIS (Human Resource Information System) using Java and Angular."
        ],
    },
    {
        role: "Full Stack Developer",
        organization: "Dulang Smart Warehouse",
        period: "Feb 2025 – Jun 2025",
        points: [
            "Developed a mobile inventory system application for an e-commerce company (Dulang) to manage and monitor stocks of items intended for sale.",
            "Built the backend using Django REST Framework and the frontend with Flutter",
        ],
    },
    {
        role: "Orientation Committee",
        organization: "Fasilkom UI — New Student Orientation",
        period: "2024",
        points: [
            "Organized the new-student orientation at Fasilkom UI.",
            "Designed and evaluated orientation assignments.",
        ],
    },
];

// --- Projects -----------------------------------------------------------------
export const projects: Project[] = [
    {
        title: "SeniorCare",
        type: "Mobile",
        tagline: "Gerontechnology platform for older adults & caregivers",
        description:
            "Built a gerontechnology mobile application to support caregivers and elderly users in daily activities, featuring scheduling, elderly condition logging, data export, light games, and a community forum.",
        highlights: [
            "Schedule & reminder automation with push notifications",
            "Health logging and caregiver monitoring dashboard",
            "SOS emergency alerts and community forum",
            "AI voice assistant: STT → LLM function calling → TTS",
            "Layered & clean architecture for maintainability",
            "CI/CD pipeline with GitLab CI, Docker, and VPS deployment",
        ],
        tags: [
            "FastAPI",
            "Flutter",
            "PostgreSQL",
            "Redis",
            "Celery",
            "FCM",
            "Google OAuth",
            "AI Voice Assistant",
            "Docker",
        ],
        featured: true,
        videoUrl: "https://www.youtube.com/watch?v=Hk-NmEhTSo8",
    },
    {
        title: "Dulang Smartwarehouse App",
        type: "Mobile",
        tagline: "Smart-warehouse inventory, built for a real client",
        description:
            "A mobile app for a smart warehouse system, featuring inventory management and real-time stock verification — built and shipped for a real client.",
        tags: ["Dart", "Flutter", "Python", "Django", "PostgreSQL", "Firebase", "Google App Engine"],
        imageUrl: [dulangImg, dulangProductImg, dulangVerifyImg],
        github: "https://github.com/dulang-sirkular/surveyor-mobile-app",
    },
    {
        title: "Snackventure",
        type: "Website",
        tagline: "Snack-subscription store with TDD & microservices",
        description:
            "A snack e-commerce site where users subscribe to snack boxes. Built with Test-Driven Development, monitoring, and a microservice architecture.",
        tags: ["React", "Spring Boot", "PostgreSQL", "GCP", "Supabase"],
        imageUrl: [snackventureImg],
        github: "https://github.com/advpro-a12",
    },
    {
        title: "Medium Clone",
        type: "Website",
        tagline: "A Medium-style publishing app in Laravel",
        description: "A Medium clone built with Laravel — writing, reading, and publishing in a clean reading experience.",
        tags: ["Laravel", "PHP", "SQLite", "Tailwind"],
        imageUrl: [mediumCloneImg],
        github: "https://github.com/prasetyoadii/medium-clone",
    },
    {
        title: "Snapmosphere Prototype",
        type: "Design",
        tagline: "Disaster-alert prototype with evacuation info",
        description:
            "A prototype that provides natural-disaster alerts, evacuation site information, and educational content based on a user's registered location.",
        tags: ["Figma"],
        imageUrl: [snapmosphereImg],
        github:
            "https://www.figma.com/proto/CoYKK70WssNY2CA620d7JB/Kelas-D_Template-4_Screenshot?page-id=10%3A2&node-id=152-2408&p=f&viewport=48%2C300%2C0.13&t=adv6KBz3K8ZdpI2d-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=152%3A12110&show-proto-sidebar=1",
    },
];

// --- Skills -------------------------------------------------------------------
export const skillGroups: SkillGroup[] = [
    {
        label: "Frontend",
        skills: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Flutter", "Dart"],
    },
    {
        label: "Backend",
        skills: ["FastAPI", "Python", "Django", "Spring Boot", "Java", "Laravel · PHP", "REST APIs"],
    },
    {
        label: "Data & Infra",
        skills: ["PostgreSQL", "Redis", "Celery", "Google Cloud", "Sentry"],
    },
    {
        label: "AI & Integration",
        skills: ["Voice Assistant (STT · LLM · TTS)", "Firebase Cloud Messaging", "Google OAuth"],
    },
];

export const techIcons: TechIcon[] = [
    { icon: FaGithub, name: "GitHub", color: "#181717" },
    { icon: FaJava, name: "Java", color: "#007396" },
    { icon: SiSpringboot, name: "Spring Boot", color: "#6DB33F" },
    { icon: FaPython, name: "Python", color: "#3776AB" },
    { icon: SiDjango, name: "Django", color: "#092E20" },
    { icon: SiDart, name: "Dart", color: "#0175C2" },
    { icon: SiFlutter, name: "Flutter", color: "#02569B" },
    { icon: SiPostgresql, name: "PostgreSQL", color: "#336791" },
    { icon: SiRedis, name: "Redis", color: "#DC382D" },
    { icon: FaPhp, name: "PHP", color: "#777BB4" },
    { icon: FaLaravel, name: "Laravel", color: "#FF2D20" },
    { icon: FaReact, name: "React", color: "#61DAFB" },
    { icon: SiSentry, name: "Sentry", color: "#362D59" },
    { icon: SiGooglecloud, name: "GCP", color: "#4285F4" },
    { icon: FaFigma, name: "Figma", color: "#F24E1E" },
];

// --- Articles -----------------------------------------------------------------
export const articles: ArticleItem[] = [
    {
        title: "Monitoring Your Project with Sentry",
        url: "https://medium.com/@prasetyowijanarko6/monitoring-your-project-with-sentry-061c1512fd28",
        imageUrl: monitoringImg,
        description:
            "Learn how to monitor Django projects with Sentry — from setup to tracking real issues in production.",
    },
    {
        title: "Management Manusia di Dalam Sebuah Tim",
        url: "https://medium.com/@prasetyowijanarko6/management-manusia-di-dalam-sebuah-tim-7a24129e9d0a",
        imageUrl: manageHumanImg,
        description:
            "A reflection on how I drove better communication and performance in every sprint as a proactive team member.",
    },
    {
        title: "Teamwork With Tools",
        url: "https://medium.com/@prasetyowijanarko6/teamwork-with-tools-09587410f453",
        imageUrl: teamworkImg,
        description: "The tools I rely on to build projects smoothly with a team.",
    },
    {
        title: "Secure Your Mobile App — Praktik Secure Programming di Proyek Flutter",
        url: "https://medium.com/@prasetyowijanarko6/secure-your-mobile-app-praktik-secure-programming-di-proyek-flutter-ace6c4843d96",
        imageUrl: secureMobileImg,
        description: "How I implemented secure programming practices in a previous Flutter project.",
    },
    {
        title: "Quality Assurance: Static Analysis",
        url: "https://medium.com/@prasetyowijanarko6/quality-assurance-static-analysis-e92c6fa4b8cb",
        imageUrl: qualityAssuranceImg,
        description:
            "An overview of quality assurance with static analysis using SonarCloud — setup, code reviews, and CI/CD integration.",
    },
    {
        title: "Membangun UI yang Konsisten dengan Reusable Component",
        url: "https://medium.com/@prasetyowijanarko6/membangun-ui-yang-konsisten-dengan-reusable-component-c359aea47f75",
        imageUrl: reusableComponentImg,
        description:
            "How to create reusable UI components in Flutter for better consistency, scalability, and teamwork.",
    },
    {
        title: "Unit Testing di Flutter: Teknik Stub dan Mock",
        url: "https://medium.com/@prasetyowijanarko6/unit-test-dengan-mock-fb1d59b106e4",
        imageUrl: unitTestingImg,
        description:
            "Learn how to test your Flutter code using stubs and mocks for reliable, isolated unit testing.",
    },
    {
        title: "TDD in Software Engineering",
        url: "https://medium.com/@prasetyowijanarko6/tdd-in-software-engineering-15c5ba3dd385",
        imageUrl: tddImg,
        description:
            "An overview of my experience applying Test-Driven Development in Flutter to build a mobile app with high code quality.",
    },
    {
        title: "Penerapan Best Practice dalam Pemrograman",
        url: "https://medium.com/@prasetyowijanarko6/solid-principle-17a44a5378ed",
        imageUrl: bestPracticeImg,
        description:
            "Best practices in software development using SOLID, OOP, and reactive programming to improve code quality and scalability.",
    },
    {
        title: "Heuristic Evaluation and UI Design Enhancement",
        url: "https://medium.com/@prasetyowijanarko6/designing-a-ui-e0cc2e2bf0f1",
        imageUrl: heuristicEvalImg,
        description: "A guide to enhancing UI design using the 10 usability heuristics for interface evaluation.",
    },
];
