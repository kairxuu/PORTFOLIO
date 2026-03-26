import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Stage 2 Wyze Academy — Développeur Web Next.js | Alexandre Keolasy",
    description:
        "Stage de 2ème année BTS SIO SLAM chez Wyze Academy : refonte front-end en Next.js, React et Tailwind CSS, travail en équipe de stagiaires sur un projet complexe.",
    keywords: ["stage BTS SIO", "Wyze Academy", "Next.js", "React", "Tailwind CSS", "développeur front-end", "Alexandre Keolasy"],
    alternates: { canonical: "https://keolasy.dev/stage/stage2" },
    openGraph: {
        title: "Stage 2 Wyze Academy — Dev Web Next.js | Alexandre Keolasy",
        description: "Refonte front-end Next.js/React en équipe chez Wyze Academy.",
        url: "https://keolasy.dev/stage/stage2",
    },
};

export default function Stage2Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
