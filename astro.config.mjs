import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import UnoCSS from "unocss/astro";

export default defineConfig({
  // used to generate images

  site:
    process.env.npm_lifecycle_script === "astro build"
      ? "https://si-ma-yi.github.io/blog"
      : "https://localhost:3001/",
  base: process.env.npm_lifecycle_script === "astro build" ? "/blog" : "",

  trailingSlash: "ignore",
  integrations: [sitemap(), UnoCSS({ injectReset: true })],
  build: {
    assets: "_astro",
    assetsPrefix: "https://si-ma-yi.github.io/blog",
  },
});
