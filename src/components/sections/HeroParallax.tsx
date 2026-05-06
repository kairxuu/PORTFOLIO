"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Link from "next/link";
import { Github, Linkedin, ChevronDown } from "lucide-react";

/**
 * HeroParallax — composant client isolé.
 * Toute la logique Framer Motion du Hero est ici,
 * ce qui permet à page.tsx de rester un Server Component.
 */
export const HeroParallax = () => {
  const containerRef = useRef<HTMLElement>(null);

  // Scroll progress attaché uniquement au Hero
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Spring léger — damping élevé = moins de rebond, restDelta moins strict pour s'arrêter plus vite
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 70,
    damping: 30,
    restDelta: 0.005,
  });

  // Transforms parallax
  const heroScale = useTransform(smoothProgress, [0, 1], [1, 1.2]);
  const heroOpacity = useTransform(smoothProgress, [0, 0.5], [1, 0]);
  const heroY = useTransform(smoothProgress, [0, 1], ["0%", "50%"]);
  const textY = useTransform(smoothProgress, [0, 0.4], ["0%", "55%"]);

  // Halos (extraits hors JSX pour respecter les Rules of Hooks)
  const halo1X = useTransform(smoothProgress, [0, 1], ["0%", "30%"]);
  const halo1Y = useTransform(smoothProgress, [0, 1], ["0%", "40%"]);
  const halo1Scale = useTransform(smoothProgress, [0, 0.5, 1], [1, 1.15, 0.8]);
  const halo2X = useTransform(smoothProgress, [0, 1], ["0%", "-40%"]);
  const halo2Y = useTransform(smoothProgress, [0, 1], ["0%", "20%"]);
  const halo3X = useTransform(smoothProgress, [0, 1], ["0%", "20%"]);
  const halo3Y = useTransform(smoothProgress, [0, 1], ["0%", "-50%"]);
  const halo3Rotate = useTransform(smoothProgress, [0, 1], [0, 45]);

  return (
    <section
      ref={containerRef}
      className="relative h-[120vh] flex items-center justify-center overflow-hidden"
    >
      {/* Bruit de texture (SVG inline) — Sorti du div qui s'agrandit pour éviter les recalculs GPU (repaints) constants au scroll */}
      <div
        className="absolute inset-0 z-10 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Fond parallax — couche GPU isolée */}
      <motion.div
        className="absolute inset-0 z-0 origin-center bg-black overflow-hidden"
        style={{ scale: heroScale, opacity: heroOpacity }}
      >
        {/* Halos lumineux — Remplacés par des radial-gradients (100x plus rapides que filter: blur() pour le GPU) */}
        <div className="absolute inset-0 z-0">
          <motion.div
            className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] rounded-full"
            style={{ 
              x: halo1X, 
              y: halo1Y, 
              scale: halo1Scale,
              background: 'radial-gradient(circle at center, rgba(30, 58, 138, 0.4) 0%, transparent 60%)' // blue-900
            }}
          />
          <motion.div
            className="absolute top-[20%] right-[-10%] w-[50%] h-[70%] rounded-full"
            style={{ 
              x: halo2X, 
              y: halo2Y,
              background: 'radial-gradient(circle at center, rgba(76, 29, 149, 0.3) 0%, transparent 60%)' // violet-900
            }}
          />
          <motion.div
            className="absolute bottom-[-20%] left-[20%] w-[80%] h-[60%] rounded-full"
            style={{ 
              x: halo3X, 
              y: halo3Y, 
              rotate: halo3Rotate,
              background: 'radial-gradient(circle at center, rgba(30, 41, 59, 0.4) 0%, transparent 60%)' // slate-800
            }}
          />
        </div>
      </motion.div>

      {/* Typographie Hero */}
      <motion.div
        className="relative z-20 w-full px-6 max-w-5xl mx-auto text-left mt-[-15vh]"
        style={{ y: textY, opacity: heroOpacity }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <h1 className="text-6xl md:text-[8rem] lg:text-[11rem] font-bold tracking-tighter text-white mb-6 leading-none">
            Alexandre KEOLASY.
          </h1>
          <p className="text-2xl md:text-3xl text-neutral-400 max-w-5xl font-light leading-tight mb-12 tracking-tight">
            Étudiant en BTS SIO.{" "}
            <br className="hidden md:block" />
            Passionné par le développement d&apos;applications web modernes et
            performantes.
          </p>
          <div className="flex flex-col sm:flex-row items-start justify-start gap-6">
            <Link href="/ppe/ppe1">
              <button className="w-full sm:w-auto inline-flex items-center justify-center rounded-xl bg-white text-black font-semibold text-lg px-10 h-16 shadow-[0_8px_20px_rgba(255,255,255,0.18),0_2px_4px_rgba(255,255,255,0.12)] hover:-translate-y-1 transition-all">
                Voir mes PPE
              </button>
            </Link>
            <div className="hidden sm:flex items-center gap-4">
              <a
                href="https://github.com/kairxuu"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub d'Alexandre Keolasy"
                className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/80 hover:text-white shadow-lg transition-all hover:-translate-y-1 hover:bg-white/10"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/alexandre-keolasy-287887276"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn d'Alexandre Keolasy"
                className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/80 hover:text-white shadow-lg transition-all hover:-translate-y-1 hover:bg-white/10"
              >
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-8 h-8" />
        </motion.div>
      </motion.div>
    </section>
  );
};
