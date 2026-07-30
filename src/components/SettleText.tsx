import { useEffect, useRef, useState } from "react";

import { useReducedMotion } from "../hooks/useReducedMotion";

const GLYPHS = "0123456789/·—#%<>+";

interface Props {
    text: string;
    /** Milliseconds to wait before this value starts resolving. */
    delay?: number;
    className?: string;
}

/**
 * Resolves a value the way a readout populates — a brief scramble that settles
 * into the real characters. Runs once on mount, and is skipped entirely when
 * the user prefers reduced motion.
 *
 * The real text is rendered from the first frame (transparent while waiting) so
 * the row never changes width, and a screen reader is given the real string
 * rather than the scramble.
 */
export function SettleText({ text, delay = 0, className }: Props) {
    const reduced = useReducedMotion();
    const [shown, setShown] = useState(text);
    const [waiting, setWaiting] = useState(!reduced);
    const frame = useRef(0);

    useEffect(() => {
        if (reduced) {
            setShown(text);
            setWaiting(false);
            return;
        }

        const DURATION = 420;
        let start = 0;

        const tick = (now: number) => {
            if (!start) start = now;
            const t = Math.min(1, (now - start) / DURATION);
            // Characters lock in left to right.
            const locked = Math.floor(t * text.length);
            let out = text.slice(0, locked);
            for (let i = locked; i < text.length; i++) {
                out += text[i] === " " ? " " : GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
            }
            setShown(out);
            if (t < 1) frame.current = requestAnimationFrame(tick);
            else setShown(text);
        };

        const timer = window.setTimeout(() => {
            setWaiting(false);
            frame.current = requestAnimationFrame(tick);
        }, delay);

        return () => {
            window.clearTimeout(timer);
            cancelAnimationFrame(frame.current);
        };
    }, [text, delay, reduced]);

    return (
        <span className={className}>
            <span aria-hidden="true" style={waiting ? { opacity: 0 } : undefined}>
                {shown}
            </span>
            <span className="sr-only">{text}</span>
        </span>
    );
}
