# Nuxt UI CSS Bundle Size Comparison

Compare CSS bundle sizes for [Nuxt UI](https://ui.nuxt.com) with different strategies to minimize size.

## Updated Results with @nuxt/ui@2.18.4

CSS bundle size as reported by `pnpm generate`:

| name                        |     size |           saved |     gzip |           saved |
| :-------------------------- | -------: | --------------: | -------: | --------------: |
| default starter template    | 84.52 kB |                 | 12.67 kB |                 |
| blacklist unused components | 84.52 kB | 0.00 kB / 0.0 % | 12.67 kB | 0.00 kB / 0.0 % |
| whitelist used colors       | 76.44 kB | 8.08 kB / 9.6 % | 11.60 kB | 1.07 kB / 8.4 % |
| whitelist and blacklist     | 76.44 kB | 8.08 kB / 9.6 % | 11.60 kB | 1.07 kB / 8.4 % |

## Conclusion

- [Nuxt UI v2.18.4](https://github.com/nuxt/ui/releases/tag/v2.18.4) includes a very effective fix to reduce CSS bundle size
- see the [PR](https://github.com/nuxt/ui/pull/2005) by [yuzh2001](https://github.com/yuzh2001) for details
- on the default starter template this yields 69% savings (uncompressed) and 65% when using gzip
- manually blacklisting unused components is no longer necessary/helpful
- manually whitelisting used colors yields 9% savings (gzip) now (was 37% before the fix)

| name                    |      size |              saved |     gzip |             saved |
| :---------------------- | --------: | -----------------: | -------: | ----------------: |
| @nuxt/ui@2.15.2 starter | 271.97 kB |                    | 35.89 kB |                   |
| @nuxt/ui@2.18.4 starter |  84.52 kB | 187.45 kB / 68.9 % | 12.67 kB | 23.22 kB / 64.7 % |

## Original Results With @nuxt/ui@2.15.2

CSS bundle size as reported by `pnpm generate`:

| name                                                                |      size |              saved |     gzip |             saved |
| :------------------------------------------------------------------ | --------: | -----------------: | -------: | ----------------: |
| [default starter template](2/starter)                               | 271.97 kB |                    | 35.89 kB |                   |
| [blacklist unused components](2/blacklist-components/)              | 223.55 kB |  48.42 kB / 17.8 % | 29.20 kB |  6.69 kB / 18.6 % |
| [disable dark mode](2/no-darkmode/)\*                               | 183.34 kB |  88.63 kB / 32.6 % | 27.15 kB |  8.74 kB / 24.4 % |
| [whitelist used colors](2/whitelist-colors/)                        | 176.02 kB |  95.95 kB / 35.3 % | 22.45 kB | 13.44 kB / 37.4 % |
| [whitelist and blacklist](2/whitelist-colors-blacklist-components/) | 127.60 kB | 144.37 kB / 53.1 % | 15.60 kB | 20.29 kB / 56.3 % |
| ["manual tree shaking"](0/starter/)\*\*                             | 111.99 kB | 159.98 kB / 58.8 % | 13.25 kB | 22.64 kB / 63.1 % |
| [purgecss](2/purgecss/)\*\*\*                                       |  61.37 kB | 210.60 kB / 77.4 % |  9.76 kB | 26.13 kB / 72.8 % |

### Notes

- all tests use [nuxt@3.11.2](https://www.npmjs.com/package/nuxt/v/3.11.2) and [@nuxt/ui@2.15.2](https://www.npmjs.com/package/@nuxt/ui/v/2.15.2)
- all tests use the default Nuxt UI template which contains these components
  - `UContainer`
  - `UCard`
  - `USelect`
  - `UButton`
- this is very minimal so real apps will likely see larger bundle sizes
- \* disabling dark mode is not recommended as it can break Nuxt UI
- \*\* "manual tree shaking" doesn't actually install Nuxt UI and is not a viable strategy for real projects
- \*\*\* [purgecss](https://github.com/FullHuman/purgecss) seems very effective but can lead to hard to find problems
  - if you have it disabled during local dev (the default) you might not even see problems until you deploy
  - if you enable it during local dev it can slow down your HMR
  - you might need to manually add classes to the `safelist` to avoid breaking things
  - case in point: hover styles are broken in this demo
  - I tried to reuse the [smart safelisting](https://ui.nuxt.com/getting-started/theming#smart-safelisting) logic from Nuxt UI
  - purgecss supports safelisting by regex `pattern` but you still would need to manually consider the tailwind `variants`
  - https://tailwindcss.com/docs/content-configuration#safelisting-classes
  - https://purgecss.com/safelisting.html#patterns

## Conclusion

- combine a whitelist of used colors with a blacklist of unused components
- this is relatively straightforward to do and has manageable risks
- see [example project](2/whitelist-colors-blacklist-components/) for details

## Related Issues

- https://github.com/nuxt/ui/issues/877
- https://github.com/nuxt/ui/issues/889

## The Future

- [Tailwind v4 Vite plugin](https://tailwindcss.com/blog/tailwindcss-v4-alpha#zero-configuration-content-detection) should make blacklisting unused components obsolete
- [Nuxt UI v3](https://github.com/nuxt/ui/issues/1289) should improve safelisting of colors
