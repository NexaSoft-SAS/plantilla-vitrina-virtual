import { defineConfig } from "astro/config";
import react from "@astrojs/react";

import tailwind from "@astrojs/tailwind";
const isProd = process.env.NODE_ENV === "production";

// https://astro.build/config
export default defineConfig({
  prefetch: true,
  integrations: [react(), tailwind({
    // Allow writing nested CSS declarations alongside Tailwind's syntax
    nesting: true
  })],
  site: "https://nexasoft.github.io",
  base: "/astro-showcase"
});