# Manager Window

The MapLink Manager (*Tools → MapLink*) is the central window, with two tabs:

- **Assets** — browse, import, reimport, and run per-asset actions across the setup.
- **Settings** — setup root, paths, and project-level options.

All Perforce activity from the Manager routes through MapLink's changelist system, which finds or creates a pending changelist per operation type — `[MapLink] Import`, `[MapLink] Reimport`, `[MapLink] Material Sync`, and `[MapLink] Stand-in Creation/Cleanup` — so changes stay grouped and reviewable.
