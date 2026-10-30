# Desktop foundation

## One application, two targets

The React editor, CV schema, demo, preview, styles, and tests stay in `src/`.
Tauri 2 in `src-tauri/` wraps the same Vite output. There is no second UI copy.
Web development remains `npm run dev`; production web output remains `npm run build`.

`main` holds the committed web baseline. `desktop/tauri` is a temporary feature
branch. Merge web changes from `main` into it while desktop work is underway.
Once the shell is validated, merge it into `main`; use short-lived feature branches
for subsequent work on either target. Do not maintain permanent divergent products.
Frontend changes ship to the desktop app when it is rebuilt/released; an installed
app does not automatically receive web changes. Automatic updates are future work.

## Run the shell

Install [Tauri's platform prerequisites](https://v2.tauri.app/start/prerequisites/),
including Rust 1.90+ and Cargo. Linux additionally needs WebKitGTK 4.1 development
packages and the other listed build dependencies. Build each target on its native OS.

From the repository root:

```sh
npm ci
npm run desktop:info
npm run desktop:dev
npm run desktop:build
```

Vite uses a fixed localhost port 5173; stop an existing web dev server first.
The shell has no custom Rust commands or filesystem privileges. It currently uses
webview localStorage, separate from the browser's draft. Import a JSON backup to
transfer a CV; no automatic migration or synchronization exists.
The app identifier `local.cvstudio.app` is provisional; choose a stable identifier
before distribution because changing it can change the app's storage location.

## Next implementation milestones

1. Compile and launch on the first target OS; verify editing, persistence after
   restart, safe import/recovery, demo replacement, and both preview modes.
2. Introduce a small platform service for open/save dialogs, downloads, printing,
   and opening external links. Keep browser behavior in a web adapter. Add scoped
   Tauri capabilities only for the native operations actually needed.
3. Make `CVRepository` asynchronous before adding a native filesystem adapter.
   Store documents in the OS app-data folder, write atomically, and test failures.
   Keep schema validation and migrations shared. Never log CV contents.
4. Validate PDF output on the target OS. `window.print()` and Blob downloads are
   browser boundaries, not verified native export implementations. Select a native
   PDF approach after checking pagination and selectable ATS text. If PDF parity
   proves impractical in the system webview, reassess Electron before investing
   further in native integrations.
5. Replace stock Tauri icons, choose the final app identifier, configure/test a
   content security policy, and test external-link handling before distribution.
   The generated CSP is currently unset. Add installer/signing and release checks
   once the target operating systems are decided. Commit Cargo.lock when the first
   Rust dependency resolution succeeds.

## Validation here

The Tauri CLI generated the shell. Configuration was inspected and the shared
frontend tests/build pass. Rust/Cargo and WebKitGTK development libraries are absent
on this machine: no desktop binary, launch test, or installer has been produced.

Reference: [Tauri + Vite](https://v2.tauri.app/start/frontend/vite/).
