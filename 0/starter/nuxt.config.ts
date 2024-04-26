// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: ["nuxt-icon", "@nuxtjs/tailwindcss", "@nuxtjs/color-mode"],

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

  tailwindcss: {
    exposeConfig: true,
    config: { darkMode: "class" },
  },

  colorMode: {
    classSuffix: "",
  },
});
