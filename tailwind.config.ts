import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}", // Next.js (App Router)
  ],
  theme: {
    fontFamily: {
      sans: ["var(--font-inter)"],
      display: ["var(--font-dosis)"],
    }
  },
  plugins: [],
};

export default config;
