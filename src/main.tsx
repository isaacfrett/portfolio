import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

/* Fonts are self-hosted through the bundle: no external request, so the page
   carries no third-party dependency and no flash of fallback type. */
import "@fontsource-variable/bricolage-grotesque";
import "@fontsource-variable/instrument-sans";
import "@fontsource-variable/jetbrains-mono";

import App from "./App";
import "./styles/global.css";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <App />
    </StrictMode>,
);
