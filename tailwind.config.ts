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
        brand: {
          pink: "#E91E73",
          "pink-hover": "#D81B60",
          "pink-dark": "#C2185B",
          "pink-light": "#FCE4EC",
          "pink-50": "#FDF2F8",
          purple: "#17002F",
          "purple-deep": "#100021",
          "purple-light": "#2A0845",
          "purple-subtle": "#3B0764",
          dark: "#171717",
          gray: "#555555",
          "gray-light": "#F8F9FA",
          "gray-border": "#E5E7EB",
        },
      },
      fontFamily: {
        sans: ["var(--font-plus-jakarta)", "sans-serif"],
        display: ["var(--font-outfit)", "sans-serif"],
        body: ["var(--font-plus-jakarta)", "sans-serif"],
      },
      boxShadow: {
        card: "0 10px 30px -5px rgba(23, 0, 47, 0.08)",
        "card-hover": "0 20px 40px -10px rgba(233, 30, 115, 0.18)",
        float: "0 12px 36px 0 rgba(23, 0, 47, 0.12)",
        pink: "0 8px 25px -4px rgba(233, 30, 115, 0.35)",
      },
      borderRadius: {
        "3xl": "1.5rem",
        "4xl": "2rem",
      },
    },
  },
  plugins: [],
};
export default config;
