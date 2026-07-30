import { education, experienceLede, jobs } from "../data/experience";
import { profile } from "../data/profile";
import "./Experience.css";

export function Experience() {
    return (
        <section className="section experience" id="experience">
            <div className="shell">
                <div className="section-head">
                    <div>
                        <p className="eyebrow">Experience</p>
                        <h2>Where the hours went</h2>
                    </div>
                    {/* Employment isn't settled by a repository, so it gets the
                        receipt it actually has. Saying so is the point. */}
                    <p className="section-note">
                        Employment is attested by an employer rather than a public repository, so the evidence here is the{" "}
                        <a href={profile.resume} target="_blank" rel="noreferrer">
                            résumé
                        </a>{" "}
                        and{" "}
                        <a href={profile.linkedin} target="_blank" rel="noreferrer">
                            LinkedIn
                        </a>
                        .
                    </p>
                </div>

                <p className="lede experience__lede">{experienceLede}</p>

                <ol className="track">
                    {jobs.map((job) => (
                        <li className="track__item" key={job.id}>
                            <div className="track__when mono">
                                <span className="track__start">{job.start}</span>
                                <span className="track__dash" aria-hidden="true">
                                    —
                                </span>
                                <span className={`track__end${job.end === "Present" ? " is-present" : ""}`}>{job.end}</span>
                            </div>

                            <div className="track__body">
                                <h3 className="track__title">{job.title}</h3>
                                <p className="track__org">
                                    {job.org}
                                    {job.location && <span className="track__loc"> · {job.location}</span>}
                                </p>
                                <p className="track__summary">{job.summary}</p>

                                <ul className="track__points">
                                    {job.points.map((pt) => (
                                        <li key={pt}>{pt}</li>
                                    ))}
                                </ul>

                                {job.stack && (
                                    <ul className="track__stack">
                                        {job.stack.map((s) => (
                                            <li key={s}>{s}</li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        </li>
                    ))}
                </ol>

                <div className="education">
                    {education.map((e) => (
                        <div className="education__item" key={e.id}>
                            <p className="eyebrow">Education</p>
                            <h3>{e.award}</h3>
                            <p className="education__org">
                                {e.institution} <span className="mono education__period">{e.period}</span>
                            </p>
                            {e.detail && <p className="education__detail">{e.detail}</p>}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
