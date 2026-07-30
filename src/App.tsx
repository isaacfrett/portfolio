import { Contact, Footer } from "./components/Contact";
import { Experience } from "./components/Experience";
import { Hero } from "./components/Hero";
import { Masthead } from "./components/Masthead";
import { Skills } from "./components/Skills";
import { Work } from "./components/Work";

export default function App() {
    return (
        <>
            <a className="skip-link" href="#work">
                Skip to the work
            </a>
            <Masthead />
            <main id="main">
                <Hero />
                <Work />
                <Experience />
                <Skills />
                <Contact />
            </main>
            <Footer />
        </>
    );
}
