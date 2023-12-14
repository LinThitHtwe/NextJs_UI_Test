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
      },
      // keyframes: {
      //   "custom-pulse": {
      //     from: { opacity: 1 },
      //     to: { opacity: 0 },
      //   },
      // },
      // animation: {
      //   "custom-pulse": "animate-pulse 5s ease-in-out infinite",
      // },
    },
  },
  plugins: [],
};

export default config;
