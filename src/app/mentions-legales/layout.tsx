import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mentions légales | AlloElectricienboris",
  description: "Mentions légales et politique de confidentialité du site alloelectricienboris.fr",
};

export default function MentionsLegalesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
