# toddbooth.com — Personal Portfolio Site

Claude Code entry point for Todd Booth's personal portfolio website. This is a **single-page, single-file static site** with **no build step and no dependencies to install** — what's in the repo is exactly what ships.

## What this is

A one-page React portfolio served as a static GitHub Pages site. The entire application lives in `index.html`: React and ReactDOM load from a CDN, and JSX is transpiled **in the browser** by Babel Standalone at page load. There is no bundler, no `package.json`, no `node_modules`, and no compile step — you edit `index.html` and the change is live on the next page load.

Custom domains are configured via the `CNAME` file: the site answers on **`toddbooth.com`** and **`agi-university.com`**.

## Repository layout

```
toddbooth.com/
├── CLAUDE.md      ← this file
├── index.html     ← the entire app: styles + React components + in-browser Babel (~850 lines)
├── CNAME          ← GitHub Pages custom domains (toddbooth.com, agi-university.com)
├── favicon.ico    ← site icon
├── qr_code.png    ← QR code image used on the page
├── vcard.vcf      ← downloadable contact card (vCard 3.0, embedded base64 photo)
└── .gitignore     ← allowlist: only HTML, images, vCard, CNAME, .gitignore are tracked
```

There are **no other source directories** and no CI/CD workflow files — GitHub Pages publishes the repository root directly.

## How `index.html` is structured

A single `<head>` `<style>` block holds all CSS, followed by one `<script type="text/babel">` block containing the whole React app. The component tree is:

- `App` — owns `activeTab` state (`useState('home')`) and renders `Header` + the active tab + `Footer`.
- `Header({ activeTab, setActiveTab })` — nav bar with the tab buttons. The nav tab list is defined inline as `tabs = [{ id, label }, ...]`: **Home**, **About Me**, **Professional Background**, **Contact**.
- Tab components: `HomeTab`, `AboutTab`, `ProfessionalBackgroundTab`, `ExperienceTab`, `ContactTab`.
- `Footer`.

Mounting is via `ReactDOM.createRoot(document.getElementById('root'))` against the single `<div id="root">`.

> Note: the nav `tabs` array drives which tabs are reachable from the header. If you add a tab component, you must also add its `{ id, label }` entry to that array **and** a branch in `App`'s `renderTab()` switch — otherwise the component exists but is unreachable.

## Conventions

- **Edit `index.html` directly.** Styles go in the `<head>` `<style>` block; UI goes in the Babel `<script>` block. Keep the inline, dependency-free approach — do not introduce a build tool, npm, or external JS/CSS files unless the user explicitly asks to restructure the site.
- **CDN pins:** React 18 / ReactDOM 18 and `@babel/standalone` are loaded from unpkg. In-browser Babel is fine for a site this size; don't "optimize" it into a build pipeline without being asked.
- **Allowlist `.gitignore`:** the `.gitignore` ignores everything (`*`) and then re-allows specific types (`.html`, images, `.vcf`, `CNAME`, `.gitignore`). If you add a new asset type (e.g. a `.css` or `.js` file, a font, a PDF), it will be silently ignored by git until you add a matching `!pattern` allow rule. Verify with `git status` after adding files.
- **`CNAME` is load-bearing.** It maps the GitHub Pages site to the custom domains. Don't delete or reword it; changing it changes which domain the site serves.
- **`vcard.vcf`** is a vCard 3.0 with a base64-embedded JPEG photo and real contact details (phone, addresses, social profiles). Treat it as published personal contact data — keep it consistent with the Contact tab if you change either.
- Content is in **English**; the site links to LTU (Luleå University of Technology) and personal/professional profiles.

## Deployment

Hosted on **GitHub Pages** from this repository (no Actions workflow — Pages serves the repo contents directly). The production branch is `main`; pushing to it publishes the site. Active development for agent-driven work happens on the `claude/claude-md-docs-cbuQL` branch per the session's branch policy — only merge/push to `main` when the user asks.

## Testing a change

There is no test suite or linter. To verify a change, open `index.html` in a browser (or serve the directory, e.g. `python3 -m http.server`) and confirm:

1. The page renders without a blank screen (a JSX/Babel syntax error shows as a blank page + console error).
2. All four nav tabs switch correctly.
3. The vCard download and any images (favicon, QR code) still resolve.
