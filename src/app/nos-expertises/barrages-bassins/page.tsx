"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

const basinImages = [
  "/images/bassins/20210910_125810-scaled.jpg",
  "/images/bassins/Mj.jpg",
  "/images/bassins/WhatsApp-Image-2023-07-26-at-14.28.47-1024x768.jpeg",

];

const tw = (...c: (string | false | undefined)[]) => c.filter(Boolean).join(" ");

export default function BarragesBassinsPage() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentGalleryIndex, setCurrentGalleryIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsLoaded(true);
    
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        (prevIndex + 1) % basinImages.length
      );
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const galleryImages = [
    { src: "/images/bassins/20210910_125810-scaled.jpg", alt: "Barrage 1" },
    { src: "/images/bassins/Mj.jpg", alt: "Barrage 2" },
    { src: "/images/bassins/WhatsApp-Image-2023-07-26-at-14.28.47-1024x768.jpeg", alt: "Barrage 3" },
    { src: "/images/bassins/20210910_125810-scaled.jpg", alt: "Barrage 4" },
    { src: "/images/bassins/Mj.jpg", alt: "Barrage 5" },
    { src: "/images/bassins/WhatsApp-Image-2023-07-26-at-14.28.47-1024x768.jpeg", alt: "Barrage 6" },
  ];

  const scrollToImage = (index: number) => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const imageWidth = container.scrollWidth / galleryImages.length;
      container.scrollTo({
        left: imageWidth * index,
        behavior: "smooth",
      });
      setCurrentGalleryIndex(index);
    }
  };

  const handlePrevious = () => {
    const newIndex = currentGalleryIndex > 0 ? currentGalleryIndex - 1 : galleryImages.length - 1;
    scrollToImage(newIndex);
  };

  const handleNext = () => {
    const newIndex = currentGalleryIndex < galleryImages.length - 1 ? currentGalleryIndex + 1 : 0;
    scrollToImage(newIndex);
  };

  const barrages = [
    {
      title: "Barrages de R'vigh et Lebeiziye",
      location: "Moughataa de Bassiknou, Wilaya du Hodh Echarghi",
      description: "Un projet de construction des barrages qui contribue à la régulation des flux hydriques et au développement rural dans le Moughataa de Bassiknou, Wilaya du Hodh Echarghi",
      image: "/images/bassins/20210910_125810-scaled.jpg",
    },
    {
      title: "Barrage de Reyoug",
      location: "Wilaya du Hodh El Gharbi",
      description: "Travaux de réhabilitation visant à redonner toute sa fonctionnalité à une infrastructure stratégique pour le Wilaya du Hodh El Gharbi",
      image: "/images/bassins/Mj.jpg",
      imagePosition: "right" as const,
    },
  ];

  return (
    <main className="min-h-screen w-full bg-white">
      {/* Hero Section with Rotating Images */}
      <section className="relative h-[60vh] md:h-[70vh] w-full overflow-hidden">
        {/* Background Images with Transitions */}
        <div className="absolute inset-0">
          {basinImages.map((image, index) => (
            <div
              key={image}
              className={tw(
                "absolute inset-0 transition-opacity duration-[1500ms] ease-in-out",
                index === currentImageIndex ? "opacity-100 z-10" : "opacity-0 z-0"
              )}
            >
              <div className={tw(
                "relative w-full h-full",
                index === currentImageIndex ? "animate-zoom-in" : ""
              )}>
                <Image
                  src={image}
                  alt={`Barrage ${index + 1}`}
                  fill
                  priority={index === 0}
                  className="object-cover object-center"
                  quality={95}
                  sizes="100vw"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/70 z-20" />
        
        {/* Hero Content */}
        <div className="absolute inset-0 flex items-center justify-center z-30">
          <div className="max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
            <div className={tw(
              "transition-all duration-1000",
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            )}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 tracking-tight">
                Barrages et Bassins
              </h1>
              <div className="w-24 h-1 bg-[#F26418] mx-auto rounded-full"></div>
            </div>
          </div>
        </div>

        {/* Image Navigation Dots */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-40 flex gap-3 bg-black/30 backdrop-blur-md px-4 py-3 rounded-full border border-white/10">
          {basinImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={tw(
                "h-2.5 rounded-full transition-all duration-500",
                index === currentImageIndex
                  ? "w-10 bg-[#F26418] shadow-lg shadow-[#F26418]/50"
                  : "w-2.5 bg-white/40 hover:bg-white/70 hover:w-6"
              )}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Introduction Section */}
      <section className="relative py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center" data-aos="fade-up">
            <div className="inline-block mb-6">
              <span className="text-[#F26418] font-semibold text-sm uppercase tracking-wider px-4 py-2 bg-[#F26418]/10 rounded-full">
                Barrages et bassins
              </span>
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#4C4A4A] mb-8 leading-tight">
              Infrastructures hydrauliques pour la régulation et la sécurité des ressources en eau
            </h2>
            
            <div className="w-24 h-1 bg-[#F26418] mx-auto rounded-full mb-12"></div>
            
            <div className="space-y-6 text-black leading-relaxed text-lg md:text-xl">
              <p>
                La construction et la réhabilitation de barrages constituent l'un des piliers de l'expertise de MTC dans le domaine hydraulique. Certifiée Bar/Bas2 et Barrage2, notre entreprise répond aux plus hauts standards nationaux dans ce secteur stratégique. Ces ouvrages jouent un rôle essentiel dans la régulation des débits, la prévention des inondations et la constitution de réserves en eau pour l'agriculture, l'élevage et les populations locales.
              </p>
              <p>
                En combinant savoir-faire technique et responsabilité environnementale, nous développons des solutions adaptées aux réalités locales, tout en garantissant la durabilité et la performance de chaque projet.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Nos Réalisations Section */}
      <section className="relative py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16" data-aos="fade-up">
            <div className="inline-block mb-4">
              <span className="text-[#F26418] font-semibold text-sm uppercase tracking-wider px-4 py-2 bg-[#F26418]/10 rounded-full">
                Nos réalisations
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#4C4A4A] mb-4">
              Barrages et Bassins
            </h2>
            <div className="w-24 h-1 bg-[#F26418] mx-auto rounded-full"></div>
          </div>

          {/* Cards */}
          <div className="space-y-16 md:space-y-24">
            {barrages.map((barrage, i) => (
              <div 
                key={i} 
                className="group"
                data-aos="fade-up"
                data-aos-delay={i * 100}
              >
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                  {/* Image Container */}
                  <div
                    className={tw(
                      "relative overflow-hidden rounded-2xl shadow-2xl",
                      barrage.imagePosition === "right" && "lg:order-2"
                    )}
                  >
                    <div className="relative aspect-[16/11] lg:aspect-[4/3]">
                      <Image
                        src={barrage.image}
                        alt={barrage.title}
                        fill
                        priority={i === 0}
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 45vw"
                      />
                      {/* Image Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>
                  </div>

                  {/* Content Card */}
                  <div
                    className={tw(
                      "relative",
                      barrage.imagePosition === "right" && "lg:order-1"
                    )}
                  >
                    <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-10 border border-gray-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-1">
                      {/* Card Header */}
                      <div className="mb-8">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#F26418] to-[#d95712] flex items-center justify-center">
                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                            </svg>
                          </div>
                          <div className="h-1 w-12 bg-gradient-to-r from-[#F26418] to-transparent rounded-full" />
                        </div>
                        <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3">
                          {barrage.title}
                        </h3>
                        <p className="text-[#F26418] font-semibold text-base lg:text-lg mb-4">
                          {barrage.location}
                        </p>
                      </div>

                      {/* Description */}
                      <div className="mb-8">
                        <p className="text-gray-700 text-base lg:text-lg leading-relaxed">
                          {barrage.description}
                        </p>
                      </div>

                      {/* CTA Button */}
                  <Link href="/projets-realisations/projets-realises">    <button
                        type="button"
                    
                        className="group/btn w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#F26418] to-[#d95712] px-8 py-4 text-white font-semibold shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-[#F26418] focus:ring-offset-2"
                      >
                        <span>Voir Plus</span>
                        <svg 
                          className="w-5 h-5 transition-transform duration-300 group-hover/btn:translate-x-1" 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </button></Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Gallery Section with Horizontal Scroll */}
      <section className="relative py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-12" data-aos="fade-up">
            <div className="inline-block mb-4">
              <span className="text-[#F26418] font-semibold text-sm uppercase tracking-wider px-4 py-2 bg-[#F26418]/10 rounded-full">
                Galerie
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#4C4A4A] mb-4">
              Nos Projets en Images
            </h2>
            <div className="w-24 h-1 bg-[#F26418] mx-auto rounded-full"></div>
          </div>

          {/* Gallery Container */}
          <div className="relative" data-aos="fade-up">
            {/* Scroll Container */}
            <div 
              ref={scrollContainerRef}
              className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory hide-scrollbar pb-4"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
              onScroll={(e) => {
                const container = e.currentTarget;
                const scrollPosition = container.scrollLeft;
                const imageWidth = container.scrollWidth / galleryImages.length;
                const newIndex = Math.round(scrollPosition / imageWidth);
                setCurrentGalleryIndex(newIndex);
              }}
            >
              {galleryImages.map((img, i) => (
                <div
                  key={i}
                  className="flex-shrink-0 w-[85%] sm:w-[70%] md:w-[60%] lg:w-[45%] xl:w-[35%] snap-center"
                >
                  <div className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                    <div className="relative aspect-[4/3]">
                      <Image
                        src={img.src}
                        alt={img.alt}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                        sizes="(max-width: 640px) 85vw, (max-width: 768px) 70vw, (max-width: 1024px) 60vw, (max-width: 1280px) 45vw, 35vw"
                      />
                      {/* Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      
                      {/* Hover Content */}
                      <div className="absolute inset-0 flex items-end p-6 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                        <div className="text-white">
                          <p className="font-semibold text-lg">{img.alt}</p>
                          <div className="w-12 h-1 bg-[#F26418] mt-2 rounded-full"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Buttons */}
            <div className="flex items-center justify-center gap-4 mt-8">
              {/* Previous Button */}
              <button
                onClick={handlePrevious}
                className="group flex items-center justify-center w-12 h-12 rounded-full bg-white border-2 border-gray-300 shadow-md hover:border-[#F26418] hover:shadow-lg transition-all duration-300"
                aria-label="Previous image"
              >
                <svg 
                  className="w-6 h-6 text-gray-600 group-hover:text-[#F26418] transition-colors duration-300" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              {/* Dots Indicator */}
              <div className="flex gap-2">
                {galleryImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => scrollToImage(index)}
                    className={tw(
                      "h-2.5 rounded-full transition-all duration-300",
                      index === currentGalleryIndex
                        ? "w-10 bg-[#F26418]"
                        : "w-2.5 bg-gray-300 hover:bg-gray-400"
                    )}
                    aria-label={`Go to image ${index + 1}`}
                  />
                ))}
              </div>

              {/* Next Button */}
              <button
                onClick={handleNext}
                className="group flex items-center justify-center w-12 h-12 rounded-full bg-white border-2 border-gray-300 shadow-md hover:border-[#F26418] hover:shadow-lg transition-all duration-300"
                aria-label="Next image"
              >
                <svg 
                  className="w-6 h-6 text-gray-600 group-hover:text-[#F26418] transition-colors duration-300" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative w-full min-h-[80vh] lg:min-h-[70vh] flex items-center justify-center overflow-hidden py-16 md:py-24">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/bassins/WhatsApp-Image-2023-07-26-at-14.28.47-1024x768.jpeg"
            alt="Infrastructure hydraulique"
            fill
            priority
            className="object-cover"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/70 to-black/60" />
        </div>

        {/* Content Container */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-4xl mx-auto">
            <div 
              className="bg-white/98 backdrop-blur-lg rounded-3xl shadow-2xl p-8 md:p-12 lg:p-16 border border-gray-200/50"
              data-aos="fade-up"
            >
              {/* Icon */}
              <div className="mb-8">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-[#F26418] to-[#d95712] shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>
              </div>

              {/* Content */}
              <div className="text-center lg:text-left space-y-6">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                  Votre Partenaire pour des Infrastructures Hydrauliques Durables
                </h2>
                
                <div className="w-24 h-1 bg-gradient-to-r from-[#F26418] to-[#d95712] rounded-full mx-auto lg:mx-0" />
                
                <p className="text-gray-700 leading-relaxed text-base md:text-lg max-w-2xl">
                  En plaçant l'expertise technique et la durabilité au cœur de notre stratégie, nous nous engageons à bâtir des infrastructures hydrauliques modernes et à anticiper les besoins de demain. Contactez-nous pour découvrir comment nous pouvons contribuer à vos projets de barrages et bassins.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center lg:justify-start">
                  <Link
                    href="/contactez-nous"
                    className="group inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#F26418] to-[#d95712] px-8 py-4 text-white font-semibold shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-[#F26418] focus:ring-offset-2"
                  >
                    <span>Contactez-nous</span>
                    <svg 
                      className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </Link>
                  
                  <Link
                    href="/projets-realisations/projets-realises"
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-white border-2 border-gray-300 px-8 py-4 text-gray-800 font-semibold shadow-md transition-all duration-300 hover:border-[#F26418] hover:text-[#F26418] hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-gray-300"
                  >
                    <span>Voir nos Projets</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx global>{`
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </main>
  );
}