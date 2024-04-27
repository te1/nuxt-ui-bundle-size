# Nuxt UI Minimal Starter

## Info

- generated with `npx nuxi init -t ui`
- disabled [`features.inlineStyles`](https://nuxt.com/docs/guide/going-further/features#inlinestyles) and [`vite.build.cssCodeSplit`](https://vitejs.dev/config/build-options#build-csscodesplit) to have all CSS in one file
- uses [Nuxt UI v3](https://github.com/benjamincanac/ui3) which is not ready yet
- manual changes are necessary to get it to work (not part of this repo)
- doesn't have `<USelect>` yet, so we use `<UInput>` for now
- uses [Tailwind v4 alpha](https://github.com/tailwindlabs/tailwindcss) which doesn't support the `darkMode` strategy configuration yet
- so this is missing features and a bundle size comparison is not really fair and objective

## Results

As reported by `pnpm generate`:

| name                                  |      size |              saved |     gzip |             saved |
| :------------------------------------ | --------: | -----------------: | -------: | ----------------: |
| [default starter template](2/starter) | 271.97 kB |                    | 35.89 kB |                   |
| Nuxt UI v3 + Tailwind v4 alpha        |  96.01 kB | 175.96 kB / 64.7 % | 15.39 kB | 20.50 kB / 57.1 % |

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
