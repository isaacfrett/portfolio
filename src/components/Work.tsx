import { useLayoutEffect, useMemo, useRef, useState } from "react";

import { earlier, projects } from "../data/projects";
import { TRACK_LABEL, type Project, type Track } from "../types";
import { useReducedMotion } from "../hooks/useReducedMotion";
import "./Work.css";

const STATUS_LABEL: Record<Project["status"], string> = {
    live: "Live",
    testing: "In testing",
    "private-source": "Running · source private",
    archived: "Archived",
};

const TRACKS: Track[] = ["frontend", "fullstack", "ml", "ios"];

export function Work() {
    const [track, setTrack] = useState<Track | "all">("all");
    const [open, setOpen] = useState<string | null>("quant");
    const reduced = useReducedMotion();
    const listRef = useRef<HTMLUListElement>(null);
    const positions = useRef(new Map<string, number>());

    const visible = useMemo(() => {
        const rows = track === "all" ? projects : projects.filter((p) => p.tracks.includes(track));
        return [...rows].sort((a, b) => a.weight - b.weight);
    }, [track]);

    /* FLIP: the filter's whole job is to re-rank, so the rows should be seen
       moving rather than snapping into a new order.

       Positions are rebuilt from scratch each pass. A row that was filtered out
       and has just come back has no previous position in this map, so it fades
       in rather than sliding from wherever it happened to sit last time. */
    useLayoutEffect(() => {
        const list = listRef.current;
        if (!list || reduced) {
            positions.current.clear();
            return;
        }

        const items = Array.from(list.querySelectorAll<HTMLElement>("[data-row]"));
        const next = new Map<string, number>();

        items.forEach((el) => {
            const id = el.dataset.row!;
            const before = positions.current.get(id);
            const after = el.getBoundingClientRect().top;
            const delta = before === undefined ? 0 : before - after;

            if (Math.abs(delta) > 1) {
                el.animate([{ transform: `translateY(${delta}px)` }, { transform: "translateY(0)" }], {
                    duration: 420,
                    easing: "cubic-bezier(0.16, 1, 0.3, 1)",
                });
            }
            next.set(id, after);
        });

        positions.current = next;
    }, [visible, open, reduced]);

    return (
        <section className="section work" id="work">
            <div className="shell">
                <div className="section-head">
                    <div>
                        <p className="eyebrow">Selected work</p>
                        <h2>Six things I built, and what proves it</h2>
                    </div>
                    <p className="section-note">
                        Filter by the kind of role you're hiring for. Open a row for the detail behind it.
                    </p>
                </div>

                <div className="work__filter" role="group" aria-label="Filter work by discipline">
                    <button
                        type="button"
                        className={`chip${track === "all" ? " is-active" : ""}`}
                        aria-pressed={track === "all"}
                        onClick={() => setTrack("all")}
                    >
                        Everything <span className="chip__count mono">{projects.length}</span>
                    </button>
                    {TRACKS.map((t) => {
                        const count = projects.filter((p) => p.tracks.includes(t)).length;
                        return (
                            <button
                                key={t}
                                type="button"
                                className={`chip${track === t ? " is-active" : ""}`}
                                aria-pressed={track === t}
                                onClick={() => setTrack(t)}
                            >
                                {TRACK_LABEL[t]} <span className="chip__count mono">{count}</span>
                            </button>
                        );
                    })}
                </div>

                <ul className="work__list" ref={listRef}>
                    {visible.map((p) => (
                        <WorkRow
                            key={p.id}
                            project={p}
                            open={open === p.id}
                            onToggle={() => setOpen(open === p.id ? null : p.id)}
                        />
                    ))}
                </ul>

                <div className="earlier">
                    <h3 className="earlier__title">Earlier repositories</h3>
                    <p className="earlier__note">{earlier.note}</p>
                    <ul className="earlier__list">
                        {earlier.items.map((item) => (
                            <li key={item.href}>
                                <a href={item.href} target="_blank" rel="noreferrer">
                                    <span>{item.name}</span>
                                    <span className="earlier__lang mono">{item.lang}</span>
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
}

function WorkRow({ project, open, onToggle }: { project: Project; open: boolean; onToggle: () => void }) {
    const panelId = `panel-${project.id}`;

    return (
        <li className={`row${open ? " is-open" : ""}`} data-row={project.id} id={project.id}>
            <button type="button" className="row__head" aria-expanded={open} aria-controls={panelId} onClick={onToggle}>
                <span className="row__meta">
                    <span className="pip" data-status={project.status}>
                        {STATUS_LABEL[project.status]}
                    </span>
                    <span className="row__period mono">{project.period}</span>
                </span>

                <span className="row__title">
                    <span className="row__name">{project.name}</span>
                    <span className="row__tagline">{project.tagline}</span>
                </span>

                <span className="row__toggle" aria-hidden="true">
                    <span className="row__toggle-bar" />
                    <span className="row__toggle-bar" />
                </span>
            </button>

            {/* Collapsed with grid rows rather than `hidden`, so the open/close
                has a height to animate. `inert` keeps the closed content out of
                the tab order and the accessibility tree. */}
            <div className="row__panel" id={panelId} role="region" aria-label={project.name} inert={!open}>
                <div className="row__panel-inner">
                    <p className="row__summary">{project.summary}</p>

                    <p className="row__role mono">{project.role}</p>

                    <ul className="row__stack">
                        {project.stack.map((s) => (
                            <li key={s}>{s}</li>
                        ))}
                    </ul>

                    <ul className="row__highlights">
                        {project.highlights.map((h) => (
                            <li key={h.claim}>
                                <h4>{h.claim}</h4>
                                <p>{h.detail}</p>
                            </li>
                        ))}
                    </ul>

                    {project.shots && (
                        <div className="row__shots">
                            {project.shots.map((shot) => (
                                <figure key={shot.src}>
                                    <img src={shot.src} alt={shot.alt} loading="lazy" decoding="async" />
                                    <figcaption>{shot.caption}</figcaption>
                                </figure>
                            ))}
                        </div>
                    )}

                    <div className="row__receipts">
                        <p className="eyebrow">Evidence</p>
                        <ul>
                            {project.receipts.map((r) => (
                                <li key={r.label}>
                                    <span className="row__receipt-label">{r.label}</span>
                                    {r.href ? (
                                        <a className="mono" href={r.href} target="_blank" rel="noreferrer">
                                            {r.value} <span aria-hidden="true">↗</span>
                                        </a>
                                    ) : (
                                        <span className="mono row__receipt-plain">{r.value}</span>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </li>
    );
}
