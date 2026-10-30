# CV Studio

The application lives in `cv-studio/`. See its README for development commands.
Only the fictional Wile E. Coyote demonstration profile belongs in source control.
Personal CVs must be imported through the app and backed up outside tracked source files.
Local originals are preserved in ignored files; they are never app build inputs.

## Local privacy guard

Run `git config core.hooksPath .githooks` after cloning. The pre-commit hook checks
staged text for the original personal identifiers and blocks personal CV exports.
It also blocks common personal file formats and generated bundles. This is a guard,
not a guarantee against arbitrary new personal information: review staged changes.
Commits in this checkout use a generic, repository-local author identity.
