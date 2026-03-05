import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { GlassCard } from "@/components/ui/GlassCard";
import { GlassButton } from "@/components/ui/GlassButton";
import Link from "next/link";
import { ArrowRight, FileText, Code2, Database } from "lucide-react";

export const metadata = {
    title: "PPE 1 - Alexandre KEOLASY | Étudiant BTS SIO",
    description: "Présentation détaillée du Projet Personnel Encadré (PPE 1) réalisé en BTS SIO Option SLAM. Focus sur les bases du développement et de la gestion de projet.",
};

export default function PPE1Page() {
    return (
        <main className="min-h-screen bg-background flex flex-col">
            <Header />

            <section className="pt-40 pb-20 px-6 md:px-12 xl:px-24 max-w-7xl mx-auto w-full">
                <h2 className="text-sm font-semibold text-foreground-secondary tracking-widest uppercase mb-4">Parcours Académique</h2>
                <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-foreground mb-8">
                    PPE 1 (Projets Personnels Encadrés).
                </h1>
                <p className="text-xl md:text-3xl text-foreground-secondary max-w-4xl font-light leading-relaxed">
                    Première immersion dans la réalisation de projets informatiques concrets. Analyse, conception et réalisation de solutions logicielles en réponse à des besoins spécifiques.
                </p>
                <div className="w-full h-px bg-glass-border mt-20" />
            </section>

            <section className="px-6 md:px-12 max-w-7xl mx-auto w-full pb-32">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <GlassCard className="p-8 md:p-12">
                        <div className="w-14 h-14 rounded-2xl bg-white border border-glass-border flex items-center justify-center mb-8 shadow-sm">
                            <Code2 className="w-6 h-6 text-foreground" />
                        </div>
                        <h3 className="text-2xl font-bold text-foreground mb-4">Objectifs Techniques</h3>
                        <p className="text-foreground-secondary font-light leading-relaxed mb-6">
                            Apprentissage des bases du développement logiciel, de la manipulation de données et de la mise en place d'interfaces utilisateurs simples mais fonctionnelles.
                        </p>
                        <ul className="space-y-3">
                            {["Algorithmique fondamentale", "Langages de programmation de base", "Conception d'IHM"].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-foreground-secondary text-sm font-medium">
                                    <div className="w-1.5 h-1.5 rounded-full bg-foreground/20" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </GlassCard>

                    <GlassCard className="p-8 md:p-12">
                        <div className="w-14 h-14 rounded-2xl bg-white border border-glass-border flex items-center justify-center mb-8 shadow-sm">
                            <Database className="w-6 h-6 text-foreground" />
                        </div>
                        <h3 className="text-2xl font-bold text-foreground mb-4">Gestion de Projet</h3>
                        <p className="text-foreground-secondary font-light leading-relaxed mb-6">
                            Introduction aux méthodes de travail structurées, de l'analyse du cahier des charges à la livraison finale du produit.
                        </p>
                        <ul className="space-y-3">
                            {["Analyse du besoin", "Modélisation des données", "Documentation technique"].map((item, i) => (
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
                    <h2 className="text-3xl font-bold text-foreground mb-8">Consulter les autres PPE</h2>
                    <div className="flex justify-center gap-6">
                        <Link href="/ppe/ppe2">
                            <GlassButton className="px-10 h-14 rounded-full text-base flex items-center gap-2">
                                Voir PPE 2 <ArrowRight className="w-4 h-4 ml-2" />
                            </GlassButton>
                        </Link>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
