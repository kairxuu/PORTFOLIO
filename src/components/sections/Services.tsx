"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "../ui/SectionWrapper";
import { GlassCard } from "../ui/GlassCard";
import { Layout, Zap, Search, Bot } from "lucide-react";

const services = [
    {
        icon: <Layout className="w-8 h-8 text-foreground-secondary group-hover:text-foreground transition-colors mb-4" />,
        title: "Architecture & Design d'Interfaces",
        desc: "Au-delà de l'esthétique, je conçois des interfaces pensées pour la conversion et l'expérience utilisateur. De l'élaboration de Design Systems robustes (Figma) au prototypage interactif, chaque vue est pensée pour maximiser l'engagement tout en respectant les standards d'accessibilité et les identités de marque.",
        bulletPoints: ["Design Systems Scalables", "UX orientée Conversion", "Prototypage Haute Fidélité"],
        className: "md:col-span-2 md:row-span-2"
    },
    {
        icon: <Zap className="w-8 h-8 text-foreground-secondary group-hover:text-foreground transition-colors mb-4" />,
        title: "Ingénierie Front-End Avancée",
        desc: "Développement d'applications web complexes avec Next.js et React. L'accent est mis sur un code propre, modulaire, et fortement typé (TypeScript) garantissant une maintenabilité à long terme et une évolutivité sans friction.",
        bulletPoints: ["Next.js (App Router) & React 18", "Architecture Clean Code", "Animations WebGL/GSAP"],
        className: "md:col-span-1 md:row-span-1"
    },
    {
        icon: <Search className="w-8 h-8 text-foreground-secondary group-hover:text-foreground transition-colors mb-4" />,
        title: "Optimisation & SEO Technique",
        desc: "Dans un environnement concurrentiel, la performance est cruciale. Audit et optimisation des Core Web Vitals, implémentation du Server-Side Rendering (SSR) et structuration sémantique pour garantir une indexation optimale par les moteurs de recherche.",
        bulletPoints: ["Audit Core Web Vitals", "Server-Side Rendering (SSR)", "Sémantique & Accessibilité (A11y)"],
        className: "md:col-span-1 md:row-span-1"
    },
    {
        icon: <Bot className="w-8 h-8 text-foreground-secondary group-hover:text-foreground transition-colors mb-4" />,
        title: "Intégration d'IA & Opérations Spéciales",
        desc: "Modernisez vos processus métier en intégrant des solutions basées sur l'intelligence artificielle (API LLMs) ou en automatisant des flux de travail chronophages. L'objectif est de réduire la charge opérationnelle et de créer des outils internes à forte valeur ajoutée.",
        bulletPoints: ["Intégration API LLM (OpenAI/Anthropic)", "Automatisation de Workflows", "Création d'Outils Internes"],
        className: "md:col-span-2 md:row-span-1"
    }
];

export const Services = () => {
    return (
        <SectionWrapper id="services" className="relative z-10">
            <div className="flex flex-col gap-4 mb-12 items-center text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-5xl font-bold text-foreground tracking-tight"
                >
                    Services de Développement
                </motion.h2>
                <p className="text-foreground-secondary max-w-2xl">
                    De l'idée à la mise en production, j'accompagne vos projets digitaux avec une approche orientée performance et esthétisme.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6 auto-rows-[minmax(0,1fr)]">
                {services.map((service, index) => (
                    <GlassCard
                        key={index}
                        className={`h-full flex flex-col p-8 group relative overflow-hidden ${service.className}`}
                    >
                        {/* Background Gradient flair */}
                        <div className="absolute -right-10 -top-10 w-32 h-32 bg-white/5 rounded-full blur-3xl group-hover:bg-white/10 transition-colors duration-500 z-0" />

                        <div className="bg-background-secondary w-16 h-16 rounded-2xl flex items-center justify-center mb-6 border border-[var(--glass-border)] shadow-sm group-hover:scale-110 transition-transform duration-500 z-10 relative">
                            {service.icon}
                        </div>

                        <h3 className={`font-bold text-foreground mb-3 z-10 relative ${service.className.includes('row-span-2') ? 'text-3xl' : 'text-xl'}`}>
                            {service.title}
                        </h3>

                        <p className="text-foreground-secondary mb-6 flex-grow z-10 relative leading-relaxed">
                            {service.desc}
                        </p>

                        <ul className="space-y-2.5 mt-auto z-10 relative">
                            {service.bulletPoints.map((point, i) => (
                                <li key={i} className="flex items-center gap-3 text-sm text-foreground-secondary font-medium">
                                    <div className="w-1.5 h-1.5 rounded-full bg-foreground/40" />
                                    {point}
                                </li>
                            ))}
                        </ul>
                    </GlassCard>
                ))}
            </div>
        </SectionWrapper>
    );
};
