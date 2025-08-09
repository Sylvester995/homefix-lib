/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: { DEFAULT: "#053252", light: "#0E5E95", fg: "#ffffff" },
        ink: "#0F172A",
        muted: "#475569",
      },
      boxShadow: { card: "0 10px 30px rgba(2,8,23,.08)" },
      borderRadius: { mdx: "14px" },
    },
  },
  plugins: [],
};
