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
          primary: "#E31E24",
          "primary-hover": "#C91A1F",
          "primary-dark": "#9E1418",
          "primary-light": "#FBD1D2",
          "primary-50": "#FEF2F2",
          secondary: "#2B3582",
          "secondary-deep": "#1F265E",
          "secondary-light": "#3A46A6",
          "secondary-subtle": "#4F5AC4",
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
        card: "0 10px 30px -5px rgba(43, 53, 130, 0.08)",
        "card-hover": "0 20px 40px -10px rgba(227, 30, 36, 0.18)",
        float: "0 12px 36px 0 rgba(43, 53, 130, 0.12)",
        primary: "0 8px 25px -4px rgba(227, 30, 36, 0.35)",
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
