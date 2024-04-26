import type { Config } from "tailwindcss";
import tailwindForms from "@tailwindcss/forms";
import tailwindAspectRatio from "@tailwindcss/aspect-ratio";
import tailwindTypography from "@tailwindcss/typography";
import tailwindContainerQueries from "@tailwindcss/container-queries";
import { iconsPlugin, getIconCollections } from "@egoist/tailwindcss-icons";
import { defaultExtractor as createDefaultExtractor } from "tailwindcss/lib/lib/defaultExtractor";
import { customSafelistExtractor, generateSafelist } from "./utils/colors";

const defaultExtractor = createDefaultExtractor({
  tailwindConfig: { separator: ":" },
});

const colors = [
  "slate",
  "gray",
  "zinc",
  "neutral",
  "stone",
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
];

export default <Partial<Config>>{
  plugins: [
    tailwindForms({ strategy: "class" }),
    tailwindAspectRatio,
    tailwindTypography(),
    tailwindContainerQueries,
    // require('@headlessui/tailwindcss'),
    iconsPlugin({ collections: getIconCollections(["heroicons"]) }),
  ],

  darkMode: "class",

  content: {
    files: [
      // "components/**/*.{vue,mjs,ts}",
    ],
    transform: {
      vue: (content) => {
        return content.replaceAll(/(?:\\r\\n|\\r|\\n)/g, " ");
      },
    },
    extract: {
      vue: (content) => {
        return [
          ...defaultExtractor(content),
          ...customSafelistExtractor("U", content, colors, ["primary"]),
        ];
      },
    },
  },
  safelist: generateSafelist(["primary"], colors),
};
