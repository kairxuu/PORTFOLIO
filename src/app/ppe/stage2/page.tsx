import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { GlassCard } from "@/components/ui/GlassCard";
import { GlassButton } from "@/components/ui/GlassButton";
import Link from "next/link";
import { ArrowRight, Trophy, TrendingUp, Settings } from "lucide-react";

export const metadata = {
    title: "Stage 2 - Alexandre KEOLASY | Étudiant BTS SIO",
    description: "Présentation de mon stage de deuxième année en BTS SIO Option SLAM. Gain en autonomie, gestion de projet et montée en compétences techniques.",
};

export default function Stage2Page() {
    return (
        <main className="min-h-screen bg-background flex flex-col">
            <Header />

            <section className="pt-40 pb-20 px-6 md:px-12 xl:px-24 max-w-7xl mx-auto w-full">
                <h2 className="text-sm font-semibold text-foreground-secondary tracking-widest uppercase mb-4">Expérience Professionnelle</h2>
                <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-foreground mb-8">
                    Stage de Deuxième Année.
                </h1>
                <p className="text-xl md:text-3xl text-foreground-secondary max-w-4xl font-light leading-relaxed">
                    Montée en compétences et responsabilités accrues. Gestion d'un projet de bout en bout et affirmation de mon profil de développeur au sein de l'organisation.
                </p>
                <div className="w-full h-px bg-glass-border mt-20" />
            </section>

            <section className="px-6 md:px-12 max-w-7xl mx-auto w-full pb-32">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <GlassCard className="p-8">
                        <div className="w-14 h-14 rounded-2xl bg-white border border-glass-border flex items-center justify-center mb-8 shadow-sm">
                            <TrendingUp className="w-6 h-6 text-foreground" />
                        </div>
                        <h4 className="text-xl font-bold text-foreground mb-4">Autonomie</h4>
                        <p className="text-foreground-secondary leading-relaxed font-light">
                            Prise en charge de tâches complexes avec une supervision réduite. Capacité à être force de proposition.
                        </p>
                    </GlassCard>

                    <GlassCard className="p-8">
                        <div className="w-14 h-14 rounded-2xl bg-white border border-glass-border flex items-center justify-center mb-8 shadow-sm">
                            <Settings className="w-6 h-6 text-foreground" />
                        </div>
                        <h4 className="text-xl font-bold text-foreground mb-4">Technicité</h4>
                        <p className="text-foreground-secondary leading-relaxed font-light">
                            Utilisation de technologies avancées, optimisation du code existant et mise en place de bonnes pratiques.
                        </p>
                    </GlassCard>

                    <GlassCard className="p-8">
                        <div className="w-14 h-14 rounded-2xl bg-white border border-glass-border flex items-center justify-center mb-8 shadow-sm">
                            <Trophy className="w-6 h-6 text-foreground" />
                        </div>
                        <h4 className="text-xl font-bold text-foreground mb-4">Livrables</h4>
                        <p className="text-foreground-secondary leading-relaxed font-light">
                            Livraison d'un produit fini, fonctionnel et répondant aux exigences du cahier des charges initial.
                        </p>
                    </GlassCard>
                </div>
            </section>

            <section className="w-full border-t border-glass-border py-32 bg-background-secondary/10">
                <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
                    <h2 className="text-3xl font-bold text-foreground mb-8">Retourner au Stage 1</h2>
                    <div className="flex justify-center gap-6">
                        <Link href="/ppe/stage1">
                            <GlassButton className="px-10 h-14 rounded-full text-base flex items-center gap-2">
                                <ArrowRight className="w-4 h-4 mr-2 rotate-180" /> Stage 1
                            </GlassButton>
                        </Link>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
