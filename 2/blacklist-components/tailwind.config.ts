import type { Config } from "tailwindcss";
import { resolve } from "pathe";

const nuxtUiPath = "node_modules/@nuxt/ui/dist/runtime/ui.config/";

export default <Partial<Config>>{
  // blacklist unused components
  // https://github.com/nuxt/ui/pull/930#issuecomment-1821398522
  content: {
    files: [
      "!" + resolve(nuxtUiPath + "data/table.mjs"),
      "!" + resolve(nuxtUiPath + "elements/accordion.mjs"),
      "!" + resolve(nuxtUiPath + "elements/alert.mjs"),
      "!" + resolve(nuxtUiPath + "elements/avatar.mjs"),
      "!" + resolve(nuxtUiPath + "elements/avatarGroup.mjs"),
      "!" + resolve(nuxtUiPath + "elements/badge.mjs"),
      // "!" + resolve(nuxtUiPath + "elements/button.mjs"),
      "!" + resolve(nuxtUiPath + "elements/buttonGroup.mjs"),
      "!" + resolve(nuxtUiPath + "elements/carousel.mjs"),
      "!" + resolve(nuxtUiPath + "elements/chip.mjs"),
      "!" + resolve(nuxtUiPath + "elements/dropdown.mjs"),
      "!" + resolve(nuxtUiPath + "elements/kbd.mjs"),
      "!" + resolve(nuxtUiPath + "elements/meter.mjs"),
      "!" + resolve(nuxtUiPath + "elements/meterGroup.mjs"),
      "!" + resolve(nuxtUiPath + "elements/progress.mjs"),
      "!" + resolve(nuxtUiPath + "forms/checkbox.mjs"),
      "!" + resolve(nuxtUiPath + "forms/formGroup.mjs"),
      // "!" + resolve(nuxtUiPath + "forms/input.mjs"),
      "!" + resolve(nuxtUiPath + "forms/inputMenu.mjs"),
      "!" + resolve(nuxtUiPath + "forms/radio.mjs"),
      "!" + resolve(nuxtUiPath + "forms/radioGroup.mjs"),
      "!" + resolve(nuxtUiPath + "forms/range.mjs"),
      // "!" + resolve(nuxtUiPath + "forms/select.mjs"),
      "!" + resolve(nuxtUiPath + "forms/selectMenu.mjs"),
      "!" + resolve(nuxtUiPath + "forms/textarea.mjs"),
      "!" + resolve(nuxtUiPath + "forms/toggle.mjs"),
      // "!" + resolve(nuxtUiPath + "layout/card.mjs"),
      // "!" + resolve(nuxtUiPath + "layout/container.mjs"),
      "!" + resolve(nuxtUiPath + "layout/divider.mjs"),
      "!" + resolve(nuxtUiPath + "layout/skeleton.mjs"),
      "!" + resolve(nuxtUiPath + "navigation/breadcrumb.mjs"),
      "!" + resolve(nuxtUiPath + "navigation/commandPalette.mjs"),
      "!" + resolve(nuxtUiPath + "navigation/horizontalNavigation.mjs"),
      "!" + resolve(nuxtUiPath + "navigation/pagination.mjs"),
      "!" + resolve(nuxtUiPath + "navigation/tabs.mjs"),
      "!" + resolve(nuxtUiPath + "navigation/verticalNavigation.mjs"),
      "!" + resolve(nuxtUiPath + "overlays/contextMenu.mjs"),
      "!" + resolve(nuxtUiPath + "overlays/modal.mjs"),
      "!" + resolve(nuxtUiPath + "overlays/notification.mjs"),
      "!" + resolve(nuxtUiPath + "overlays/notifications.mjs"),
      "!" + resolve(nuxtUiPath + "overlays/popover.mjs"),
      "!" + resolve(nuxtUiPath + "overlays/slideover.mjs"),
      "!" + resolve(nuxtUiPath + "overlays/tooltip.mjs"),
    ],
  },
};
