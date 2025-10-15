"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const heroImages = [
  "/images/projects/image1-scaled.jpg",
  "/images/projects/image2-scaled.jpg",
  "/images/projects/image3.webp",
];

export default function Hero1() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        (prevIndex + 1) % heroImages.length
      );
    }, 6000); // Change image every 6 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen min-h-[700px] lg:min-h-[800px] overflow-hidden bg-slate-900">
      {/* Background Images with Transitions */}
      <div className="absolute inset-0">
        {heroImages.map((image, index) => (
          <div
            key={image}
            className={`absolute inset-0 transition-opacity duration-[1500ms] ease-in-out ${
              index === currentImageIndex
                ? "opacity-100 z-10"
                : "opacity-0 z-0"
            }`}
          >
            <div className={`relative w-full h-full ${
              index === currentImageIndex ? "animate-zoom-in" : ""
            }`}>
              <Image
                src={image}
                alt={`MTC Project ${index + 1}`}
                fill
                priority={index === 0}
                className="object-cover object-center"
                quality={95}
                sizes="100vw"
              />
            </div>
            {/* Modern gradient overlay - darker on left for text readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/50" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          </div>
        ))}
      </div>

      {/* Decorative elements */}
      <div className="absolute inset-0 z-10">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-orange-500/10 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-orange-500/5 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-20 h-full flex items-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-5xl">
            {/* Main content with staggered animations */}
            <div className={`transition-all duration-1000 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              {/* Small badge/label */}
              <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 bg-orange-500/20 backdrop-blur-md border border-orange-500/30 rounded-full">
                <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse" />
                <span className="text-orange-400 text-sm font-medium tracking-wide uppercase">
                  Excellence en Travaux Publics
                </span>
              </div>

              {/* Main headline */}
              <h1 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 lg:mb-6 leading-[1.15] tracking-tight transition-all duration-1000 delay-100 ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}>
                <span className="block text-white drop-shadow-2xl">
                  MTC – Acteur majeur
                </span>
                <span className="block mt-1 lg:mt-2">
                  <span className="text-white drop-shadow-2xl">des </span>
                  <span className="bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 bg-clip-text text-transparent drop-shadow-lg">
                    Travaux Publics
                  </span>
                </span>
                <span className="block text-white drop-shadow-2xl mt-1 lg:mt-2">
                  en Mauritanie
                </span>
              </h1>
              
              {/* Description */}
              <p className={`text-sm sm:text-base lg:text-lg text-gray-200 leading-relaxed mb-6 lg:mb-8 max-w-3xl transition-all duration-1000 delay-200 ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}>
                Chez <span className="font-semibold text-white">Mauritanienne des Travaux et Constructions (MTC)</span>, nous nous engageons à transformer durablement les infrastructures en Mauritanie. Grâce à notre expertise et à notre engagement envers l'excellence, nous réalisons des projets qui améliorent la qualité de vie et favorisent le développement du pays.
              </p>

              {/* Stats Section - MTC en chiffres clés */}
              <div className={`mt-8 lg:mt-12 transition-all duration-1000 delay-300 ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}>
                {/* Section Title */}
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-6 lg:mb-8 flex items-center gap-3">
                  <span className="h-1 w-8 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full"></span>
                  MTC en chiffres clés
                </h2>
                
                {/* Stats Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6 max-w-5xl">
                  <div className="backdrop-blur-lg bg-gradient-to-br from-white/20 to-white/5 rounded-xl p-5 lg:p-6 border-2 border-white/30 shadow-xl shadow-black/20 hover:shadow-2xl hover:shadow-orange-500/20 hover:border-orange-400/60 hover:bg-white/25 transition-all duration-300 group">
                    <div className="text-xs sm:text-sm text-gray-200 mb-3 font-semibold uppercase tracking-wide">
                      Ans d'expérience
                    </div>
                    <div className="flex items-baseline gap-1">
                      <span className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#FF6310] group-hover:text-orange-300 transition-colors">
                        +
                      </span>
                      <span className="text-3xl sm:text-4xl lg:text-5xl font-black bg-gradient-to-br from-orange-400 to-orange-500 bg-clip-text text-[#FF6310] group-hover:from-orange-300 group-hover:to-orange-400 transition-all">
                        15
                      </span>
                    </div>
                  </div>

                  <div className="backdrop-blur-lg bg-gradient-to-br from-white/20 to-white/5 rounded-xl p-5 lg:p-6 border-2 border-white/30 shadow-xl shadow-black/20 hover:shadow-2xl hover:shadow-orange-500/20 hover:border-orange-400/60 hover:bg-white/25 transition-all duration-300 group">
                    <div className="text-xs sm:text-sm text-gray-200 mb-3 font-semibold uppercase tracking-wide">
                      Km de Route
                    </div>
                    <div className="flex items-baseline gap-1">
                      <span className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#FF6310] group-hover:text-orange-300 transition-colors">
                        +
                      </span>
                      <span className="text-3xl sm:text-4xl lg:text-5xl font-black bg-gradient-to-br from-orange-400 to-orange-500 bg-clip-text text-[#FF6310] group-hover:from-orange-300 group-hover:to-orange-400 transition-all">
                        708
                      </span>
                    </div>
                  </div>

                  <div className="backdrop-blur-lg bg-gradient-to-br from-white/20 to-white/5 rounded-xl p-5 lg:p-6 border-2 border-white/30 shadow-xl shadow-black/20 hover:shadow-2xl hover:shadow-orange-500/20 hover:border-orange-400/60 hover:bg-white/25 transition-all duration-300 group">
                    <div className="text-xs sm:text-sm text-gray-200 mb-3 font-semibold uppercase tracking-wide">
                      Unités et équipements
                    </div>
                    <div className="flex items-baseline gap-1">
                      <span className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#FF6310] group-hover:text-orange-300 transition-colors">
                        +
                      </span>
                      <span className="text-3xl sm:text-4xl lg:text-5xl font-black bg-gradient-to-br from-orange-400 to-orange-500 bg-clip-text text-[#FF6310] group-hover:from-orange-300 group-hover:to-orange-400 transition-all">
                        250
                      </span>
                    </div>
                  </div>

                  <div className="backdrop-blur-lg bg-gradient-to-br from-white/20 to-white/5 rounded-xl p-5 lg:p-6 border-2 border-white/30 shadow-xl shadow-black/20 hover:shadow-2xl hover:shadow-orange-500/20 hover:border-orange-400/60 hover:bg-white/25 transition-all duration-300 group">
                    <div className="text-xs sm:text-sm text-gray-200 mb-3 font-semibold uppercase tracking-wide">
                      Ingénieurs cadres
                    </div>
                    <div className="flex items-baseline gap-1">
                      <span className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#FF6310] group-hover:text-orange-300 transition-colors">
                        +
                      </span>
                      <span className="text-3xl sm:text-4xl lg:text-5xl font-black bg-gradient-to-br from-orange-400 to-orange-500 bg-clip-text text-[#FF6310] group-hover:from-orange-300 group-hover:to-orange-400 transition-all">
                        50
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Image Navigation Dots */}
      {/* <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30 flex gap-3 bg-black/30 backdrop-blur-md px-4 py-3 rounded-full border border-white/10">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`h-2.5 rounded-full transition-all duration-500 ${
              index === currentImageIndex
                ? "w-10 bg-orange-500 shadow-lg shadow-orange-500/50"
                : "w-2.5 bg-white/40 hover:bg-white/70 hover:w-6"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div> */}

    </section>
  );
}

