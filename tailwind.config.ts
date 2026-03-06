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
        f: {
          bg:      "#f8f4ef",
          bg2:     "#f0ebe3",
          card:    "#ffffff",
          teal:    "#4aada0",
          tealD:   "#35877b",
          silver:  "#c8c0d0",
          gold:    "#b8902a",
          goldL:   "#d4a840",
          navy:    "#1e2030",
          navyM:   "#3a3d52",
          muted:   "#7a7590",
          lavender:"#a09ab8",
        },
      },
      fontFamily: {
        cinzel: ["var(--font-cinzel)", "serif"],
        lato:   ["var(--font-lato)", "sans-serif"],
      },
      animation: {
        "spin-slow":   "spin 30s linear infinite",
        "spin-slow-r": "spin 40s linear infinite reverse",
        "float":       "floatY 8s ease-in-out infinite",
        "float2":      "floatY 10s ease-in-out infinite 3s",
      },
      keyframes: {
        floatY: {
          "0%,100%": { transform: "translateY(0)" },
          "50%":     { transform: "translateY(-14px)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
