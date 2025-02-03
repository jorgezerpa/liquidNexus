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
        background: "var(--background)",
        backgroundSecondary: "var(--background-secondary)",
        foreground: "var(--foreground)",
        primaryGreen: {
          light: "var(--primaryGreen-light)",
          dark: "var(--primaryGreen-dark)"
        },
        title:"var(--text-title)"
      },
    },
  },
  plugins: [],
};
export default config;
