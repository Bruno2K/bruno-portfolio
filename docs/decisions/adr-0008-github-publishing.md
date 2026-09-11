# ADR-0008 — GitHub repository publishing

Status: Accepted (updated)

Context:
The brief asked to create `bruno-portfolio` on the owner’s GitHub. The destination is:

- https://github.com/Bruno2K/bruno-portfolio
- public
- default branch `main`

`main` was pushed (no `--force`) on 2026-09-11. HEAD at publish: `88c13ca`.

Decision:
- Keep developing on `main` in this workspace.
- GitHub remote is `github` → `https://github.com/Bruno2K/bruno-portfolio.git` (no credentials in the URL).
- Do not force-push, do not rewrite history, do not commit tokens or store PATs in the repo.
- Do not rename the GitHub repository.
- Subsequent updates to GitHub are normal `git push github main`.

Consequences:
- Canonical public history lives at [Bruno2K/bruno-portfolio](https://github.com/Bruno2K/bruno-portfolio).
- This Cloud Agent’s `origin` remote remains Cursor Origin; `github` is the additional public remote.
