import webfontDownload from "vite-plugin-webfont-dl";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";

export default {
    plugins: [
        webfontDownload(),
        ViteImageOptimizer(),
    ],
};