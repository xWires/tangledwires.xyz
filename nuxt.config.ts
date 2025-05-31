// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  extends: [
      "@xwires/wireui"
  ],
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxt/image",
    "@nuxtjs/plausible"
  ],
  css: [ "~/assets/css/main.css" ],
  app: {
    head: {
      script: [
        { src: "https://kit.fontawesome.com/2dd1bad15b.js", crossorigin: "anonymous" }
      ],
      htmlAttrs: {
        lang: 'en'
      },
      link: [
        {
          rel: 'icon',
          href: '/favicon.ico'
        }
      ]
    }
  },
  plausible: {
    apiHost: "https://analytics.tangledwires.xyz",
  },
})