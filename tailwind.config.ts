import type { Config } from "tailwindcss"

const config: Config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        // 定義主題色系
        primary: {
          DEFAULT: "#0033A0", // 陽明交大藍
          foreground: "#FFFFFF",
        },
        secondary: {
          DEFAULT: "#666666",
          foreground: "#FFFFFF",
        },
      },
    },
  },
  plugins: [],
}

export default config