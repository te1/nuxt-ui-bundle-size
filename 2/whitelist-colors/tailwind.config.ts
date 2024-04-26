import type { Config } from "tailwindcss";
import colors from "tailwindcss/colors";

export default <Partial<Config>>{
  // https://github.com/nuxt/ui/issues/802#issuecomment-1784023421
  // https://tailwindcss.com/docs/customizing-colors#using-the-default-colors
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      white: colors.white,
      red: colors.red,
      lime: colors.lime,
      neutral: colors.neutral,
    },
  },
};
