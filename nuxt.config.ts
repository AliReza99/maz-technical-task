import tailwindcss from '@tailwindcss/vite'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxt/eslint', '@nuxtjs/i18n', '@nuxt/image'],
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['~/assets/styles/main.css'],
  runtimeConfig: {
    apiBaseUrl: '',
  },
  image: {
    domains: ['fakestoreapi.com'],
    ipx: { maxAge: 60 * 60 * 24 * 30 },
  },
  vite: {
    plugins: [tailwindcss()],
  },
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      htmlAttrs: {
        class: 'antialiased',
      },
    },
  },
  i18n: {
    defaultLocale: 'fa',
    strategy: 'no_prefix',
    locales: [
      { code: 'fa', language: 'fa-IR', name: 'فارسی', dir: 'rtl', file: 'fa.json' },
      { code: 'en', language: 'en-US', name: 'English', file: 'en.json' },
    ],
    detectBrowserLanguage: false,
  },
})
