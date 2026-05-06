/**
 * Homepage — Server Component (pas de "use client").
 *
 * Seules les parties interactives (Hero parallax) sont des Client Components.
 * Cela réduit le JS envoyé au navigateur et améliore le TTI (Time to Interactive).
 */
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { GlassCard } from "@/components/ui/GlassCard";
import { GlassButton } from "@/components/ui/GlassButton";
import { HeroParallax } from "@/components/sections/HeroParallax";
import { Services } from "@/components/sections/Services";
import { Projects } from "@/components/sections/Projects";
import { Contact } from "@/components/sections/Contact";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Code2, Cpu, Layout } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-background flex flex-col relative">
      <Header />

      {/* Hero animé — Client Component isolé */}
      <HeroParallax />

      {/* Premium Bento Grid — rendu côté serveur */}
      <section className="relative z-30 w-full px-6 pb-12 md:pb-16 -mt-32 max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8 auto-rows-fr">

          {/* À propos */}
          <GlassCard className="md:col-span-8 lg:col-span-7 md:row-span-2 p-10 md:p-14 flex flex-col justify-center overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-sm font-semibold text-foreground-secondary tracking-widest uppercase mb-6">
                À propos
              </h2>
              <h3 className="text-4xl md:text-5xl font-bold text-foreground mb-6 tracking-tight">
                Alexandre Keolasy
              </h3>
              <p className="text-foreground-secondary text-xl font-light leading-relaxed max-w-2xl mb-10">
                Actuellement en formation BTS SIO (Services Informatiques aux
                Organisations), je me spécialise dans le développement web.
                J&apos;allie rigueur technique et curiosité pour construire des
                solutions logicielles innovantes.
              </p>
              <Link
                href="/about"
                className="text-foreground flex items-center gap-2 text-lg font-medium hover:text-foreground/70 transition-colors w-fit duration-300"
              >
                Mon parcours académique <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </GlassCard>

          {/* Stat BTS */}
          <GlassCard className="md:col-span-4 lg:col-span-5 p-10 md:p-14 flex flex-col items-center justify-center text-center">
            <span
              className="text-8xl lg:text-[10rem] font-bold text-foreground tracking-tighter mb-4 drop-shadow-sm"
              style={{ letterSpacing: "-0.05em" }}
            >
              BTS
            </span>
            <span className="text-foreground-secondary text-xl font-medium tracking-wide border-t border-glass-border pt-6 w-full text-center">
              SIO SLAM
            </span>
          </GlassCard>

          {/* Expertises */}
          <GlassCard className="md:col-span-12 lg:col-span-5 p-10 flex flex-col">
            <h2 className="text-sm font-semibold text-foreground-secondary tracking-widest uppercase mb-8">
              Domaines de Compétences
            </h2>
            <div className="flex flex-col gap-8 grow">
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 rounded-2xl bg-glass border border-glass-border flex items-center justify-center">
                  <Layout className="w-8 h-8 text-foreground/80" />
                </div>
                <span className="text-foreground text-2xl font-medium tracking-tight">
                  Développement Web
                </span>
              </div>
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 rounded-2xl bg-glass border border-glass-border flex items-center justify-center">
                  <Code2 className="w-8 h-8 text-foreground/80" />
                </div>
                <span className="text-foreground text-2xl font-medium tracking-tight">
                  Programmation Orientée Objet
                </span>
              </div>
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 rounded-2xl bg-glass border border-glass-border flex items-center justify-center">
                  <Cpu className="w-8 h-8 text-foreground/80" />
                </div>
                <span className="text-foreground text-2xl font-medium tracking-tight">
                  Gestion de Données (SQL)
                </span>
              </div>
            </div>
          </GlassCard>

          {/* Projet highlight — Image optimisée Next.js */}
          <GlassCard className="md:col-span-12 lg:col-span-7 p-0 overflow-hidden flex flex-col min-h-[600px] z-10">
            <div className="relative h-64 md:h-[360px] w-full overflow-hidden shrink-0 border-b border-glass-border">
              {/*
                next/image gère automatiquement :
                - Lazy-loading natif
                - Format AVIF / WebP selon navigateur
                - Dimensionnement responsive (srcset)
                - Pas de CLS grâce à fill + object-cover
              */}
              <Image
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop"
                alt="Collaboration en équipe sur un projet BTS SIO"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 58vw"
                priority={false}
              />
            </div>

            <div className="relative grow flex flex-col justify-center p-10 md:p-12 bg-white z-20">
              <h2 className="text-[11px] font-bold text-foreground-secondary tracking-widest uppercase mb-3">
                Sélection
              </h2>
              <h3 className="text-4xl md:text-5xl font-bold text-foreground mb-4 tracking-tight">
                Projets &amp; PPE
              </h3>
              <p className="text-foreground-secondary max-w-xl mb-8 text-xl font-light leading-relaxed">
                Réalisation d&apos;applications dans le cadre de ma formation
                BTS, mettant en œuvre des technologies modernes pour répondre
                à des besoins métiers réels.
              </p>
              <div className="mt-auto">
                <Link href="/ppe/ppe1">
                  <GlassButton
                    variant="primary"
                    className="h-12 px-8 rounded-full text-sm font-semibold shadow-md"
                  >
                    Explorer les PPE
                  </GlassButton>
                </Link>
              </div>
            </div>
          </GlassCard>
        </div>
      </section>

      {/* Détail de l'expertise */}
      <Services />

      {/* Preuve sociale & réalisations */}
      <Projects />

      {/* Appel à l'action */}
      <div className="relative pb-24">
        {/* Un séparateur visuel doux */}
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-glass-border to-transparent opacity-50"></div>
        <Contact />
      </div>

      <Footer />
    </main>
  );
}
