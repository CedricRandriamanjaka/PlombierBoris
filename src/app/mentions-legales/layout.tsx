import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mentions légales | Monsieur Boris",
  description: "Mentions légales et politique de confidentialité du site plombierboris.fr",
};

export default function MentionsLegalesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
