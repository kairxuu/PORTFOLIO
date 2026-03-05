"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "../ui/SectionWrapper";
import { GlassCard } from "../ui/GlassCard";
import { Compass, Palette, Code2, Rocket, LineChart } from "lucide-react";

const steps = [
    {
        step: "01",
        title: "Discovery & Cadrage",
        desc: "Audit approfondi des besoins métiers et de l'existant. Définition des objectifs (KPIs), choix de l'architecture technique (Stack) et élaboration d'une stratégie sur-mesure pour garantir le ROI du projet.",
        icon: <Compass className="w-6 h-6 text-foreground-secondary group-hover:text-foreground transition-colors" />,
        className: "md:col-span-1"
    },
    {
        step: "02",
        title: "Architecture & UI/UX",
        desc: "Conception centrée utilisateur. Création de wireframes, élaboration du Design System et prototypage interactif haute-fidélité pour valider les parcours utilisateurs avant tout développement.",
        icon: <Palette className="w-6 h-6 text-foreground-secondary group-hover:text-foreground transition-colors" />,
        className: "md:col-span-1"
    },
    {
        step: "03",
        title: "Ingénierie & Développement",
        desc: "Implémentation d'une base de code pérenne et scalable (Next.js/React). Approche modulaire, intégration d'APIs tierces et respect strict des bonnes pratiques d'ingénierie logicielle.",
        icon: <Code2 className="w-6 h-6 text-foreground-secondary group-hover:text-foreground transition-colors" />,
        className: "md:col-span-1"
    },
    {
        step: "04",
        title: "QA, Tests & Déploiement Continu",
        desc: "Contrôle qualité rigoureux (tests unitaires/E2E), audits de performance (Lighthouse) et mise en place de pipelines d'intégration continue (CI/CD) pour un déploiement sécurisé sans interruption de service.",
        icon: <Rocket className="w-6 h-6 text-foreground-secondary group-hover:text-foreground transition-colors" />,
        className: "md:col-span-2"
    },
    {
        step: "05",
        title: "Monitoring & Évolutions",
        desc: "Suivi post-lancement de la stabilité et des performances. Analyse des données d'utilisation pour itérer rapidement et déployer de nouvelles fonctionnalités à forte valeur ajoutée.",
        icon: <LineChart className="w-6 h-6 text-foreground-secondary group-hover:text-foreground transition-colors" />,
        className: "md:col-span-1"
    }
];

export const Process = () => {
    return (
        <SectionWrapper id="process" className="relative z-10">
            <div className="flex flex-col gap-4 mb-12 items-center text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-5xl font-bold text-foreground tracking-tight"
                >
                    Méthodologie Pro
                </motion.h2>
                <p className="text-foreground-secondary max-w-2xl">
                    Un processus itératif, transparent et professionnel pour garantir le succès de chaque projet.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
                {steps.map((step, index) => (
                    <GlassCard
                        key={index}
                        className={`flex flex-col p-6 group relative overflow-hidden ${step.className}`}
                    >
                        <div className="absolute top-0 right-0 p-6 text-5xl font-bold text-foreground/5 group-hover:text-foreground/10 transition-colors pointer-events-none select-none">
                            {step.step}
                        </div>

                        <div className="w-12 h-12 rounded-xl bg-background/40 border border-[var(--glass-border)] flex items-center justify-center shrink-0 mb-6 shadow-sm group-hover:scale-110 transition-transform">
                            {step.icon}
                        </div>

                        <h3 className="text-xl font-bold text-foreground mb-2 relative z-10">
                            {step.title}
                        </h3>
                        <p className="text-foreground/60 leading-relaxed text-sm relative z-10">
                            {step.desc}
                        </p>
                    </GlassCard>
                ))}
            </div>
        </SectionWrapper>
    );
};
