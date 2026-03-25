import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — Alexandre Keolasy, Développeur Web BTS SIO",
  description:
    "Contactez Alexandre Keolasy pour une offre de stage, d'alternance ou un projet freelance. Étudiant BTS SIO SLAM basé à Paris, disponible pour toute opportunité.",
  keywords: ["contact", "stage", "alternance", "développeur web", "BTS SIO", "Alexandre Keolasy", "Paris"],
  alternates: { canonical: "https://keolasy.dev/contact" },
  openGraph: {
    title: "Contacter Alexandre Keolasy — Développeur Web",
    description: "Stage, alternance ou projet freelance — écrivez à Alexandre Keolasy.",
    url: "https://keolasy.dev/contact",
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
