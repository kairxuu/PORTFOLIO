import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, forwardRef } from "react";

export interface GlassButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "outline";
}

export const GlassButton = forwardRef<HTMLButtonElement, GlassButtonProps>(
    ({ className, variant = "primary", ...props }, ref) => {
        return (
            <button
                ref={ref}
                className={cn(
                    "inline-flex items-center justify-center rounded-xl font-medium transition-all duration-300 relative overflow-hidden group",
                    variant === "primary" && "bg-foreground text-white hover:-translate-y-0.5 shadow-[0_8px_20px_rgba(0,0,0,0.18),0_2px_4px_rgba(0,0,0,0.12)] hover:shadow-[0_12px_24px_rgba(0,0,0,0.25),0_4px_8px_rgba(0,0,0,0.15)]",
                    variant === "secondary" && "bg-[var(--glass-bg)] text-foreground border border-[var(--glass-border)] shadow-[0_4px_12px_rgba(0,0,0,0.06),0_1px_2px_rgba(0,0,0,0.04)] hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(0,0,0,0.08)]",
                    variant === "outline" && "border border-foreground/10 text-foreground hover:bg-foreground/5",
                    className
                )}
                {...props}
            />
        );
    }
);
GlassButton.displayName = "GlassButton";
