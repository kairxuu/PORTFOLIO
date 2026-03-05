import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { GlassCard } from "@/components/ui/GlassCard";
import { Layout, Code2, Zap, Search } from "lucide-react";

export const metadata = {
    title: "Services - Alexandre KEOLASY",
    description: "Expertise en Ingénierie Front-End, Design d'Interfaces et Optimisation de Performances.",
};

const servicesList = [
    {
        icon: Layout,
        title: "Design d'Interfaces (UI/UX)",
        tag: "Prototypage & Conception",
        desc: "Je ne me contente pas de coder, je conçois. Qu'il s'agisse d'une application métier complexe ou d'un site vitrine expérientiel, je crée des interfaces claires, intuitives et visuellement irréprochables. Chaque décision de design est guidée par l'utilisabilité et la conversion.",
        features: ["Wireframing & Prototypage Figma", "Création de Design Systems", "Micro-interactions & Animations", "Responsive Design Natif"]
    },
    {
        icon: Code2,
        title: "Développement Front-End",
        tag: "Développement React / Next.js",
        desc: "Je conçois des interfaces web modernes avec React et Next.js, en privilégiant un code clair. J’accorde une attention particulière à la fidélité des maquettes et à la maintenabilité du projet sur le long terme.",
        features: ["Single Page Applications (SPA)", "Server-Side Rendering (SSR) avec Next.js", "State Management complexe", "Intégration d'API headless"]
    },
    {
        icon: Zap,
        title: "Performance & Optimisation Web",
        tag: "Core Web Vitals & SEO",
        desc: "Une belle interface ne sert à rien si elle est lente. J'audite, diagnostique et optimise les applications web pour atteindre des scores de performance parfaits (Lighthouse 100). De l'optimisation des assets à la stratégie de mise en cache.",
        features: ["Amélioration des Core Web Vitals", "Lazy loading & Code splitting", "Optimisation du rendu côté serveur", "SEO Technique garanti"]
    },
    {
        icon: Search,
        title: "Audit Technique & Conseil",
        tag: "Analyse d'architecture",
        desc: "Vous avez un projet existant et souhaitez identifier des goulots d'étranglement ou des dettes techniques ? Je réalise des audits complets de base de code Front-End pour vous fournir une feuille de route claire d'améliorations.",
        features: ["Revue de code (React/TS)", "Analyse d'accessibilité (a11y)", "Stratégie de refonte", "Choix de stack technique"]
    }
];

export default function ServicesPage() {
    return (
        <main className="min-h-screen bg-[var(--background)] flex flex-col">
            <Header />

            {/* Editorial Header */}
            <section className="pt-40 pb-20 px-6 md:px-12 xl:px-24 max-w-7xl mx-auto w-full">
                <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-foreground mb-8">
                    Savoir-Faire.
                </h1>
                <p className="text-xl md:text-3xl text-foreground-secondary max-w-4xl font-light leading-relaxed">
                    Des solutions sur-mesure combinant un design audacieux et une rigueur d'ingénierie absolue. L'alliance de l'esthétique et de la performance.
                </p>
                <div className="w-full h-px bg-[var(--glass-border)] mt-20" />
            </section>

            {/* Services Detailed List */}
            <section className="flex-grow px-6 md:px-12 max-w-5xl mx-auto w-full pb-32">
                <div className="flex flex-col gap-12">
                    {servicesList.map((service, index) => (
                        <GlassCard key={index} className="p-8 md:p-12 lg:p-16 flex flex-col md:flex-row gap-12 items-start relative overflow-hidden">
                            {/* Icon Column */}
                            <div className="shrink-0">
                                <div className="w-20 h-20 rounded-3xl bg-[var(--glass-bg)] border border-[var(--glass-border)] flex items-center justify-center shadow-sm">
                                    <service.icon className="w-10 h-10 text-foreground" />
                                </div>
                            </div>

                            {/* Content Column */}
                            <div className="flex-grow">
                                <div className="mb-6">
                                    <span className="text-foreground-secondary text-xs font-bold tracking-widest uppercase mb-4 block">
                                        {service.tag}
                                    </span>
                                    <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight mb-6">
                                        {service.title}
                                    </h2>
                                    <p className="text-foreground-secondary text-lg leading-relaxed font-light">
                                        {service.desc}
                                    </p>
                                </div>

                                <div className="mt-8 border-t border-[var(--glass-border)] pt-8">
                                    <h4 className="text-sm font-semibold text-foreground mb-6 uppercase tracking-wider">Ce qui est inclus</h4>
                                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        {service.features.map((feature, fIdx) => (
                                            <li key={fIdx} className="flex items-center gap-3 text-foreground-secondary text-sm">
                                                <div className="w-1.5 h-1.5 rounded-full bg-foreground shrink-0" />
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </GlassCard>
                    ))}
                </div>
            </section>

            <Footer />
        </main>
    );
}
