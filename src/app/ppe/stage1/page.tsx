import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { GlassCard } from "@/components/ui/GlassCard";
import { GlassButton } from "@/components/ui/GlassButton";
import Link from "next/link";
import { ArrowRight, Briefcase, Users, Target } from "lucide-react";

export const metadata = {
    title: "Stage 1 - Alexandre KEOLASY | Étudiant BTS SIO",
    description: "Présentation de mon stage de première année en BTS SIO (Services Informatiques aux Organisations). Immersion professionnelle et premières expériences.",
};

export default function Stage1Page() {
    return (
        <main className="min-h-screen bg-background flex flex-col">
            <Header />

            <section className="pt-40 pb-20 px-6 md:px-12 xl:px-24 max-w-7xl mx-auto w-full">
                <h2 className="text-sm font-semibold text-foreground-secondary tracking-widest uppercase mb-4">Expérience Professionnelle</h2>
                <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-foreground mb-8">
                    Stage de Première Année.
                </h1>
                <p className="text-xl md:text-3xl text-foreground-secondary max-w-4xl font-light leading-relaxed">
                    Découverte du monde de l'entreprise et intégration au sein d'une équipe technique. Mise en pratique des acquis théoriques du BTS SIO.
                </p>
                <div className="w-full h-px bg-glass-border mt-20" />
            </section>

            <section className="px-6 md:px-12 max-w-7xl mx-auto w-full pb-32">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <GlassCard className="p-8 md:p-12">
                        <div className="w-14 h-14 rounded-2xl bg-white border border-glass-border flex items-center justify-center mb-8 shadow-sm">
                            <Briefcase className="w-6 h-6 text-foreground" />
                        </div>
                        <h3 className="text-2xl font-bold text-foreground mb-4">Missions & Réalisations</h3>
                        <p className="text-foreground-secondary font-light leading-relaxed mb-6">
                            Participation active aux projets de l'entreprise. Adaptation aux outils de travail et à l'environnement technologique de l'organisation.
                        </p>
                        <ul className="space-y-3">
                            {["Développement de fonctionnalités simples", "Résolution de bugs", "Documentation"].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-foreground-secondary text-sm font-medium">
                                    <div className="w-1.5 h-1.5 rounded-full bg-foreground/20" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </GlassCard>

                    <GlassCard className="p-8 md:p-12">
                        <div className="w-14 h-14 rounded-2xl bg-white border border-glass-border flex items-center justify-center mb-8 shadow-sm">
                            <Users className="w-6 h-6 text-foreground" />
                        </div>
                        <h3 className="text-2xl font-bold text-foreground mb-4">Compétences Humaines</h3>
                        <p className="text-foreground-secondary font-light leading-relaxed mb-6">
                            Développement du savoir-être en milieu professionnel. Apprentissage du travail en équipe et de la communication interne.
                        </p>
                        <ul className="space-y-3">
                            {["Travail collaboratif", "Respect des échéances", "Écoute et adaptation"].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-foreground-secondary text-sm font-medium">
                                    <div className="w-1.5 h-1.5 rounded-full bg-foreground/20" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </GlassCard>
                </div>
            </section>

            <section className="w-full border-t border-glass-border py-32 bg-background-secondary/10">
                <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
                    <h2 className="text-3xl font-bold text-foreground mb-8">Voir mon second stage</h2>
                    <div className="flex justify-center gap-6">
                        <Link href="/ppe/stage2">
                            <GlassButton className="px-10 h-14 rounded-full text-base flex items-center gap-2">
                                Stage 2 <ArrowRight className="w-4 h-4 ml-2" />
                            </GlassButton>
                        </Link>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
