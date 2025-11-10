"use client";

import { useState } from "react";
import Image from "next/image";

const tw = (...c: (string | false | undefined)[]) => c.filter(Boolean).join(" ");

// Categories of images
const categories = [
  { id: "all", label: "Toutes les photos", count: 0 },
  { id: "bassins", label: "Barrages et Bassins", count: 0 },
  { id: "constructions", label: "Constructions", count: 0 },
  { id: "moyens", label: "Moyens Matériels", count: 0 },
  { id: "projets", label: "Projets", count: 0 },
];

type GalleryImage = {
  src: string;
  alt: string;
  category: string;
};

// High quality images selection
const galleryImages: GalleryImage[] = [
  // Barrages et Bassins
  { src: "/images/bassins/20210910_125810-scaled.jpg", alt: "Barrage", category: "bassins" },
  { src: "/images/bassins/Mj.jpg", alt: " Barrage de Reyoug", category: "bassins" },
 
  // Constructions
  { src: "/images/constructions/20180805_104114-1-scaled.jpg", alt: "Construction - Chantier routier", category: "constructions" },
  { src: "/images/constructions/20201004_152706-scaled.jpg", alt: "Construction - Infrastructure", category: "constructions" },
  { src: "/images/constructions/BULL-SUR-PORTE-ENGINS-scaled.jpg", alt: "Construction - Équipement lourd", category: "constructions" },
  { src: "/images/constructions/rubon9.jpg", alt: "Construction - Travaux en cours", category: "constructions" },
  
  // Moyens Matériels
  { src: "/images/moyens/image1.0.jpg", alt: "Matériel - Équipement de chantier", category: "moyens" },
  { src: "/images/moyens/image1.1.jpg", alt: "Matériel - Engins de construction", category: "moyens" },



  { src: "/images/moyens/image3.0.jpg", alt: "Matériel - Engin de terrassement", category: "moyens" },

  
  // Projets MTC
  { src: "/images/mtc/20180530_180352-scaled.jpg", alt: "Projet - Infrastructure routière", category: "projets" },
  { src: "/images/mtc/basin-scaled.jpg", alt: "Projet - Bassin hydraulique", category: "projets" },
  { src: "/images/mtc/hydraulique-scaled.jpg", alt: "Projet - Système hydraulique", category: "projets" },
  { src: "/images/mtc/image1.jpg", alt: "Projet - Travaux d'infrastructure", category: "projets" },
  { src: "/images/mtc/image2.jpg", alt: "Projet - Chantier en cours", category: "projets" },
  // { src: "/images/mtc/image3-scaled.jpg", alt: "Projet - Infrastructure moderne", category: "projets" },
  { src: "/images/mtc/route.jpg", alt: "Projet - Route nationale", category: "projets" },
  
  // Projets MTC New
  { src: "/images/mtc/new/20180610_142523-scaled.jpg", alt: "Projet - Construction route", category: "projets" },
  { src: "/images/mtc/new/20190305_095110-scaled.jpg", alt: "Projet - Travaux routiers", category: "projets" },
  { src: "/images/mtc/new/crushing-plant-stationary-768x576.jpg", alt: "Projet - Station de concassage", category: "projets" },
  // { src: "/images/mtc/new/IMG_20170828_103122-2048x1536.jpg", alt: "Projet - Infrastructure majeure", category: "projets" },
  
  // Projets Home
  { src: "/images/mtc/home/image2025-10-01.0.jpeg", alt: "Projet - Réalisation récente", category: "projets" },
  { src: "/images/mtc/home/image2025-10-01.1.jpeg", alt: "Projet - Infrastructure 2025", category: "projets" },
  { src: "/images/mtc/home/image2025-10-01.2.jpeg", alt: "Projet - Chantier moderne", category: "projets" },
  { src: "/images/mtc/home/image2025-10-01.3.jpeg", alt: "Projet - Construction avancée", category: "projets" },
  { src: "/images/mtc/home/image2025-10-01.4.jpeg", alt: "Projet - Infrastructure durable", category: "projets" },
  { src: "/images/mtc/home/image2025-10-01.5.jpeg", alt: "Projet - Travaux d'envergure", category: "projets" },
  { src: "/images/mtc/home/image2025-10-01.7.jpeg", alt: "Projet - Chantier d'excellence", category: "projets" },
  { src: "/images/mtc/home/image2025-10-01.9.jpeg", alt: "Projet - Construction moderne", category: "projets" },

  { src: "/images/mtc/home/image2025-10-01.13.jpeg", alt: "Projet - Chantier innovant", category: "projets" },
  { src: "/images/mtc/home/image2025-10-01.14.jpeg", alt: "Projet - Infrastructure stratégique", category: "projets" },
  { src: "/images/mtc/home/image2025-10-01.15.jpeg", alt: "Projet - Construction de qualité", category: "projets" },
  { src: "/images/mtc/home/image2025-10-01.16.jpeg", alt: "Projet - Travaux d'envergure", category: "projets" },
  { src: "/images/mtc/home/image2025-10-01.17.jpeg", alt: "Projet - Infrastructure moderne", category: "projets" },
  { src: "/images/mtc/home/image2025-10-01.18.jpeg", alt: "Projet - Chantier majeur", category: "projets" },
  { src: "/images/mtc/home/image2025-10-01.19.jpeg", alt: "Projet - Réalisation d'excellence", category: "projets" },

  { src: "/images/mtc/home/image2025-10-01.22.jpeg", alt: "Projet - Travaux techniques", category: "projets" },
  { src: "/images/mtc/home/image2025-10-01.23.jpeg", alt: "Projet - Chantier d'envergure", category: "projets" },
  { src: "/images/mtc/home/image2025-10-01.24.jpeg", alt: "Projet - Infrastructure clé", category: "projets" },
  { src: "/images/mtc/home/image2025-10-01.25.jpeg", alt: "Projet - Réalisation majeure", category: "projets" },
  { src: "/images/mtc/home/image2025-10-01.26.jpeg", alt: "Projet - Construction moderne", category: "projets" },
  { src: "/images/mtc/home/image2025-10-01.28.jpeg", alt: "Projet - Infrastructure 2025", category: "projets" },
  { src: "/images/mtc/home/image2025-10-01.29.jpeg", alt: "Projet - Chantier d'excellence", category: "projets" },
  { src: "/images/mtc/home/image2025-10-01.30.jpeg", alt: "Projet - Réalisation technique", category: "projets" },
  
  // Projects scaled
  { src: "/images/projects/image1-scaled.jpg", alt: "Projet - Route Aleg - Magtaa Lehjar", category: "projets" },
];

// Update category counts
categories[0].count = galleryImages.length; // All
categories[1].count = galleryImages.filter(img => img.category === "bassins").length;
categories[2].count = galleryImages.filter(img => img.category === "constructions").length;
categories[3].count = galleryImages.filter(img => img.category === "moyens").length;
categories[4].count = galleryImages.filter(img => img.category === "projets").length;

export default function GalleriePage() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  const filteredImages = activeCategory === "all" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

  return (
    <main className="min-h-screen w-full bg-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[70vh] w-full overflow-hidden">
        <div className="absolute inset-0">
          <Image 
            src="/images/mtc/20180530_180352-scaled.jpg" 
            alt="Galerie MTC" 
            fill 
            priority 
            className="object-cover"
            quality={95}
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
        
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
            <div className="animate-fade-in-up">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-[#F26418] to-[#d95712] mb-6 shadow-2xl">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
                Galerie Photos
              </h1>
              <div className="w-24 h-1 bg-[#F26418] mx-auto rounded-full mb-6"></div>
              <p className="text-white/90 text-lg md:text-xl max-w-3xl mx-auto">
                Découvrez nos réalisations et notre savoir-faire à travers nos projets
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="sticky top-0 z-40 bg-white border-b border-gray-200 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto hide-scrollbar py-4 gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={tw(
                  "flex-shrink-0 flex items-center gap-3 px-6 py-3 rounded-xl font-semibold transition-all duration-300",
                  activeCategory === category.id
                    ? "bg-gradient-to-r from-[#F26418] to-[#d95712] text-white shadow-lg shadow-[#F26418]/30"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                )}
              >
                <span>{category.label}</span>
                <span className={tw(
                  "px-2 py-1 rounded-full text-xs font-bold",
                  activeCategory === category.id ? "bg-white/20" : "bg-[#F26418]/10 text-[#F26418]"
                )}>
                  {category.count}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="relative py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Images Count */}
          <div className="text-center mb-12" data-aos="fade-up">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-white rounded-full shadow-md border border-gray-200">
              <div className="w-2 h-2 rounded-full bg-[#F26418] animate-pulse"></div>
              <span className="text-gray-700 font-semibold">
                {filteredImages.length} photo{filteredImages.length > 1 ? 's' : ''}
              </span>
            </div>
          </div>

          {/* Images Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredImages.map((image, index) => (
              <div
                key={index}
                className="group relative aspect-square overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer bg-gray-100"
                data-aos="fade-up"
                data-aos-delay={index * 20}
                onClick={() => setSelectedImage(image)}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  quality={85}
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <p className="text-white text-sm font-medium line-clamp-2">
                      {image.alt}
                    </p>
                  </div>
                </div>

                {/* Zoom Icon */}
                <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg">
                  <svg className="w-5 h-5 text-[#F26418]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                  </svg>
                </div>
              </div>
            ))}
          </div>

          {/* Empty State */}
          {filteredImages.length === 0 && (
            <div className="text-center py-16">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gray-100 mb-6">
                <svg className="w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Aucune photo disponible</h3>
              <p className="text-gray-600">Aucune photo ne correspond à cette catégorie.</p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm p-4"
          onClick={() => setSelectedImage(null)}
        >
          {/* Close Button */}
          <button
            className="absolute top-4 right-4 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/20 transition-colors duration-300 z-10"
            onClick={() => setSelectedImage(null)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Image Container */}
          <div className="relative w-full h-full max-w-7xl max-h-[90vh] flex items-center justify-center">
            <div className="relative w-full h-full">
              <Image
                src={selectedImage.src}
                alt={selectedImage.alt}
                fill
                className="object-contain"
                quality={95}
                onClick={(e) => e.stopPropagation()}
              />
            </div>

            {/* Image Caption */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
              <p className="text-white text-lg font-medium text-center">
                {selectedImage.alt}
              </p>
            </div>
          </div>
        </div>
      )}

      <style jsx global>{`
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out;
        }
      `}</style>
    </main>
  );
}

