import type { Metadata } from "next";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export const metadata: Metadata = {
    title: "Veille Technologique IA — Accélération Matérielle (NPU) | Alexandre Keolasy",
    description:
        "Veille technologique BTS SIO SLAM (épreuve E4) : l'essor des NPU (Neural Processing Units) et l'architecture hétérogène. Analyse des enjeux de l'IA locale et de l'accélération matérielle.",
    keywords: ["veille technologique", "BTS SIO", "NPU", "Neural Processing Unit", "IA locale", "Edge AI", "Alexandre Keolasy"],
    alternates: { canonical: "https://keolasy.dev/veille" },
    openGraph: {
        title: "Veille IA — Accélération Matérielle (NPU) | Alexandre Keolasy",
        description: "Veille BTS SIO sur les processeurs NPU et l'IA embarquée.",
        url: "https://keolasy.dev/veille",
    },
};

export default function VeilleLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
