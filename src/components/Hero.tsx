import { ledger, profile } from "../data/profile";
import { SettleText } from "./SettleText";
import "./Hero.css";

/** Internal anchors scroll; everything else opens away from the page. */
function isExternal(href: string) {
    return !href.startsWith("#");
}

export function Hero() {
    return (
        <section className="hero" id="top">
            <div className="shell hero__inner">
                <p className="eyebrow hero__eyebrow">
                    {profile.role} · {profile.location}
                </p>

                <h1 className="hero__headline">{profile.headline}</h1>

                <p className="lede hero__lede">{profile.lede}</p>

                {/* The signature device: a claim on the left, the artefact that
                    settles it on the right. A description list is exactly what
                    this is, so the leader rule is drawn by the term's ::after
                    rather than by a spacer element. */}
                <div className="ledger">
                    <div className="ledger__caption">
                        <span className="eyebrow">Claim</span>
                        <span className="eyebrow">Evidence</span>
                    </div>

                    <dl className="ledger__body">
                        {ledger.map((row, i) => (
                            <div className="ledger__row" key={row.label} style={{ "--i": i } as React.CSSProperties}>
                                <dt className="ledger__claim">{row.label}</dt>
                                <dd className="ledger__value mono">
                                    {row.href ? (
                                        <a
                                            href={row.href}
                                            target={isExternal(row.href) ? "_blank" : undefined}
                                            rel={isExternal(row.href) ? "noreferrer" : undefined}
                                        >
                                            <SettleText text={row.value} delay={240 + i * 90} />
                                            <span className="ledger__arrow" aria-hidden="true">
                                                {isExternal(row.href) ? "↗" : "↓"}
                                            </span>
                                        </a>
                                    ) : (
                                        <SettleText text={row.value} delay={240 + i * 90} />
                                    )}
                                </dd>
                            </div>
                        ))}
                    </dl>
                </div>

                <div className="hero__actions">
                    <a className="btn btn--primary" href="#work">
                        See the work
                    </a>
                    <a className="btn" href={profile.resume} target="_blank" rel="noreferrer">
                        Download résumé
                    </a>
                    <span className="pip hero__availability" data-status="live">
                        {profile.availability}
                    </span>
                </div>
            </div>
        </section>
    );
}
