import type { Project } from "../types";

import dashResearch from "../assets/quant-research.png";
import dashHealth from "../assets/quant-health.png";

/* Every figure below is drawn from the project's own public documentation or
   repository. Nothing here is rounded up.

   Two standing accuracy constraints, carried over from the master resume:
     · The iOS apps are built and in submission. Never "shipped", "published"
       or "launched", and never a download, rating or revenue figure.
     · Statlume's predictive accuracy was never measured. Describe what was
       built, never how well it performed. */

export const projects: Project[] = [
    {
        id: "quant",
        name: "Quantitative Futures Trading Platform",
        tagline: "An end-to-end research and execution engine built to reject its own bad ideas.",
        period: "Archived",
        role: "Sole architect and engineer — research, execution, infrastructure, dashboard",
        status: "archived",
        tracks: ["ml", "fullstack", "frontend"],
        weight: 0,
        stack: [
            "Python 3.11",
            "LightGBM",
            "scikit-learn",
            "pandas",
            "NumPy",
            "Parquet / PyArrow",
            "FastAPI",
            "React",
            "TypeScript",
            "systemd",
            "pytest",
        ],
        summary:
            "Discovered, validated and deployed machine-learning trading strategies under strict anti-overfitting " +
            "controls, then ran them against a broker API with hard risk governance. Models trained on liquid CME macro " +
            "futures — Nasdaq, S&P, gold, crude, silver, copper — and executed on their micro equivalents so positions " +
            "could be sized precisely. The design goal was honesty over optimism: every layer existed to reject " +
            "strategies that only looked good by luck. No longer running; the architecture write-up is public and the " +
            "implementation stays private.",
        highlights: [
            {
                claim: "700+ engineered features, every one lookahead-safe",
                detail:
                    "A modular pipeline of 50+ builders spanning volatility, momentum, microstructure, multi-timeframe " +
                    "context, regime classification and cross-asset spreads. Lookahead safety was a hard invariant — " +
                    "lookback-only windows, backward-direction merge_asof, and an automated auditor that cross-checked " +
                    "each feature's first-valid index against the label horizon. Leakage was a release-blocking defect.",
            },
            {
                claim: "Walk-forward validation with purge and embargo",
                detail:
                    "Purge gaps of at least the label horizon and embargoes of at least the feature lookback removed the " +
                    "label-overlap and window leakage that naive cross-validation hides. Folds spanned the entire " +
                    "available record so estimates weren't biased toward one regime, and combinatorial purged CV gave " +
                    "distribution-level estimates of out-of-sample performance.",
            },
            {
                claim: "Two-stage side/meta models with calibrated probabilities",
                detail:
                    "A side model predicted direction; a meta model decided whether to act at all, learning to suppress " +
                    "the side model's low-confidence calls. Predicted probabilities were isotonically calibrated before " +
                    "they reached position sizing, so edge estimates and bet sizes stayed on the same scale.",
            },
            {
                claim: "A promotion funnel built to reject",
                detail:
                    "L1 screened signal quality — information coefficient and its stability, directional skill, fold " +
                    "coverage, decile spread, degeneracy checks. L2 screened economics — net-of-cost Sharpe, deflated " +
                    "Sharpe to correct for the number of trials, and probability of backtest overfitting. Commissions " +
                    "and slippage were netted before any statistic was computed, so the gates judged tradable edge " +
                    "rather than paper edge. Survivors entered a maturity lifecycle rather than going straight to " +
                    "capital.",
            },
            {
                claim: "Backtest-to-live parity as a shipping gate",
                detail:
                    "Trailing stops, breakeven logic and session flatten had to behave identically in simulation and in " +
                    "live execution, verified by a continuous parity suite. If they diverged, the change didn't ship.",
            },
            {
                claim: "Risk governance with an instant kill switch",
                detail:
                    "Per-trade risk caps, concurrent-position limits, daily loss limits, trailing max-loss tracking, " +
                    "correlation-aware exposure control, and automatic halts on drawdown or consecutive-loss " +
                    "thresholds. A file-based kill switch halted all trading immediately.",
            },
            {
                claim: "Operated by an agent fleet across role-separated servers",
                detail:
                    "Research, staging and local nodes ran under systemd so heavy training never competed with " +
                    "execution. A fleet of focused agents owned data-quality auditing, model diagnosis, gate " +
                    "calibration, execution-parity checking and incident response — each concern small and " +
                    "independently testable, with an audit trail of every automated decision.",
            },
        ],
        receipts: [
            {
                label: "Architecture write-up",
                value: "quant-public",
                href: "https://github.com/isaacfrett/quant-public",
            },
            { label: "Implementation", value: "private" },
            { label: "Status", value: "archived" },
        ],
        shots: [
            {
                src: dashResearch,
                alt:
                    "Research dashboard showing a strategy-class screener ranked by score, with columns for ICIR, " +
                    "information coefficient, condition percentage and mean return, beside a per-model feature " +
                    "importance breakdown.",
                caption:
                    "Research view — the strategy-class screener with per-class signal-quality scores, beside the " +
                    "per-model feature-importance breakdown. Screenshots are sanitised: account identifiers, balances " +
                    "and hostnames are redacted.",
            },
            {
                src: dashHealth,
                alt:
                    "System health dashboard showing CPU, memory and disk meters for three servers, plus tables of " +
                    "node agents, research workers and a data collector with uptime and status.",
                caption: "System health — resource and service monitoring across the research, staging and local nodes.",
            },
        ],
    },

    {
        id: "choicebible",
        name: "Choice Bible",
        tagline: "A Bible reader that puts the typography in the reader's hands.",
        period: "2026",
        role: "Solo — app, site, App Store submission",
        status: "testing",
        tracks: ["ios", "frontend"],
        weight: 1,
        stack: ["iOS", "iPadOS", "macOS", "iCloud sync", "Full-text search", "HTML", "CSS"],
        summary:
            "A Bible reader for iPhone, iPad and Mac built around real book typography — twelve typefaces, justified " +
            "text, hyphenation, first-line and hanging indents. Three public-domain translations ship in full inside the " +
            "app, along with the search index, so it works with no signal.",
        highlights: [
            {
                claim: "Typographic control usually reserved for print",
                detail:
                    "Typeface, size, spacing, margins, justification and hyphenation are all reader-controlled, so the " +
                    "page can be set the way a printed Bible sets it rather than the way an app template does.",
            },
            {
                claim: "Translation comparison at the tap of a verse",
                detail:
                    "Read one translation; when a verse is unclear, tap it or select a passage and see it in every " +
                    "translation at full width. Berean Standard, King James and American Standard all ship complete and " +
                    "unlocked, being public domain.",
            },
            {
                claim: "Sync without an account or a server",
                detail:
                    "Highlights, notes and bookmarks move between iPhone, iPad and Mac through the reader's own iCloud " +
                    "account. No sign-up and no server of mine. Notes and highlights export to PDF at any time.",
            },
            {
                claim: "A site that keeps its own privacy policy true",
                detail:
                    "choicebible.com is plain HTML and one stylesheet — no framework, no build step, no external fonts, " +
                    "no analytics, no third-party requests of any kind. The privacy policy claims the app and site " +
                    "collect nothing, and a page that phoned home while saying so would make it a lie. The published " +
                    "copy is mirrored from the app's private repo by a script that refuses to publish if anything " +
                    "resembling a credential appears in the payload.",
            },
        ],
        receipts: [
            { label: "Live site", value: "choicebible.com", href: "https://choicebible.com" },
            {
                label: "Site source",
                value: "choicebible-public",
                href: "https://github.com/isaacfrett/choicebible-public",
            },
            { label: "App Store", value: "submission in progress" },
        ],
    },

    {
        id: "starsplit",
        name: "Starsplit",
        tagline: "One star. Four ways to break it.",
        period: "2026",
        role: "Solo — game, level tooling, site",
        status: "testing",
        tracks: ["ios", "frontend"],
        weight: 2,
        stack: ["Godot", "GDScript", "C++ modules", "iOS", "iPadOS", "HTML", "CSS"],
        summary:
            "A cosmic match-3 for iPhone and iPad built around a single move: every level hands you one star, and you tap " +
            "it rather than swap it, choosing the shape it breaks into. Three hundred levels, each one measured before it " +
            "ships.",
        highlights: [
            {
                claim: "Every level's difficulty is measured, not guessed",
                detail:
                    "Each of the 300 levels is played thousands of times by a bot before release, and its move budget is " +
                    "set from what that measures. An unfair level is a level that can be found and fixed — and level 187 " +
                    "is the same board for every player on every device.",
            },
            {
                claim: "Four splits that are deliberately not a power ladder",
                detail:
                    "Cross, Rows, Columns and Crater land within a handful of cells of each other on a nine-wide board. " +
                    "They differ in shape rather than size, so the choice belongs to the level in front of you instead of " +
                    "to a best answer memorised once.",
            },
            {
                claim: "Plays offline, no sign-in, no dark patterns",
                detail:
                    "No account, no network requirement, no analytics and no advertising SDK. Ads and in-app purchase " +
                    "interfaces exist behind debug-only stubs; a release build constructs neither.",
            },
            {
                claim: "A site drawn from the game's own palette",
                detail:
                    "The marketing, privacy and support pages take their colours straight from the game's palette source " +
                    "so the site and the app read as one place. The four grids on the front page are the splits' actual " +
                    "footprints, drawn the way the game draws them — as the shape each option clears.",
            },
        ],
        receipts: [
            {
                label: "Live site",
                value: "isaacfrett.github.io/starsplit",
                href: "https://isaacfrett.github.io/starsplit/",
            },
            { label: "Site source", value: "starsplit", href: "https://github.com/isaacfrett/starsplit" },
            { label: "App Store", value: "submission in progress" },
        ],
    },

    {
        id: "statlume",
        name: "Statlume",
        tagline: "A multi-sport analytics service with player-prop models on top of it.",
        period: "2024",
        role: "Solo — warehouse, ingestion, models, delivery",
        status: "archived",
        tracks: ["ml", "fullstack"],
        weight: 3,
        stack: [
            "Python",
            "Django",
            "TensorFlow / Keras",
            "scikit-learn",
            "MySQL",
            "SQLAlchemy",
            "Poetry",
            "pytest",
        ],
        summary:
            "A statistics and prediction service covering the NBA, NFL and MLB, built over a warehouse of player game " +
            "logs fed by third-party stats and sportsbook-odds APIs. Each league is its own package with its own CLI, " +
            "and the whole thing ran as a scheduled weekly job against the warehouse.",
        highlights: [
            {
                claim: "NBA player-prop models against sportsbook lines",
                detail:
                    "Points and rebounds models built with TensorFlow/Keras and scikit-learn — RandomForest " +
                    "classifiers, standardised feature scaling, train/test splits — over rolling recent-form windows. " +
                    "Predictive accuracy was never formally measured, so nothing is claimed about how well they did.",
            },
            {
                claim: "NFL player clustering for archetype segmentation",
                detail:
                    "K-means at k=3 over standardised performance features, grouping players into archetypes rather " +
                    "than scoring them on a single axis.",
            },
            {
                claim: "A warehouse fed by two kinds of external feed",
                detail:
                    "Player game logs from third-party stats APIs and lines from sportsbook-odds APIs, landed into a " +
                    "MySQL/SQLAlchemy warehouse with lineup, schedule and game-log ingestion paths per league.",
            },
            {
                claim: "Analysis delivered as generated datasheets",
                detail:
                    "Automated Excel output for matchup-mismatch reports and three-point analysis, with conditional " +
                    "formatting and embedded imagery, so the result was something readable rather than a table dump.",
            },
            {
                claim: "One structure repeated cleanly across three leagues",
                detail:
                    "NBA, NFL and MLB each get the same package shape — CLI, subcommands, update path — so adding a " +
                    "league was a known amount of work rather than a redesign. Poetry for reproducible dependencies, " +
                    "pre-commit hooks, and a test package mirroring the source tree league by league.",
            },
        ],
        receipts: [{ label: "Source", value: "statlume-api", href: "https://github.com/isaacfrett/statlume-api" }],
    },

    {
        id: "stockquote",
        name: "StockQuote",
        tagline: "A full-stack quote service — authenticated API, React client, tested end to end.",
        period: "2025",
        role: "Solo — API, database, front-end",
        status: "archived",
        tracks: ["fullstack", "frontend"],
        weight: 4,
        stack: ["FastAPI", "SQLAlchemy", "PostgreSQL", "PyJWT", "pytest", "React", "Context API", "Render"],
        summary:
            "A FastAPI service that fetches stock-quote snapshots from a market-data vendor and persists each user's " +
            "lookup history, paired with a React single-page client for auth and quote viewing. Built as two repositories " +
            "so the API and the UI deploy independently.",
        highlights: [
            {
                claim: "JWT authentication with hashed credentials",
                detail:
                    "Signup and login issue JWTs via PyJWT, with passwords hashed through pwdlib. SQLAlchemy models back " +
                    "users and their quote history, and the connection layer normalises the postgres:// URLs some hosts " +
                    "hand out into the postgresql:// form SQLAlchemy expects.",
            },
            {
                claim: "A tested API rather than a demo",
                detail:
                    "The service ships with a pytest suite and fixtures covering the auth and quote paths, and pins its " +
                    "dependencies so a deploy reproduces what was tested.",
            },
            {
                claim: "React client with context-based session state",
                detail:
                    "Login, signup, dashboard and quote-lookup pages routed in React, with session state held in an auth " +
                    "context and per-component stylesheets. Validation and network failures are surfaced as distinct " +
                    "error states rather than a single generic message.",
            },
        ],
        receipts: [
            { label: "API", value: "stockquote", href: "https://github.com/isaacfrett/stockquote" },
            { label: "Client", value: "stockquote-ui", href: "https://github.com/isaacfrett/stockquote-ui" },
        ],
    },

    {
        id: "idle-space-mining",
        name: "Idle Space Mining",
        tagline: "An idle game about scale, with no dark patterns.",
        period: "2026",
        role: "Solo — game and site",
        status: "testing",
        tracks: ["ios", "frontend"],
        weight: 5,
        stack: ["Godot", "GDScript", "iOS", "HTML", "CSS"],
        summary:
            "You start hand-mining ore from a bare rock and end up rewriting local physics so the ore was always there. " +
            "Twelve generators, each running its own harvest cycle, with every tenth you own doubling that generator's output.",
        highlights: [
            {
                claim: "Branching doctrines with no correct answer",
                detail:
                    "At each tier you pick one of three paths and forfeit the other two, and you re-decide every run — so " +
                    "the choice stays live instead of collapsing into a solved build order.",
            },
            {
                claim: "A prestige above the prestige",
                detail:
                    "When growth stalls you collapse the colony, losing ore, generators and tech but keeping Dark Matter, " +
                    "with every scrap ever earned making the next run permanently stronger.",
            },
            {
                claim: "Monetisation that never interrupts play",
                detail:
                    "No ads, no energy timers, no countdown offers. Nothing stops you playing and asks for money to " +
                    "continue. Purchases are optional, permanent, and state exactly what they give.",
            },
        ],
        receipts: [
            {
                label: "Live site",
                value: "isaacfrett.github.io/idle-space-mining-site",
                href: "https://isaacfrett.github.io/idle-space-mining-site/",
            },
            {
                label: "Site source",
                value: "idle-space-mining-site",
                href: "https://github.com/isaacfrett/idle-space-mining-site",
            },
            { label: "App Store", value: "submission in progress" },
        ],
    },
];

/** Coursework and earlier repositories, kept honest about what they are. */
export const earlier = {
    note:
        "Coursework and early repositories from my degree, kept public rather than tidied away. " +
        "They are what they are — the work above is the work that matters.",
    items: [
        { name: "CSD-340 — Web Development", href: "https://github.com/isaacfrett/csd-340", lang: "HTML" },
        { name: "CSD-360 — JavaScript", href: "https://github.com/isaacfrett/CSD-360-JavaScript", lang: "HTML" },
        {
            name: "CSD-405 — Intermediate Java",
            href: "https://github.com/isaacfrett/CSD-405-Intermediate-Java-Programming",
            lang: "Java",
        },
        { name: "CSD-310 — Database Development", href: "https://github.com/isaacfrett/csd-310", lang: "Python" },
        { name: "Simple Banking System", href: "https://github.com/isaacfrett/SimpleBankingSystem", lang: "Python" },
        { name: "C Examples", href: "https://github.com/isaacfrett/C_Examples", lang: "C" },
        { name: "Veterans transition website", href: "https://github.com/isaacfrett/veterans_website", lang: "Web" },
    ],
};
