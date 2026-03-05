"use client";

import { useRef, useState, useEffect } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { GlassCard } from "@/components/ui/GlassCard";
import { GlassButton } from "@/components/ui/GlassButton";
import Link from "next/link";
import { ArrowRight, Code2, Cpu, Layout, Github, Linkedin } from "lucide-react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

export default function Home() {
  const containerRef = useRef(null);


  // Advanced Parallax Global
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  // 3D Card Parallax Local - REMOVED sectionRef tracking to fix hydration error

  const heroScale = useTransform(smoothProgress, [0, 1], [1, 1.25]);
  const heroOpacity = useTransform(smoothProgress, [0, 0.5], [1, 0]);
  const heroY = useTransform(smoothProgress, [0, 1], ["0%", "50%"]);
  const textY = useTransform(smoothProgress, [0, 0.4], ["0%", "60%"]);


  return (
    <main className="min-h-screen bg-background flex flex-col relative" ref={containerRef}>
      <Header />

      {/* Stunning 3D Parallax Hero */}
      <section className="relative h-[120vh] flex items-center justify-center overflow-hidden">
        {/* Deep Parallax Background - Dynamic Dark Mesh */}
        <motion.div
          className="absolute inset-0 z-0 origin-center bg-black overflow-hidden"
          style={{ scale: heroScale, opacity: heroOpacity }}
        >
          {/* Base Noise for Texture - Reduced opacity significantly */}
          <div className="absolute inset-0 z-20 opacity-5 mix-blend-overlay pointer-events-none" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} />

          {/* Dynamic Halos reacting to Scroll */}
          <div className="absolute inset-0 z-0 filter blur-[100px] opacity-25">
            <motion.div
              className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] rounded-full bg-blue-900/40"
              style={{
                x: useTransform(smoothProgress, [0, 1], ["0%", "30%"]),
                y: useTransform(smoothProgress, [0, 1], ["0%", "40%"]),
                scale: useTransform(smoothProgress, [0, 0.5, 1], [1, 1.2, 0.8]),
              }}
            />
            <motion.div
              className="absolute top-[20%] right-[-10%] w-[50%] h-[70%] rounded-full bg-violet-900/30"
              style={{
                x: useTransform(smoothProgress, [0, 1], ["0%", "-40%"]),
                y: useTransform(smoothProgress, [0, 1], ["0%", "20%"]),
              }}
            />
            <motion.div
              className="absolute bottom-[-20%] left-[20%] w-[80%] h-[60%] rounded-full bg-slate-800/40"
              style={{
                x: useTransform(smoothProgress, [0, 1], ["0%", "20%"]),
                y: useTransform(smoothProgress, [0, 1], ["0%", "-50%"]),
                rotate: useTransform(smoothProgress, [0, 1], [0, 45]),
              }}
            />
          </div>
        </motion.div>

        {/* Hero Typography */}
        <motion.div
          className="relative z-20 w-full px-6 max-w-5xl mx-auto text-center mt-[-15vh]"
          style={{ y: textY, opacity: heroOpacity }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1 className="text-6xl md:text-[8rem] lg:text-[11rem] font-bold tracking-tighter text-white mb-6 leading-none">
              Alexandre KEOLASY.
            </h1>
            <p className="text-2xl md:text-3xl text-neutral-400 max-w-5xl mx-auto font-light leading-tight mb-12 tracking-tight">
              Étudiant en BTS SIO. <br className="hidden md:block" />Passionné par le développement d'applications web modernes et performantes.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link href="/ppe/ppe1">
                <button className="w-full sm:w-auto inline-flex items-center justify-center rounded-xl bg-white text-black font-semibold text-lg px-10 h-16 shadow-[0_8px_20px_rgba(255,255,255,0.18),0_2px_4px_rgba(255,255,255,0.12)] hover:-translate-y-1 transition-all">
                  Voir mes PPE
                </button>
              </Link>
              <div className="hidden sm:flex items-center gap-4">
                <a href="https://github.com/kairxuu" target="_blank" rel="noreferrer" className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/80 hover:text-white shadow-lg transition-all hover:-translate-y-1 hover:bg-white/10">
                  <Github className="w-6 h-6" />
                </a>
                <a href="https://www.linkedin.com/in/alexandre-keolasy-287887276" target="_blank" rel="noreferrer" className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/80 hover:text-white shadow-lg transition-all hover:-translate-y-1 hover:bg-white/10">
                  <Linkedin className="w-6 h-6" />
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Premium Bento Grid - Spans wider */}
      <section className="relative z-30 w-full px-6 pb-40 -mt-32 max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8 auto-rows-fr">

          {/* Main About snippet */}
          <GlassCard className="md:col-span-8 lg:col-span-7 md:row-span-2 p-10 md:p-14 flex flex-col justify-center overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-sm font-semibold text-foreground-secondary tracking-widest uppercase mb-6">À propos</h2>
              <h3 className="text-4xl md:text-5xl font-bold text-foreground mb-6 tracking-tight">
                Alexandre Keolasy
              </h3>
              <p className="text-foreground-secondary text-xl font-light leading-relaxed max-w-2xl mb-10">
                Actuellement en formation BTS SIO (Services Informatiques aux Organisations), je me spécialise dans le développement web. J'allie rigueur technique et curiosité pour construire des solutions logicielles innovantes.
              </p>
              <Link href="/about" className="text-foreground flex items-center gap-2 text-lg font-medium hover:text-foreground/70 transition-colors w-fit duration-300">
                Mon parcours académique <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </GlassCard>

          {/* Huge Stat snippet */}
          <GlassCard className="md:col-span-4 lg:col-span-5 p-10 md:p-14 flex flex-col items-center justify-center text-center">
            <span className="text-8xl lg:text-[10rem] font-bold text-foreground tracking-tighter mb-4 drop-shadow-sm" style={{ letterSpacing: "-0.05em" }}>BTS</span>
            <span className="text-foreground-secondary text-xl font-medium tracking-wide border-t border-glass-border pt-6 w-full text-center">SIO SLAM</span>
          </GlassCard>

          {/* Expertises highlight */}
          <GlassCard className="md:col-span-12 lg:col-span-5 p-10 flex flex-col">
            <h2 className="text-sm font-semibold text-foreground-secondary tracking-widest uppercase mb-8">Domaines de Compétences</h2>
            <div className="flex flex-col gap-8 grow">
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 rounded-2xl bg-glass border border-glass-border flex items-center justify-center">
                  <Layout className="w-8 h-8 text-foreground/80" />
                </div>
                <span className="text-foreground text-2xl font-medium tracking-tight">Développement Web</span>
              </div>
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 rounded-2xl bg-glass border border-glass-border flex items-center justify-center">
                  <Code2 className="w-8 h-8 text-foreground/80" />
                </div>
                <span className="text-foreground text-2xl font-medium tracking-tight">Programmation Orientée Objet</span>
              </div>
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 rounded-2xl bg-glass border border-glass-border flex items-center justify-center">
                  <Cpu className="w-8 h-8 text-foreground/80" />
                </div>
                <span className="text-foreground text-2xl font-medium tracking-tight">Gestion de Données (SQL)</span>
              </div>
            </div>
          </GlassCard>

          {/* Project highlight */}
          <GlassCard className="md:col-span-12 lg:col-span-7 p-0 overflow-hidden flex flex-col min-h-[600px] z-10">
            <div className="relative h-64 md:h-[360px] w-full overflow-hidden shrink-0 border-b border-glass-border">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop"
                alt="Projet BTS"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="relative grow flex flex-col justify-center p-10 md:p-12 bg-white z-20">
              <h2 className="text-[11px] font-bold text-foreground-secondary tracking-widest uppercase mb-3">Sélection</h2>
              <h3 className="text-4xl md:text-5xl font-bold text-foreground mb-4 tracking-tight">Projets & PPE</h3>
              <p className="text-foreground-secondary max-w-xl mb-8 text-xl font-light leading-relaxed">
                Réalisation d'applications dans le cadre de ma formation BTS, mettant en œuvre des technologies modernes pour répondre à des besoins métiers réels.
              </p>
              <div className="mt-auto">
                <Link href="/ppe/ppe1">
                  <GlassButton variant="primary" className="h-12 px-8 rounded-full text-sm font-semibold shadow-md">
                    Explorer les PPE
                  </GlassButton>
                </Link>
              </div>
            </div>
          </GlassCard>
        </div>
      </section>


      <Footer />
    </main >
  );
}
