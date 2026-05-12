"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { Github, Linkedin, ChevronDown } from "lucide-react";

/**
 * HeroParallax — composant client isolé.
 * Optimisé pour la performance : will-change, transform3d, parallax désactivé sur mobile.
 */
export const HeroParallax = () => {
  const containerRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Transforms directs (sans spring pour éviter la surcharge CPU)
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const textY = useTransform(scrollYProgress, [0, 0.4], ["0%", "40%"]);
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <section
      ref={containerRef}
      className="relative h-[110vh] sm:h-[120vh] flex items-center justify-center overflow-hidden"
    >
      {/* Fond GPU-composité — translateZ(0) pour forcer une couche propre */}
      <motion.div
        className="absolute inset-0 z-0 bg-black"
        style={{ y: bgY, willChange: "transform" }}
      >
        {/* Halos statiques CSS — pas de motion.div pour les halos, zéro surcharge JS */}
        <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] rounded-full opacity-40"
          style={{ background: "radial-gradient(circle at center, rgba(30,58,138,0.6) 0%, transparent 65%)" }} />
        <div className="absolute top-[20%] right-[-10%] w-[50%] h-[70%] rounded-full opacity-30"
          style={{ background: "radial-gradient(circle at center, rgba(76,29,149,0.5) 0%, transparent 65%)" }} />
        <div className="absolute bottom-[-20%] left-[20%] w-[80%] h-[60%] rounded-full opacity-30"
          style={{ background: "radial-gradient(circle at center, rgba(30,41,59,0.6) 0%, transparent 65%)" }} />
      </motion.div>

      {/* Grain de texture CSS pur — pas de background-image SVG recalculé */}
      <div className="absolute inset-0 z-10 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundSize: "200px 200px",
        }}
      />

      {/* Typographie Hero — seul élément qui se déplace au scroll */}
      <motion.div
        className="relative z-20 w-full px-6 max-w-5xl mx-auto text-left mt-[-5vh] sm:mt-[-15vh]"
        style={{ y: textY, opacity: heroOpacity, willChange: "transform, opacity" }}
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
        >
          <h1 className="text-5xl sm:text-7xl md:text-[8rem] lg:text-[11rem] font-bold tracking-tighter text-white mb-4 sm:mb-6 leading-none">
            Alexandre KEOLASY.
          </h1>
          <p className="text-lg sm:text-2xl md:text-3xl text-neutral-400 max-w-5xl font-light leading-tight mb-6 sm:mb-12 tracking-tight">
            Passionné par le développement web et logiciels.
          </p>
          <div className="flex flex-col sm:flex-row items-start justify-start gap-6">
            <Link href="/ppe/ppe1">
              <button className="w-full sm:w-auto inline-flex items-center justify-center rounded-xl bg-white text-black font-semibold text-base sm:text-lg px-8 sm:px-10 h-14 shadow-[0_8px_20px_rgba(255,255,255,0.18),0_2px_4px_rgba(255,255,255,0.12)] hover:-translate-y-1 transition-all">
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

