import daisyui from "daisyui";
import Typography from "@tailwindcss/typography";
import Scrollbar from "tailwind-scrollbar";

/** @type {import("tailwindcss").Config} */
export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  plugins: [
    daisyui,
    Typography(),
    Scrollbar({
      nocompatible: true,
      preferredStrategy: "pseudoelements",
    }),
  ],
  future: {
    hoverOnlyWhenSupported: true,
  },
  daisyui: {
    themes: [
      {
        light: {
          primary: "#366aed",
          "primary-content": "#ffffff",
          secondary: "#000000",
          "secondary-content": "#ffffff",
          accent: "#366aed",
          "accent-content": "#ffffff",
          neutral: "#dcdcdc",
          "neutral-content": "#525252",
          "base-100": "#ffffff",
          "base-200": "#f5f5f7",
          "base-300": "#d9d9d9",
          "base-content": "#2c2c2c",

          "--rounded-box": "0.75rem",
          "--rounded-btn": "0.5rem",
          "--rounded-badge": "1.9rem",
          "--animation-btn": "0.25s",
          "--animation-input": "0.2s",
          "--btn-focus-scale": "0.95",
          "--border-btn": "1px",
          "--tab-border": "1px",
          "--tab-radius": "0.5rem",
        },
      },
    ],
  },
};
