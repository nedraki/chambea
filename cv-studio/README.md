# CV Studio

A local-first React + TypeScript + Vite MVP. It starts with a fictional, unofficial Wile E. Coyote demonstration profile; choose **New blank CV** to start fresh.

## Run locally

Install Node.js 22.12+ (or a supported newer LTS), then in this folder:

```sh
npm install
npm run dev
```

Open the localhost address printed in the terminal (normally http://127.0.0.1:5173). Keep that terminal running. Alternatively use pnpm; a pnpm lockfile is included for reproducible installation (`pnpm install --frozen-lockfile`).

```sh
npm run build
npm test
npm run preview
```

`build` checks TypeScript and creates the production application in `dist/`. `preview` serves that build locally. After dependencies are installed, editing and building need no online services. There are no remote fonts, analytics, accounts, APIs, or uploads.

## Use

- **Load demo CV** replaces the draft with the fictional demo after a backup/confirmation dialog.
- Edit contact details, links, and optional summary in Profile. The summary has no heading in the CV.
- Add, edit, delete, and reorder selected projects, experience, education, courses/certifications, and conference presentations. In the CV, featured projects appear first, before work experience.
- Featured Projects holds side projects relevant to your skills: a name, an optional public URL, and highlight bullets. The project name links to its URL in the preview. All tools for the section live in a single Tools card below the projects; anything you type there that is not in the toolkit yet is created for you.
- Add names in Technologies, then check them beside each accomplishment. In the designed preview each experience shows one row of chips beneath its whole list of accomplishments, gathering every technology used there. ATS mode and ATS text export list them as a single plain comma line after the bullets.
- The draft saves automatically to this browser's localStorage after a short delay. This is one draft per browser/origin. Changing port, hostname, browser, or browser profile creates a different storage location. Private browsing and clearing browser data may erase it. **Export JSON regularly** for a portable backup.
- JSON import checks the entire v1 structure and technology references before offering to replace the draft. A replacement dialog lets you export the current draft first. Invalid files leave the current draft unchanged. Files are limited to 5 MB. Valid HTTP(S) links are clickable; other schemes are plain text.
- If a saved document cannot be read, recovery mode leaves the stored value untouched and disables automatic saving until you explicitly replace the draft. If saving fails, export JSON to preserve your changes.
- Switch Designed / ATS to select the live preview and printed layout. Designed has a two-column header, centered navy headings, and no separator lines. ATS uses a strict single-column reading order with explicit link URLs.
- **Print / Save PDF** opens the browser print dialog for the selected layout. Choose A4, save as PDF, open “More settings” and switch off “Headers and footers” (the browser's date/title/URL band; remembered per site), and use 100% scale. The stylesheet sets 16 mm page margins. The on-screen sheet is A4-like and grows with content; the browser paginates longer CVs. Review print preview for your browser, particularly for entries longer than one page.
- ATS mode also offers **Export ATS text**, a UTF-8 `.txt` file. This is the simplest reading-order export. PDF parsing differs across applicant tracking systems; no layout can guarantee acceptance everywhere.

## Structure and Tauri readiness

- `src/domain/model.ts`: versioned CV types, document validation, URL guard.
- `src/domain/sample.ts`: fictional starting document.
- `src/storage/repository.ts`: `CVRepository` interface and localStorage adapter; download boundary.
- `src/components/Editor.tsx`: controlled forms and entry ordering.
- `src/components/Preview.tsx`: semantic preview, technology rendering, ATS text serialization.
- `src/App.tsx`: state, debounced persistence, import/export and replacement flow.
- `src/styles.css`: responsive studio, designed/ATS layouts, print rules.

For future Tauri packaging, retain Vite's static build, implement a filesystem-backed `CVRepository`, and replace browser download/print boundaries with native save dialogs/PDF support as needed. This MVP contains no Tauri scaffolding or native binaries. localStorage is synchronous and not encrypted; use an OS-backed storage adapter if native storage security is required. Schema changes should add explicit migrations before changing `schemaVersion`.

## Validation

`npm run build` checks the application types and bundles production assets. `npm test` covers document round trips, rejected malformed/unsupported imports, duplicate IDs, dangling technology references, unsafe URLs, and ATS content/ordering.
