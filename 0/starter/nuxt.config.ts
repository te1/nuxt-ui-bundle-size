// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/color-mode"],

  features: {
    inlineStyles: false,
  },

  vite: {
    build: {
      cssCodeSplit: false,

      rollupOptions: {
        output: {
          assetFileNames: "_nuxt/[name].[ext]",
        },
      },
    },
  },
});
