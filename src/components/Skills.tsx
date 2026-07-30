import { skills } from "../data/profile";
import "./Skills.css";

export function Skills() {
    return (
        <section className="section skills" id="skills">
            <div className="shell">
                <div className="section-head">
                    <div>
                        <p className="eyebrow">Toolkit</p>
                        <h2>What I reach for</h2>
                    </div>
                    <p className="section-note">
                        Listed because I've shipped something with it, not because I've read about it.
                    </p>
                </div>

                <div className="skills__grid">
                    {skills.map((group) => (
                        <div className="skills__group" key={group.group}>
                            <h3 className="skills__label mono">{group.group}</h3>
                            <ul>
                                {group.items.map((item) => (
                                    <li key={item}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
