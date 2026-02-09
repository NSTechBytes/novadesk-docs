// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import './style.css'
import { enhanceAppWithTabs } from 'vitepress-plugin-tabs/client'
import { LiteTree } from '@lite-tree/vue'
import BackToTopButton from '@miletorix/vitepress-back-to-top-button' 
import '@miletorix/vitepress-back-to-top-button/style.css'

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    })
  },
  enhanceApp({ app, router, siteData }) {
    enhanceAppWithTabs(app)
    app.component('LiteTree', LiteTree)
    BackToTopButton(app, {
      progressColor: '#3f4152', 
    }) //[!code ++]
  }
} satisfies Theme
