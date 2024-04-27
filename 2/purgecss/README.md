# Nuxt UI Minimal Starter - PurgeCSS

## Info

- generated with `npx nuxi init -t ui`
- disabled [`features.inlineStyles`](https://nuxt.com/docs/guide/going-further/features#inlinestyles) and [`vite.build.cssCodeSplit`](https://vitejs.dev/config/build-options#build-csscodesplit) to have all CSS in one file
- installed [nuxt-purgecss](https://github.com/Developmint/nuxt-purgecss)
- if you get an error about `consola` named import then [pin version 3](https://github.com/nuxt/nuxt/issues/20209#issuecomment-1517575112)
- [purgecss](https://github.com/FullHuman/purgecss) seems very effective but can lead to hard to find problems
  - if you have it disabled during local dev (the default) you might not even see problems until you deploy
  - if you enable it during local dev it can slow down your HMR
  - you might need to manually add classes to the `safelist` to avoid breaking things
  - case in point: hover styles are broken in this demo
  - I tried to reuse the [smart safelisting](https://ui.nuxt.com/getting-started/theming#smart-safelisting) logic from Nuxt UI
  - purgecss supports safelisting by regex `pattern` but you still would need to manually consider the tailwind `variants`
  - https://tailwindcss.com/docs/content-configuration#safelisting-classes
  - https://purgecss.com/safelisting.html#patterns
- see [nuxt.config.ts](nuxt.config.ts)

```ts
export default defineNuxtConfig({
  modules: ["nuxt-purgecss", "@nuxt/ui"],

  purgecss: {
    enabled: true, // enable in dev for easier testing
    // scan nuxt ui for classes
    // could optimize further by not scanning unused components
    content: ["node_modules/@nuxt/ui/dist/runtime/ui.config/**/*"],
  },
});
```

## Setup

Make sure to install the dependencies:

```bash
pnpm install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
pnpm run dev
```

## Production

Generate CSS at [`.output/public/_nuxt/style.css`](.output/public/_nuxt/style.css):

```bash
pnpm run generate
```
