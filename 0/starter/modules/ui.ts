import { createRequire } from "node:module";
import { addTemplate, defineNuxtModule, createResolver } from "nuxt/kit";
import { setGlobalColors } from "../utils/colors";
import type { Strategy } from "../types/utils";

const _require = createRequire(import.meta.url);
const defaultColors = _require("tailwindcss/colors.js");

delete defaultColors.lightBlue;
delete defaultColors.warmGray;
delete defaultColors.trueGray;
delete defaultColors.coolGray;
delete defaultColors.blueGray;

type UI = {
  primary?: string;
  gray?: string;
  colors?: string[];
  strategy?: Strategy;
  [key: string]: any;
};

declare module "nuxt/schema" {
  interface AppConfigInput {
    // @ts-ignore
    ui?: UI;
  }
}
declare module "@nuxt/schema" {
  interface AppConfigInput {
    // @ts-ignore
    ui?: UI;
  }
}

export default defineNuxtModule({
  meta: {
    name: "ui",
    configKey: "ui",
  },
  defaults: {
    prefix: 'U',
    icons: ['heroicons'],
    safelistColors: ['primary'],
    disableGlobalStyles: false
  },
  async setup(options, nuxt) {
    const { resolve } = createResolver(import.meta.url);

    if (!options.disableGlobalStyles) {
      nuxt.options.css.push(resolve("../assets/ui.css"));
    }

    createTemplates(nuxt);

    await installTailwind(nuxt);
  },
});

async function installTailwind(nuxt) {
  // @ts-ignore
  nuxt.hook("tailwindcss:config", function (tailwindConfig) {
    tailwindConfig.theme = tailwindConfig.theme || {};
    tailwindConfig.theme.extend = tailwindConfig.theme.extend || {};
    tailwindConfig.theme.extend.colors =
      tailwindConfig.theme.extend.colors || {};

    const colors = setGlobalColors(tailwindConfig.theme);

    // @ts-ignore
    nuxt.options.appConfig.ui = {
      primary: "green",
      gray: "cool",
      colors,
      strategy: "merge",
    };
  });
}

function createTemplates(nuxt) {
  const template = addTemplate({
    filename: "ui.colors.mjs",
    getContents: () =>
      `export default ${JSON.stringify(nuxt.options.appConfig.ui.colors)};`,
    write: true,
  });
  const typesTemplate = addTemplate({
    filename: "ui.colors.d.ts",
    getContents: () =>
      `declare module '#ui-colors' { const defaultExport: ${JSON.stringify(
        nuxt.options.appConfig.ui.colors
      )}; export default defaultExport; }`,
    write: true,
  });

  nuxt.options.alias["#ui-colors"] = template.dst;

  nuxt.hook("prepare:types", (opts) => {
    opts.references.push({ path: typesTemplate.dst });
  });
}
