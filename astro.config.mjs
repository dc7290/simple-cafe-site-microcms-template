import { defineConfig } from "astro/config";
import preact from "@astrojs/preact";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import robotsTxt from "astro-robots-txt";
import prefetch from "@astrojs/prefetch";
import svelte from "@astrojs/svelte";
import image from "@astrojs/image";
import partytown from "@astrojs/partytown";

// https://astro.build/config
export default defineConfig({
  site: import.meta.env.PUBLIC_SITE_URL,
  integrations: [
    preact(),
    tailwind(),
    sitemap(),
    robotsTxt(),
    prefetch(),
    svelte({}),
    image(),
    partytown({
      config: {
        forward: ["dataLayer.push"],
      },
    }),
  ],
});
