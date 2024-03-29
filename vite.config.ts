import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vite";
import { webfontDownload } from "vite-plugin-webfont-dl";
import { enhancedImages } from "@sveltejs/enhanced-img";

export default defineConfig({
  plugins: [
    sveltekit(),
    webfontDownload(),
    enhancedImages(),
  ],
});
