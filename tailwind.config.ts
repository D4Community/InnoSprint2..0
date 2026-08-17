import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          red: "#FF3B30",
          charcoal: "#2B2B36",
          dark: "#18181B",
          yellow: "#FDE047",
          teal: "#26A192",
          blue: "#81A2EF",
          cream: "#FAF9F5",
        },
      },
      boxShadow: {
        brutal: "4px 4px 0px 0px #18181B",
        "brutal-lg": "6px 6px 0px 0px #18181B",
        "brutal-xl": "8px 8px 0px 0px #18181B",
        "brutal-red": "5px 5px 0px 0px #FF3B30",
        "brutal-yellow": "5px 5px 0px 0px #FDE047",
        "brutal-white": "4px 4px 0px 0px #FFFFFF",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;