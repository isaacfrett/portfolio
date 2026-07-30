/**
 * Renders resume/resume.html to public/Isaac_Frett_Resume.pdf using the copy of
 * Chrome already on this machine.
 *
 * The page is served over http rather than opened as a file:// URL because
 * Chrome applies CORS to font loads, and a file:// page silently falls back to
 * system fonts — which looks fine on screen and wrong in the PDF.
 *
 * Usage: npm run resume
 */

import { createServer } from "node:http";
import { copyFileSync, mkdirSync, mkdtempSync, readFileSync, existsSync, rmSync, statSync } from "node:fs";
import { spawn } from "node:child_process";
import { setTimeout as sleep } from "node:timers/promises";
import { tmpdir } from "node:os";
import { dirname, extname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const resumeDir = join(root, "resume");
const outPdf = join(root, "public", "Isaac_Frett_Resume.pdf");

const CHROME = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";

const FONTS = [
    "bricolage-grotesque",
    "instrument-sans",
    "jetbrains-mono",
].map((pkg) => ({
    from: join(root, "node_modules", "@fontsource-variable", pkg, "files", `${pkg}-latin-wght-normal.woff2`),
    name: `${pkg}-latin-wght-normal.woff2`,
}));

const MIME = {
    ".html": "text/html; charset=utf-8",
    ".css": "text/css; charset=utf-8",
    ".woff2": "font/woff2",
};

function copyFonts() {
    const dest = join(resumeDir, "fonts");
    mkdirSync(dest, { recursive: true });
    for (const font of FONTS) {
        if (!existsSync(font.from)) {
            throw new Error(`Missing font ${font.from}. Run \`npm install\` first.`);
        }
        copyFileSync(font.from, join(dest, font.name));
    }
}

function serve() {
    return new Promise((ready) => {
        const server = createServer((req, res) => {
            const rel = decodeURIComponent(new URL(req.url, "http://x").pathname).replace(/^\/+/, "") || "resume.html";
            const file = join(resumeDir, rel);

            // Never serve outside the resume directory.
            if (!file.startsWith(resumeDir) || !existsSync(file) || !statSync(file).isFile()) {
                res.writeHead(404).end("not found");
                return;
            }

            res.writeHead(200, { "content-type": MIME[extname(file)] ?? "application/octet-stream" });
            res.end(readFileSync(file));
        });

        server.listen(0, "127.0.0.1", () => ready({ server, port: server.address().port }));
    });
}

copyFonts();

const { server, port } = await serve();

/* A throwaway profile directory, so this never attaches to the already-running
   Chrome's profile. */
const profileDir = mkdtempSync(join(tmpdir(), "resume-chrome-"));

/** Resolves once the PDF exists and has stopped growing. */
async function waitForPdf(path, timeoutMs = 60_000) {
    const deadline = Date.now() + timeoutMs;
    let lastSize = -1;

    while (Date.now() < deadline) {
        await sleep(250);
        if (!existsSync(path)) continue;

        const size = statSync(path).size;
        // Two consecutive equal, non-zero readings means the write finished.
        if (size > 0 && size === lastSize) return size;
        lastSize = size;
    }

    throw new Error(`Chrome did not produce ${path} within ${timeoutMs / 1000}s`);
}

rmSync(outPdf, { force: true });

/* Chrome writes the PDF and then declines to exit, so this polls for the
   finished file and shuts Chrome down itself rather than waiting on a process
   that never ends. */
const chrome = spawn(
    CHROME,
    [
        "--headless",
        "--disable-gpu",
        "--no-first-run",
        "--no-pdf-header-footer",
        /* Without a virtual time budget Chrome prints before the webfonts have
           loaded and emits blank pages with no embedded fonts at all. */
        "--virtual-time-budget=10000",
        `--user-data-dir=${profileDir}`,
        `--print-to-pdf=${outPdf}`,
        `http://127.0.0.1:${port}/resume.html`,
    ],
    { stdio: "ignore" },
);

try {
    const size = await waitForPdf(outPdf);
    console.log(`Wrote ${outPdf} (${(size / 1024).toFixed(1)} kB)`);
} finally {
    chrome.kill("SIGKILL");
    server.close();
    rmSync(profileDir, { recursive: true, force: true });
}
