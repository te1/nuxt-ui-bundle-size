# Nuxt 3 Minimal Starter

## Info

- generated with `npx nuxi init`
- disabled [`features.inlineStyles`](https://nuxt.com/docs/guide/going-further/features#inlinestyles) and [`vite.build.cssCodeSplit`](https://vitejs.dev/config/build-options#build-csscodesplit) to have all CSS in one file
- apply "manual tree shaking"
- this doesn't actually install [Nuxt UI](https://ui.nuxt.com)
- instead the project contains the source code for the used components directly
- this is similar to the approach taken by [shadcn/ui](https://ui.shadcn.com)
- this ensures that only used components are included
- this could also be achived by using a better / more aggressive `content` blacklist in [tailwind.config.ts](tailwind.config.ts)
- see [blacklist-components](../../2/blacklist-components/) for comparision
- the main savings come from modifying `generateSafelist` in [utils/colors.ts](utils/colors.ts) to reduce the size of the safelist
- a big chunk of this optimization could also be achieved by whitelisting used colors in [tailwind.config.ts](tailwind.config.ts)
- see [whitelist-colors](../../2/whitelist-colors/) for comparision
- this is not a viable strategy for real projects

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
