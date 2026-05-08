"use client";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { GlassCard } from "@/components/ui/GlassCard";
import { GlassButton } from "@/components/ui/GlassButton";
import Link from "next/link";
import { useState } from "react";
import {
  ArrowRight,
  MapPin,
  Briefcase,
  Calendar,
  Monitor,
  Database,
  History,
  CheckCircle2,
  Github,
  Search,
  Presentation,
  X,
} from "lucide-react";

// PPT URL — remplace FILE_ID par l'identifiant de ton fichier Google Drive
const PPT_EMBED_URL =
  "https://docs.google.com/presentation/d/FILE_ID/embed?start=false&loop=false";

export default function PPE2Page() {
  const [showPpt, setShowPpt] = useState(false);

  return (
    <main className="min-h-screen bg-background flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="pt-40 pb-20 px-6 md:px-12 xl:px-24 max-w-7xl mx-auto w-full">
        <div className="flex flex-col gap-6">
          <div className="flex flex-wrap items-center gap-4 text-sm font-semibold text-foreground-secondary tracking-widest uppercase">
            <span>PPE 2</span>
            <span className="w-1.5 h-1.5 rounded-full bg-foreground/20" />
            <span>2025</span>
            <span className="w-1.5 h-1.5 rounded-full bg-foreground/20" />
            <span>Projet Pédagogique</span>
          </div>

          <div className="flex items-center gap-6">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-foreground">
              FixIT.
            </h1>
            <a
              href="https://github.com/kairxuu"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 md:p-4 rounded-full border border-glass-border bg-white/5 hover:bg-white/10 transition-colors text-foreground group"
              aria-label="Voir le code source sur GitHub"
            >
              <Github className="w-6 h-6 md:w-8 md:h-8 group-hover:scale-110 transition-transform" />
            </a>
          </div>
          <p className="text-2xl md:text-3xl font-light text-foreground-secondary tracking-tight">
            Gestion des interventions informatiques
          </p>

          <p className="text-xl md:text-2xl text-foreground-secondary max-w-4xl font-light leading-relaxed mt-6">
            Application de bureau développée en C# permettant de gérer, suivre
            et historiser les interventions informatiques sur des équipements
            reliés à une base de données SQL Server.
          </p>

          <div className="flex flex-wrap gap-4 mt-8">
            {["C#", "Visual Studio", "SQL Server", "SSMS", ".NET Framework"].map(
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

          {/* Bouton aperçu PPT */}
          <div className="mt-8">
            <button
              onClick={() => setShowPpt((v) => !v)}
              className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-glass-border bg-white/5 hover:bg-white/10 transition-all text-foreground font-medium text-sm group"
            >
              {showPpt ? (
                <>
                  <X className="w-4 h-4" />
                  Fermer l&apos;aperçu
                </>
              ) : (
                <>
                  <Presentation className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  Voir la présentation
                </>
              )}
            </button>
          </div>

          {/* Aperçu PPT inline */}
          {showPpt && (
            <div className="mt-8 w-full rounded-2xl overflow-hidden border border-glass-border bg-white/5">
              <iframe
                src={PPT_EMBED_URL}
                width="100%"
                height="600"
                frameBorder="0"
                allowFullScreen
                title="Présentation PPE 2 FixIT"
                className="w-full"
              />
            </div>
          )}
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
                      Aurlom, Paris
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
                      Application desktop (Prototype)
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
                Dans le cadre du BTS SIO, ce PPE avait pour objectif de
                concevoir une application Windows Forms en C# capable de
                centraliser la gestion des interventions informatiques. Le projet
                répond à un besoin concret : permettre à un technicien de
                recenser les équipements, enregistrer les pannes et consulter
                l&apos;historique des interventions par appareil ou par
                utilisateur.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Mission clé
              </h2>
              <p className="text-lg text-foreground-secondary leading-relaxed font-light mb-6">
                Développer une solution desktop robuste, connectée à une base
                SQL Server, permettant la saisie, la consultation et
                l&apos;historisation des données d&apos;intervention en temps
                réel.
              </p>

              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  "Modéliser et créer la base de données SQL Server (SSMS)",
                  "Concevoir une interface Windows Forms ergonomique en C#",
                  "Implémenter les opérations CRUD sur les équipements",
                  "Mettre en place un historique des interventions par appareil",
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
            Réalisation &amp; Fonctionnalités
          </h2>
          <p className="text-lg text-foreground-secondary leading-relaxed font-light mb-12 max-w-3xl">
            J&apos;ai conçu l&apos;architecture de la base de données sous SSMS
            (tables, relations, clés étrangères), puis développé
            l&apos;interface graphique en C# via Windows Forms reliant chaque
            composant visuel aux requêtes SQL. L&apos;application a été testée
            et validée fonctionnellement sur les scénarios métier principaux.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-xl bg-white border border-glass-border flex items-center justify-center shrink-0">
                <Database className="w-5 h-5 text-foreground" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground mb-2">
                  Base de données relationnelle
                </h3>
                <p className="text-foreground-secondary font-light leading-relaxed">
                  Schéma SQL Server modélisé avec tables Utilisateurs,
                  Équipements et Interventions, liées par clés étrangères.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-xl bg-white border border-glass-border flex items-center justify-center shrink-0">
                <Monitor className="w-5 h-5 text-foreground" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground mb-2">
                  Interface Windows Forms
                </h3>
                <p className="text-foreground-secondary font-light leading-relaxed">
                  Formulaires C# connectés à SQL Server pour la saisie et
                  l&apos;affichage des équipements, pannes et techniciens.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-xl bg-white border border-glass-border flex items-center justify-center shrink-0">
                <History className="w-5 h-5 text-foreground" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground mb-2">
                  Historique des interventions
                </h3>
                <p className="text-foreground-secondary font-light leading-relaxed">
                  Traçabilité complète : date, technicien, équipement concerné
                  et description de la panne pour chaque intervention enregistrée.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-xl bg-white border border-glass-border flex items-center justify-center shrink-0">
                <Search className="w-5 h-5 text-foreground" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground mb-2">
                  Recherche &amp; filtrage
                </h3>
                <p className="text-foreground-secondary font-light leading-relaxed">
                  Filtres par appareil, utilisateur ou période pour retrouver
                  rapidement l&apos;historique d&apos;une machine ou
                  d&apos;un technicien.
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
              1. Modélisation BDD
            </h3>
            <ul className="space-y-3">
              <li className="flex gap-3 text-foreground-secondary font-light">
                <div className="w-1.5 h-1.5 rounded-full bg-foreground/50 mt-2 shrink-0" />
                Analyse des besoins métier et conception du MCD/MLD.
              </li>
              <li className="flex gap-3 text-foreground-secondary font-light">
                <div className="w-1.5 h-1.5 rounded-full bg-foreground/50 mt-2 shrink-0" />
                Création des tables et relations sous SQL Server via SSMS.
              </li>
              <li className="flex gap-3 text-foreground-secondary font-light">
                <div className="w-1.5 h-1.5 rounded-full bg-foreground/50 mt-2 shrink-0" />
                Jeux de données de test pour valider l&apos;intégrité référentielle.
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-bold text-foreground border-b border-glass-border pb-4">
              2. Développement C#
            </h3>
            <ul className="space-y-3">
              <li className="flex gap-3 text-foreground-secondary font-light">
                <div className="w-1.5 h-1.5 rounded-full bg-foreground/50 mt-2 shrink-0" />
                Connexion à SQL Server via ADO.NET (SqlConnection, SqlCommand).
              </li>
              <li className="flex gap-3 text-foreground-secondary font-light">
                <div className="w-1.5 h-1.5 rounded-full bg-foreground/50 mt-2 shrink-0" />
                Implémentation des opérations CRUD sur chaque entité.
              </li>
              <li className="flex gap-3 text-foreground-secondary font-light">
                <div className="w-1.5 h-1.5 rounded-full bg-foreground/50 mt-2 shrink-0" />
                Gestion des erreurs et validation des saisies utilisateur.
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-bold text-foreground border-b border-glass-border pb-4">
              3. Tests &amp; Livraison
            </h3>
            <ul className="space-y-3">
              <li className="flex gap-3 text-foreground-secondary font-light">
                <div className="w-1.5 h-1.5 rounded-full bg-foreground/50 mt-2 shrink-0" />
                Tests fonctionnels des scénarios principaux (ajout, modification, suppression).
              </li>
              <li className="flex gap-3 text-foreground-secondary font-light">
                <div className="w-1.5 h-1.5 rounded-full bg-foreground/50 mt-2 shrink-0" />
                Documentation technique et livraison du projet complet.
              </li>
              <li className="flex gap-3 text-foreground-secondary font-light">
                <div className="w-1.5 h-1.5 rounded-full bg-foreground/50 mt-2 shrink-0" />
                Présentation orale avec démonstration de l&apos;application.
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
                  C# &amp; Windows Forms
                </h4>
                <p className="text-foreground-secondary font-light text-sm leading-relaxed">
                  Maîtrise de la programmation orientée objet en C# et
                  conception d&apos;interfaces desktop via Windows Forms.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">
                  SQL Server &amp; ADO.NET
                </h4>
                <p className="text-foreground-secondary font-light text-sm leading-relaxed">
                  Connexion et manipulation d&apos;une base de données
                  relationnelle depuis une application .NET via ADO.NET.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">
                  Modélisation de données
                </h4>
                <p className="text-foreground-secondary font-light text-sm leading-relaxed">
                  Conception de schémas relationnels (MCD, MLD, MPD) et mise
                  en œuvre des contraintes d&apos;intégrité.
                </p>
              </div>
            </div>
          </GlassCard>

          <GlassCard className="p-8 md:p-12 bg-foreground text-background">
            <h3 className="text-2xl font-bold mb-6">Bilan &amp; Résultats</h3>
            <p className="font-light leading-relaxed mb-8 opacity-90">
              FixIT m&apos;a permis de maîtriser la connexion entre une
              application C# et une base SQL Server, de structurer un projet
              desktop de A à Z et de produire une documentation technique
              complète. Ce PPE a renforcé mes compétences en programmation
              orientée objet et en gestion de données.
            </p>

            <div className="space-y-4 border-t border-background/20 pt-6">
              <h4 className="font-semibold">Résultats obtenus :</h4>
              <ul className="space-y-3">
                <li className="flex gap-3 items-center opacity-90 font-light">
                  <CheckCircle2 className="w-5 h-5 shrink-0" />
                  Application desktop fonctionnelle avec CRUD complet.
                </li>
                <li className="flex gap-3 items-center opacity-90 font-light">
                  <CheckCircle2 className="w-5 h-5 shrink-0" />
                  Historique des interventions consultable et filtrable.
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
