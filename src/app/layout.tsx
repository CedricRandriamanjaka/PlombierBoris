import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Urgence Plomberie à proximité | Monsieur Boris",
  description: "Plombier 24/7 – Intervention rapide 7J/7 et 24H/24. Devis gratuit.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
