import type { IconType } from "react-icons";
import type { StaticImageData } from "next/image";

export interface NavLink {
    name: string;
    hash: string;
}

export interface SocialLink {
    name: string;
    href: string;
    icon: IconType;
}

export interface Profile {
    name: string;
    shortName: string;
    role: string;
    location: string;
    headline: string;
    // subheadline: string;
    about: string[];
    email: string;
    avatar: StaticImageData;
}

export interface Experience {
    role: string;
    organization: string;
    period: string;
    points: string[];
}

export type ProjectType = "Mobile" | "Website" | "Design";

export interface Project {
    title: string;
    type: ProjectType;
    tagline: string;
    description: string;
    highlights?: string[];
    tags: string[];
    imageUrl?: StaticImageData[];
    github?: string;
    demo?: string;
    videoUrl?: string;
    featured?: boolean;
}

export interface ArticleItem {
    title: string;
    url: string;
    imageUrl: StaticImageData;
    description: string;
}

export interface SkillGroup {
    label: string;
    skills: string[];
}

export interface TechIcon {
    icon: IconType;
    name: string;
    color: string;
}
