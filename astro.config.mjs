// @ts-check
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://odeloic.com",
  output: "static",
  markdown: {
    shikiConfig: {
      theme: "github-dark",
      wrap: true,
    },
  },
});
