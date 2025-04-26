# Nuxt UI Starter - Nuxt UI v3 + Tailwind v4

## Info

- generated with `npx nuxi init -t ui`
- disabled [`features.inlineStyles`](https://nuxt.com/docs/guide/going-further/features#inlinestyles) and [`vite.build.cssCodeSplit`](https://vitejs.dev/config/build-options#build-csscodesplit) to have all CSS in one file
- adjusted content to match v2 starter (new `USelect` does more so this is not entirely fair)

## Results

CSS bundle size as reported by `pnpm generate`:

| name                            |      size |       increase |     gzip |         increase |
| :------------------------------ | --------: | -------------: | -------: | ---------------: |
| @nuxt/ui@2.18.4 starter         |  84.52 kB |                | 12.67 kB |                  |
| @nuxt/ui@3.1.0 modified starter | 119.69 kB | 35.17 / 41.6 % | 16.28 kB | 3.61 kB / 28.5 % |

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

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
