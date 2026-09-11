# ADR-0008 — GitHub repository publishing

Status: Accepted (updated)

Context:
The brief asked to create `bruno-portfolio` on the owner’s GitHub. This Cloud Agent session is authenticated to Cursor Origin git, not GitHub. `gh` is not logged in and there is no `GH_TOKEN`. The destination now exists:

- https://github.com/Bruno2K/bruno-portfolio
- public
- default branch `main`
- empty (no commits) as of 2026-09-11

A write push from this environment (`git push github main`) fails with HTTPS username prompt disabled.

Decision:
- Keep developing on `main` in this workspace.
- Record the GitHub remote as `github` → `https://github.com/Bruno2K/bruno-portfolio.git`.
- Do not force-push, do not rewrite history, do not invent credentials.
- Do not rename the GitHub repository.
- Land `main` on GitHub when write access is available (owner push, or GitHub auth in this environment).

Consequences:
- GitHub currently has an empty repo at the correct name.
- Project history is Conventional Commits on `main` and can be pushed as-is.
- README points at `Bruno2K/bruno-portfolio`.
