/* Shared shapes for the site's content. Content lives in src/data — these
   types are the contract those files fill in. */

/** The four hiring tracks the work is filtered by. */
export type Track = "frontend" | "fullstack" | "ml" | "ios";

export const TRACK_LABEL: Record<Track, string> = {
    frontend: "Front-end",
    fullstack: "Full-stack",
    ml: "Data / ML",
    ios: "iOS / product",
};

/**
 * A receipt is the point of the site: a claim is only worth making if you can
 * hand someone the thing that settles it. `href` is what makes it a receipt
 * rather than an assertion.
 */
export interface Receipt {
    label: string;
    value: string;
    href?: string;
}

/** Status drives the accent colour, so it has to mean something precise. */
export type ProjectStatus =
    | "live" /* running in public right now */
    | "testing" /* built, in testing, not yet released */
    | "private-source" /* real and running, source not public */
    | "archived"; /* finished, left as-is */

export interface Highlight {
    claim: string;
    detail: string;
}

export interface Shot {
    src: string;
    alt: string;
    caption: string;
}

export interface Project {
    id: string;
    name: string;
    tagline: string;
    period: string;
    role: string;
    status: ProjectStatus;
    tracks: Track[];
    stack: string[];
    /** Two or three sentences. Shown collapsed. */
    summary: string;
    /** Shown when the row is opened. */
    highlights: Highlight[];
    receipts: Receipt[];
    shots?: Shot[];
    /** Ranks the row within a track. Lower sorts first. */
    weight: number;
}

export interface Job {
    id: string;
    org: string;
    title: string;
    start: string;
    end: string;
    location?: string;
    summary: string;
    points: string[];
    stack?: string[];
}

export interface Credential {
    id: string;
    institution: string;
    award: string;
    detail?: string;
    period: string;
}
