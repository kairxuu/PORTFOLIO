import { Github, Linkedin } from "lucide-react";
import Link from "next/link";

export const Footer = () => {
    return (
        <footer className="border-t border-glass-border bg-background w-full pt-16 pb-8">
            <div className="px-6 w-full max-w-5xl mx-auto">
                <div className="grid md:grid-cols-4 gap-12 mb-12">
                    <div className="md:col-span-2">
                        <Link href="/" className="inline-flex items-center gap-2 group mb-6">
                            <span className="font-bold text-lg tracking-tight text-foreground">
                                Alexandre KEOLASY
                            </span>
                        </Link>
                        <p className="text-foreground/60 max-w-sm mb-6 leading-relaxed">
                            Apprendre, expérimenter et construire. Étudiant en BTS SIO (Services Informatiques aux Organisations).
                        </p>
                        <div className="flex items-center gap-4 text-foreground/60">
                            <a href="https://github.com/kairxuu" target="_blank" rel="noreferrer" aria-label="GitHub Profile" className="hover:text-foreground hover:scale-105 transition-all">
                                <Github className="w-5 h-5" />
                            </a>
                            <a href="https://www.linkedin.com/in/alexandre-keolasy-287887276" target="_blank" rel="noreferrer" aria-label="LinkedIn Profile" className="hover:text-foreground hover:scale-105 transition-all">
                                <Linkedin className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-foreground font-semibold mb-6 tracking-tight">Navigation</h3>
                        <ul className="flex flex-col gap-3 text-foreground/60">
                            <li><Link href="/about" className="hover:text-foreground transition-colors">À propos</Link></li>
                            <li><Link href="/ppe/ppe1" className="hover:text-foreground transition-colors">PPE</Link></li>
                            <li><Link href="/veille" className="hover:text-foreground transition-colors">Veille</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-foreground font-semibold mb-6 tracking-tight">Contact</h3>
                        <ul className="flex flex-col gap-3 text-foreground/60">
                            <li><a href="mailto:alexklsy@proton.me" className="hover:text-foreground transition-colors">alexklsy@proton.me</a></li>
                            <li>Paris, France</li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-foreground/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-foreground/40">
                    <p>© 2026 – Alexandre KEOLASY. Tous droits réservés.</p>
                    <div className="flex items-center gap-4">
                        <a href="#" className="hover:text-foreground transition-colors">Mentions légales</a>
                        <a href="#" className="hover:text-foreground transition-colors">Politique de confidentialité</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};
