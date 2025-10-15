"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Hero1 from "@/components/hero1";
import PourquoiCollaborer from "@/components/PourquoiCollaborer";
import FlipBook from "@/components/FlipBook";
import FlipBookWithCard from "@/components/FlipBookWithCard";

// Intervention card component
function InterventionCard({ 
  title, 
  description, 
  imageSrc,
  delay = 0
}: { 
  title: string; 
  description: string; 
  imageSrc: string;
  delay?: number;
}) {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
        }
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, [delay]);

  return (
    <div
      ref={cardRef}
      className={`group relative overflow-hidden rounded-2xl bg-card border border-border shadow-lg hover:shadow-2xl transition-all duration-500 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      {/* Image Section */}
      <div className="relative h-64 overflow-hidden">
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      </div>

      {/* Content Section */}
      <div className="p-6 sm:p-8">
        <h3 className="text-xl sm:text-2xl font-bold mb-4 text-foreground group-hover:text-orange-600 transition-colors duration-300">
          {title}
        </h3>
        <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
          {description}
        </p>
      </div>

      {/* Decorative accent */}
      <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-orange-500 to-orange-700 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top" />
    </div>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section with Image Slider */}
      <Hero1 />

      {/* Flip Book with Quality Service Card */}

      {/* Intervention Domains Section */}
      <section className="py-16 sm:py-24 lg:py-32 bg-gradient-to-br from-slate-50 to-orange-50/30 dark:from-slate-950 dark:to-orange-950/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-foreground">
              Nos Domaines d'Intervention
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-orange-500 to-orange-700 mx-auto mb-6 rounded-full" />
            <p className="text-lg sm:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Notre priorité est d'offrir des solutions adaptées aux besoins spécifiques de chaque projet. Grâce à des technologies modernes et une organisation rigoureuse, nous garantissons une exécution efficace et conforme aux normes les plus élevées.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 max-w-7xl mx-auto">
            <InterventionCard
              title="Construction Routière"
              description="Grâce à notre certification nationale de qualification ROUTE3, le plus haut niveau dans ce domaine, nous garantissons des réalisations durables et conformes aux standards les plus exigeants."
              imageSrc="/images/mtc/image3-scaled.jpg"
              delay={0}
            />
            <InterventionCard
              title="Périmètres irrigués et axes hydrauliques"
              description="Notre certification nationale de qualification Per/Axe3, le plus haut niveau dans ce secteur, témoigne de notre expertise et de notre engagement pour des projets performants et respectueux de l'environnement."
              imageSrc="/images/mtc/hydraulique-scaled.jpg"
              delay={200}
            />
            <InterventionCard
              title="Barrages et bassins"
              description="Dotés des certifications nationales de qualification Bar/Bas2 et Barrage2, nous associons robustesse technique, innovation et respect de l'environnement dans la réalisation de ces ouvrages stratégiques."
              imageSrc="/images/mtc/basin-scaled.jpg"
              delay={400}
            />
          </div>
        </div>
      </section>

      <PourquoiCollaborer />
      <FlipBookWithCard />

    </div>
  );
}
