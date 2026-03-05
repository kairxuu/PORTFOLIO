"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "../ui/SectionWrapper";
import { GlassCard } from "../ui/GlassCard";
import { GlassButton } from "../ui/GlassButton";
import { Send, Mail, MapPin, Loader2 } from "lucide-react";
import { useState, FormEvent } from "react";

export const Contact = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate API call
        setTimeout(() => {
            setIsSubmitting(false);
            setIsSuccess(true);
            setTimeout(() => setIsSuccess(false), 5000); // Reset after 5s
        }, 1500);
    };

    return (
        <SectionWrapper id="contact" className="relative z-10">
            <div className="w-full grid lg:grid-cols-2 gap-12 items-start">
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col gap-6"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel w-fit border-[var(--glass-border)] text-sm font-medium text-foreground-secondary mb-2">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-foreground-secondary opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-foreground-secondary"></span>
                        </span>
                        Disponible pour nouveaux projets
                    </div>

                    <h2 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight leading-tight">
                        Prêt à lancer un <br />projet WEB ?
                    </h2>

                    <p className="text-foreground-secondary text-lg leading-relaxed mt-6">
                        J'accompagne les entreprises ambitieuses dans leur transformation digitale en concevant des écosystèmes web robustes, performants et parfaitement alignés avec leurs objectifs stratégiques.
                    </p>

                    <div className="flex flex-col gap-4 mt-6">
                        <GlassCard className="p-4 flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full bg-background-secondary flex items-center justify-center text-foreground-secondary border border-[var(--glass-border)] shrink-0">
                                <Mail className="w-5 h-5" />
                            </div>
                            <div className="overflow-hidden">
                                <p className="text-foreground/50 text-sm">Email direct</p>
                                <a href="mailto:alexklsy@proton.me" className="text-foreground font-medium hover:text-foreground-secondary transition-colors truncate block">
                                    alexklsy@proton.me
                                </a>
                            </div>
                        </GlassCard>

                        <GlassCard className="p-4 flex items-center gap-4 group">
                            <div className="w-12 h-12 rounded-full bg-background-secondary flex items-center justify-center text-foreground-secondary border border-[var(--glass-border)] shrink-0 group-hover:text-foreground transition-colors">
                                <MapPin className="w-5 h-5" />
                            </div>
                            <div className="overflow-hidden">
                                <p className="text-foreground/50 text-sm">Localisation</p>
                                <p className="text-foreground font-medium truncate">Paris, France (Remote OK)</p>
                            </div>
                        </GlassCard>

                        <GlassCard className="p-4 flex items-center justify-between gap-4 group">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-background-secondary flex items-center justify-center text-foreground-secondary border border-[var(--glass-border)] shrink-0 group-hover:text-foreground transition-colors">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                                </div>
                                <div className="overflow-hidden">
                                    <p className="text-foreground/50 text-sm">Réseaux Sociaux</p>
                                    <p className="text-foreground font-medium truncate">Connectons-nous</p>
                                </div>
                            </div>
                            <div className="flex gap-2 mr-2">
                                <a href="https://github.com/kairxuu" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full border border-[var(--glass-border)] flex items-center justify-center text-foreground/70 hover:text-foreground hover:bg-background-secondary shadow-sm transition-all transform hover:scale-110">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
                                </a>
                                <a href="https://www.linkedin.com/in/alexandre-keolasy-287887276" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full border border-[var(--glass-border)] flex items-center justify-center text-foreground/70 hover:text-foreground hover:bg-background-secondary shadow-sm transition-all transform hover:scale-110">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                                </a>
                            </div>
                        </GlassCard>
                    </div>

                    <p className="text-foreground/40 text-sm mt-4">
                        * Réponse estimée sous 24 à 48 heures ouvrées.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                >
                    <GlassCard className="p-8">
                        <h3 className="text-2xl font-bold text-foreground mb-6">Discutons de votre vision</h3>

                        {isSuccess ? (
                            <div className="flex flex-col items-center justify-center h-[400px] text-center gap-4 animate-in fade-in zoom-in">
                                <div className="w-16 h-16 rounded-full bg-background-secondary text-foreground flex items-center justify-center mb-2 border border-[var(--glass-border)] shadow-sm">
                                    <Send className="w-8 h-8" />
                                </div>
                                <h4 className="text-xl font-bold text-foreground">Message Envoyé !</h4>
                                <p className="text-foreground/60">Merci de m'avoir contacté. Je reviens vers vous très prochainement en impesanteur.</p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                                <div className="grid grid-cols-2 gap-5">
                                    <div className="flex flex-col gap-2">
                                        <label htmlFor="name" className="text-sm font-medium text-foreground/70">Nom complet</label>
                                        <input
                                            type="text"
                                            id="name"
                                            required
                                            className="bg-[var(--glass-bg)] border border-[var(--glass-border)] rounded-xl px-4 py-3 text-foreground placeholder:text-foreground/30 focus:outline-none focus:border-foreground/30 focus:ring-1 focus:ring-foreground/10 transition-all font-medium"
                                            placeholder="Nom complet"
                                        />
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <label htmlFor="email" className="text-sm font-medium text-foreground/70">Email pro</label>
                                        <input
                                            type="email"
                                            id="email"
                                            required
                                            className="bg-[var(--glass-bg)] border border-[var(--glass-border)] rounded-xl px-4 py-3 text-foreground placeholder:text-foreground/30 focus:outline-none focus:border-foreground/30 focus:ring-1 focus:ring-foreground/10 transition-all font-medium"
                                            placeholder="Email"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-5">
                                    <div className="flex flex-col gap-2">
                                        <label htmlFor="project" className="text-sm font-medium text-foreground/70">Type de projet</label>
                                        <select
                                            id="project"
                                            className="bg-[var(--glass-bg)] border border-[var(--glass-border)] rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-foreground/50 transition-all appearance-none font-medium"
                                        >
                                            <option value="uiux">UI/UX Design</option>
                                            <option value="dev">Développement Front-end</option>
                                            <option value="full">Design + Développement</option>
                                            <option value="audit">Audit & Opération</option>
                                        </select>
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <label htmlFor="budget" className="text-sm font-medium text-foreground/70">Budget estimé</label>
                                        <select
                                            id="budget"
                                            className="bg-[var(--glass-bg)] border border-[var(--glass-border)] rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-foreground/50 transition-all appearance-none font-medium"
                                        >
                                            <option value="small">&lt; 3k €</option>
                                            <option value="medium">3k € - 10k €</option>
                                            <option value="large">&gt; 10k €</option>
                                            <option value="unknown">À définir</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="flex flex-col gap-2">
                                    <label htmlFor="message" className="text-sm font-medium text-foreground/70">Votre message</label>
                                    <textarea
                                        id="message"
                                        rows={4}
                                        required
                                        className="bg-[var(--glass-bg)] border border-[var(--glass-border)] rounded-xl px-4 py-3 text-foreground placeholder:text-foreground/30 focus:outline-none focus:border-foreground/30 focus:ring-1 focus:ring-foreground/10 transition-all resize-none font-medium"
                                        placeholder="Parlez-moi de votre vision..."
                                    />
                                </div>

                                <GlassButton
                                    type="submit"
                                    variant="primary"
                                    className="w-full mt-2 h-12"
                                    disabled={isSubmitting}
                                >
                                    {isSubmitting ? (
                                        <Loader2 className="w-5 h-5 animate-spin" />
                                    ) : (
                                        <>
                                            Envoyer la demande <Send className="ml-2 w-4 h-4" />
                                        </>
                                    )}
                                </GlassButton>
                            </form>
                        )}
                    </GlassCard>
                </motion.div>
            </div>
        </SectionWrapper>
    );
};
