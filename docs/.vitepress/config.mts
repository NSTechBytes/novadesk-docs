import { defineConfig } from 'vitepress'
import { tabsMarkdownPlugin } from 'vitepress-plugin-tabs'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Novadesk Docs',
  description: 'Complete documentation for Novadesk',

  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['link', { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' }],
    ['link', { rel: 'manifest', href: '/site.webmanifest' }]
  ],

  vue: {
    template: {
      compilerOptions: {
        whitespace: 'preserve'
      }
    }
  },

  vite: {
    ssr: {
      noExternal: ['vitepress-component-medium-zoom']
    }
  },

  markdown: {
    config(md) {
      md.use(tabsMarkdownPlugin)
    }
  },

  themeConfig: {
    logo: '/logo.svg',

    search: {
      provider: 'local'
    },

    nav: [
      { text: 'Home', link: '/' },
      { text: 'Introduction', link: '/introduction/getting-started' },
      { text: 'API', link: '/api/app-object/utility-methods' },
      { text: 'Guides', link: '/guides/script-types' },
    ],

    sidebar: [
      {
        text: 'Introduction',
        collapsed: false,
        items: [
          { text: 'Getting Started', link: '/introduction/getting-started' },
          { text: 'Installation', link: '/introduction/installation' },
          { text: 'Creating First Widget', link: '/introduction/creating-first-widget' },
        ]
      },

      {
        text: 'API Reference',
        collapsed: false,
        items: [

          {
            text: 'UI Elements API',
            collapsed: true,
            items: [
              { text: 'General Elements Options', link: '/api/ui-elements-api/general-elements-options' },
              { text: 'Bar Element', link: '/api/ui-elements-api/bar-element' },
              { text: 'Shape Element', link: '/api/ui-elements-api/shape-element' },
              { text: 'Image Element', link: '/api/ui-elements-api/image-element' },
              { text: 'RoundLine Element', link: '/api/ui-elements-api/roundline-element' },
              { text: 'Text Element', link: '/api/ui-elements-api/text-element' },
            ]
          },

          {
            text: 'Widget API',
            collapsed: true,
            items: [
              { text: 'Widget Methods', link: '/api/widget-api/widget-methods' },
            ]
          },

          { text: 'Console Logging', link: '/api/logging' },
          { text: 'Global Variables', link: '/api/global-variables' },

          {
            text: 'Modules',
            collapsed: true,
            link: '/api/modules/modules',
            items: [
              {
                text: 'Built-in Modules',
                collapsed: true,
                items: [
                  { text: 'addon', link: '/api/modules/built-in-modules/addon' },
                  { text: 'app-volume', link: '/api/modules/built-in-modules/app-volume' },
                  { text: 'app', link: '/api/modules/built-in-modules/app' },
                  { text: 'audio-level-monitor', link: '/api/modules/built-in-modules/audio-level-monitor' },
                  { text: 'audio', link: '/api/modules/built-in-modules/audio' },
                  { text: 'brightness', link: '/api/modules/built-in-modules/brightness' },
                  { text: 'clipper', link: '/api/modules/built-in-modules/clipper' },
                  { text: 'cpu-monitor', link: '/api/modules/built-in-modules/cpu-monitor' },
                  { text: 'display-metrics', link: '/api/modules/built-in-modules/display-metrics' },
                  { text: 'disk-monitor', link: '/api/modules/built-in-modules/disk-monitor' },
                  { text: 'env-variables', link: '/api/modules/built-in-modules/env-variables' },
                  { text: 'execute', link: '/api/modules/built-in-modules/execute' },
                  { text: 'file-icon', link: '/api/modules/built-in-modules/file-icon' },
                  { text: 'hotkeys', link: '/api/modules/built-in-modules/hotkeys' },
                  { text: 'json', link: '/api/modules/built-in-modules/json' },
                  { text: 'memory-monitor', link: '/api/modules/built-in-modules/memory-monitor' },
                  { text: 'mouse-monitor', link: '/api/modules/built-in-modules/mouse-monitor' },
                  { text: 'network-monitor', link: '/api/modules/built-in-modules/network-monitor' },
                  { text: 'now-playing-monitor', link: '/api/modules/built-in-modules/now-playing-monitor' },
                  { text: 'path', link: '/api/modules/built-in-modules/path' },
                  { text: 'power', link: '/api/modules/built-in-modules/power' },
                  { text: 'registry', link: '/api/modules/built-in-modules/registry' },
                  { text: 'wallpaper', link: '/api/modules/built-in-modules/wallpaper' },
                  { text: 'web-fetch', link: '/api/modules/built-in-modules/web-fetch' },
                  { text: 'widget-window', link: '/api/modules/built-in-modules/widget-window' },
                ]
              }
            ]
          },

          { text: 'Timers', link: '/api/timers' },

        ]
      },

      {
        text: 'Guides',
        collapsed: false,
        items: [
          { text: 'Script Types', link: '/guides/script-types' },
          { text: 'Time And Date', link: '/guides/time' },
          { text: 'CLI Commands', link: '/guides/cli-commands' },
          { text: 'Runtime Mode', link: '/guides/runtime-mode' },
          { text: 'Widget Build And Installer', link: '/guides/widget-build-and-installer' },
          { text: 'Containers', link: '/guides/containers' },
          { text: 'Colors', link: '/guides/colors' },
          { text: 'Color Matrix Guide', link: '/guides/color-matrix-guide' },
          { text: 'Transform Matrix Guide', link: '/guides/transform-matrix-guide' },
        ]
      },

      {
        text: 'Developer Resources',
        collapsed: true,
        items: [
          { text: 'Addon API', link: '/developers/api/addon-api' },
        ]
      },

      {
        text: 'Changelog',
        link: '/changelogs/CHANGELOG'
      }

    ],

    socialLinks: [
      { icon: 'github', link: 'https://novadesk.pages.dev/' }
    ]

  }

})