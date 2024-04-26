# nuxt-ui-bundle-size

Compare CSS bundle sizes for [Nuxt UI](https://ui.nuxt.com) with different strategies to minimize size.

## Results

As reported by `pnpm generate`:

| name                                                   |      size |             saved |     gzip |             saved |
| :----------------------------------------------------- | --------: | ----------------: | -------: | ----------------: |
| [default starter template](2/starter)                  | 271.97 kB |                   | 35.89 kB |                   |
| [blacklist unused components](2/blacklist-components/) | 223.55 kB | 48.42 kb / 17.8 % | 29.20 kB |  6.69 kb / 18.6 % |
| [disable dark mode](2/no-darkmode/)\*                  | 183.34 kB | 88.63 kb / 32.6 % | 27.15 kB |  8.74 kb / 24.4 % |
| [whitelist used colors](2/whitelist-colors/)           | 176.02 kB | 95.95 kb / 35.3 % | 22.45 kB | 13.44 kb / 37.4 % |

### Notes

- all tests use [nuxt@3.11.2](https://www.npmjs.com/package/nuxt/v/3.11.2) and [@nuxt/ui@2.15.2](https://www.npmjs.com/package/@nuxt/ui/v/2.15.2)
- (\*) disabling dark mode is not recommended as it can break Nuxt UI

## Related Issues

- https://github.com/nuxt/ui/issues/877
- https://github.com/nuxt/ui/issues/889
