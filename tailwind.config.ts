import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: { extend: { colors: { ink: "#111111", charcoal: "#1B1B1B", paper: "#F7F7F5", mist: "#E9E9E7", stone: "#888888" }, fontFamily: { sans: ["var(--font-dm-sans)"], serif: ["var(--font-playfair)"] } } },
  plugins: []
};
export default config;
