import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Stage 1 BXTTERFLY — Développeur Web Frontend | Alexandre Keolasy",
    description:
        "Stage de 1ère année BTS SIO SLAM chez BXTTERFLY (Saint-Ouen) : conception et développement d'un site e-commerce responsive en HTML5, CSS3 et JavaScript.",
    keywords: ["stage BTS SIO", "BXTTERFLY", "développeur web", "e-commerce", "HTML CSS JavaScript", "Alexandre Keolasy"],
    alternates: { canonical: "https://keolasy.dev/stage/stage1" },
    openGraph: {
        title: "Stage 1 BXTTERFLY — Dev Web | Alexandre Keolasy",
        description: "Stage front-end chez BXTTERFLY : e-commerce HTML/CSS/JS, responsive design.",
        url: "https://keolasy.dev/stage/stage1",
    },
};

export default function Stage1Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
