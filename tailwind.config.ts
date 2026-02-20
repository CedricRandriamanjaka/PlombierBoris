import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: "#1E3A5F",      /* bleu marine du logo (cercle, bandeau) */
          primary: "#FFD700",   /* jaune électrique vif – éclairs du logo */
          sky: "#FFE066",       /* reflets / jaune clair du logo */
          cta: "#FFD700",       /* boutons – même jaune que les éclairs */
          ctaHover: "#FFE066",
          soft: "#FFFDE7",      /* fond jaune très pâle (style reflets) */
          text: "#475569",
        },
      },
      boxShadow: { soft: "0 10px 30px rgba(2, 8, 23, 0.08)" },
    },
  },
  plugins: [],
} satisfies Config;
