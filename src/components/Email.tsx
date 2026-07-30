import { useEffect, useState } from "react";

import { emailParts } from "../data/profile";

/**
 * Renders the email address only after mount, assembled from parts.
 *
 * The address never appears as a literal string in the served HTML or as a
 * `mailto:` in the markup, so the harvesters that scrape static pages come away
 * with nothing. Anything running a real browser — including a person — sees a
 * normal, clickable link. This is a speed bump rather than a wall, which is the
 * honest trade for keeping the address usable.
 */
export function Email({ className }: { className?: string }) {
    const [address, setAddress] = useState<string | null>(null);

    useEffect(() => {
        setAddress(emailParts.join("@"));
    }, []);

    if (!address) {
        // Holds the row's width so nothing shifts when the address arrives.
        return (
            <span className={className} aria-hidden="true">
                &nbsp;
            </span>
        );
    }

    return (
        <a className={className} href={`mailto:${address}`}>
            {address}
        </a>
    );
}
