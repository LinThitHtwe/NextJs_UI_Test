import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        text: "#fff",
        background: "#05070B",
        primary: "#437DB6",
        secondary: "#e1bb85",
        accent: "#7BCE78",
        "lightmode-text": "#080f16",
        "lightmode-background": "#f4f6fa",
        "lightmode-primary": "#4982bc",
        "lightmode-secondary": "#dbce9e",
        "lightmode-accent": "#7bce78",
      },
    },
  },
  plugins: [],
};

export default config;
