import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: {
    template: "%s | Alexandre Keolasy",
    default: "Alexandre Keolasy | Étudiant BTS SIO",
  },
  description: "Portfolio d'Alexandre Keolasy, étudiant en BTS SIO (Services Informatiques aux Organisations) Option SLAM. Passionné par le développement d'applications web.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${inter.variable} font-sans antialiased text-foreground bg-background selection:bg-foreground/10`}>
        {children}
      </body>
    </html>
  );
}
