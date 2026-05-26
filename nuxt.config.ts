// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    x402: {
      receivingWallet: process.env.X402_RECEIVING_WALLET || '',
      facilitatorUrl: process.env.X402_FACILITATOR_URL || 'https://x402.org/facilitator',
      network: process.env.X402_NETWORK || 'eip155:84532',
      articlePrice: process.env.X402_ARTICLE_PRICE || '$0.001'
    }
  },

  app: {
    head: {
      htmlAttrs: {
        lang: 'en'
      },
      charset: 'UTF-8',
      viewport: 'width=device-width, initial-scale=1.0',
      link: [
        {
          rel: 'preconnect',
          href: 'https://fonts.googleapis.com'
        },
        {
          rel: 'preconnect',
          href: 'https://fonts.gstatic.com',
          crossorigin: ''
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@500;600;700&family=Inter:wght@400;500;600;700;800;900&display=swap'
        }
      ]
    }
  },

  devtools: { enabled: true },

  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/content',
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
  },

  compatibilityDate: '2024-11-16'
})
