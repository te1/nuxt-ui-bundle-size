import type { Config } from "tailwindcss";
import tailwindForms from "@tailwindcss/forms";
import tailwindAspectRatio from "@tailwindcss/aspect-ratio";
import tailwindTypography from "@tailwindcss/typography";
import tailwindContainerQueries from "@tailwindcss/container-queries";
import { iconsPlugin, getIconCollections } from "@egoist/tailwindcss-icons";
import { generateSafelist } from "./utils/colors";

const colors = [
  "red",
  "orange",
  "amber",
  "yellow",
  "lime",
  "green",
  "emerald",
  "teal",
  "cyan",
  "sky",
  "blue",
  "indigo",
  "violet",
  "purple",
  "fuchsia",
  "pink",
  "rose",
  "primary",
];

export default <Partial<Config>>{
  plugins: [
    tailwindForms({ strategy: "class" }),
    tailwindAspectRatio,
    tailwindTypography(),
    tailwindContainerQueries,
    iconsPlugin({ collections: getIconCollections(["heroicons"]) }),
  ],

  darkMode: "class",

  safelist: generateSafelist(["primary"], colors),
};
