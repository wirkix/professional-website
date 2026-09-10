#!/usr/bin/env node
/**
 * Regenerates public/cv/alois-wirkes-cv.pdf and public/cv/alois-wirkes-cv-en.pdf
 * from scripts/cv-pdf/cv.template.html and cv.template.en.html by rendering
 * each in headless Chrome/Edge and printing it to PDF.
 *
 * Neither template has a build step of its own — both are hand-authored,
 * self-contained HTML/CSS résumés styled to match the original 2020 CV
 * design (the English one is a translation of the same document, not a
 * re-derivation from src/app/cv/page.tsx's dictionary text -- the two
 * already diverge slightly in wording/bullet grouping, which predates this
 * script). Edit both templates in step with each other and with
 * src/app/cv/page.tsx, then re-run this script to publish the update.
 *
 * Usage: npm run cv:pdf
 */
import { existsSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join, dirname, resolve } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { spawnSync } from "node:child_process";

const __dirname = dirname(fileURLToPath(import.meta.url));
const repoRoot = resolve(__dirname, "..", "..");

const photoPath = join(repoRoot, "public", "images", "alois-wirkes.jpg");

const targets = [
  { templatePath: join(__dirname, "cv.template.html"), outputPath: join(repoRoot, "public", "cv", "alois-wirkes-cv.pdf") },
  { templatePath: join(__dirname, "cv.template.en.html"), outputPath: join(repoRoot, "public", "cv", "alois-wirkes-cv-en.pdf") },
];

// Known headless-capable Chromium browser locations, checked in order.
// Override with the CV_PDF_BROWSER env var if none of these match.
const candidateBrowsers = [
  process.env.CV_PDF_BROWSER,
  "C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe",
  "C:/Program Files/Microsoft/Edge/Application/msedge.exe",
  "C:/Program Files/Google/Chrome/Application/chrome.exe",
  "/usr/bin/google-chrome",
  "/usr/bin/chromium-browser",
  "/usr/bin/microsoft-edge",
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  "/Applications/Microsoft Edge.app/Contents/MacOS/Microsoft Edge",
].filter(Boolean);

const browser = candidateBrowsers.find((path) => existsSync(path));
if (!browser) {
  console.error(
    "Could not find a Chromium-based browser (Edge/Chrome) to render the PDF.\n" +
      "Set CV_PDF_BROWSER to a full path to msedge.exe / chrome.exe and try again."
  );
  process.exit(1);
}

if (!existsSync(photoPath)) {
  console.error(`Missing profile photo at ${photoPath}`);
  process.exit(1);
}

for (const { templatePath, outputPath } of targets) {
  const template = readFileSync(templatePath, "utf8");
  const rendered = template.replace("{{PHOTO_SRC}}", pathToFileURL(photoPath).href);

  const tmpDir = mkdtempSync(join(tmpdir(), "cv-pdf-"));
  const tmpHtmlPath = join(tmpDir, "cv.html");
  writeFileSync(tmpHtmlPath, rendered, "utf8");

  console.log(`Rendering ${templatePath} with ${browser} ...`);
  const result = spawnSync(
    browser,
    [
      "--headless",
      "--disable-gpu",
      "--no-pdf-header-footer",
      `--print-to-pdf=${outputPath}`,
      pathToFileURL(tmpHtmlPath).href,
    ],
    { stdio: "inherit" }
  );

  rmSync(tmpDir, { recursive: true, force: true });

  if (result.status !== 0) {
    console.error(`PDF generation failed for ${templatePath}.`);
    process.exit(result.status ?? 1);
  }

  console.log(`CV PDF written to ${outputPath}`);
}
