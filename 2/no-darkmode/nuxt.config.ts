// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: ["@nuxt/ui"],

  // default to light mode
  colorMode: {
    preference: "light",
  },

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
