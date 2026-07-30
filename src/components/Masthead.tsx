import { useEffect, useState } from "react";

import { profile } from "../data/profile";
import "./Masthead.css";

const LINKS = [
    { href: "#work", label: "Work" },
    { href: "#experience", label: "Experience" },
    { href: "#skills", label: "Skills" },
    { href: "#contact", label: "Contact" },
];

export function Masthead() {
    const [lifted, setLifted] = useState(false);

    useEffect(() => {
        const onScroll = () => setLifted(window.scrollY > 24);
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <header className={`masthead${lifted ? " is-lifted" : ""}`}>
            <div className="shell masthead__inner">
                <a className="masthead__brand" href="#top">
                    <span className="masthead__name">{profile.name}</span>
                    <span className="masthead__role mono">{profile.role}</span>
                </a>

                <nav className="masthead__nav" aria-label="Sections">
                    {LINKS.map((l) => (
                        <a key={l.href} href={l.href}>
                            {l.label}
                        </a>
                    ))}
                </nav>

                <a className="masthead__resume mono" href={profile.resume} target="_blank" rel="noreferrer">
                    Resume <span aria-hidden="true">↓</span>
                </a>
            </div>
        </header>
    );
}
