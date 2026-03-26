import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Veille Technologique IA — Agents Autonomes | Alexandre Keolasy",
    description:
        "Veille technologique BTS SIO SLAM (épreuve E4) : l'automatisation des agents IA. AutoGPT, LangChain, LLMs — analyse des enjeux, outils et risques des IA autonomes.",
    keywords: ["veille technologique", "BTS SIO", "agents IA", "AutoGPT", "LangChain", "intelligence artificielle", "Alexandre Keolasy"],
    alternates: { canonical: "https://keolasy.dev/veille" },
    openGraph: {
        title: "Veille IA — Agents Autonomes | Alexandre Keolasy",
        description: "Veille BTS SIO sur les agents IA autonomes : AutoGPT, LangChain, LLMs.",
        url: "https://keolasy.dev/veille",
    },
};

export default function VeilleLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
