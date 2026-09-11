# ADR-0008 — GitHub repository publishing

Status: Accepted

Context:
The brief asks to create `bruno-portfolio` on the owner’s GitHub, aborting if the name is taken. This Cloud Agent session is authenticated to Cursor Origin git (`origin.cursor.com`) as the working repository. `gh` is installed but **not logged in**. There is no `GH_TOKEN`. Public GitHub API (2026-09-11) shows user `Bruno-Patrick` and **no public** repository named `bruno-portfolio` (404). Private collision cannot be verified without GitHub auth.

Decision:
- Implement the project in this workspace on branch `main`.
- Do not create a differently named GitHub repository.
- Do not call `origin repo create` as a substitute for GitHub.
- Do not invent credentials.
- The owner publishes this workspace to GitHub as `bruno-portfolio` via the product’s Create repo control (or by adding a GitHub remote themselves).
- If that publish fails because the name exists as a private repo, stop and report the conflict rather than renaming.

Consequences:
- Until the owner publishes, the GitHub URL does not exist.
- History on `main` is conventional-commit based and ready to become that GitHub repo without rewrite or force-push.
