import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { GlassCard } from "@/components/ui/GlassCard";
import { GlassButton } from "@/components/ui/GlassButton";
import Link from "next/link";
import { ArrowRight, Layers, Smartphone, Zap } from "lucide-react";

export const metadata = {
    title: "PPE 2 - Alexandre KEOLASY | Étudiant BTS SIO",
    description: "Présentation approfondie du Projet Personnel Encadré (PPE 2). Focus sur l'architecture logicielle, l'optimisation et les enjeux du développement web moderne en BTS SIO.",
};

export default function PPE2Page() {
    return (
        <main className="min-h-screen bg-background flex flex-col">
            <Header />

            <section className="pt-40 pb-20 px-6 md:px-12 xl:px-24 max-w-7xl mx-auto w-full">
                <h2 className="text-sm font-semibold text-foreground-secondary tracking-widest uppercase mb-4">Parcours Académique</h2>
                <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-foreground mb-8">
                    PPE 2 (Projets Personnels Encadrés).
                </h1>
                <p className="text-xl md:text-3xl text-foreground-secondary max-w-4xl font-light leading-relaxed">
                    Approfondissement des compétences en développement et conception d'applications plus complexes, incluant des aspects de connectivité, de sécurité et d'optimisation.
                </p>
                <div className="w-full h-px bg-glass-border mt-20" />
            </section>

            <section className="px-6 md:px-12 max-w-7xl mx-auto w-full pb-32">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <GlassCard className="p-8">
                        <div className="w-14 h-14 rounded-2xl bg-white border border-glass-border flex items-center justify-center mb-8 shadow-sm">
                            <Layers className="w-6 h-6 text-foreground" />
                        </div>
                        <h4 className="text-xl font-bold text-foreground mb-4">Architecture Complexe</h4>
                        <p className="text-foreground-secondary leading-relaxed font-light">
                            Mise en place d'architectures n-tiers et séparation des préoccupations pour une meilleure maintenabilité.
                        </p>
                    </GlassCard>

                    <GlassCard className="p-8">
                        <div className="w-14 h-14 rounded-2xl bg-white border border-glass-border flex items-center justify-center mb-8 shadow-sm">
                            <Zap className="w-6 h-6 text-foreground" />
                        </div>
                        <h4 className="text-xl font-bold text-foreground mb-4">Optimisation</h4>
                        <p className="text-foreground-secondary leading-relaxed font-light">
                            Amélioration des performances et de la sécurité des échanges de données.
                        </p>
                    </GlassCard>

                    <GlassCard className="p-8">
                        <div className="w-14 h-14 rounded-2xl bg-white border border-glass-border flex items-center justify-center mb-8 shadow-sm">
                            <Smartphone className="w-6 h-6 text-foreground" />
                        </div>
                        <h4 className="text-xl font-bold text-foreground mb-4">Multi-plateforme</h4>
                        <p className="text-foreground-secondary leading-relaxed font-light">
                            Conception d'interfaces adaptatives et enjeux du développement web moderne.
                        </p>
                    </GlassCard>
                </div>
            </section>

            <section className="w-full border-t border-glass-border py-32 bg-background-secondary/10">
                <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
                    <h2 className="text-3xl font-bold text-foreground mb-8">Retourner au PPE 1</h2>
                    <div className="flex justify-center gap-6">
                        <Link href="/ppe/ppe1">
                            <GlassButton className="px-10 h-14 rounded-full text-base flex items-center gap-2">
                                <ArrowRight className="w-4 h-4 mr-2 rotate-180" /> Voir PPE 1
                            </GlassButton>
                        </Link>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
