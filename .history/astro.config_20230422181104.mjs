import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/serverless";

import svelte from "@astrojs/svelte";

import sitemap from "@astrojs/sitemap";
import partytown from "@astrojs/partytown";

// https://astro.build/config
export default defineConfig({
  // ...
  site: "https://fittrend.dev",
  integrations: [tailwind(), svelte(), sitemap(), partytown()],
  output: "server",
  adapter: vercel()
});