import type { Receipt } from "../types";

/* The email address is deliberately not written as a literal anywhere that
   ships in the HTML — see components/Email.tsx. Splitting it here means a
   scraper reading the bundle has to execute the join to get an address. */
export const emailParts = ["isaacfrett2", "gmail.com"] as const;

export const profile = {
    name: "Isaac Frett",
    role: "Software Engineer",
    /* The thesis, and it is literally true of every project below: the quant
       platform was built to reject its own candidates, Starsplit's levels are
       bot-measured rather than guessed, and Choice Bible's site makes no
       third-party request because its privacy policy says it doesn't. */
    headline: "I build systems that try to prove themselves wrong.",
    lede:
        "Self-taught engineer, usually the primary technical owner — backend and data platforms at enterprise " +
        "scale, applied financial ML built to reject its own results, and a solo iOS studio. " +
        "Every claim on this page links to the thing that settles it.",
    location: "Daytona Beach, FL",
    github: "https://github.com/isaacfrett",
    githubHandle: "github.com/isaacfrett",
    linkedin: "https://www.linkedin.com/in/isaacfrett",
    linkedinHandle: "linkedin.com/in/isaacfrett",
    resume: "/Isaac_Frett_Resume.pdf",
    site: "https://isaacfrett.com",
    /* Remote is established once in the hero eyebrow, so this says the part the
       eyebrow doesn't: that I'm looking, and that there's no visa question. */
    availability: "Open to new roles · Remote only · US citizen",
} as const;

/**
 * The hero ledger. These are the claims worth making, each paired with the
 * artefact that settles it. Anything without a receipt does not belong here.
 */
export const ledger: Receipt[] = [
    {
        label: "Financial-ML platform — research through live execution",
        value: "architecture, public",
        href: "https://github.com/isaacfrett/quant-public",
    },
    {
        label: "Python services and ETL behind executive reporting",
        value: "3 years, Lowe's",
        href: "#experience",
    },
    {
        label: "iOS applications built, submission in progress",
        value: "3 products",
        href: "#work",
    },
    {
        label: "Applied ML — prop models, clustering, feature pipelines",
        value: "statlume-api",
        href: "https://github.com/isaacfrett/statlume-api",
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
        items: ["Python", "JavaScript", "TypeScript", "Java", "SQL", "C++", "GDScript", "Bash / Shell"],
    },
    {
        group: "Back-end",
        items: ["FastAPI", "Flask", "Django", "Microservices", "REST APIs", "ETL pipelines", "SQLAlchemy"],
    },
    {
        group: "Front-end",
        items: ["React", "TypeScript", "Vite", "Tailwind", "Responsive layout", "Accessibility"],
    },
    {
        group: "ML libraries",
        items: [
            "LightGBM",
            "scikit-learn",
            "TensorFlow / Keras",
            "PyTorch",
            "NumPy",
            "SciPy",
            "pandas",
            "PyArrow / Parquet",
        ],
    },
    {
        group: "ML methodology",
        items: [
            "Walk-forward CV, purge + embargo",
            "Combinatorial purged CV",
            "Meta-labeling (side/meta)",
            "Triple-barrier labeling",
            "Isotonic calibration",
            "Deflated Sharpe",
            "Probability of backtest overfitting",
            "Feature-leakage auditing",
            "Cost-aware model gating",
        ],
    },
    {
        group: "Databases & cloud",
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
        ],
    },
];
