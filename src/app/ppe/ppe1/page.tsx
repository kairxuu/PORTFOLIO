import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { GlassCard } from "@/components/ui/GlassCard";
import { GlassButton } from "@/components/ui/GlassButton";
import Link from "next/link";
import {
  ArrowRight,
  MapPin,
  Briefcase,
  Calendar,
  Code2,
  Database,
  Layout,
  CheckCircle2,
  Server,
  Globe,
} from "lucide-react";

export const metadata = {
  title: "PPE 1 : Technova - Alexandre KEOLASY",
  description:
    "Création d'une plateforme de vente en ligne pour une marque de solutions technologiques : Technova.",
};

export default function PPE1Page() {
  return (
    <main className="min-h-screen bg-background flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="pt-40 pb-20 px-6 md:px-12 xl:px-24 max-w-7xl mx-auto w-full">
        <div className="flex flex-col gap-6">
          <div className="flex flex-wrap items-center gap-4 text-sm font-semibold text-foreground-secondary tracking-widest uppercase">
            <span>PPE 1</span>
            <span className="w-1.5 h-1.5 rounded-full bg-foreground/20" />
            <span>2025</span>
            <span className="w-1.5 h-1.5 rounded-full bg-foreground/20" />
            <span>Projet Pédagogique</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-foreground">
            Technova.
          </h1>
          <p className="text-2xl md:text-3xl font-light text-foreground-secondary tracking-tight">
            Boutique High-Tech
          </p>

          <p className="text-xl md:text-2xl text-foreground-secondary max-w-4xl font-light leading-relaxed mt-6">
            Création d'une plateforme de vente en ligne pour une marque de
            solutions technologiques, avec catalogue à jour, espace client et
            panier sécurisé.
          </p>

          <div className="flex flex-wrap gap-4 mt-8">
            {["HTML5", "CSS3", "PHP", "JavaScript", "PHPMyAdmin"].map(
              (tech) => (
                <div
                  key={tech}
                  className="px-4 py-2 rounded-full border border-glass-border bg-white/5 text-sm font-medium text-foreground"
                >
                  {tech}
                </div>
              ),
            )}
          </div>
        </div>

        <div className="w-full h-px bg-glass-border mt-20" />
      </section>

      {/* Informations & Contexte */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto w-full pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-1 space-y-8">
            <GlassCard className="p-8">
              <h3 className="text-lg font-semibold text-foreground mb-6 uppercase tracking-wider">
                Informations
              </h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="w-5 h-5 text-foreground-secondary mt-1" />
                  <div>
                    <p className="text-sm text-foreground-secondary mb-1">
                      Lieu
                    </p>
                    <p className="text-foreground font-medium">
                      BXTTERFLY, Saint-Ouen-sur-Seine
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Briefcase className="w-5 h-5 text-foreground-secondary mt-1" />
                  <div>
                    <p className="text-sm text-foreground-secondary mb-1">
                      Type
                    </p>
                    <p className="text-foreground font-medium">
                      Projet e-commerce réel (Prototype)
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Calendar className="w-5 h-5 text-foreground-secondary mt-1" />
                  <div>
                    <p className="text-sm text-foreground-secondary mb-1">
                      Période
                    </p>
                    <p className="text-foreground font-medium">
                      2025 - Réalisé seul
                    </p>
                  </div>
                </div>
              </div>
            </GlassCard>
          </div>

          <div className="lg:col-span-2 space-y-12">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Contexte et enjeux
              </h2>
              <p className="text-lg text-foreground-secondary leading-relaxed font-light">
                Technova, startup spécialisée dans la vente de produits
                high-tech, avait besoin d'une plateforme moderne pour promouvoir
                ses nouveautés, gérer les commandes et assurer un suivi des
                stocks en temps réel. Ce PPE a été développé seul en classe,
                sans durée commerciale, et livré en 2025 comme prototype
                pédagogique.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Mission clé
              </h2>
              <p className="text-lg text-foreground-secondary leading-relaxed font-light mb-6">
                Concevoir un store simple à administrer (connexion, gestion
                produits, validation panier) tout en garantissant une expérience
                fluide pour les visiteurs.
              </p>

              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  "Afficher les produits depuis la BDD avec tri (marque, prix)",
                  "Imposer un tunnel panier/commande avec gestion session",
                  "Créer un back-office léger (ajout/modif de références)",
                  "Appliquer les bonnes pratiques PHP/MySQL (responsive)",
                ].map((obj, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 p-4 rounded-xl border border-glass-border bg-white/5"
                  >
                    <CheckCircle2 className="w-5 h-5 text-foreground shrink-0 mt-0.5" />
                    <span className="text-foreground-secondary font-medium leading-tight">
                      {obj}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Réalisation & Fonctionnalités */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto w-full pb-20">
        <GlassCard className="p-8 md:p-12">
          <h2 className="text-3xl font-bold text-foreground mb-6">
            Réalisation & Fonctionnalités
          </h2>
          <p className="text-lg text-foreground-secondary leading-relaxed font-light mb-12 max-w-3xl">
            J'ai orchestré l'architecture PHP/SQL du projet, imaginé la
            structure des pages et assuré l'intégration CSS pour chaque
            composant (produits, panier, connexion). Les versions intermédiaires
            ont été testées et validées chaque semaine.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-xl bg-white border border-glass-border flex items-center justify-center shrink-0">
                <Database className="w-5 h-5 text-foreground" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground mb-2">
                  Catalogue dynamique
                </h3>
                <p className="text-foreground-secondary font-light leading-relaxed">
                  Requêtes SQL pour afficher prix, marque et stock, avec
                  sélection aléatoire sur la page d'accueil.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-xl bg-white border border-glass-border flex items-center justify-center shrink-0">
                <Layout className="w-5 h-5 text-foreground" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground mb-2">
                  Fiches produits
                </h3>
                <p className="text-foreground-secondary font-light leading-relaxed">
                  Zoom d'images, description et bouton de redirection vers la
                  page complète du produit.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-xl bg-white border border-glass-border flex items-center justify-center shrink-0">
                <Server className="w-5 h-5 text-foreground" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground mb-2">
                  Panier & sessions
                </h3>
                <p className="text-foreground-secondary font-light leading-relaxed">
                  Ajout automatique via PHP, récapitulatif, puis redirection et
                  gestion sécurisée dans le panier.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-xl bg-white border border-glass-border flex items-center justify-center shrink-0">
                <Globe className="w-5 h-5 text-foreground" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground mb-2">
                  Pagination & recherche
                </h3>
                <p className="text-foreground-secondary font-light leading-relaxed">
                  Filtrage par marque, pagination optimisée et affichage
                  dynamique des produits disponibles.
                </p>
              </div>
            </div>
          </div>
        </GlassCard>
      </section>

      {/* Missions clés */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto w-full pb-20">
        <h2 className="text-3xl font-bold text-foreground mb-12">
          Missions clés
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-foreground border-b border-glass-border pb-4">
              1. Architecture produit
            </h3>
            <ul className="space-y-3">
              <li className="flex gap-3 text-foreground-secondary font-light">
                <div className="w-1.5 h-1.5 rounded-full bg-foreground/50 mt-2 shrink-0" />
                Modélisation du catalogue (articles, couleurs, tailles) selon
                les besoins métier.
              </li>
              <li className="flex gap-3 text-foreground-secondary font-light">
                <div className="w-1.5 h-1.5 rounded-full bg-foreground/50 mt-2 shrink-0" />
                Création d'un système de filtres et d'un moteur de recherche
                simplifié.
              </li>
              <li className="flex gap-3 text-foreground-secondary font-light">
                <div className="w-1.5 h-1.5 rounded-full bg-foreground/50 mt-2 shrink-0" />
                Élaboration des pages produit avec visuels impactants.
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-bold text-foreground border-b border-glass-border pb-4">
              2. Développement front-end
            </h3>
            <ul className="space-y-3">
              <li className="flex gap-3 text-foreground-secondary font-light">
                <div className="w-1.5 h-1.5 rounded-full bg-foreground/50 mt-2 shrink-0" />
                Composants réutilisables en HTML/CSS et approche BEM rigoureuse.
              </li>
              <li className="flex gap-3 text-foreground-secondary font-light">
                <div className="w-1.5 h-1.5 rounded-full bg-foreground/50 mt-2 shrink-0" />
                Intégration d'interactions JavaScript (modales, transitions
                panier).
              </li>
              <li className="flex gap-3 text-foreground-secondary font-light">
                <div className="w-1.5 h-1.5 rounded-full bg-foreground/50 mt-2 shrink-0" />
                Optimisation mobile-first avec tests sur plusieurs tailles
                d'écran.
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-bold text-foreground border-b border-glass-border pb-4">
              3. Mise en production
            </h3>
            <ul className="space-y-3">
              <li className="flex gap-3 text-foreground-secondary font-light">
                <div className="w-1.5 h-1.5 rounded-full bg-foreground/50 mt-2 shrink-0" />
                Validation hebdomadaire avec le tuteur pour l'alignement métier.
              </li>
              <li className="flex gap-3 text-foreground-secondary font-light">
                <div className="w-1.5 h-1.5 rounded-full bg-foreground/50 mt-2 shrink-0" />
                Documentation technique et livrables remis au commanditaire.
              </li>
              <li className="flex gap-3 text-foreground-secondary font-light">
                <div className="w-1.5 h-1.5 rounded-full bg-foreground/50 mt-2 shrink-0" />
                Formation rapide du collaborateur BXTTERFLY responsable du site.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Bilan & Compétences */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto w-full pb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <GlassCard className="p-8 md:p-12">
            <h3 className="text-2xl font-bold text-foreground mb-6">
              Compétences consolidées
            </h3>
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-foreground mb-2">
                  HTML & CSS avancés
                </h4>
                <p className="text-foreground-secondary font-light text-sm leading-relaxed">
                  Maîtrise de Flexbox, Grid et principes d'accessibilité pour
                  garantir une interface fluide.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">
                  JavaScript & DOM
                </h4>
                <p className="text-foreground-secondary font-light text-sm leading-relaxed">
                  Comportements interactifs, animations légères et gestion des
                  états sans framework.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">
                  Gestion de projet
                </h4>
                <p className="text-foreground-secondary font-light text-sm leading-relaxed">
                  Planification de livrables, reporting et ajustements suite aux
                  feedbacks.
                </p>
              </div>
            </div>
          </GlassCard>

          <GlassCard className="p-8 md:p-12 bg-foreground text-background">
            <h3 className="text-2xl font-bold mb-6">Bilan & Résultats</h3>
            <p className="font-light leading-relaxed mb-8 opacity-90">
              Le PPE 1 a renforcé ma capacité à structurer un site e-commerce en
              PHP/MySQL, à collaborer avec un tuteur métier et à produire un
              livrable exploitable par Technova. Les retours soulignent la
              clarté du catalogue et la fluidité du tunnel d'achat.
            </p>

            <div className="space-y-4 border-t border-background/20 pt-6">
              <h4 className="font-semibold">Résultats obtenus :</h4>
              <ul className="space-y-3">
                <li className="flex gap-3 items-center opacity-90 font-light">
                  <CheckCircle2 className="w-5 h-5 shrink-0" />
                  Plateforme e-commerce entièrement fonctionnelle et responsive.
                </li>
                <li className="flex gap-3 items-center opacity-90 font-light">
                  <CheckCircle2 className="w-5 h-5 shrink-0" />
                  Catalogue filtrable et mise à jour rapide par le gérant.
                </li>
              </ul>
            </div>
          </GlassCard>
        </div>
      </section>

      {/* Navigation */}
      <section className="w-full border-t border-glass-border py-32 bg-background-secondary/10">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-8">
            Consulter les autres projets
          </h2>
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
