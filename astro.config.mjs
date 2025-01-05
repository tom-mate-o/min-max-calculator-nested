import { defineConfig } from "astro/config"
import svelte from "@astrojs/svelte"

// https://astro.build/config
export default defineConfig({
  site: "https://tom-mate-o.github.io",
  base: "/min-max-calculator-nested/",
  integrations: [svelte()],
})
