import type { Config } from "tailwindcss";
import colors from "tailwindcss/colors";

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
};
