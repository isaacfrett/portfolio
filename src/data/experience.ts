import type { Credential, Job } from "../types";

/* Straight from the résumé. Employment claims are attested by an employer and a
   résumé rather than by a public artefact, so they get those as their receipt
   instead of a repository link — see the note in Experience.tsx. */

export const jobs: Job[] = [
    {
        id: "lead-mobile",
        org: "Mobile App Development",
        title: "Lead Software Engineer",
        start: "January 2026",
        end: "Present",
        summary:
            "Building and shipping multi-platform mobile applications for iPhone and iPad as the primary technical owner — " +
            "design, architecture, platform integration and store submission.",
        points: [
            "Creating applications for multi-platform mobile devices on Apple iOS, including iPhone and iPad.",
            "Designing mobile UI layouts, front-end graphics and project architectures across multiple applications.",
            "Integrating mobile functionality including push notifications, in-app purchases and AdMob SDKs via Godot C++ modules and community plugins.",
        ],
        stack: ["Godot", "GDScript", "C++ modules", "iOS", "iPadOS", "StoreKit", "AdMob"],
    },
    {
        id: "lowes-swe",
        org: "Lowe's Home Improvement",
        title: "Software Engineer",
        start: "January 2023",
        end: "December 2025",
        location: "Charlotte, NC",
        summary:
            "Built the Python services and data pipelines behind executive reporting, owning them from architecture " +
            "through deployment and ongoing maintenance.",
        points: [
            "Designed and implemented scalable Python APIs (Flask, FastAPI) and microservices supporting over 500 internal employees, with emphasis on C-level executive reporting.",
            "Owned the architecture and maintenance of ETL pipelines processing roughly 150GB of data monthly, integrating databases into analytical models for React executive dashboards that informed $15M+ in business decisions.",
            "Developed automations around security software for threat detection, asset patching, firewall protocols and compliance reporting.",
        ],
        stack: ["Python", "Flask", "FastAPI", "React", "ETL", "PostgreSQL", "Microservices"],
    },
    {
        id: "lowes-msa",
        org: "Lowe's Home Improvement",
        title: "Merchandising Service Associate",
        start: "April 2022",
        end: "January 2023",
        location: "Coralville, IA",
        summary: "Coordinated in-store merchandising teams, and solved a hardware problem nobody had asked me to solve.",
        points: [
            "Coordinated teams constructing physical marketing displays for branded items and products that directly impacted store revenue.",
            "3D-printed a pricing sign-adapter outside of normal working hours, letting existing electronic signage be reused across any product display.",
        ],
    },
];

export const education: Credential[] = [
    {
        id: "bellevue",
        institution: "Bellevue University",
        award: "B.S. Software Development",
        detail: "Graduated with a 4.0 GPA. Cybersecurity Club; Phi Theta Kappa Honors Society.",
        period: "2022 — 2024",
    },
];

/** The one-line framing above the timeline. */
export const experienceLede =
    "Self-taught engineer with 5+ years leading complex systems from architecture through deployment and ongoing " +
    "improvement, as the primary technical owner.";
