import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#FAF8F4",
        charcoal: "#2B2B28",
        sage: {
          DEFAULT: "#B4C7B8",
          50: "#EEF3EF",
          700: "#3A4A3C",
          800: "#2F4A33",
        },
        dustyblue: {
          DEFAULT: "#A9C1D9",
          50: "#EAF1F7",
          800: "#1F3A52",
        },
        sand: {
          DEFAULT: "#E9DCC8",
          800: "#5C4526",
        },
        terracotta: {
          DEFAULT: "#C1694F",
          600: "#A8543D",
        },
      },
      fontFamily: {
        serif: ["var(--font-dm-serif)", "Georgia", "serif"],
        sans: ["var(--font-dm-sans)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 20px 60px rgba(15, 23, 42, 0.08)",
      },
      letterSpacing: {
        tighter: "-0.03em",
      },
    },
  },
  plugins: [],
};

export default config;
