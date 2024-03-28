import daisyui from "daisyui";
import Typography from "@tailwindcss/typography";
import Scrollbar from "tailwind-scrollbar";

/** @type {import("tailwindcss").Config} */
export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {},
  },
  plugins: [
    daisyui,
    Typography(),
    Scrollbar({
      preferredStrategy: "pseudoelements",
      nocompatible: true,
    }),
  ],
  future: {
    hoverOnlyWhenSupported: true
  },
  daisyui: {
    themes: [
      {
        dark: {
          "primary": "#7e6bc9",
          "primary-content": "white",
          "secondary": "#523ff4",
          "secondary-content": "white",
          "accent": "#7e6bc9",
          "neutral": "#3f3f3f",
          "base-100": "#0f0f0f",
          "base-200": "#272727",
          "base-300": "#ababab",
          "base-content": "white",

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
}

