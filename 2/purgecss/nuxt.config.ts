// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: ["nuxt-purgecss", "@nuxt/ui"],

  purgecss: {
    enabled: true, // enable in dev for easier testing
    // scan nuxt ui for classes
    // could optimize further by not scanning unused components
    content: ["node_modules/@nuxt/ui/dist/runtime/ui.config/**/*"],
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
