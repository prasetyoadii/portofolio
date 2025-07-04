import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";
import dulangImg from "@/public/dulang.png";
import mediumcloneImg from "@/public/medium-clone.png";
import snackventureImg from "@/public/snackventure.png";
import snapmosphereImg from "@/public/snapmosphere.png";
import monitoringImg from "@/public/monitoring.png";
import managehumanImg from "@/public/manage-human.png";
import teamworkImg from "@/public/teamwork-tools.png";
import securemobileImg from "@/public/secure-programming.png";
import qualityassuranceImg from "@/public/quality-assurance.png";
import reusablecomponentImg from "@/public/reusabe-component.png";
import unitTestingImg from "@/public/stub-mock.png";
import tddImg from "@/public/tdd.png";
import bestpracticeImg from "@/public/best-practice.png";
import designingImg from "@/public/heuristic-eval.png";

import {
    FaReact,
    FaLaravel,
    FaPhp,
    FaFigma,
    FaJava,
    FaPython,
    FaGithub
} from 'react-icons/fa';
import {
    SiGooglecloud,
    SiSpringboot,
    SiDjango,
    SiFlutter,
    SiDart,
    SiPostgresql,
    SiSentry
} from 'react-icons/si';
import { IconType } from 'react-icons';

export const links = [
    {
        name: "Home",
        hash: "#home",
    },
    {
        name: "About",
        hash: "#about",
    },
    {
        name: "Projects",
        hash: "#projects",
    },
    {
        name: "Articles",
        hash: "#articles",
    },
    {
        name: "Experiences",
        hash: "#experiences",
    },
    {
        name: "Contact",
        hash: "#contact",
    },
] as const;

export const experiencesData = [
    {
        title: "Akademis PMB",
        description:
            "Participated in the New Student Orientation Committee at the Faculty of Computer Science, University of Indonesia. Responsible for creating and evaluating orientation assignments.",
        date: "2024",
    },
    {
        title: "Dulang Smart Warehouse",
        description:
            "Worked as a Full Stack Developer on a mobile application for a smart warehouse system, focusing on inventory management and real-time data synchronization.",
        date: "February 2025 - June 2025",
    },
] as const;

export const projectsData = [
    {
        title: "Dulang Smartwarehouse App",
        type: "Mobile",
        description:
            "Developed a mobile app for a smart warehouse system, featuring inventory management and built for a real client",
        tags: ["Dart", "Flutter", "Pyhton", "Django", "PostgreSQL", "Firebase", "Google App Engine"],
        imageUrl: [dulangImg],
        github: "https://github.com/dulang-sirkular/surveyor-mobile-app"
    },
    {
        title: "Medium Clone",
        type: "Website",
        description:
            "a Medium clone built using Laravel PHP.",
        tags: ["Laravel", "PHP", "SQLite", "Tailwind"],
        imageUrl: [mediumcloneImg],
        github: "https://github.com/prasetyoadii/medium-clone"
    },
    {
        title: "Snapmosphere Prototype",
        type: "Mobile",
        description:
            "Snapmosphere is a prototype application that provides natural disaster alerts, evacuation site information, and educational content based on registered user locations.",
        tags: ["Figma"],
        imageUrl: [snapmosphereImg],
        github: ""
    },
    {
        title: "Snackventure",
        type: "Website",
        description:
            "A snack e-commerce website where users can subscribe to snack boxes. The system is built using Test-Driven Development (TDD), with monitoring in place and a microservice architecture.",
        tags: ["React", "Springboot", "PostgreeSQL", "GCP", "Supabase"],
        imageUrl: [snackventureImg],
        github: "https://github.com/advpro-a12"
    },
] as const;

export const articlesData = [
    {
        title: "Monitoring Your Project with Sentry",
        url: "https://medium.com/@prasetyowijanarko6/monitoring-your-project-with-sentry-061c1512fd28",
        imageUrl: monitoringImg,
        description: "Learn how to monitor Django projects with Sentry—from setup to tracking real issues in production"
    },
    {
        title: "Management Manusia di Dalam Sebuah Tim",
        url: "https://medium.com/@prasetyowijanarko6/management-manusia-di-dalam-sebuah-tim-7a24129e9d0a",
        imageUrl: managehumanImg,
        description: "A reflection on how I drove better communication and performance in every sprint as a proactive team member."
    },
    {
        title: "Teamwork With Tools",
        url: "https://medium.com/@prasetyowijanarko6/teamwork-with-tools-09587410f453",
        imageUrl: teamworkImg,
        description: "The tools I rely on to build projects smoothly with a team."
    },
    {
        title: "Secure Your Mobile App — Praktik Secure Programming di Proyek Flutter",
        url: "https://medium.com/@prasetyowijanarko6/secure-your-mobile-app-praktik-secure-programming-di-proyek-flutter-ace6c4843d96",
        imageUrl: securemobileImg,
        description: "How I implemented secure programming practices in my previous flutter project"
    },
    {
        title: "Quality Assurance: Static Analysis",
        url: "https://medium.com/@prasetyowijanarko6/quality-assurance-static-analysis-e92c6fa4b8cb",
        imageUrl: qualityassuranceImg,
        description: "An overview of quality assurance with static analysis using SonarCloud. How to set it up, use it for code reviews, and integrate it into your CI/CD pipeline"
    },
    {
        title: "Membangun UI yang Konsisten dengan Reusable Component",
        url: "https://medium.com/@prasetyowijanarko6/membangun-ui-yang-konsisten-dengan-reusable-component-c359aea47f75",
        imageUrl: reusablecomponentImg,
        description: "How to create reusable UI components in Flutter for better consistency, scalability, and teamwork."
    },
    {
        title: "Unit Testing di Flutter: Teknik Stub dan Mock",
        url: "https://medium.com/@prasetyowijanarko6/unit-test-dengan-mock-fb1d59b106e4",
        imageUrl: unitTestingImg,
        description: "Learn how to test your Flutter code using stubs and mocks for reliable, isolated unit testing."
    },
    {
        title: "TDD in Software Engineering",
        url: "https://medium.com/@prasetyowijanarko6/tdd-in-software-engineering-15c5ba3dd385",
        imageUrl: tddImg,
        description: "An overview of my experience applying Test-Driven Development (TDD) in Flutter to build a mobile app with high code quality."
    },
    {
        title: "Penerapan Best Practice dalam Pemrograman",
        url: "https://medium.com/@prasetyowijanarko6/solid-principle-17a44a5378ed",
        imageUrl: bestpracticeImg,
        description: "Best practices in software development using SOLID, OOP, and reactive programming to improve code quality and scalability."
    },
    {
        title: "Heuristic Evaluation and UI Design Enhancement",
        url: "https://medium.com/@prasetyowijanarko6/designing-a-ui-e0cc2e2bf0f1",
        imageUrl: designingImg,
        description: "A guide to enhancing UI design using the 10 usability heuristics for user interface evaluation."
    }
] as const;


export interface TechIcon {
    icon: IconType;
    name: string;
    color: string;
}

export const techIcons: TechIcon[] = [
    { icon: FaGithub, name: "GitHub", color: "#181717" },
    { icon: FaJava, name: "Java", color: "#007396" },
    { icon: SiSpringboot, name: "Spring Boot", color: "#6DB33F" },
    { icon: FaPython, name: "Python", color: "#3776AB" },
    { icon: SiDjango, name: "Django", color: "#092E20" },
    { icon: SiDart, name: "Dart", color: "#0175C2" },
    { icon: SiFlutter, name: "Flutter", color: "#02569B" },
    { icon: SiPostgresql, name: "PostgreSQL", color: "#336791" },
    { icon: FaPhp, name: "PHP", color: "#777BB4" },
    { icon: FaLaravel, name: "Laravel", color: "#FF2D20" },
    { icon: FaReact, name: "React", color: "#61DAFB" },
    { icon: SiSentry, name: "Sentry", color: "#362D59" },
    { icon: SiGooglecloud, name: "GCP", color: "#4285F4" },
    { icon: FaFigma, name: "Figma", color: "#F24E1E" },
];
