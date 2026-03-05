import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { GlassCard } from "@/components/ui/GlassCard";
import { BellRing, Youtube, Headphones, ArrowRight, Rss, Bot, Cpu, Network } from "lucide-react";

export const metadata = {
    title: "Veille Technologique | Alexandre KEOLASY",
    description: "Ma veille technologique dans le cadre du BTS SIO, axée sur l'automatisation des agents IA.",
};
async function getRecentNews() {

    try {
        const res = await fetch('https://hn.algolia.com/api/v1/search_by_date?query="AI+agent"&tags=story&hitsPerPage=4', { 
            next: { revalidate: 3600 } // Revalidate every hour
        });
        
        if (!res.ok) throw new Error('API fetching failed');
        
        const data = await res.json();
        return data.hits.map((hit: any) => ({
            date: new Date(hit.created_at).toLocaleDateString('fr-FR', { month: 'long', year: 'numeric', day: 'numeric' }),
            title: hit.title,
            source: hit.url ? new URL(hit.url).hostname.replace('www.', '') : 'Hacker News',
            url: hit.url || `https://news.ycombinator.com/item?id=${hit.objectID}`
        }));
    } catch (error) {
        console.error("Error fetching news:", error);
        return [
            { date: "Récemment", title: "Démonstration de Devin, le premier ingénieur logiciel IA autonome", source: "cognition-labs.com", url: "#" },
            { date: "Récemment", title: "Lancement de nouveaux frameworks d'orchestration Multi-Agents", source: "techcrunch.com", url: "#" },
            { date: "Récemment", title: "Sécurité : Comment encadrer les permissions des agents IA", source: "news.ycombinator.com", url: "#" },
        ];
    }
}

export default async function VeillePage() {
    const recentNews = await getRecentNews();

    return (
        <main className="min-h-screen bg-background flex flex-col">
            <Header />

            {/* Hero Section */}
            <section className="pt-40 pb-20 px-6 md:px-12 xl:px-24 max-w-7xl mx-auto w-full relative">
                {/* Decorative background element */}
                <div className="absolute top-20 right-10 w-64 h-64 bg-foreground/5 rounded-full blur-[80px] pointer-events-none" />
                
                <h2 className="text-sm font-semibold text-foreground-secondary tracking-widest uppercase mb-4 flex items-center gap-2">
                    <Rss className="w-4 h-4" /> BTS SIO - Épreuve E4
                </h2>
                <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-foreground mb-6">
                    Veille Technologique<span className="text-foreground-secondary/50">.</span>
                </h1>
                <p className="text-2xl md:text-3xl text-foreground font-medium mb-6">
                    L'automatisation des agents IA
                </p>
                <p className="text-xl md:text-2xl text-foreground-secondary max-w-4xl font-light leading-relaxed mb-12">
                    Étude de l'évolution des intelligences artificielles autonomes capables d'exécuter des tâches complexes en cascade sans intervention humaine.
                </p>

                <div className="w-full h-px bg-glass-border" />
            </section>

            {/* Méthodologie Section (Mise en avant selon la demande) */}
            <section className="px-6 md:px-12 max-w-7xl mx-auto w-full pb-20">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                    <div className="lg:col-span-5">
                        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 tracking-tight">Ma Méthodologie</h2>
                        <p className="text-foreground-secondary font-light leading-relaxed mb-8">
                            Pour construire et maintenir cette veille technologique sur un sujet qui évolue extrêmement vite, j'ai mis en place un écosystème de sources d'informations ciblé et automatisé. Voici les trois piliers de ma recherche :
                        </p>
                        
                        {/* Methodology Image */}
                        <div className="w-full h-64 md:h-80 rounded-3xl overflow-hidden mt-8 border border-glass-border">
                            <img 
                                src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2000&auto=format&fit=crop" 
                                alt="Réseau de neurones / Technologie" 
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
                                Suivi de chaînes spécialisées en IA et développement (démos techniques, conférences tech, vulgarisation d'outils comme AutoGPT).
                            </p>
                        </GlassCard>
                        
                        <GlassCard className="p-8 group hover:border-foreground/20 transition-colors">
                            <div className="w-12 h-12 rounded-2xl bg-foreground text-background flex items-center justify-center mb-6 shadow-sm">
                                <BellRing className="w-5 h-5" />
                            </div>
                            <h4 className="text-lg font-bold text-foreground mb-3">Google Alerts</h4>
                            <p className="text-foreground-secondary font-light leading-relaxed text-sm">
                                Alertes configurées sur des mots-clés spécifiques ("AI Agents", "Autonomous AI", "LLM automation") pour recevoir l'actualité critique.
                            </p>
                        </GlassCard>

                        <GlassCard className="p-8">
                            <div className="w-12 h-12 rounded-2xl bg-white border border-glass-border flex items-center justify-center mb-6 shadow-sm">
                                <Headphones className="w-5 h-5 text-foreground" />
                            </div>
                            <h4 className="text-lg font-bold text-foreground mb-3">Podcasts</h4>
                            <p className="text-foreground-secondary font-light leading-relaxed text-sm">
                                Écoute active de podcasts tech lors des déplacements pour comprendre les enjeux stratégiques et les retours d'expérience.
                            </p>
                        </GlassCard>
                    </div>
                </div>
            </section>

            {/* Sujet de Veille Detail */}
            <section className="px-6 md:px-12 max-w-7xl mx-auto w-full pb-20">
                <div className="w-full h-px bg-glass-border mb-20" />

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
                    <div>
                        <div className="w-16 h-16 rounded-3xl bg-glass border border-glass-border flex items-center justify-center shrink-0 mb-8">
                            <Bot className="w-8 h-8 text-foreground" />
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 tracking-tight">Thème principal : L'automatisation des agents IA</h2>
                        <p className="text-foreground-secondary text-lg font-light leading-relaxed max-w-xl">
                            Contrairement aux chatbots classiques qui nécessitent un prompt pour chaque action, les agents autonomes peuvent planifier, utiliser des outils (web browsing, exécution de code) et collaborer entre eux pour atteindre un objectif global.
                        </p>
                    </div>
                    <GlassCard className="p-0 overflow-hidden h-64 lg:h-[400px]">
                        <img 
                            src="https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2000&auto=format&fit=crop" 
                            alt="Intelligence Artificielle" 
                            className="w-full h-full object-cover" 
                        />
                    </GlassCard>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <GlassCard className="p-8 flex flex-col">
                        <div className="flex items-center gap-3 mb-4">
                            <Cpu className="w-5 h-5 text-foreground-secondary" />
                            <h3 className="text-xl font-bold text-foreground">Fonctionnement et Logique</h3>
                        </div>
                        <p className="text-foreground-secondary font-light leading-relaxed mb-6 grow">
                            Les agents IA utilisent des LLMs (Large Language Models) comme "cerveau" pour dériver des étapes logiques. Des frameworks spécifiques leur permettent d'exécuter du code ou de naviguer de manière autonome.
                        </p>
                        <ul className="space-y-2 mt-4 border-t border-glass-border pt-4">
                            {["AutoGPT / BabyAGI", "LangChain & LlamaIndex", "Boucles de raisonnement ReAct"].map((tech, i) => (
                                <li key={i} className="flex items-center gap-2 text-sm text-foreground-secondary font-medium">
                                    <div className="w-1 h-1 rounded-full bg-foreground/40" />
                                    {tech}
                                </li>
                            ))}
                        </ul>
                    </GlassCard>

                    <GlassCard className="p-8 flex flex-col">
                        <div className="flex items-center gap-3 mb-4">
                            <Network className="w-5 h-5 text-foreground-secondary" />
                            <h3 className="text-xl font-bold text-foreground">Outils et Cas d'usage</h3>
                        </div>
                        <p className="text-foreground-secondary font-light leading-relaxed mb-6 grow">
                            Les entreprises intègrent ces agents pour automatiser des workflows complexes : tests logiciels autonomes, recherche de vulnérabilités, ou encore gestion de service client autonome de bout en bout.
                        </p>
                        <ul className="space-y-2 mt-4 border-t border-glass-border pt-4">
                            {["Devin (IA Software Engineer)", "Agents d'automatisation QA", "Scraping web intelligent"].map((tech, i) => (
                                <li key={i} className="flex items-center gap-2 text-sm text-foreground-secondary font-medium">
                                    <div className="w-1 h-1 rounded-full bg-foreground/40" />
                                    {tech}
                                </li>
                            ))}
                        </ul>
                    </GlassCard>

                    <GlassCard className="p-8 flex flex-col">
                        <div className="flex items-center gap-3 mb-4">
                            <Bot className="w-5 h-5 text-foreground-secondary" />
                            <h3 className="text-xl font-bold text-foreground">Défis et Risques</h3>
                        </div>
                        <p className="text-foreground-secondary font-light leading-relaxed mb-6 grow">
                            Déléguer des actions à des IA autonomes soulève des risques de boucles infinies, d'hallucinations couplées à des actions destructrices, et pose la question de l'observabilité.
                        </p>
                        <ul className="space-y-2 mt-4 border-t border-glass-border pt-4">
                            {["Sécurité et 'Jailbreaking'", "Dérive des objectifs", "Coût des requêtes API (Tokens)", "Nécessité du 'Human in the loop'"].map((tech, i) => (
                                <li key={i} className="flex items-center gap-2 text-sm text-foreground-secondary font-medium">
                                    <div className="w-1 h-1 rounded-full bg-foreground/40" />
                                    {tech}
                                </li>
                            ))}
                        </ul>
                    </GlassCard>
                </div>
            </section>

            {/* Articles Récents Automatisés */}
            <section className="px-6 md:px-12 max-w-7xl mx-auto w-full pb-32">
                <div className="w-full h-px bg-glass-border mb-20" />
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-10 gap-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">Actualités en temps réel</h2>
                    <div className="flex items-center gap-2 text-foreground-secondary text-sm">
                        <span className="relative flex h-3 w-3">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                        </span>
                        Mise à jour automatique (API Hacker News)
                    </div>
                </div>
                
                <div className="space-y-6">
                    {recentNews.map((article: any, i: number) => (
                        <a key={i} href={article.url} target="_blank" rel="noreferrer" className="group relative bg-glass border border-glass-border p-6 rounded-2xl hover:bg-glass-hover transition-colors flex flex-col md:flex-row md:items-center justify-between gap-4">
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
