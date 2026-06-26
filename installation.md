# Installation

## Unreal plugin

1. Install MapLink from FAB, or copy the `MapLink/` folder into your project's `Plugins/` directory.
2. Launch the project. If prompted to rebuild, accept.
3. Enable **MapLink** under *Edit → Plugins* if it is not already active, and restart the editor.

The plugin is project-portable: it runs on any customer project and is not tied to a specific test project.

## Blender addon

1. In Blender, open *Edit → Preferences → Add-ons → Install*.
2. Select the MapLink addon zip and enable it.
3. Restart Blender once after first install.

Keep the plugin and addon versions matched. The Blender addon version (`bl_info`) is tracked independently of the Unreal plugin version and only changes when the Blender side changes.
