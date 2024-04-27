# Nuxt UI Minimal Starter

## Info

- generated with `npx nuxi init -t ui`
- disabled [`features.inlineStyles`](https://nuxt.com/docs/guide/going-further/features#inlinestyles) and [`vite.build.cssCodeSplit`](https://vitejs.dev/config/build-options#build-csscodesplit) to have all CSS in one file
- [manually whitelisted](https://github.com/nuxt/ui/issues/802#issuecomment-1784023421) used colors
- [manually blacklisted](https://github.com/nuxt/ui/pull/930#issuecomment-1821398522) unused componentes
- note: some components depend on each other
  - example: if you use `USelect` you would remove `forms/select.mjs` from the blacklist
  - but you also need to remove `forms/input.mjs` from the blacklist
- see [tailwind.config.ts](tailwind.config.ts)

```ts
import type { Config } from "tailwindcss";
import colors from "tailwindcss/colors";
import { resolve } from "pathe";

const nuxtUiPath = "node_modules/@nuxt/ui/dist/runtime/ui.config/";

export default <Partial<Config>>{
  // whitelist used colors
  // https://github.com/nuxt/ui/issues/802#issuecomment-1784023421
  // https://tailwindcss.com/docs/customizing-colors#using-the-default-colors
  theme: {
    colors: {
      // internal single colors
      inherit: colors.inherit,
      current: colors.current,
      transparent: colors.transparent,
      black: colors.black,
      white: colors.white,

      // used for red outlines (validation)
      red: colors.red,

      // colors defined in app.config.ts
      lime: colors.lime, // ui.primary
      neutral: colors.neutral, // ui.gray
    },
  },

  // blacklist unused components
  // https://github.com/nuxt/ui/pull/930#issuecomment-1821398522
  content: {
    files: [
      "!" + resolve(nuxtUiPath + "data/table.mjs"),
      "!" + resolve(nuxtUiPath + "elements/accordion.mjs"),
      // ...
    ],
  },
};
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
