// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      htmlAttrs: {
        lang: 'en'
      },
      charset: 'UTF-8',
      viewport: 'width=device-width, initial-scale=1.0'
    }
  },
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    [
      '@nuxtjs/robots',
      {
        UserAgent: '*',
        Disallow: '',
        BlankLine: true
      }
    ],
    [
      '@nuxtjs/eslint-module',
      {
        lintOnStart: false
      }
    ]
  ],
  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
    configPath: 'tailwind.config.js',
    exposeConfig: false,
    viewer: true
  }
})
