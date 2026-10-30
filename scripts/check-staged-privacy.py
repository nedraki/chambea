#!/usr/bin/env python3
"""Inspect staged blobs, never the working copy, before committing."""
import pathlib
import subprocess
import sys

def git(*args):
    return subprocess.check_output(['git', *args])

pattern_file = pathlib.Path(git('rev-parse', '--git-path', 'private-patterns.txt').decode().strip())
patterns = [line.strip().lower() for line in pattern_file.read_text().splitlines() if line.strip()] if pattern_file.exists() else []
paths = git('diff', '--cached', '--name-only', '--diff-filter=ACMR', '-z').decode().split('\0')
failed = False
for path in filter(None, paths):
    generated_icon = path.startswith('cv-studio/src-tauri/icons/')
    blocked = (not generated_icon and path.endswith(('.cv.json', '.zip', '.pdf', '.jpg', '.png'))) or any(part in {'.private', 'dist', 'node_modules', '.env'} for part in pathlib.PurePosixPath(path).parts)
    content = git('show', ':' + path).decode('utf-8', errors='replace').lower()
    if blocked or any(pattern in content for pattern in patterns):
        print(f'Privacy guard: inspect or unstage {path}', file=sys.stderr)
        failed = True
sys.exit(1 if failed else 0)
