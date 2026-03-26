import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "PPE 2 FixIT — Application C# SQL Server | Alexandre Keolasy",
  description:
    "PPE 2 BTS SIO : application desktop C# connectée à SQL Server pour la gestion des interventions informatiques. CRUD, historique, Windows Forms — réalisé seul en 2025.",
  keywords: ["PPE 2", "FixIT", "BTS SIO", "C#", "SQL Server", "Windows Forms", "Alexandre Keolasy"],
  alternates: { canonical: "https://keolasy.dev/ppe/ppe2" },
  openGraph: {
    title: "PPE 2 FixIT — App C# SQL Server | Alexandre Keolasy",
    description: "Application de gestion d'interventions informatiques en C#/.NET et SQL Server.",
    url: "https://keolasy.dev/ppe/ppe2",
  },
};

export default function PPE2Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
