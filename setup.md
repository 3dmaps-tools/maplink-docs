# Project Setup

MapLink uses **one setup per Unreal project**. Setup is driven by a single dialog with two fields:

| Field | Default | Purpose |
| --- | --- | --- |
| **Setup Name** | Unreal project name | Names the setup and its root `LI_` file |
| **Root** | `C:/MapLink/<SetupName>` | The `BlenderProjectRoot` for all `.blend` sources |

On confirm, MapLink:

1. Scaffolds the MapLink content root under `/Game/MapLink/`.
2. Creates an empty `LI_<SetupName>.blend` at the root.
3. Runs a first import immediately so the asset is live in the project.
4. Registers the asset so it appears in the **Reimport** menu.

All source paths are stored **relative** in the `maplink_project.json` manifest at the Blender root, so a setup can be relocated or shared without rewriting paths.
