import "./globals.css";
import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Urgence Plomberie à proximité | Monsieur Boris",
  description: "Plombier 24/7 – Intervention rapide 7J/7 et 24H/24. Devis gratuit.",
  icons: {
    icon: "/img/logo-contour-289x300.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-16981022545"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-16981022545');
          `}
        </Script>
        {children}
      </body>
    </html>
  );
}
