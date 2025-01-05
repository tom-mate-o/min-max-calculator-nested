import { defineConfig } from "astro/config"
import svelte from "@astrojs/svelte"

export default defineConfig({
  site: "https://tom-mate-o.github.io",
  base: "/min-max-calculator-nested",
  integrations: [svelte()],
  build: {
    assets: "_astro",
  },
  vite: {
    build: {
      assetsDir: "_astro",
    },
  },
})
