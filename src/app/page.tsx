/**
 * Homepage — Server Component (pas de "use client").
 *
 * Seules les parties interactives (Hero parallax) sont des Client Components.
 * Cela réduit le JS envoyé au navigateur et améliore le TTI (Time to Interactive). */
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroParallax } from "@/components/sections/HeroParallax";
import { Projects } from "@/components/sections/Projects";

export default function Home() {
  return (
    <main className="min-h-screen bg-background flex flex-col relative">
      <Header />

      {/* Hero animé — Client Component isolé */}
      <HeroParallax />


      {/* Preuve sociale & réalisations (PPE & Projets) */}
      <div className="py-12 md:py-24 mb-12">
        <Projects />
      </div>

      <Footer />
    </main>
  );
}
