"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "../ui/SectionWrapper";
import { GlassCard } from "../ui/GlassCard";
import { ArrowRight, Calendar, Clock } from "lucide-react";

const posts = [
    {
        title: "Mes principes pour un design d'exception",
        date: "12 Nov 2025",
        readTime: "4 min",
        category: "UI/UX Design",
        intro: "Découvrez comment réduire la charge cognitive et créer des interfaces qui semblent flotter, libérées de la lourdeur visuelle."
    },
    {
        title: "Pourquoi j'utilise Next.js & Vercel pour les portfolios modernes",
        date: "28 Oct 2025",
        readTime: "6 min",
        category: "Développement",
        intro: "Performance, SSR, Edge caching... Comment l'écosystème Vercel permet de délivrer une expérience utilisateur sans faille."
    },
    {
        title: "Glassmorphism : Style éphémère ou vraie valeur UX ?",
        date: "05 Oct 2025",
        readTime: "5 min",
        category: "Analyse",
        intro: "Exploration des avantages et limites du Glassmorphism, de la lisibilité à l'accessibilité en passant par le Dark Mode iOS."
    }
];

export const Blog = () => {
    return (
        <SectionWrapper id="blog" className="relative z-10">
            <div className="flex flex-col gap-4 mb-16 items-start">
                <motion.h2
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-5xl font-bold text-foreground tracking-tight"
                >
                    Notes & Insights
                </motion.h2>
                <p className="text-foreground-secondary max-w-2xl text-left">
                    Réflexions sur le design moderne, l'optimisation frontend et la culture produit.
                </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
                {posts.map((post, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1, duration: 0.5 }}
                    >
                        <GlassCard className="h-full flex flex-col p-6 group cursor-pointer">
                            <div className="mb-4 flex items-center justify-between text-xs font-medium text-foreground-secondary">
                                <span className="px-2 py-1 rounded bg-background-secondary border border-[var(--glass-border)] text-foreground-secondary">{post.category}</span>
                                <div className="flex items-center gap-3">
                                    <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {post.date}</span>
                                    <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {post.readTime}</span>
                                </div>
                            </div>

                            <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-foreground-secondary transition-colors leading-tight">
                                {post.title}
                            </h3>

                            <p className="text-foreground-secondary text-sm flex-grow mb-6">
                                {post.intro}
                            </p>

                            <div className="flex items-center gap-2 text-sm font-semibold text-foreground group-hover:text-foreground-secondary mt-auto">
                                Lire l'article <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </div>
                        </GlassCard>
                    </motion.div>
                ))}
            </div>
        </SectionWrapper>
    );
};
