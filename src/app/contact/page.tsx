"use client";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { GlassCard } from "@/components/ui/GlassCard";
import { GlassButton } from "@/components/ui/GlassButton";
import { Mail, MapPin, Github, Linkedin, ArrowRight } from "lucide-react";



export default function ContactPage() {
    return (
        <main className="min-h-screen bg-[var(--background)] flex flex-col">
            <Header />

            {/* Editorial Header */}
            <section className="pt-40 pb-16 px-6 md:px-12 xl:px-24 max-w-7xl mx-auto w-full">
                <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-foreground mb-8">
                    Démarrer un projet.
                </h1>
                <p className="text-xl md:text-3xl text-foreground-secondary max-w-4xl font-light leading-relaxed">
                    Une refonte technique, la création d'un design system ou le développement de zéro ? Parlons de votre vision.
                </p>
                <div className="w-full h-px bg-[var(--glass-border)] mt-20" />
            </section>

            {/* Contact Split Section */}
            <section className="px-6 md:px-12 max-w-7xl mx-auto w-full pb-32">
                <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">

                    {/* Left: Info */}
                    <div className="w-full lg:w-5/12 shrink-0">
                        <div className="sticky top-32">
                            <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight mb-8">
                                Coordonnées
                            </h2>
                            <p className="text-foreground-secondary text-lg leading-relaxed font-light mb-12">
                                Je réponds généralement sous 24h. Laissez-moi un maximum de détails sur votre projet (contexte, design existant, deadline) pour une réponse précise.
                            </p>

                            <div className="space-y-8 mb-12">
                                <div className="flex items-center gap-6">
                                    <div className="w-14 h-14 rounded-full bg-[var(--glass-bg)] border border-[var(--glass-border)] flex items-center justify-center shrink-0">
                                        <Mail className="w-6 h-6 text-foreground" />
                                    </div>
                                    <div>
                                        <span className="block text-sm text-foreground-secondary font-medium tracking-wide uppercase mb-1">Email</span>
                                        <a href="mailto:alexandre@wyze-conseil.com" className="text-xl md:text-2xl font-bold text-foreground">
                                            alexandre@wyze-conseil.com
                                        </a>
                                    </div>
                                </div>
                                <div className="flex items-center gap-6">
                                    <div className="w-14 h-14 rounded-full bg-[var(--glass-bg)] border border-[var(--glass-border)] flex items-center justify-center shrink-0">
                                        <MapPin className="w-6 h-6 text-foreground" />
                                    </div>
                                    <div>
                                        <span className="block text-sm text-foreground-secondary font-medium tracking-wide uppercase mb-1">Localisation</span>
                                        <span className="text-xl md:text-2xl font-bold text-foreground">
                                            Paris, France
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* Social Links */}
                            <div className="flex gap-4">
                                <a
                                    href="https://github.com/kairxuu"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="w-16 h-16 rounded-full bg-background border border-[var(--glass-border)] flex items-center justify-center text-foreground-secondary hover:text-foreground transition-colors"
                                >
                                    <Github className="w-6 h-6" />
                                </a>
                                <a
                                    href="https://www.linkedin.com/in/alexandre-keolasy-287887276"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="w-16 h-16 rounded-full bg-background border border-[var(--glass-border)] flex items-center justify-center text-foreground-secondary hover:text-foreground transition-colors"
                                >
                                    <Linkedin className="w-6 h-6" />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Right: Form */}
                    <div className="w-full lg:w-7/12">
                        <GlassCard className="p-8 md:p-12 lg:p-16">
                            <form className="flex flex-col gap-10">
                                <div className="space-y-3">
                                    <label htmlFor="name" className="text-sm font-semibold text-foreground-secondary tracking-widest uppercase">Nom complet</label>
                                    <input
                                        type="text"
                                        id="name"
                                        className="w-full bg-transparent border-b border-[var(--glass-border)] pb-4 text-xl md:text-2xl text-foreground font-light focus:outline-none focus:border-foreground transition-colors placeholder:text-foreground/20 rounded-none"
                                        placeholder="John Doe"
                                    />
                                </div>

                                <div className="space-y-3">
                                    <label htmlFor="email" className="text-sm font-semibold text-foreground-secondary tracking-widest uppercase">Adresse Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        className="w-full bg-transparent border-b border-[var(--glass-border)] pb-4 text-xl md:text-2xl text-foreground font-light focus:outline-none focus:border-foreground transition-colors placeholder:text-foreground/20 rounded-none"
                                        placeholder="john@entreprise.com"
                                    />
                                </div>

                                <div className="space-y-3">
                                    <label htmlFor="type" className="text-sm font-semibold text-foreground-secondary tracking-widest uppercase">Type de Projet</label>
                                    <select
                                        id="type"
                                        className="w-full bg-transparent border-b border-[var(--glass-border)] pb-4 text-xl md:text-2xl text-foreground font-light focus:outline-none focus:border-foreground transition-colors rounded-none appearance-none cursor-pointer"
                                    >
                                        <option value="default" className="bg-background text-foreground">Sélectionnez une option...</option>
                                        <option value="webapp" className="bg-background text-foreground">Application Web Front-End</option>
                                        <option value="design" className="bg-background text-foreground">Design UI/UX & Prototypage</option>
                                        <option value="audit" className="bg-background text-foreground">Audit de Performance Web</option>
                                        <option value="other" className="bg-background text-foreground">Autre / Conseil</option>
                                    </select>
                                </div>

                                <div className="space-y-3">
                                    <label htmlFor="message" className="text-sm font-semibold text-foreground-secondary tracking-widest uppercase">Message</label>
                                    <textarea
                                        id="message"
                                        rows={4}
                                        className="w-full bg-transparent border-b border-[var(--glass-border)] pb-4 text-xl md:text-2xl text-foreground font-light focus:outline-none focus:border-foreground transition-colors placeholder:text-foreground/20 resize-none rounded-none"
                                        placeholder="Décrivez vos objectifs principaux..."
                                    />
                                </div>

                                <button
                                    type="button"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        alert("Ceci est une démonstration statique du portfolio.");
                                    }}
                                    className="mt-8 flex items-center justify-between w-full h-20 px-8 lg:px-12 bg-foreground text-background rounded-full font-bold text-xl hover:bg-foreground/90 transition-colors"
                                >
                                    Envoyer la demande
                                    <ArrowRight className="w-8 h-8" />
                                </button>
                            </form>
                        </GlassCard>
                    </div>

                </div>
            </section>

            <Footer />
        </main>
    );
}
