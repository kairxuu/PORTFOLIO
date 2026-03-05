"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "../ui/SectionWrapper";
import { GlassCard } from "../ui/GlassCard";
import { Quote } from "lucide-react";

const testimonials = [
    {
        name: "Thomas D.",
        role: "CTO, StartUp Tech",
        image: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
        content: "L'approche d'Alexandre a complètement révolutionné notre produit. Le design est ultra-clean et les performances sous Next.js sont époustouflantes."
    },
    {
        name: "Sarah L.",
        role: "Product Manager, NeoBank",
        image: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
        content: "Un développeur qui a une réelle fibre design. La communication est fluide, les livrables sont parfaits et les animations fluides donnent une sensation de fraîcheur à l'UI."
    },
    {
        name: "Marc V.",
        role: "Fondateur, Agence Digitale",
        image: "https://i.pravatar.cc/150?u=a04258a2462d826712d",
        content: "Alexandre a su capter exactement l'esthétique premium et futuriste que nous voulions. Le mode dark glassmorphism est exécuté à la perfection."
    }
];

export const Testimonials = () => {
    return (
        <SectionWrapper id="testimonials" className="relative z-10">
            <div className="flex flex-col gap-4 mb-16 items-center text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-5xl font-bold text-foreground tracking-tight"
                >
                    Ils ont Survolé les attentes
                </motion.h2>
                <p className="text-foreground-secondary max-w-2xl">
                    Quelques retours de clients et collaborateurs avec qui j'ai eu l'opportunité de créer des expériences mémorables.
                </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
                {testimonials.map((testimonial, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1, duration: 0.5 }}
                    >
                        <GlassCard className="h-full flex flex-col p-6">
                            <Quote className="w-10 h-10 text-foreground/10 mb-4 group-hover:text-foreground-secondary transition-colors" />
                            <p className="text-foreground-secondary italic flex-grow mb-6 leading-relaxed">
                                "{testimonial.content}"
                            </p>

                            <div className="flex items-center gap-4 border-t border-[var(--glass-border)] pt-4 mt-auto">
                                <img
                                    src={testimonial.image}
                                    alt={testimonial.name}
                                    className="w-12 h-12 rounded-full border-2 border-[var(--glass-border)]"
                                />
                                <div>
                                    <h4 className="text-foreground font-semibold">{testimonial.name}</h4>
                                    <p className="text-foreground-secondary text-sm">{testimonial.role}</p>
                                </div>
                            </div>
                        </GlassCard>
                    </motion.div>
                ))}
            </div>
        </SectionWrapper>
    );
};
