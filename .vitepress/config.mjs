import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'MapLink',
  description: 'Blender to Unreal Engine 5 bridge for accurate location authoring',
  base: '/maplink-docs/',

  themeConfig: {
    logo: '/logo.svg',

    nav: [
      { text: 'Documentation', link: '/' },
      { text: 'Changelog', link: '/changelog' },
    ],

    sidebar: [
      {
        text: 'Getting Started',
        items: [
          { text: 'Overview', link: '/' },
          { text: 'Installation', link: '/installation' },
          { text: 'Project Setup', link: '/setup' },
        ]
      },
      {
        text: 'Core Concepts',
        items: [
          { text: 'Asset Pipeline', link: '/asset-pipeline' },
          { text: 'Materials', link: '/materials' },
          { text: 'Manager Window', link: '/manager' },
        ]
      },
      {
        text: 'Resources',
        items: [
          { text: 'Project Samples', link: '/samples' },
          { text: 'Changelog', link: '/changelog' },
        ]
      }
    ],

    socialLinks: [],

    search: {
      provider: 'local'
    },

    footer: {
      message: 'MapLink — Blender to UE5 bridge',
    }
  }
})
