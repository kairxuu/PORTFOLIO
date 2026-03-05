import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { GlassCard } from "@/components/ui/GlassCard";
import { GlassButton } from "@/components/ui/GlassButton";
import { ExternalLink, Github, Lock } from "lucide-react";
import Link from "next/link";

export const metadata = {
    title: "Projets - Alexandre KEOLASY",
    description: "Découvrez mes derniers travaux en ingénierie front-end et design d'interfaces.",
};

const fullProjects = [
    {
        title: "Wyze Academy",
        role: "Développeur Front-End",
        image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop",
        desc: "Plateforme e-learning premium. Architecture front-end optimisée pour les performances (chargement différé, pré-rendu) couplée à une direction artistique 'Dark Luxury' exigeante. Intégration complexe d'animations GSAP sans compromettre les Core Web Vitals.",
        stack: ["React 18", "Tailwind CSS", "GSAP", "Architecture Modulaire", "Zustand"],
        demoLink: "https://guinee.wyze-academy.com",
        githubLink: "#",
        isPrivate: true,
    },
    {
        title: "Site vitrine",
        role: "Développeur Front-End",
        image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop",
        desc: "Plateforme d'e-commerce pour la vente de tech.",
        stack: ["PHP", "CSS", "HTML", "MYSQL"],
        demoLink: "#",
        githubLink: "#",
        isPrivate: false,
    },
];

export default function ProjetsPage() {
    return (
        <main className="min-h-screen bg-[var(--background)] flex flex-col">
            <Header />

            {/* Editorial Header */}
            <section className="pt-40 pb-20 px-6 md:px-12 max-w-7xl mx-auto w-full">
                <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-foreground mb-8">
                    Travaux Sélectionnés.
                </h1>
                <p className="text-xl md:text-3xl text-foreground-secondary max-w-4xl font-light leading-relaxed">
                    Un aperçu des défis techniques et des designs premium que j'ai conçus et développés récemment. Exigence, performance et esthétique.
                </p>
                <div className="w-full h-px bg-[var(--glass-border)] mt-20" />
            </section>

            {/* Projects Vertical Feed */}
            <section className="flex-grow px-6 md:px-12 max-w-7xl mx-auto w-full pb-32">
                <div className="flex flex-col gap-24">
                    {fullProjects.map((project, index) => (
                        <div key={index} className="flex flex-col xl:flex-row gap-12 items-center">
                            {/* Visual */}
                            <GlassCard className="w-full xl:w-3/5 p-2 md:p-4 shrink-0 overflow-hidden">
                                <div className="relative w-full aspect-[16/10] overflow-hidden rounded-xl border border-[var(--glass-border)] bg-background-secondary/50">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </GlassCard>

                            {/* Info */}
                            <div className="w-full xl:w-2/5 flex flex-col justify-center">
                                <div className="mb-8">
                                    <span className="inline-block px-3 py-1 rounded bg-[var(--glass-bg)] border border-[var(--glass-border)] text-foreground-secondary text-[11px] font-bold tracking-widest uppercase mb-6">
                                        {project.role}
                                    </span>
                                    <h2 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight mb-6">
                                        {project.title}
                                    </h2>
                                    <p className="text-foreground-secondary text-lg leading-relaxed font-light mb-8">
                                        {project.desc}
                                    </p>

                                    <div className="flex flex-wrap gap-2 mb-10">
                                        {project.stack.map(tech => (
                                            <span key={tech} className="text-sm px-4 py-2 font-medium rounded-full bg-[var(--background)] border border-[var(--glass-border)] text-foreground/80 whitespace-nowrap">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Actions */}
                                <div className="flex items-center gap-4 border-t border-[var(--glass-border)] pt-8">
                                    <Link href={project.demoLink} className="flex-1 max-w-[200px]">
                                        <GlassButton variant="primary" className="w-full py-4 h-14 text-sm rounded-full font-semibold shadow-sm">
                                            Consulter <ExternalLink className="ml-2 w-4 h-4" />
                                        </GlassButton>
                                    </Link>
                                    {project.isPrivate ? (
                                        <div
                                            title="Code source privé"
                                            className="w-14 h-14 rounded-full bg-[var(--background)] flex items-center justify-center text-foreground/30 shrink-0 border border-[var(--glass-border)] cursor-not-allowed relative"
                                        >
                                            <Github className="w-6 h-6" />
                                            <div className="absolute -bottom-1 -right-1 bg-white border border-[var(--glass-border)] rounded-full p-1.5 shadow-sm">
                                                <Lock className="w-3 h-3 text-black" />
                                            </div>
                                        </div>
                                    ) : (
                                        <a
                                            href={project.githubLink}
                                            target="_blank"
                                            rel="noreferrer"
                                            title="Voir le code source"
                                            className="w-14 h-14 rounded-full bg-[var(--glass-bg)] flex items-center justify-center text-foreground shrink-0 border border-[var(--glass-border)] shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 hover:bg-foreground/5 group"
                                        >
                                            <Github className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Final CTA Strip */}
            <section className="w-full border-t border-[var(--glass-border)] py-20 bg-background-secondary/20">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Prêt à lancer le vôtre ?</h2>
                    <Link href="/contact">
                        <GlassButton variant="primary" className="px-10 h-14 rounded-full text-base">
                            Me contacter
                        </GlassButton>
                    </Link>
                </div>
            </section>

            <Footer />
        </main>
    );
}
