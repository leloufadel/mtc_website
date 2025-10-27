"use client";

import Hero from "@/components/hero";
import Image from "next/image";
import { useState, useEffect } from "react";

type EquipmentItem = {
    title: string;
    description: string;
    images: string[];      
  };

type KeyFigure = {
  number: string;
  label: string;
  icon: string;
};

const MOYENS: EquipmentItem[] = [
    {
      title: "Installations fixes",
    description:
      "Nos 3 unités de Centrales d'enrobé, 2 unités de Concasseurs et 1 unité de Crible garantissent une production continue de matériaux conformes aux normes internationales. Ces équipements permettent d'assurer la qualité et la fiabilité des revêtements routiers et des matériaux de construction.",
    images: ["/images/moyens/image1.0.jpg", "/images/moyens/image1.1.jpg", "/images/moyens/image1.3.jpg"],
    },
    {
      title: "Engins de chantier",
    description:
      "Avec un parc composé de plus de 100 engins lourds (Compacteurs, Chargeuses, Niveleuses, Pelles, Bulls, Grues et Finisseurs), nous couvrons l'ensemble des besoins en terrassement, construction routière et aménagements divers. La puissance et la polyvalence de nos engins assurent rapidité d'exécution et précision dans toutes nos interventions.",
    images: ["/images/moyens/image2.0.jpg", "/images/moyens/image2.1.jpg", "/images/moyens/image22.jpg"],
    },
    {
        title: "Flotte de camions",
    description:
      "Notre flotte intègre plus de 80 camions, comprenant des bennes, semi-remorques, citernes à eau et à gasoil et camions grues. Cette logistique robuste nous permet de gérer efficacement le transport des matériaux et l'approvisionnement continu des chantiers, même en zones difficiles d'accès.",
    images: ["/images/moyens/image3.0.jpg", "/images/moyens/SEMI-BENNE-MAN-300x225.jpg"],
  },
  {
    title: "Véhicules légers",
    description:
      "Notre parc de véhicules légers comprend plus de 30 véhicules utilitaires, 4x4 et berlines, assurant la mobilité de nos équipes techniques, le transport rapide des experts sur les chantiers et la réactivité opérationnelle. Ces véhicules garantissent une présence effective et un suivi rapproché de tous nos projets.",
    images: ["/images/moyens/imagecom.jpg"],
  },
];

const KEY_FIGURES: KeyFigure[] = [
  { number: "6", label: "Installations Fixes", icon: "🏭" },
  { number: "100+", label: "Engins de Chantier", icon: "🚜" },
  { number: "80+", label: "Camions", icon: "🚛" },
  { number: "30+", label: "Véhicules Légers", icon: "🚗" },
];

function ImageCarousel({ images }: { images: string[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative w-full h-full overflow-hidden rounded-2xl shadow-2xl group">
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
            index === currentIndex ? "opacity-100 scale-100" : "opacity-0 scale-105"
          }`}
        >
          <Image
            src={image}
            alt={`Equipment ${index + 1}`}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
            quality={95}
          />
        </div>
      ))}

      {/* Navigation Dots */}
      {images.length > 1 && (
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "bg-white w-8"
                  : "bg-white/50 hover:bg-white/75"
              }`}
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

function KeyFiguresSection() {
  return (
    <section className="py-16 bg-gradient-to-br from-orange-50 to-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 animate-fade-in-up">
          Chiffres clés de notre parc matériel
        </h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {KEY_FIGURES.map((figure, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 animate-slide-up-fade border border-orange-100"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="text-4xl md:text-5xl mb-3 animate-pulse-gentle">
                {figure.icon}
              </div>
              <div className="text-3xl md:text-4xl font-bold text-orange-600 mb-2">
                {figure.number}
              </div>
              <div className="text-sm md:text-base text-gray-600 font-medium">
                {figure.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function EquipmentCard({ item, index }: { item: EquipmentItem; index: number }) {
  const isEven = index % 2 === 0;

  return (
    <div
      className="group animate-slide-up-fade"
      style={{ animationDelay: `${index * 200}ms` }}
    >
      <div
        className={`flex flex-col ${
          isEven ? "lg:flex-row" : "lg:flex-row-reverse"
        } gap-8 lg:gap-12 items-center`}
      >
        {/* Image Section */}
        <div className="w-full lg:w-1/2 h-[300px] md:h-[400px] lg:h-[500px]">
          <ImageCarousel images={item.images} />
        </div>

        {/* Text Section */}
        <div className="w-full lg:w-1/2 space-y-6">
          <div className="inline-block">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2 relative">
              {item.title}
              <div className="absolute -bottom-2 left-0 w-20 h-1 bg-gradient-to-r from-orange-500 to-orange-300 rounded-full" />
            </h3>
          </div>

          <p className="text-gray-700 text-base md:text-lg leading-relaxed">
            {item.description}
          </p>

          {/* Decorative element */}
          <div className="flex gap-2 pt-4">
            <div className="w-12 h-1 bg-orange-500 rounded-full transform origin-left group-hover:scale-x-150 transition-transform duration-500" />
            <div className="w-8 h-1 bg-orange-300 rounded-full transform origin-left group-hover:scale-x-150 transition-transform duration-500 delay-100" />
            <div className="w-4 h-1 bg-orange-200 rounded-full transform origin-left group-hover:scale-x-150 transition-transform duration-500 delay-200" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function MoyensMaterielsPage() {
    const titleHero = "Moyens Matériels";
    const imageHero = "/images/mtc/home/image2025-10-01.1.jpeg";

    return (
        <main className="min-h-screen w-full bg-white overflow-hidden">
            <Hero titleHero={titleHero} imageHero={imageHero} />

      {/* Introduction Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center space-y-6 animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Nos Moyens Matériels
            </h1>
            <h2 className="text-2xl md:text-3xl text-orange-600 font-semibold">
              Un parc moderne et performant au service de vos projets
            </h2>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-4xl mx-auto px-4">
              Chez MTC, nous savons que la réussite de chaque projet dépend autant de
              l&apos;expertise humaine que de la qualité des équipements mobilisés.
              C&apos;est pourquoi nous disposons d&apos;un parc matériel moderne,
              diversifié et régulièrement entretenu, capable de répondre aux exigences
              des chantiers les plus complexes.
            </p>
          </div>
        </div>
      </section>

      {/* Key Figures Section */}
      <KeyFiguresSection />

      {/* Equipment Details Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 max-w-7xl space-y-20 md:space-y-32">
          {MOYENS.map((item, index) => (
            <EquipmentCard key={index} item={item} index={index} />
          ))}
        </div>
      </section>

      {/* Bottom CTA Section */}
   
        </main>
  );
}
