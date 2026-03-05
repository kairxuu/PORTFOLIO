import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { GlassCard } from "@/components/ui/GlassCard";
import { GlassButton } from "@/components/ui/GlassButton";
import Link from "next/link";
import { ArrowRight, Database, History, Monitor } from "lucide-react";

export const metadata = {
    title: "PPE 2 : FixIT - Alexandre KEOLASY | Étudiant BTS SIO",
    description: "Présentation du projet FixIT (PPE 2) : une application C# de manipulation de base de données reliée à SQL Server.",
};

export default function PPE2Page() {
    return (
        <main className="min-h-screen bg-background flex flex-col">
            <Header />

            <section className="pt-40 pb-20 px-6 md:px-12 xl:px-24 max-w-7xl mx-auto w-full">
                <h2 className="text-sm font-semibold text-foreground-secondary tracking-widest uppercase mb-4">Projet Personnel Encadré (PPE 2)</h2>
                <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-foreground mb-8">
                    FixIT.
                </h1>
                <p className="text-xl md:text-3xl text-foreground-secondary max-w-4xl font-light leading-relaxed mb-6">
                    Application de bureau développée en C# pour la gestion et la manipulation d'une base de données relationnelle SQL Server.
                </p>
                <div className="flex flex-wrap gap-3 mt-8">
                    <span className="px-4 py-2 rounded-full bg-white/5 border border-glass-border text-sm text-foreground-secondary font-medium">C#</span>
                    <span className="px-4 py-2 rounded-full bg-white/5 border border-glass-border text-sm text-foreground-secondary font-medium">Visual Studio</span>
                    <span className="px-4 py-2 rounded-full bg-white/5 border border-glass-border text-sm text-foreground-secondary font-medium">SQL Server</span>
                    <span className="px-4 py-2 rounded-full bg-white/5 border border-glass-border text-sm text-foreground-secondary font-medium">SSMS</span>
                </div>
                <div className="w-full h-px bg-glass-border mt-20" />
            </section>

            <section className="px-6 md:px-12 max-w-7xl mx-auto w-full pb-32">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <GlassCard className="p-8">
                        <div className="w-14 h-14 rounded-2xl bg-white border border-glass-border flex items-center justify-center mb-8 shadow-sm">
                            <Monitor className="w-6 h-6 text-foreground" />
                        </div>
                        <h4 className="text-xl font-bold text-foreground mb-4">Interface et Manipulation</h4>
                        <p className="text-foreground-secondary leading-relaxed font-light">
                            Conception d'une interface utilisateur intuitive sous Visual Studio permettant l'interaction directe et la manipulation des données.
                        </p>
                    </GlassCard>

                    <GlassCard className="p-8">
                        <div className="w-14 h-14 rounded-2xl bg-white border border-glass-border flex items-center justify-center mb-8 shadow-sm">
                            <Database className="w-6 h-6 text-foreground" />
                        </div>
                        <h4 className="text-xl font-bold text-foreground mb-4">Base de Données Reliée</h4>
                        <p className="text-foreground-secondary leading-relaxed font-light">
                            Intégration d'un système de gestion de base de données via SQL Server (SSMS) pour garantir l'intégrité et la permanence des informations.
                        </p>
                    </GlassCard>

                    <GlassCard className="p-8">
                        <div className="w-14 h-14 rounded-2xl bg-white border border-glass-border flex items-center justify-center mb-8 shadow-sm">
                            <History className="w-6 h-6 text-foreground" />
                        </div>
                        <h4 className="text-xl font-bold text-foreground mb-4">Suivi et Historique</h4>
                        <p className="text-foreground-secondary leading-relaxed font-light">
                            Fonctionnalité clé d'historisation permettant le suivi détaillé des personnes, des équipements (devices) et des dates d'interventions.
                        </p>
                    </GlassCard>
                </div>
            </section>

            <section className="w-full border-t border-glass-border py-32 bg-background-secondary/10">
                <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
                    <h2 className="text-3xl font-bold text-foreground mb-8">Découvrir les autres projets</h2>
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
