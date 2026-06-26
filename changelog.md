# Changelog

## v1.9.2 — UE plugin · v1.4.6.3 — Blender addon

- **Edit source `.blend`** — right-click an `LI_`/`BP_`/`SM_` asset to open its source in Blender.
- **FBX export-on-save** — saving in Blender triggers a headless export so Unreal picks up changes without manual export.
- **Boot-time startup validation** — setup integrity is checked on editor start.
- **Import/reimport performance** — ~6× faster cold import from hashing fixes, plus a parallel warm pass.
