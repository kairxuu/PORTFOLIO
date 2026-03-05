import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { GlassCard } from "@/components/ui/GlassCard";
import { GlassButton } from "@/components/ui/GlassButton";
import Link from "next/link";
import { ArrowRight, Code2, Rocket, Briefcase, Calendar, MapPin, User, CheckCircle2 } from "lucide-react";

export const metadata = {
    title: "Stage 1 - BXTTERFLY | Alexandre KEOLASY",
    description: "Stage de 1ère année : Conception et développement d'un site e-commerce pour BXTTERFLY.",
};

export default function Stage1Page() {
    return (
        <main className="min-h-screen bg-background flex flex-col">
            <Header />

            {/* Hero Section */}
            <section className="pt-40 pb-20 px-6 md:px-12 xl:px-24 max-w-7xl mx-auto w-full">
                <h2 className="text-sm font-semibold text-foreground-secondary tracking-widest uppercase mb-4">Stage de 1ère année BTS SIO</h2>
                <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-foreground mb-6">
                    BXTTERFLY<span className="text-foreground-secondary/50">.</span>
                </h1>
                <p className="text-2xl md:text-3xl text-foreground font-medium mb-6">
                    Développeur Web front-end
                </p>
                <p className="text-xl md:text-2xl text-foreground-secondary max-w-4xl font-light leading-relaxed mb-12">
                    Conception et développement d'un site e-commerce pour la vente de vêtements.
                </p>

                {/* Key Info Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
                    <div className="flex flex-col gap-2">
                        <div className="flex items-center gap-2 text-foreground-secondary mb-1">
                            <Calendar className="w-4 h-4" />
                            <span className="text-sm font-semibold uppercase tracking-wider">Période</span>
                        </div>
                        <span className="text-foreground font-medium">Mai - Juin 2025 (2 mois)</span>
                    </div>
                    <div className="flex flex-col gap-2">
                        <div className="flex items-center gap-2 text-foreground-secondary mb-1">
                            <MapPin className="w-4 h-4" />
                            <span className="text-sm font-semibold uppercase tracking-wider">Lieu</span>
                        </div>
                        <span className="text-foreground font-medium">Saint-Ouen, France</span>
                    </div>
                    <div className="flex flex-col gap-2">
                        <div className="flex items-center gap-2 text-foreground-secondary mb-1">
                            <Briefcase className="w-4 h-4" />
                            <span className="text-sm font-semibold uppercase tracking-wider">Entreprise</span>
                        </div>
                        <span className="text-foreground font-medium">BXTTERFLY</span>
                    </div>
                    <div className="flex flex-col gap-2">
                        <div className="flex items-center gap-2 text-foreground-secondary mb-1">
                            <User className="w-4 h-4" />
                            <span className="text-sm font-semibold uppercase tracking-wider">Tuteur</span>
                        </div>
                        <span className="text-foreground font-medium">Mohamed BEN MANSOUR</span>
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
                                Bxtterly est une entreprise spécialisée dans la vente en ligne de vêtements tendance. Dans le cadre de son développement, l'entreprise a initié un projet de refonte complète de sa plateforme e-commerce pour améliorer l'expérience utilisateur et les performances techniques.
                            </p>
                            
                            <h4 className="text-xl font-semibold text-foreground mb-3">Mission Principale</h4>
                            <p className="text-foreground-secondary font-light leading-relaxed mb-8">
                                Ma mission consistait à concevoir et développer l'interface utilisateur du site e-commerce BXTTERFLY, en mettant l'accent sur l'expérience utilisateur et le design responsive.
                            </p>
                        </div>
                    </div>

                    <GlassCard className="p-8 md:p-12">
                        <h3 className="text-2xl font-bold text-foreground mb-8">Objectifs du projet</h3>
                        <ul className="space-y-4">
                            {[
                                "Créer une interface moderne et élégante pour présenter les collections",
                                "Développer un design responsive pour une expérience optimale sur tous appareils",
                                "Mettre en place un système de filtrage des produits par catégories et tailles",
                                "Intégrer une galerie d'images interactive pour les produits",
                                "Assurer une navigation fluide et intuitive"
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
                        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 tracking-tight">Réalisation</h2>
                        <p className="text-foreground-secondary font-light leading-relaxed mb-8">
                            J'ai travaillé en étroite collaboration avec l'équipe de BXTTERFLY pour comprendre leurs besoins et leurs attentes. Le développement s'est déroulé selon une approche itérative, avec des validations régulières des fonctionnalités implémentées.
                        </p>
                    </div>

                    <div className="lg:col-span-7 grid gap-6">
                        <GlassCard className="p-8">
                            <h4 className="text-xl font-bold text-foreground mb-4">Conception de l'interface</h4>
                            <p className="text-foreground-secondary font-light leading-relaxed">
                                Création de maquettes et de prototypes pour les différentes pages du site (accueil, catalogue, fiches produits, panier, etc.).
                            </p>
                        </GlassCard>
                        <GlassCard className="p-8">
                            <h4 className="text-xl font-bold text-foreground mb-4">Développement front-end</h4>
                            <p className="text-foreground-secondary font-light leading-relaxed">
                                Implémentation de l'interface utilisateur avec HTML5, CSS3 et JavaScript pur pour des performances optimales.
                            </p>
                        </GlassCard>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <GlassCard className="p-8">
                                <h4 className="text-lg font-bold text-foreground mb-3">Responsive design</h4>
                                <p className="text-foreground-secondary font-light leading-relaxed text-sm">
                                    Adaptation du site pour une utilisation sur mobile, tablette et desktop.
                                </p>
                            </GlassCard>
                            <GlassCard className="p-8">
                                <h4 className="text-lg font-bold text-foreground mb-3">Optimisation</h4>
                                <p className="text-foreground-secondary font-light leading-relaxed text-sm">
                                    Amélioration des performances de chargement et de l'accessibilité du site.
                                </p>
                            </GlassCard>
                        </div>
                    </div>
                </div>
            </section>

            {/* Missions Principales & Tech */}
            <section className="px-6 md:px-12 max-w-7xl mx-auto w-full pb-20">
                <div className="w-full h-px bg-glass-border mb-20" />

                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 tracking-tight text-center">Missions Principales</h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <GlassCard className="p-8">
                        <div className="w-12 h-12 rounded-2xl bg-white border border-glass-border flex items-center justify-center mb-6 shadow-sm">
                            <Code2 className="w-5 h-5 text-foreground" />
                        </div>
                        <h3 className="text-xl font-bold text-foreground mb-4">Développement Front-end</h3>
                        <ul className="space-y-3">
                            {["Conception et implémentation de l'interface", "Création de composants réutilisables", "Intégration responsive design", "Optimisation des temps de chargement"].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-foreground-secondary text-sm font-light">
                                    <div className="w-1.5 h-1.5 rounded-full bg-foreground/20" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </GlassCard>

                    <GlassCard className="p-8">
                        <div className="w-12 h-12 rounded-2xl bg-white border border-glass-border flex items-center justify-center mb-6 shadow-sm">
                            <Rocket className="w-5 h-5 text-foreground" />
                        </div>
                        <h3 className="text-xl font-bold text-foreground mb-4">Technologies & Outils</h3>
                        <ul className="space-y-3">
                            {["Front-end : HTML5, CSS3, JavaScript (ES6+)", "Frameworks : Bootstrap", "Outils : Git", "Méthodologies : BEM"].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-foreground-secondary text-sm font-light">
                                    <div className="w-1.5 h-1.5 rounded-full bg-foreground/20" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </GlassCard>

                    <GlassCard className="p-8">
                        <div className="w-12 h-12 rounded-2xl bg-white border border-glass-border flex items-center justify-center mb-6 shadow-sm">
                            <User className="w-5 h-5 text-foreground" />
                        </div>
                        <h3 className="text-xl font-bold text-foreground mb-4">Expérience Utilisateur</h3>
                        <ul className="space-y-3">
                            {["Mise en place d'animations fluides", "Optimisation du parcours d'achat", "Tests utilisateurs", "Itérations de design"].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-foreground-secondary text-sm font-light">
                                    <div className="w-1.5 h-1.5 rounded-full bg-foreground/20" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </GlassCard>
                </div>
            </section>

            {/* Compétences Acquises */}
            <section className="px-6 md:px-12 max-w-7xl mx-auto w-full pb-20">
                <div className="w-full h-px bg-glass-border mb-20" />
                
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 tracking-tight text-center">Compétences Acquises</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <GlassCard className="p-8">
                        <h4 className="text-xl font-bold text-foreground mb-3">HTML5</h4>
                        <p className="text-foreground-secondary font-light leading-relaxed">
                            Maîtrise des balises sémantiques et de la structure des documents web. Utilisation avancée des formulaires et des API HTML5.
                        </p>
                    </GlassCard>
                    <GlassCard className="p-8">
                        <h4 className="text-xl font-bold text-foreground mb-3">CSS3</h4>
                        <p className="text-foreground-secondary font-light leading-relaxed">
                            Création d'animations fluides, utilisation de variables CSS, maîtrise de Flexbox et Grid pour des mises en page complexes.
                        </p>
                    </GlassCard>
                    <GlassCard className="p-8">
                        <h4 className="text-xl font-bold text-foreground mb-3">JavaScript</h4>
                        <p className="text-foreground-secondary font-light leading-relaxed">
                            Manipulation du DOM, gestion des événements, requêtes AJAX et utilisation des promesses pour des interactions utilisateur fluides.
                        </p>
                    </GlassCard>
                    <GlassCard className="p-8">
                        <h4 className="text-xl font-bold text-foreground mb-3">Responsive Design</h4>
                        <p className="text-foreground-secondary font-light leading-relaxed">
                            Conception mobile-first, media queries avancées et tests multi-appareils pour une expérience utilisateur optimale.
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
                        <p className="text-foreground-secondary font-light leading-relaxed text-lg">
                            Ce premier stage en entreprise a été une expérience formatrice qui m'a permis de consolider mes compétences en développement front-end. J'ai pu mettre en pratique mes connaissances théoriques dans un cadre professionnel et découvrir les spécificités du développement pour le e-commerce.
                        </p>
                    </div>

                    <GlassCard className="p-8 md:p-12 relative overflow-hidden">
                        {/* Decorative background element */}
                        <div className="absolute -top-12 -right-12 w-32 h-32 bg-foreground/5 rounded-full blur-2xl" />
                        
                        <h3 className="text-2xl font-bold text-foreground mb-8">Résultats Obtenus</h3>
                        <ul className="space-y-4 relative z-10">
                            {[
                                "Site e-commerce fonctionnel et esthétique, fidèle à BXTTERFLY",
                                "Interface intuitive et réactive sur tous les appareils",
                                "Amélioration significative de l'expérience utilisateur",
                                "Retour très positif du tuteur et de l'équipe"
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
                    <h2 className="text-3xl font-bold text-foreground mb-8">Voir mon second stage</h2>
                    <div className="flex justify-center gap-6">
                        <Link href="/stage/stage2">
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
