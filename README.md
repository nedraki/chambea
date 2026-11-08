# Chambea Studio

A minimalist CV editor with live previews, local saving, JSON backups, and PDF export. No account required. Your CV stays in your browser; the app does not upload it to a server.

## Why minimalist?

Chambea puts your experience and achievements first. Clear headings, readable dates, and a predictable structure make your CV easier for people and applicant tracking systems (ATS) to read.

A flashy layout can work against you: graphics, text boxes, and complex columns may confuse automated extraction. [Greenhouse documents these parsing problems](https://support.greenhouse.io/hc/en-us/articles/200989175-Unsuccessful-resume-parse). The goal is to reduce formatting obstacles during initial screening.

Creative industries can be an exception: visual presentation may be part of your portfolio. Consider keeping a simple CV for application portals and a visual version or portfolio for human review.

## Run locally

1. Install a compatible LTS release of [Node.js](https://nodejs.org/) (22.12+).
2. Download this repository using **Code → Download ZIP**, then unzip it—or clone it with Git.
3. Open a terminal in the folder containing `package.json` and run:

```sh
npm ci
npm run dev
```

Open [http://127.0.0.1:5173](http://127.0.0.1:5173). Keep the terminal running while using the app; press **Ctrl+C** to stop it. Next time, run `npm run dev` again from the same folder.

The first installation needs Internet. If port 5173 is already in use, stop the previous server first.

## Create your CV

- Choose **New blank CV**, or **Load demo CV** to explore the example.
- Edit your profile, projects, experience, education, certifications, and presentations. Empty sections are hidden.
- Add tools under **Technologies** and connect them to your achievements.
- Use **Designed** for a styled layout or **ATS** for a simpler, single-column layout.
- On wide screens, the editor and preview scroll independently.

**Export JSON regularly.** It is your editable backup; restore it with **Import JSON**. Loading a demo or importing a CV asks before replacing your draft.

Autosave belongs to this browser and address. Clearing browser data or switching browser, profile, hostname, or port can make the saved draft unavailable. Always use the same address when returning.

## Export a PDF

1. Select **Designed** or **ATS**, then click **Print / Save PDF**.
2. Choose **Save as PDF**, **A4**, and **100% scale**.
3. Turn off the browser's **Headers and footers**.
4. Review every page before saving.

ATS mode also offers **Export ATS text**. Check that your final PDF has selectable text and that application portals extract your details correctly. Always follow the employer's requested file format; no layout guarantees compatibility with every ATS.

## Build and check

```sh
npm test
npm run build
npm run preview
```

The build creates `dist/`, ready for static hosting. `preview` serves it locally for checking; use the URL shown in the terminal. It is not a production server. Publish only `dist/`, never your entire working folder.

## Privacy and contributions

Keep real CVs, personal screenshots, exports, and credentials out of Git. Local backups in `.private/` are ignored and blocked by the development server; browser drafts are not part of the repository.

To enable the commit privacy guard (requires Python 3):

```sh
git config core.hooksPath .githooks
```

It blocks certain file types and checks personal identifiers only when a local `.git/private-patterns.txt` exists. That private list is not included when cloning. Review staged changes and your public Git author identity before committing.

Use the committed lockfile and review dependency updates. `npm ci` installs locked versions; it does not guarantee that dependencies are safe.

## Demo profile

The Benito Martinez example is an unofficial CV inspired by Bad Bunny's public career, without endorsement. Contact details are fictional, and education entries are prompts—not claimed qualifications.

Career references: [Spotify, 2025](https://newsroom.spotify.com/2025-12-03/wrapped-bad-bunny-top-artist-album/), [Spotify, 2022](https://newsroom.spotify.com/2022-12-13/spotify-celebrates-3-years-of-record-breaking-bad-bunny-streaming-with-a-mexico-city-fiesta/), [GRAMMY, 2023](https://www.grammy.com/awards/categories/best-musica-urbana-album/2023/), [GRAMMY, 2021](https://www.grammy.com/news/bad-bunny-wins-best-latin-pop-or-urban-album-yhlqmdlg-2021-grammy-awards-show/), and [TIME](https://time.com/6266349/bad-bunny-cover-story/).
