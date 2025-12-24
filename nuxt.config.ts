// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/icon',
    '@nuxtjs/google-fonts'
  ],
  css: ['~/assets/css/main.css'],
  googleFonts: {
    families: {
      'Alegreya+Sans': {
        wght: [300, 400, 700],
        ital: [300]
      }
    },
    subsets: ['latin', 'latin-ext', 'cyrillic'],
    display: 'swap',
    download: true,
    inject: true
  }
})