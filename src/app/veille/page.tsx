"use client";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { GlassCard } from "@/components/ui/GlassCard";
import { Youtube, Headphones, Globe, Rss, Bot, Cpu, Zap, ShieldCheck, BadgeDollarSign, Code2, Download, CheckCircle2, XCircle, MonitorPlay } from "lucide-react";
import { useState, useEffect } from "react";

const PPT_FILENAME = "Veille Technologique_npu .pptx";

async function getRecentNews() {
    try {
        const res = await fetch(
            'https://hn.algolia.com/api/v1/search_by_date?query="NPU"+OR+"Neural+Processing+Unit"+OR+"AI+accelerator"&tags=story&hitsPerPage=4',
            { cache: "no-store" }
        );
        if (!res.ok) throw new Error("API fetching failed");
        const data = await res.json();
        return data.hits.map((hit: any) => ({
            date: new Date(hit.created_at).toLocaleDateString("fr-FR", {
                month: "long",
                year: "numeric",
                day: "numeric",
            }),
            title: hit.title,
            source: hit.url
                ? new URL(hit.url).hostname.replace("www.", "")
                : "Hacker News",
            url: hit.url || `https://news.ycombinator.com/item?id=${hit.objectID}`,
        }));
    } catch (error) {
        console.error("Error fetching news:", error);
        return [
            {
                date: "Mai 2025",
                title: "Qualcomm Snapdragon X Elite : le NPU qui rivalise avec les GPU d'entrée de gamme",
                source: "anandtech.com",
                url: "#",
            },
            {
                date: "Avril 2025",
                title: "Intel Core Ultra (Meteor Lake) : l'intégration du NPU dans les PC grand public",
                source: "techcrunch.com",
                url: "#",
            },
            {
                date: "Mars 2025",
                title: "Apple Silicon M-series : comment le Neural Engine redéfinit l'Edge AI",
                source: "arstechnica.com",
                url: "#",
            },
            {
                date: "Février 2025",
                title: "Architecture hétérogène CPU+GPU+NPU : le nouveau standard des ordinateurs modernes",
                source: "tom's hardware",
                url: "#",
            },
        ];
    }
}

export default function VeillePage() {
    const [recentNews, setRecentNews] = useState<any[]>([]);

    useEffect(() => {
        getRecentNews().then(setRecentNews);
    }, []);

    const processors = [
        {
            name: "CPU",
            label: "Cerveau Logique",
            description: "Gestion globale de l'ordinateur et du système d'exploitation.",
            color: "bg-blue-500/10 border-blue-500/20",
            dot: "bg-blue-400",
            icon: <Cpu className="w-6 h-6 text-blue-400" />,
        },
        {
            name: "GPU",
            label: "Moteur de Calcul",
            description: "Traitement massif de données et affichage d'images.",
            color: "bg-purple-500/10 border-purple-500/20",
            dot: "bg-purple-400",
            icon: <MonitorPlay className="w-6 h-6 text-purple-400" />,
        },
        {
            name: "NPU",
            label: "Spécialiste IA",
            description: "Accélérateur dédié exclusivement à l'Intelligence Artificielle.",
            color: "bg-emerald-500/10 border-emerald-500/20",
            dot: "bg-emerald-400",
            icon: <Bot className="w-6 h-6 text-emerald-400" />,
        },
    ];

    const avantages = [
        { icon: <ShieldCheck className="w-5 h-5 text-emerald-400" />, label: "Confidentialité et Sécurité", desc: "Les données sensibles sont traitées localement, sans transiter par le cloud. Le respect du RGPD est facilité." },
        { icon: <Zap className="w-5 h-5 text-yellow-400" />, label: "Réactivité", desc: "L'inférence locale supprime la latence réseau. Les applications réagissent en temps réel." },
        { icon: <CheckCircle2 className="w-5 h-5 text-sky-400" />, label: "Efficience Énergétique", desc: "Le NPU consomme nettement moins qu'un GPU pour les tâches d'IA, prolongeant l'autonomie des appareils mobiles." },
    ];

    const inconvenients = [
        { icon: <BadgeDollarSign className="w-5 h-5 text-orange-400" />, label: "Coût du Matériel", desc: "Les puces intégrant un NPU performant restent plus onéreuses, limitant leur démocratisation à court terme." },
        { icon: <Code2 className="w-5 h-5 text-red-400" />, label: "Complexité pour le Développement", desc: "L'optimisation d'un modèle pour un NPU spécifique (Intel, Qualcomm, Apple) requiert des compétences pointues et des outils distincts." },
    ];

    return (
        <main className="min-h-screen bg-background flex flex-col" suppressHydrationWarning>
            <Header />

            {/* ── Hero ── */}
            <section className="pt-28 md:pt-40 pb-20 px-6 md:px-12 xl:px-24 max-w-7xl mx-auto w-full relative">
                <div className="absolute top-20 right-10 w-64 h-64 bg-foreground/5 rounded-full blur-[80px] pointer-events-none" />

                <h2 className="text-sm font-semibold text-foreground-secondary tracking-widest uppercase mb-4 flex items-center gap-2">
                    <Rss className="w-4 h-4" /> BTS SIO SLAM — Épreuve E4
                </h2>
                <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-foreground mb-6">
                    Veille Technologique<span className="text-foreground-secondary/50">.</span>
                </h1>
                <p className="text-2xl md:text-3xl text-foreground font-medium mb-4" suppressHydrationWarning>
                    {"L'Évolution des Architectures Matérielles :"}
                    <br />
                    {"L'intégration des accélérateurs IA"}
                </p>
                <p className="text-lg md:text-xl text-foreground-secondary max-w-3xl font-light leading-relaxed mb-10">
                    Étude du passage de l&apos;architecture homogène à l&apos;architecture hétérogène,
                    avec l&apos;avènement du NPU comme spécialiste dédié à l&apos;Intelligence Artificielle embarquée.
                </p>

                <div className="flex flex-wrap items-center gap-4 mb-12">
                    <a
                        href={`/ppt/${PPT_FILENAME}`}
                        download
                        className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-glass-border bg-white/5 hover:bg-foreground hover:text-white text-foreground font-medium text-sm transition-all duration-300 group"
                    >
                        <Download className="w-4 h-4 group-hover:animate-bounce" />
                        Télécharger la présentation
                    </a>
                </div>

                <div className="w-full h-px bg-glass-border" />
            </section>

            {/* ── Méthodologie ── */}
            <section className="px-6 md:px-12 max-w-7xl mx-auto w-full pb-20">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                    <div className="lg:col-span-5">
                        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 tracking-tight">Ma Méthodologie</h2>
                        <p className="text-foreground-secondary font-light leading-relaxed mb-8">
                            Pour assurer un suivi rigoureux d&apos;un sujet en évolution rapide, j&apos;ai structuré ma veille autour de trois piliers complémentaires, couvrant aussi bien la vulgarisation que l&apos;analyse technique approfondie.
                        </p>
                        <div className="w-full h-64 md:h-80 rounded-3xl overflow-hidden border border-glass-border">
                            <img
                                src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2000&auto=format&fit=crop"
                                alt="Composants électroniques / Architecture matérielle"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>

                    <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-6">
                        <GlassCard className="p-8">
                            <div className="w-12 h-12 rounded-2xl bg-white border border-glass-border flex items-center justify-center mb-6 shadow-sm">
                                <Youtube className="w-6 h-6 text-red-500" />
                            </div>
                            <h4 className="text-lg font-bold text-foreground mb-3">YouTube</h4>
                            <p className="text-foreground-secondary font-light leading-relaxed text-sm">
                                Chaînes spécialisées en IA, hardware et software. Vulgarisation technologique et suivi des nouveautés.
                            </p>
                        </GlassCard>

                        <GlassCard className="p-8 group hover:border-foreground/20 transition-colors">
                            <div className="w-12 h-12 rounded-2xl bg-foreground text-background flex items-center justify-center mb-6 shadow-sm">
                                <Headphones className="w-5 h-5" />
                            </div>
                            <h4 className="text-lg font-bold text-foreground mb-3">Podcasts</h4>
                            <p className="text-foreground-secondary font-light leading-relaxed text-sm">
                                Écoute active de podcasts tech spécialisés en IA et hardware pour suivre les tendances et retours d&apos;expérience.
                            </p>
                        </GlassCard>

                        <GlassCard className="p-8">
                            <div className="w-12 h-12 rounded-2xl bg-white border border-glass-border flex items-center justify-center mb-6 shadow-sm">
                                <Globe className="w-5 h-5 text-foreground" />
                            </div>
                            <h4 className="text-lg font-bold text-foreground mb-3">Sites Web</h4>
                            <p className="text-foreground-secondary font-light leading-relaxed text-sm">
                                Consultation de sites spécialisés (Tom&apos;s Hardware, AnandTech, The Verge) pour les analyses techniques et benchmarks.
                            </p>
                        </GlassCard>
                    </div>
                </div>
            </section>

            {/* ── Architecture Hétérogène ── */}
            <section className="px-6 md:px-12 max-w-7xl mx-auto w-full pb-20">
                <div className="w-full h-px bg-glass-border mb-20" />

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
                    <div>
                        <div className="w-16 h-16 rounded-3xl bg-glass border border-glass-border flex items-center justify-center shrink-0 mb-8">
                            <Cpu className="w-8 h-8 text-foreground" />
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 tracking-tight">
                            Qu&apos;est-ce que c&apos;est ?
                        </h2>
                        <p className="text-foreground-secondary text-lg font-light leading-relaxed max-w-xl mb-6">
                            L&apos;ordinateur ne repose plus sur un seul processeur &quot;à tout faire&quot;. Il répartit désormais le travail entre <span className="text-foreground font-semibold">trois spécialistes</span>, passant d&apos;une architecture homogène à une architecture hétérogène.
                        </p>
                        <div className="flex items-center gap-3 text-sm text-foreground-secondary bg-glass border border-glass-border rounded-xl px-4 py-3 w-fit">
                            <span className="font-medium text-foreground">Architecture Homogène</span>
                            <span className="text-foreground-secondary">→</span>
                            <span className="font-medium text-foreground">Architecture Hétérogène</span>
                        </div>
                    </div>
                    <GlassCard className="p-0 overflow-hidden h-64 lg:h-[380px]">
                        <img
                            src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2000&auto=format&fit=crop"
                            alt="Architecture matérielle IA"
                            className="w-full h-full object-cover"
                        />
                    </GlassCard>
                </div>

                {/* CPU / GPU / NPU Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
                    {processors.map((proc) => (
                        <div
                            key={proc.name}
                            className={`rounded-2xl border p-8 flex flex-col gap-4 ${proc.color}`}
                        >
                            <div className="flex items-center gap-3">
                                {proc.icon}
                                <div>
                                    <span className="text-2xl font-bold text-foreground">{proc.name}</span>
                                    <span className="ml-2 text-sm font-medium text-foreground-secondary">— {proc.label}</span>
                                </div>
                            </div>
                            <p className="text-foreground-secondary font-light leading-relaxed text-sm">
                                {proc.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* ── Avantages & Inconvénients ── */}
                <div className="w-full h-px bg-glass-border mb-20" />
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 tracking-tight">
                    Avantages &amp; Inconvénients
                </h2>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Avantages */}
                    <div>
                        <div className="flex items-center gap-2 mb-6">
                            <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                            <h3 className="text-xl font-bold text-foreground">Avantages</h3>
                        </div>
                        <div className="space-y-4">
                            {avantages.map((item, i) => (
                                <GlassCard key={i} className="p-6 flex gap-4 items-start">
                                    <div className="shrink-0 mt-0.5">{item.icon}</div>
                                    <div>
                                        <h4 className="text-base font-bold text-foreground mb-1">{item.label}</h4>
                                        <p className="text-foreground-secondary font-light text-sm leading-relaxed">{item.desc}</p>
                                    </div>
                                </GlassCard>
                            ))}
                        </div>
                    </div>

                    {/* Inconvénients */}
                    <div>
                        <div className="flex items-center gap-2 mb-6">
                            <XCircle className="w-5 h-5 text-red-400" />
                            <h3 className="text-xl font-bold text-foreground">Inconvénients</h3>
                        </div>
                        <div className="space-y-4">
                            {inconvenients.map((item, i) => (
                                <GlassCard key={i} className="p-6 flex gap-4 items-start">
                                    <div className="shrink-0 mt-0.5">{item.icon}</div>
                                    <div>
                                        <h4 className="text-base font-bold text-foreground mb-1">{item.label}</h4>
                                        <p className="text-foreground-secondary font-light text-sm leading-relaxed">{item.desc}</p>
                                    </div>
                                </GlassCard>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Actualités ── */}
            <section className="px-6 md:px-12 max-w-7xl mx-auto w-full pb-32">
                <div className="w-full h-px bg-glass-border mb-20" />
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-10 gap-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">Actualités en temps réel</h2>
                    <div className="flex items-center gap-2 text-foreground-secondary text-sm">
                        <span className="relative flex h-3 w-3">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                            <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500" />
                        </span>
                        Mise à jour automatique (Hacker News API)
                    </div>
                </div>

                <div className="space-y-6">
                    {recentNews.map((article: any, i: number) => (
                        <a
                            key={i}
                            href={article.url}
                            target="_blank"
                            rel="noreferrer"
                            className="group relative bg-glass border border-glass-border p-6 rounded-2xl hover:bg-glass-hover transition-colors flex flex-col md:flex-row md:items-center justify-between gap-4"
                        >
                            <div>
                                <span className="text-sm font-semibold text-foreground-secondary uppercase tracking-wider mb-2 block">{article.date}</span>
                                <h3 className="text-xl font-bold text-foreground group-hover:text-white transition-colors">{article.title}</h3>
                            </div>
                            <div className="flex items-center gap-4 shrink-0">
                                <span className="text-foreground-secondary text-sm bg-background-secondary px-3 py-1 rounded-full">{article.source}</span>
                            </div>
                        </a>
                    ))}
                </div>
            </section>

            <Footer />
        </main>
    );
}
