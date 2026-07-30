import { profile } from "../data/profile";
import "./Contact.css";

const CHANNELS = [
    { label: "Email", value: profile.email, href: `mailto:${profile.email}` },
    { label: "Phone", value: profile.phone, href: profile.phoneHref },
    { label: "GitHub", value: profile.githubHandle, href: profile.github },
    { label: "LinkedIn", value: profile.linkedinHandle, href: profile.linkedin },
    { label: "Résumé", value: "PDF, one page", href: profile.resume },
];

export function Contact() {
    return (
        <section className="section contact" id="contact">
            <div className="shell">
                <div className="contact__grid">
                    <div>
                        <p className="eyebrow">Contact</p>
                        <h2 className="contact__headline">Hiring? Let's talk.</h2>
                        <p className="lede contact__lede">
                            Open to software engineering roles, in person or remote. The fastest way to reach me is email —
                            I answer every one.
                        </p>
                        <span className="pip contact__status" data-status="live">
                            {profile.location} · available now
                        </span>
                    </div>

                    <ul className="contact__list">
                        {CHANNELS.map((c) => (
                            <li key={c.label}>
                                <a
                                    href={c.href}
                                    target={c.href.startsWith("http") || c.href.endsWith(".pdf") ? "_blank" : undefined}
                                    rel="noreferrer"
                                >
                                    <span className="contact__label eyebrow">{c.label}</span>
                                    <span className="contact__value mono">{c.value}</span>
                                    <span className="contact__arrow mono" aria-hidden="true">
                                        ↗
                                    </span>
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
}

export function Footer() {
    return (
        <footer className="footer">
            <div className="shell footer__inner">
                <p className="mono">© {new Date().getFullYear()} Isaac Frett</p>
                <p className="mono footer__colophon">
                    Built with React and TypeScript · Bricolage Grotesque, Instrument Sans, JetBrains Mono · no trackers,
                    no third-party requests
                </p>
            </div>
        </footer>
    );
}
