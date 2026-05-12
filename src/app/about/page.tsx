import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { GlassCard } from "@/components/ui/GlassCard";
import Link from "next/link";
import { GlassButton } from "@/components/ui/GlassButton";
import { ArrowRight, Terminal, Layers, Figma, Database } from "lucide-react";

export const metadata = {
    title: "Mon Parcours — BTS SIO SLAM | Alexandre Keolasy",
    description:
        "Découvrez le parcours d'Alexandre Keolasy, étudiant en BTS SIO option SLAM. Passionné par le développement web avec Next.js, React, Next.js, C# et SQL Server.",
    keywords: ["Alexandre Keolasy", "BTS SIO SLAM", "parcours développeur web", "étudiant informatique"],
    alternates: { canonical: "https://keolasy.dev/about" },
    openGraph: {
        title: "Parcours d'Alexandre Keolasy — BTS SIO SLAM",
        description: "De la curiosité technique à la maîtrise du développement web : Next.js, C#, SQL.",
        url: "https://keolasy.dev/about",
    },
};

const stack = [
    { icon: Terminal, title: "Core Front-End", items: ["React", "Next.js", "JavaScript (ES6+)"] },
    { icon: Layers, title: "Styling & UI", items: ["Tailwind CSS", "Framer Motion", "GSAP", "Radix UI"] },
    { icon: Database, title: "Architecture & Data", items: ["Zustand", "Redux", "React Query", "REST / GraphQL"] },
    { icon: Figma, title: "Design & Process", items: ["Figma", "Git / GitHub", "Vercel", "CI/CD"] },
];

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-background flex flex-col">
            <Header />

            {/* Editorial Header */}
            <section className="pt-40 pb-20 px-6 md:px-12 xl:px-24 max-w-7xl mx-auto w-full">
                <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-foreground mb-8">
                    Mon Parcours.
                </h1>
                <p className="text-xl md:text-3xl text-foreground-secondary max-w-4xl font-light leading-relaxed">
                    De la rigueur mathématique à la création d'expériences numériques immersives.
                </p>
                <div className="w-full h-px bg-glass-border mt-20" />
            </section>

            {/* Biography Split Section */}
            <section className="px-6 md:px-12 max-w-7xl mx-auto w-full pb-32">
                <div className="flex flex-col gap-16 items-start max-w-4xl mx-auto">
                    {/* Text Content */}
                    <div className="w-full flex flex-col justify-center pt-4">
                        <h2 className="text-sm font-semibold text-foreground-secondary tracking-widest uppercase mb-8">Parcours</h2>
                        <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-8 tracking-tight leading-snug">
                            De la curiosité technique à la maîtrise du développement web.
                        </h3>

                        <div className="space-y-6 text-foreground-secondary text-lg font-light leading-relaxed">
                            <p>
                                Passionné par les nouvelles technologies, j'ai choisi de m'orienter vers un <strong>BTS SIO</strong> (Services Informatiques aux Organisations) pour concrétiser mon intérêt pour la création numérique.
                            </p>
                            <p>
                                Au cours de ma formation, j'ai découvert une réelle vocation pour le développement, et plus particulièrement pour l'écosystème <strong>JavaScript</strong>. Cette spécialisation m'a permis de comprendre comment articuler logique backend et interfaces frontend intuitives.
                            </p>
                            <p>
                                Ma participation aux <strong>PPE</strong> (Projets Personnels Encadrés) a été un tournant majeur. Ces projets m'ont permis de mettre en pratique mes connaissances dans des contextes concrets, en apprenant à structurer mes développements et à travailler de manière autonome et rigoureuse.
                            </p>
                            <p>
                                Aujourd'hui, je continue d'explorer les frameworks modernes comme <strong>Next.js</strong> pour construire des applications toujours plus performantes et centrées sur l'expérience utilisateur, tout en approfondissant mes bases en génie logiciel.
                            </p>
                        </div>
                    </div>

                </div>
            </section>


            {/* Final CTA */}
            <section className="w-full border-t border-glass-border py-20 bg-background-secondary/30">
                <div className="max-w-3xl mx-auto px-6 text-center">
                    <h2 className="text-3xl font-bold text-foreground mb-6">Consulter mes travaux</h2>
                    <Link href="/ppe/ppe1" className="inline-block mt-4">
                        <GlassButton className="px-10 h-14 rounded-full text-base flex items-center gap-2">
                            Voir mes PPE <ArrowRight className="w-4 h-4 ml-2" />
                        </GlassButton>
                    </Link>
                </div>
            </section>

            <Footer />
        </main>
    );
}
