# nuxt-ui-bundle-size

Compare CSS bundle sizes for [Nuxt UI](https://ui.nuxt.com) with different strategies to minimize size.

## Results

As reported by `pnpm generate`:

| name                                                   |      size |             saved |     gzip |            saved |
| ------------------------------------------------------ | --------: | ----------------: | -------: | ---------------: |
| [default starter template](2/starter)                  | 271.97 kB |                 0 | 35.89 kB |                0 |
| [blacklist unused components](2/blacklist-components/) | 223.55 kB | 48.42 kb / 17.8 % | 29.20 kB | 6.69 kb / 18.6 % |

## Related Issues

- https://github.com/nuxt/ui/issues/877
- https://github.com/nuxt/ui/issues/889
