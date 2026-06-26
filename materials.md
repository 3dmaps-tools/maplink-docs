# Materials

MapLink is **Unreal-authoritative** for material definitions. Blender is a lightweight consumer of those materials; authoring and edits happen in Unreal.

## MapLink Shading

MapLink ships two sibling material libraries — `Library_MaterialInstances.blend` and `Library_MaterialInstances_PBR.blend`. A global toggle swaps the linked library so the Blender scene previews either the standard or PBR shading set, while the Unreal definitions remain the source of truth.

## Material Parent

Each Material Instance resolves to a parent material identified by a stable GUID, with the name used as a secondary check. This keeps instances bound to the right parent even if assets are renamed or moved.

## Material Instances

Material Instances live under the canonical path `/Game/MapLink/MaterialInstances/` and are edited in place. Import and export support two modes:

- **Full (bundled)** — the instance and its textures travel together.
- **Lean (manifest-reference)** — the instance references shared textures via the manifest, avoiding duplication.

Writes are atomic, and the shared library is regenerated once per operation rather than per asset.

## Texture Conform

The Texture Conform tool normalizes textures used by an instance. It is MD5-gated, so unchanged textures are skipped and only genuinely modified ones are reprocessed.
