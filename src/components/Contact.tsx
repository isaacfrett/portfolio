import { profile } from "../data/profile";
import { Email } from "./Email";
import "./Contact.css";

/* Phone is deliberately absent — it goes on the resume, which is a deliberate
   download, rather than on a page that crawlers read for free. */
const CHANNELS = [
    { label: "GitHub", value: profile.githubHandle, href: profile.github },
    { label: "LinkedIn", value: profile.linkedinHandle, href: profile.linkedin },
    { label: "Resume", value: "PDF, one page", href: profile.resume },
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
                            The fastest way to reach me is email — I answer every one. Phone number is on the resume.
                        </p>
                        <span className="pip" data-status="live">
                            {profile.availability}
                        </span>
                    </div>

                    <ul className="contact__list">
                        <li>
                            <span className="contact__row">
                                <span className="contact__label eyebrow">Email</span>
                                <Email className="contact__value mono" />
                            </span>
                        </li>
                        {CHANNELS.map((c) => (
                            <li key={c.label}>
                                <a href={c.href} target="_blank" rel="noreferrer">
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
                    Built with React and TypeScript · Bricolage Grotesque, Instrument Sans, JetBrains Mono · no
                    trackers, no third-party requests
                </p>
            </div>
        </footer>
    );
}
