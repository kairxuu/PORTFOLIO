"use client";

import { cn } from "@/lib/utils";
import { forwardRef } from "react";
import { motion, HTMLMotionProps } from "framer-motion";

export const SectionWrapper = forwardRef<HTMLElement, HTMLMotionProps<"section">>(
    ({ className, children, ...props }, ref) => {
        return (
            <motion.section
                ref={ref}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                className={cn(
                    "py-24 md:py-32 w-full max-w-5xl mx-auto px-6",
                    className
                )}
                {...props}
            >
                {children}
            </motion.section>
        );
    }
);
SectionWrapper.displayName = "SectionWrapper";
