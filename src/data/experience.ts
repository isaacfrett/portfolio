import type { Credential, Job } from "../types";

/* From the master resume at ~/jobs/profile/master_resume.md. Employment claims
   are attested by an employer and a resume rather than by a public artefact, so
   they get those as their receipt — see the note in Experience.tsx.

   The studio is named rather than described. Per the master resume's own
   framing note: an unnamed "Mobile App Development" entry reads as a euphemism,
   a named company reads as end-to-end ownership. */

export const jobs: Job[] = [
    {
        id: "if-development",
        org: "IF Development",
        title: "Founder & Lead Software Engineer",
        start: "January 2026",
        end: "Present",
        location: "Remote",
        summary:
            "Founded and operate a solo iOS studio, owning product direction, architecture, implementation and the " +
            "release process end to end.",
        points: [
            "Built three multi-platform iOS applications for iPhone and iPad, designing the UI layouts, front-end graphics and project architecture for each. App Store submission in progress.",
            "Integrated push notifications, in-app purchases and AdMob SDKs through custom Godot C++ modules and community plugins.",
            "Set up the release pipeline end to end — certificates, provisioning profiles, code signing, build automation and App Store Connect submission.",
        ],
        stack: ["Godot", "C++", "GDScript", "iOS", "StoreKit / IAP", "AdMob", "App Store Connect"],
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
            "Designed and implemented scalable Python APIs (Flask, FastAPI) and microservices supporting 500+ internal employees, with emphasis on C-level executive reporting.",
            "Owned the architecture and maintenance of ETL pipelines processing roughly 150GB of data monthly, integrating databases into analytical models for React executive dashboards that informed $15M+ in business decisions.",
            "Developed automations around security software for threat detection, asset patching, firewall protocols and compliance reporting.",
        ],
        stack: ["Python", "Flask", "FastAPI", "React", "SQL", "ETL", "Microservices"],
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
            "Coordinated teams constructing physical marketing displays for branded products that directly impacted store revenue.",
            "3D-printed a pricing sign-adapter outside normal working hours, letting existing electronic signage be reused across any product display.",
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
    "Self-taught software engineer with 5+ years writing code, and the primary technical owner on most of what I've " +
    "built — from architecture through deployment and the maintenance after it.";
