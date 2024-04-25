import type { Config } from "tailwindcss";
import { resolve } from "pathe";

export default <Partial<Config>>{
  // https://github.com/nuxt/ui/pull/930#issuecomment-1821398522
  content: {
    files: [
      "!" + resolve("node_modules/@nuxt/ui/dist/runtime/ui.config/data/table.mjs"),
      "!" + resolve("node_modules/@nuxt/ui/dist/runtime/ui.config/elements/accordion.mjs"),
      "!" + resolve("node_modules/@nuxt/ui/dist/runtime/ui.config/elements/alert.mjs"),
      "!" + resolve("node_modules/@nuxt/ui/dist/runtime/ui.config/elements/avatar.mjs"),
      "!" + resolve("node_modules/@nuxt/ui/dist/runtime/ui.config/elements/avatarGroup.mjs"),
      "!" + resolve("node_modules/@nuxt/ui/dist/runtime/ui.config/elements/badge.mjs"),
      // "!" + resolve("node_modules/@nuxt/ui/dist/runtime/ui.config/elements/button.mjs"),
      "!" + resolve("node_modules/@nuxt/ui/dist/runtime/ui.config/elements/buttonGroup.mjs"),
      "!" + resolve("node_modules/@nuxt/ui/dist/runtime/ui.config/elements/carousel.mjs"),
      "!" + resolve("node_modules/@nuxt/ui/dist/runtime/ui.config/elements/chip.mjs"),
      "!" + resolve("node_modules/@nuxt/ui/dist/runtime/ui.config/elements/dropdown.mjs"),
      "!" + resolve("node_modules/@nuxt/ui/dist/runtime/ui.config/elements/kbd.mjs"),
      "!" + resolve("node_modules/@nuxt/ui/dist/runtime/ui.config/elements/meter.mjs"),
      "!" + resolve("node_modules/@nuxt/ui/dist/runtime/ui.config/elements/meterGroup.mjs"),
      "!" + resolve("node_modules/@nuxt/ui/dist/runtime/ui.config/elements/progress.mjs"),
      "!" + resolve("node_modules/@nuxt/ui/dist/runtime/ui.config/forms/checkbox.mjs"),
      "!" + resolve("node_modules/@nuxt/ui/dist/runtime/ui.config/forms/formGroup.mjs"),
      // "!" + resolve("node_modules/@nuxt/ui/dist/runtime/ui.config/forms/input.mjs"),
      "!" + resolve("node_modules/@nuxt/ui/dist/runtime/ui.config/forms/inputMenu.mjs"),
      "!" + resolve("node_modules/@nuxt/ui/dist/runtime/ui.config/forms/radio.mjs"),
      "!" + resolve("node_modules/@nuxt/ui/dist/runtime/ui.config/forms/radioGroup.mjs"),
      "!" + resolve("node_modules/@nuxt/ui/dist/runtime/ui.config/forms/range.mjs"),
      // "!" + resolve("node_modules/@nuxt/ui/dist/runtime/ui.config/forms/select.mjs"),
      "!" + resolve("node_modules/@nuxt/ui/dist/runtime/ui.config/forms/selectMenu.mjs"),
      "!" + resolve("node_modules/@nuxt/ui/dist/runtime/ui.config/forms/textarea.mjs"),
      "!" + resolve("node_modules/@nuxt/ui/dist/runtime/ui.config/forms/toggle.mjs"),
      // "!" + resolve("node_modules/@nuxt/ui/dist/runtime/ui.config/layout/card.mjs"),
      // "!" + resolve("node_modules/@nuxt/ui/dist/runtime/ui.config/layout/container.mjs"),
      "!" + resolve("node_modules/@nuxt/ui/dist/runtime/ui.config/layout/divider.mjs"),
      "!" + resolve("node_modules/@nuxt/ui/dist/runtime/ui.config/layout/skeleton.mjs"),
      "!" + resolve("node_modules/@nuxt/ui/dist/runtime/ui.config/navigation/breadcrumb.mjs"),
      "!" + resolve("node_modules/@nuxt/ui/dist/runtime/ui.config/navigation/commandPalette.mjs"),
      "!" + resolve("node_modules/@nuxt/ui/dist/runtime/ui.config/navigation/horizontalNavigation.mjs"),
      "!" + resolve("node_modules/@nuxt/ui/dist/runtime/ui.config/navigation/pagination.mjs"),
      "!" + resolve("node_modules/@nuxt/ui/dist/runtime/ui.config/navigation/tabs.mjs"),
      "!" + resolve("node_modules/@nuxt/ui/dist/runtime/ui.config/navigation/verticalNavigation.mjs"),
      "!" + resolve("node_modules/@nuxt/ui/dist/runtime/ui.config/overlays/contextMenu.mjs"),
      "!" + resolve("node_modules/@nuxt/ui/dist/runtime/ui.config/overlays/modal.mjs"),
      "!" + resolve("node_modules/@nuxt/ui/dist/runtime/ui.config/overlays/notification.mjs"),
      "!" + resolve("node_modules/@nuxt/ui/dist/runtime/ui.config/overlays/notifications.mjs"),
      "!" + resolve("node_modules/@nuxt/ui/dist/runtime/ui.config/overlays/popover.mjs"),
      "!" + resolve("node_modules/@nuxt/ui/dist/runtime/ui.config/overlays/slideover.mjs"),
      "!" + resolve("node_modules/@nuxt/ui/dist/runtime/ui.config/overlays/tooltip.mjs"),
    ],
  },
};