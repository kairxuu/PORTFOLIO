import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  preload: true,
});

const baseUrl = "https://keolasy.dev";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    template: "%s | Alexandre Keolasy",
    default: "Alexandre Keolasy — Portfolio BTS SIO SLAM",
  },
  description:
    "Portfolio d'Alexandre Keolasy, étudiant en BTS SIO option SLAM. Développeur web passionné par Next.js, React, TypeScript, C# et SQL. Découvrez mes PPE, stages et veille technologique.",
  keywords: [
    "Alexandre Keolasy",
    "portfolio",
    "BTS SIO",
    "SLAM",
    "développeur web",
    "Next.js",
    "React",
    "TypeScript",
    "C#",
    "SQL Server",
    "stage informatique",
    "PPE",
    "veille technologique",
  ],
  authors: [{ name: "Alexandre Keolasy", url: baseUrl }],
  creator: "Alexandre Keolasy",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: baseUrl,
    siteName: "Alexandre Keolasy — Portfolio",
    title: "Alexandre Keolasy — Portfolio BTS SIO SLAM",
    description:
      "Développeur web en BTS SIO SLAM. PPE, stages et veille technologique — découvrez mes projets.",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Alexandre Keolasy — Portfolio BTS SIO SLAM",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Alexandre Keolasy — Portfolio BTS SIO SLAM",
    description:
      "Développeur web en BTS SIO SLAM. PPE, stages et veille technologique.",
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: baseUrl,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Alexandre Keolasy",
  url: baseUrl,
  jobTitle: "Étudiant BTS SIO SLAM — Développeur Web",
  description:
    "Étudiant en BTS SIO option SLAM, passionné par le développement web.",
  sameAs: [
    "https://github.com/kairxuu",
    "https://www.linkedin.com/in/alexandre-keolasy-287887276",
  ],
  knowsAbout: [
    "Développement Web",
    "React",
    "Next.js",
    "TypeScript",
    "C#",
    "SQL Server",
    "PHP",
    "BTS SIO SLAM",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${inter.variable} font-sans antialiased text-foreground bg-background selection:bg-foreground/10`}
      >
        {children}
      </body>
    </html>
  );
}
