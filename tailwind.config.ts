import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: "#0A2E57",
          primary: "#0B5ED7",
          sky: "#4DA3FF",
          cta: "#4CAF50",
          ctaHover: "#43a047",
          soft: "#f0f7ff",
          text: "#475569",
        },
      },
      boxShadow: { soft: "0 10px 30px rgba(2, 8, 23, 0.08)" },
    },
  },
  plugins: [],
} satisfies Config;
