# Nuxt UI Minimal Starter

## Info

- generated with `npx nuxi init -t ui`
- disabled [`features.inlineStyles`](https://nuxt.com/docs/guide/going-further/features#inlinestyles) and [`vite.build.cssCodeSplit`](https://vitejs.dev/config/build-options#build-csscodesplit) to have all CSS in one file
- [disabled dark mode](https://github.com/nuxt/ui/issues/877#issuecomment-1965839333)
- note: this has some gotchas and I would not recommend it (it breaks parts of Nuxt UI if you still have `class="dark"` applied)
- see [tailwind.config.ts](tailwind.config.ts) and [nuxt.config.ts](nuxt.config.ts)

```ts
import type { Config } from "tailwindcss";

export default <Partial<Config>>{
  // disable dark mode
  // https://github.com/nuxt/ui/issues/877#issuecomment-1965839333
  darkMode: [],
};
```

```ts
export default defineNuxtConfig({
  // default to light mode
  colorMode: {
    preference: "light",
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
