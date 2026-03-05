import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { GlassCard } from "@/components/ui/GlassCard";
import { GlassButton } from "@/components/ui/GlassButton";
import Link from "next/link";
import { ArrowRight, Code2, Users, Calendar, MapPin, User, CheckCircle2, Rocket, RotateCcw } from "lucide-react";

export const metadata = {
    title: "Stage 2 - Wyze Academy | Alexandre KEOLASY",
    description: "Stage de 2ème année : Développeur front-end pour la refonte du site de Wyze Academy.",
};

export default function Stage2Page() {
    return (
        <main className="min-h-screen bg-background flex flex-col">
            <Header />

            {/* Hero Section */}
            <section className="pt-40 pb-20 px-6 md:px-12 xl:px-24 max-w-7xl mx-auto w-full">
                <h2 className="text-sm font-semibold text-foreground-secondary tracking-widest uppercase mb-4">Stage de 2ème année BTS SIO</h2>
                <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-foreground mb-6">
                    Wyze Academy<span className="text-foreground-secondary/50">.</span>
                </h1>
                <p className="text-2xl md:text-3xl text-foreground font-medium mb-6">
                    Développeur Web front-end
                </p>
                <p className="text-xl md:text-2xl text-foreground-secondary max-w-4xl font-light leading-relaxed mb-12">
                    Refonte d'un site web non abouti en travaillant en collaboration avec d'autres stagiaires.
                </p>

                {/* Key Info Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
                    <div className="flex flex-col gap-2">
                        <div className="flex items-center gap-2 text-foreground-secondary mb-1">
                            <Calendar className="w-4 h-4" />
                            <span className="text-sm font-semibold uppercase tracking-wider">Année</span>
                        </div>
                        <span className="text-foreground font-medium">01/12/25 - 26/12/25</span>
                    </div>
                    <div className="flex flex-col gap-2">
                        <div className="flex items-center gap-2 text-foreground-secondary mb-1">
                            <MapPin className="w-4 h-4" />
                            <span className="text-sm font-semibold uppercase tracking-wider">Lien</span>
                        </div>
                        <a href="https://guinee.wyze-academy.com/" target="_blank" rel="noreferrer" className="text-foreground font-medium hover:underline">
                            Site Web ↗
                        </a>
                    </div>
                    <div className="flex flex-col gap-2">
                        <div className="flex items-center gap-2 text-foreground-secondary mb-1">
                            <Users className="w-4 h-4" />
                            <span className="text-sm font-semibold uppercase tracking-wider">Équipe</span>
                        </div>
                        <span className="text-foreground font-medium">Collaboration Stagiaires</span>
                    </div>
                    <div className="flex flex-col gap-2">
                        <div className="flex items-center gap-2 text-foreground-secondary mb-1">
                            <User className="w-4 h-4" />
                            <span className="text-sm font-semibold uppercase tracking-wider">Tuteur</span>
                        </div>
                        <span className="text-foreground font-medium">Bertrand DETRE</span>
                    </div>
                </div>

                <div className="w-full h-px bg-glass-border" />
            </section>

            {/* Context & Mission */}
            <section className="px-6 md:px-12 max-w-7xl mx-auto w-full pb-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    <div>
                        <h3 className="text-sm font-bold text-foreground-secondary tracking-widest uppercase mb-6">Rapport de Stage</h3>
                        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 tracking-tight">Contexte & Mission</h2>
                        
                        <div className="prose prose-invert max-w-none">
                            <h4 className="text-xl font-semibold text-foreground mb-3">Contexte</h4>
                            <p className="text-foreground-secondary font-light leading-relaxed mb-8">
                                Wyze Academy est une plateforme de formation. Le projet consistait à reprendre le développement d'un site web précédemment inachevé. J'ai intégré une équipe composée de plusieurs stagiaires pour mener à bien cette mission.
                            </p>
                            
                            <h4 className="text-xl font-semibold text-foreground mb-3">Mission Principale</h4>
                            <p className="text-foreground-secondary font-light leading-relaxed mb-8">
                                Ma mission principale était la refonte de l'interface utilisateur en tant que développeur front-end, impliquant la compréhension du code existant, sa restructuration et l'implémentation de nouvelles fonctionnalités tout en travaillant de manière agile avec l'équipe.
                            </p>
                        </div>
                    </div>

                    <GlassCard className="p-8 md:p-12">
                        <h3 className="text-2xl font-bold text-foreground mb-8">Objectifs de la Refonte</h3>
                        <ul className="space-y-4">
                            {[
                                "Analyser et comprendre la base de code existante inachevée",
                                "Concevoir une architecture front-end solide avec Next.js et React",
                                "Moderniser l'interface utilisateur avec Tailwind CSS",
                                "Travailler en équipe de manière synchronisée (Git/GitHub)",
                                "Assurer la livraison d'un produit final fonctionnel et performant"
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-4 text-foreground-secondary font-light">
                                    <CheckCircle2 className="w-5 h-5 text-foreground shrink-0 mt-0.5" />
                                    <span className="leading-relaxed">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </GlassCard>
                </div>
            </section>

            {/* Réalisation & Tâches */}
            <section className="px-6 md:px-12 max-w-7xl mx-auto w-full pb-20">
                <div className="w-full h-px bg-glass-border mb-20" />
                
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                    <div className="lg:col-span-5">
                        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 tracking-tight">Réalisation et Travail d'Équipe</h2>
                        <p className="text-foreground-secondary font-light leading-relaxed mb-8">
                            La particularité de ce stage résidait dans le travail collaboratif. La reprise d'un projet existant demande une phase d'audit importante avant de pouvoir développer de nouvelles fonctionnalités en équipe de manière harmonieuse.
                        </p>
                    </div>

                    <div className="lg:col-span-7 grid gap-6">
                        <GlassCard className="p-8">
                            <h4 className="text-xl font-bold text-foreground mb-4">Audit et Reprise de Projet</h4>
                            <p className="text-foreground-secondary font-light leading-relaxed">
                                Analyse du code source du site inachevé, identification des bugs bloquants et définition de la nouvelle architecture technique pour la refonte.
                            </p>
                        </GlassCard>
                        <GlassCard className="p-8">
                            <h4 className="text-xl font-bold text-foreground mb-4">Développement Front-end</h4>
                            <p className="text-foreground-secondary font-light leading-relaxed">
                                Intégration des nouvelles maquettes et développement de composants réutilisables en React avec le framework Next.js.
                            </p>
                        </GlassCard>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <GlassCard className="p-8">
                                <h4 className="text-lg font-bold text-foreground mb-3">Collaboration</h4>
                                <p className="text-foreground-secondary font-light leading-relaxed text-sm">
                                    Synchronisation du travail avec les autres stagiaires, revues de code et gestion de version.
                                </p>
                            </GlassCard>
                            <GlassCard className="p-8">
                                <h4 className="text-lg font-bold text-foreground mb-3">Intégration UI</h4>
                                <p className="text-foreground-secondary font-light leading-relaxed text-sm">
                                    Mise en place d'un design system cohérent à l'aide de Tailwind CSS et Lucide Icons.
                                </p>
                            </GlassCard>
                        </div>
                    </div>
                </div>
            </section>

            {/* Missions Principales & Tech */}
            <section className="px-6 md:px-12 max-w-7xl mx-auto w-full pb-20">
                <div className="w-full h-px bg-glass-border mb-20" />

                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 tracking-tight text-center">Technologies et Outils</h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <GlassCard className="p-8">
                        <div className="w-12 h-12 rounded-2xl bg-white border border-glass-border flex items-center justify-center mb-6 shadow-sm">
                            <Code2 className="w-5 h-5 text-foreground" />
                        </div>
                        <h3 className="text-xl font-bold text-foreground mb-4">React.js & Next.js</h3>
                        <p className="text-foreground-secondary font-light leading-relaxed">
                            Création d'interfaces dynamiques basées sur des composants. Utilisation de Next.js pour le routage, l'optimisation des performances et le rendu côté serveur/client.
                        </p>
                    </GlassCard>

                    <GlassCard className="p-8">
                        <div className="w-12 h-12 rounded-2xl bg-white border border-glass-border flex items-center justify-center mb-6 shadow-sm">
                            <RotateCcw className="w-5 h-5 text-foreground" />
                        </div>
                        <h3 className="text-xl font-bold text-foreground mb-4">Tailwind CSS</h3>
                        <p className="text-foreground-secondary font-light leading-relaxed">
                            Utilisation de classes utilitaires pour concevoir et développer rapidement des interfaces utilisateur réactives et au design moderne.
                        </p>
                    </GlassCard>

                    <GlassCard className="p-8">
                        <div className="w-12 h-12 rounded-2xl bg-white border border-glass-border flex items-center justify-center mb-6 shadow-sm">
                            <Rocket className="w-5 h-5 text-foreground" />
                        </div>
                        <h3 className="text-xl font-bold text-foreground mb-4">Lucide Icons</h3>
                        <p className="text-foreground-secondary font-light leading-relaxed">
                            Intégration d'une bibliothèque d'icônes open-source pour illustrer l'interface de manière harmonieuse et cohérente.
                        </p>
                    </GlassCard>
                </div>
            </section>

            {/* Bilan & Résultats */}
            <section className="px-6 md:px-12 max-w-7xl mx-auto w-full pb-32">
                <div className="w-full h-px bg-glass-border mb-20" />
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 tracking-tight">Bilan du Stage</h2>
                        <p className="text-foreground-secondary font-light leading-relaxed text-lg mb-6">
                            Ce second stage chez Wyze Academy a marqué une vraie montée en compétences, notamment sur la gestion d'un projet de groupe et l'architecture logicielle avec des composants complexes dans un écosystème React moderne.
                        </p>
                        <p className="text-foreground-secondary font-light leading-relaxed text-lg">
                            L'encadrement de M. Bertrand Dêtre et l'entraide entre stagiaires m'ont permis de mieux comprendre les enjeux de la maintenance et du "legacy code", tout en aboutissant à un produit moderne.
                        </p>
                    </div>

                    <GlassCard className="p-8 md:p-12 relative overflow-hidden">
                        {/* Decorative background element */}
                        <div className="absolute -top-12 -right-12 w-32 h-32 bg-foreground/5 rounded-full blur-2xl" />
                        
                        <h3 className="text-2xl font-bold text-foreground mb-8">Bénéfices & Retour d'Expérience</h3>
                        <ul className="space-y-4 relative z-10">
                            {[
                                "Autonomie sur des frameworks de pointe (Next.js)",
                                "Capacité à lire, analyser et reprendre le code d'autres développeurs",
                                "Meilleure organisation du travail collaboratif en équipe (méthodologie agile)",
                                "Achèvement réussi de la refonte du site web"
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-4 text-foreground-secondary font-light">
                                    <div className="w-6 h-6 rounded-full bg-white border border-glass-border flex items-center justify-center shrink-0 mt-0.5">
                                        <CheckCircle2 className="w-4 h-4 text-foreground" />
                                    </div>
                                    <span className="leading-relaxed">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </GlassCard>
                </div>
            </section>

            <section className="w-full border-t border-glass-border py-32 bg-background-secondary/10">
                <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
                    <h2 className="text-3xl font-bold text-foreground mb-8">Retourner au Stage 1</h2>
                    <div className="flex justify-center gap-6">
                        <Link href="/stage/stage1">
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
