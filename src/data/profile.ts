import type { Receipt } from "../types";

export const profile = {
    name: "Isaac Frett",
    role: "Software Engineer",
    /* The thesis, and it is literally true of every project below: the quant
       platform is built to reject its own candidates, Starsplit's levels are
       bot-measured rather than guessed, and Choice Bible's site makes no
       third-party request because its privacy policy says it doesn't. */
    headline: "I build systems that try to prove themselves wrong.",
    lede:
        "Self-taught engineer, 5+ years, usually the primary technical owner — machine-learning research " +
        "infrastructure, production APIs and dashboards, and iOS products taken from idea to submission. " +
        "Every claim on this page links to the thing that settles it.",
    location: "Daytona Beach, FL",
    email: "isaacfrett2@gmail.com",
    phone: "563-349-0624",
    phoneHref: "tel:+15633490624",
    github: "https://github.com/isaacfrett",
    githubHandle: "github.com/isaacfrett",
    linkedin: "https://www.linkedin.com/in/isaacfrett",
    linkedinHandle: "linkedin.com/in/isaacfrett",
    resume: "/Isaac_Frett_Resume.pdf",
    site: "https://isaacfrett.com",
    availability: "Open to software engineering roles — in person or remote",
} as const;

/**
 * The hero ledger. These are the claims worth making, each paired with the
 * artefact that settles it. Anything without a receipt does not belong here.
 */
export const ledger: Receipt[] = [
    {
        label: "ML trading platform, live broker execution",
        value: "architecture, public",
        href: "https://github.com/isaacfrett/quant-public",
    },
    {
        label: "Executive dashboards built at Lowe's",
        value: "3 years, résumé",
        href: "/Isaac_Frett_Resume.pdf",
    },
    {
        label: "iOS products built and in testing",
        value: "3 live sites",
        href: "#work",
    },
    {
        label: "Full-stack app — auth, API, tested client",
        value: "2 repositories",
        href: "https://github.com/isaacfrett/stockquote",
    },
    {
        label: "B.S. Software Development, 4.0 GPA",
        value: "Bellevue University",
        href: "#experience",
    },
];

export const skills: { group: string; items: string[] }[] = [
    {
        group: "Languages",
        items: ["Python", "JavaScript", "TypeScript", "Java", "SQL", "GDScript", "Bash / Shell", "C"],
    },
    {
        group: "Front-end",
        items: ["React", "TypeScript", "Vite", "Tailwind", "Responsive layout", "Accessibility"],
    },
    {
        group: "Back-end",
        items: ["FastAPI", "Flask", "Django", "SQLAlchemy", "REST APIs", "JWT auth", "Microservices"],
    },
    {
        group: "Data & ML",
        items: [
            "LightGBM",
            "TensorFlow",
            "PyTorch",
            "scikit-learn",
            "pandas",
            "NumPy",
            "SciPy",
            "Parquet / PyArrow",
            "ETL pipelines",
        ],
    },
    {
        group: "Database & cloud",
        items: ["PostgreSQL", "MySQL", "SQLite", "AWS", "Azure", "GCP"],
    },
    {
        group: "DevOps & tools",
        items: [
            "Git",
            "CI/CD (Jenkins)",
            "Docker / Podman",
            "Kubernetes",
            "systemd",
            "Grafana",
            "Power BI",
            "pytest",
            "Poetry",
        ],
    },
];
