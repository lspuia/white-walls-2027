<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# `BACKUP2026` is frozen — do not alter it

`BACKUP2026` (local and `origin/BACKUP2026`) holds the last state of the
pre-2027 White Walls website, captured before it was replaced by the
"under construction" holding page. It is the only copy of that site — the
original source is not in this repository's history, which begins at the
Next.js rebuild.

**Never commit to, rebase, reset, force-push, retarget or delete this branch.**
That includes `git branch -f`, `git push --force`, `git push --delete`,
`git branch -m/-M`, and merging anything into it.

If a task appears to require modifying `BACKUP2026`, stop and warn the user
before running anything. Reading from it is always fine:

```sh
git show BACKUP2026:path/to/file      # inspect a file
git checkout BACKUP2026 -- path/      # restore files onto the current branch
git switch --detach BACKUP2026        # look around without moving the branch
```

To restore old-site material during the redesign, copy files *out* of the
branch onto a working branch — never check it out and commit onto it.
