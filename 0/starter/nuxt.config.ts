// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  features: {
    inlineStyles: false,
  },

  vite: {
    build: {
      cssCodeSplit: false,
    },
  },
});
