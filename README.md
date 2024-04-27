# nuxt-ui-bundle-size

Compare CSS bundle sizes for [Nuxt UI](https://ui.nuxt.com) with different strategies to minimize size.

## Results

As reported by `pnpm generate`:

| name                                                   |      size |              saved |     gzip |             saved |
| :----------------------------------------------------- | --------: | -----------------: | -------: | ----------------: |
| [default starter template](2/starter)                  | 271.97 kB |                    | 35.89 kB |                   |
| [blacklist unused components](2/blacklist-components/) | 223.55 kB |  48.42 kB / 17.8 % | 29.20 kB |  6.69 kB / 18.6 % |
| [disable dark mode](2/no-darkmode/)\*                  | 183.34 kB |  88.63 kB / 32.6 % | 27.15 kB |  8.74 kB / 24.4 % |
| [whitelist used colors](2/whitelist-colors/)           | 176.02 kB |  95.95 kB / 35.3 % | 22.45 kB | 13.44 kB / 37.4 % |
| ["manual tree shaking"](0/starter/)\*\*                | 111.99 kB | 159.98 kB / 58.8 % | 13.25 kB | 22.64 kB / 63.1 % |
| [purgecss](2/purgecss/)\*\*\*                          |  61.37 kB | 210.60 kB / 77.4 % |  9.76 kB | 26.13 kB / 72.8 % |

### Notes

- all tests use [nuxt@3.11.2](https://www.npmjs.com/package/nuxt/v/3.11.2) and [@nuxt/ui@2.15.2](https://www.npmjs.com/package/@nuxt/ui/v/2.15.2)
- \* disabling dark mode is not recommended as it can break Nuxt UI
- \*\* "manual tree shaking" doesn't actually install Nuxt UI and is not a viable strategy for real projects
- \*\*\* [purgecss](https://github.com/FullHuman/purgecss) seems very effective but can lead to hard to find problems
  - if you have it disabled during local dev (the default) you might not even see problems until you deploy
  - if you enable it during local dev it can slow down your HMR
  - you might need to manually add classes to the `safelist` to avoid breaking things
  - and/or try and reuse the [smart safelisting](https://ui.nuxt.com/getting-started/theming#smart-safelisting) logic from Nuxt UI

## Related Issues

- https://github.com/nuxt/ui/issues/877
- https://github.com/nuxt/ui/issues/889
