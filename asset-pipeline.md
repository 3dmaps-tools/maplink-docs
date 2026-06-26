# Asset Pipeline

Every asset entering Unreal through MapLink is identified by a filename prefix that selects its pipeline branch.

| Prefix | Type | Notes |
| --- | --- | --- |
| `LI_` | Level Instance | Full nested hierarchy replicated |
| `SM_` | Static Mesh only | No Blueprint, no child-actor components |
| `BP_` | Blueprint (reference) | Stand-in authored in Unreal, not Blender |
| `_GP` | Gameplay wrapper | Logic layer over a `BP_` asset |

## Asset Proxy

Each imported asset is backed by a MapLink proxy asset in Unreal. The proxy carries the asset's bridge metadata — its source `.blend`, World Partition target, and expansion settings — and is the object MapLink reimports against. You generally interact with it through the right-click context menu rather than editing it directly.

## LI Assets

`LI_` assets are Level Instances. MapLink replicates the complete nested collection hierarchy from the source `.blend`, including linked sub-assets, so a location authored in Blender arrives in Unreal with its full structure intact. Reimport rebuilds the instance from the current `.blend` state.

## LI Expansion

A Level Instance can be expanded into World Partition so its contents become first-class, streamable actors. Right-click the actor and choose **Expand into WP**; remove it with **Remove WP Expansion**. Expansion is depth-bounded — set the depth on the proxy to control how far nested `LI_` references are resolved. Expanded actors are tagged for tracking, cleaned up by composition, and re-expanded automatically after a reimport when needed.

## SM Assets

`SM_` assets import as Static Meshes only — no Blueprint, no child-actor component, no construction script. Meshes land under `/Meshes/` alongside their proxy. An `SM_` asset may reference other `SM_` assets, so both composite (multi-mesh) and leaf static meshes are supported, with the dependency graph applied across them.

## BP Stand-in

`BP_` assets run in reference mode. The stand-in is authored from the Unreal Content Browser rather than generated from Blender, which keeps gameplay-bearing Blueprints under Unreal's authority. Wrap gameplay logic in a matching `_GP` asset.

## Presets

Presets are reusable configurations stored in MapLink's flat library namespace (`MapLink_Presets`). Use them to apply a consistent setup across new assets without reconfiguring each one.
