"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Phone, Mail, Download, FileText } from "lucide-react";

type BookState = 
  | { type: "cover" | "final"; image: string; label: string }
  | { type: "open"; leftPage: string; rightPage: string; label: string };

type FlipBookWithCardProps = {
  className?: string;
};

export default function FlipBookWithCard({ className = "" }: FlipBookWithCardProps) {
  const [pageIndex, setPageIndex] = useState(0);
  const [isDownloading, setIsDownloading] = useState(false);
  const [isFlipping, setIsFlipping] = useState(false);
  const [flipDirection, setFlipDirection] = useState<'forward' | 'backward'>('forward');
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Book states: 0 = cover, 1 = open (two pages), 2 = final page
  const bookStates: BookState[] = [
    {
      type: "cover",
      image: "/images/mtc/MTC-1.jpg",
      label: "Couverture"
    },
    {
      type: "open",
      leftPage: "/images/mtc/MTC-3.jpg",
      rightPage: "/images/mtc/MTC-2--.jpg",
      label: "Pages intérieures"
    },
    {
      type: "final",
      image: "/images/mtc/MTC-4.jpg", 
      label: "Dernière page"
    }
  ];

  const backgroundSrc = "/images/mtc/20180530_180352-scaled.jpg";

  const canGoPrev = pageIndex > 0;
  const canGoNext = pageIndex < bookStates.length - 1;

  const next = () => {
    if (canGoNext && !isFlipping) {
      setIsFlipping(true);
      setFlipDirection('forward');
      setTimeout(() => {
        setPageIndex((i) => Math.min(i + 1, bookStates.length - 1));
        setTimeout(() => setIsFlipping(false), 100);
      }, 800);
    }
  };
  
  const prev = () => {
    if (canGoPrev && !isFlipping) {
      setIsFlipping(true);
      setFlipDirection('backward');
      setTimeout(() => {
        setPageIndex((i) => Math.max(i - 1, 0));
        setTimeout(() => setIsFlipping(false), 100);
      }, 800);
    }
  };

  // Download PDF function with loading state
  const downloadPDF = async () => {
    setIsDownloading(true);
    try {
      // Add a small delay for better UX feedback
      await new Promise(resolve => setTimeout(resolve, 300));
      
      const link = document.createElement('a');
      link.href = '/images/mtc/MTC.pdf';
      link.download = 'MTC-Brochure.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error('Download failed:', error);
    } finally {
      setTimeout(() => setIsDownloading(false), 1000); // Keep loading state for 1s
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // Touch swipe for mobile
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    let startX = 0;
    const start = (e: TouchEvent) => (startX = e.touches[0].clientX);
    const end = (e: TouchEvent) => {
      const dx = e.changedTouches[0].clientX - startX;
      if (dx < -40) next();
      if (dx > 40) prev();
    };
    el.addEventListener("touchstart", start, { passive: true });
    el.addEventListener("touchend", end, { passive: true });
    return () => {
      el.removeEventListener("touchstart", start);
      el.removeEventListener("touchend", end);
    };
  }, []);

  return (
<section
  className={`relative w-full min-h-screen lg:h-auto flex items-center justify-center overflow-hidden ${className}`}
>    {/* Background Image */}
      <Image
        src={backgroundSrc}
        alt=""
        fill
        priority
        className="object-cover"
      />
      
      {/* Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 py-8 md:py-12 lg:py-16">
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-6 md:gap-8 lg:gap-12 items-center">
          
          {/* Flip Book Section */}
          <div className="xl:col-span-7 flex flex-col items-center justify-center py-8" ref={containerRef}>
            
            {/* Download Button - Above the book */}
            <div className="mb-4 md:mb-6 lg:mb-8">
              <button
                onClick={downloadPDF}
                disabled={isDownloading}
                className="group disabled:opacity-40 disabled:cursor-not-allowed rounded-full bg-gradient-to-br from-orange-600 to-orange-700 hover:from-orange-700 hover:to-orange-800 disabled:from-orange-300 disabled:to-orange-400 text-white px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 shadow-xl hover:shadow-2xl transition-all duration-200 transform hover:scale-105 flex items-center gap-2 md:gap-3"
                title="Télécharger la brochure PDF"
                aria-label="Télécharger PDF"
              >
                {isDownloading ? (
                  <>
                    <div className="size-4 md:size-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    <span className="font-semibold text-xs sm:text-sm md:text-base">Téléchargement...</span>
                  </>
                ) : (
                  <>
                    <Download className="size-4 md:size-6" />
                    <span className="font-semibold text-xs sm:text-sm md:text-base">Télécharger PDF</span>
                  </>
                )}
              </button>
            </div>

            {/* Book Container with 3D Perspective */}
            <div
              className="relative w-full max-w-[280px] sm:max-w-md md:max-w-lg lg:max-w-2xl xl:max-w-3xl mx-auto"
              style={{ 
                perspective: '2500px',
                perspectiveOrigin: 'center center',
                height: 'clamp(350px, 50vw, 600px)',
              }}
              aria-label="Flipbook MTC"
            >
              {/* Book shadow */}
              <div className="absolute inset-0 rounded-xl bg-black/40 blur-2xl transform translate-y-6 scale-95"></div>

              {/* Book Container with transform-style preserve-3d */}
              <div 
                className="absolute inset-0"
                style={{ transformStyle: 'preserve-3d' }}
              >
                
                {/* State 0: Cover (Closed Book) */}
                {bookStates[0].type === "cover" && (
                <div 
                  className={`absolute inset-0 rounded-xl overflow-hidden shadow-2xl  transition-all duration-1000 ease-in-out ${
                    pageIndex === 0 && !isFlipping 
                      ? 'opacity-100' 
                      : pageIndex === 0 && isFlipping && flipDirection === 'forward'
                      ? 'opacity-100 animate-page-flip-forward'
                      : 'opacity-0 pointer-events-none'
                  }`}
                  style={{
                    transformStyle: 'preserve-3d',
                    transformOrigin: 'right center',
                    ...(pageIndex === 0 && isFlipping && flipDirection === 'forward' 
                      ? { animation: 'pageFlipForward 0.8s ease-in-out forwards' }
                      : {}
                    )
                  }}
                >
                  <Image
                    src={bookStates[0].image}
                    alt="Couverture MTC"
                    fill
                    className="object-contain p-4 md:p-6 lg:p-8"
                    sizes="(max-width: 640px) 280px, (max-width: 768px) 448px, (max-width: 1024px) 512px, (max-width: 1280px) 672px, 768px"
                    priority
                  />
                </div>
                )}

                {/* State 1: Open Book (Two Pages Side by Side) */}
                {bookStates[1].type === "open" && (
                <div 
                  className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                    pageIndex === 1 && !isFlipping
                      ? 'opacity-100'
                      : pageIndex === 1 && isFlipping
                      ? 'opacity-100'
                      : 'opacity-0 pointer-events-none'
                  }`}
                  style={{
                    transformStyle: 'preserve-3d',
                  }}
                >
                  {/* Left Page */}
                  <div 
                    className={`absolute top-0 bottom-0 left-0 w-1/2 rounded-l-xl overflow-hidden shadow-2xl bg-gray-50 transition-transform duration-800 ease-in-out ${
                      pageIndex === 1 && isFlipping && flipDirection === 'backward'
                        ? 'animate-page-close-left'
                        : ''
                    }`}
                    style={{
                      transformStyle: 'preserve-3d',
                      transformOrigin: 'left center',
                      ...(pageIndex === 0 && isFlipping && flipDirection === 'forward'
                        ? { animation: 'pageOpenLeft 0.8s ease-in-out forwards' }
                        : {}
                      ),
                      ...(pageIndex === 1 && isFlipping && flipDirection === 'backward'
                        ? { animation: 'pageCloseLeft 0.8s ease-in-out forwards' }
                        : {}
                      )
                    }}
                  >
                    <Image
                      src={bookStates[1].leftPage}
                      alt="Page gauche"
                      fill
                      className="object-contain p-2 md:p-3 lg:p-4"
                      sizes="(max-width: 640px) 140px, (max-width: 768px) 224px, (max-width: 1024px) 256px, (max-width: 1280px) 336px, 384px"
                    />
                    <div className="absolute inset-y-0 right-0 w-4 md:w-8 bg-gradient-to-l from-black/30 to-transparent pointer-events-none" />
                  </div>
                  
                  {/* Right Page */}
                  <div 
                    className={`absolute top-0 bottom-0 right-0 w-1/2 rounded-r-xl overflow-hidden shadow-2xl bg-gray-50 transition-transform duration-800 ease-in-out ${
                      pageIndex === 1 && isFlipping && flipDirection === 'forward'
                        ? 'animate-page-flip-right'
                        : ''
                    }`}
                    style={{
                      transformStyle: 'preserve-3d',
                      transformOrigin: 'right center',
                      ...(pageIndex === 0 && isFlipping && flipDirection === 'forward'
                        ? { animation: 'pageOpenRight 0.8s ease-in-out forwards' }
                        : {}
                      ),
                      ...(pageIndex === 1 && isFlipping && flipDirection === 'forward'
                        ? { animation: 'pageFlipRight 0.8s ease-in-out forwards' }
                        : {}
                      )
                    }}
                  >
                    <Image
                      src={bookStates[1].rightPage}
                      alt="Page droite"
                      fill
                      className="object-contain p-2 md:p-3 lg:p-4"
                      sizes="(max-width: 640px) 140px, (max-width: 768px) 224px, (max-width: 1024px) 256px, (max-width: 1280px) 336px, 384px"
                    />
                    <div className="absolute inset-y-0 left-0 w-4 md:w-8 bg-gradient-to-r from-black/30 to-transparent pointer-events-none" />
                  </div>
                  
                  {/* Center Spine */}
                  <div className="absolute inset-y-0 left-1/2 w-1 md:w-2 lg:w-3 bg-gradient-to-r from-black/50 via-black/70 to-black/50 transform -translate-x-1/2 shadow-2xl" />
                </div>
                )}

                {/* State 2: Final Page (Back Cover) */}
                {bookStates[2].type === "final" && (
                <div 
                  className={`absolute inset-0 rounded-xl overflow-hidden shadow-2xl transition-all duration-1000 ease-in-out ${
                    pageIndex === 2 && !isFlipping
                      ? 'opacity-100'
                      : pageIndex === 2 && isFlipping && flipDirection === 'backward'
                      ? 'opacity-100'
                      : 'opacity-0 pointer-events-none'
                  }`}
                  style={{
                    transformStyle: 'preserve-3d',
                    transformOrigin: 'left center',
                    ...(pageIndex === 1 && isFlipping && flipDirection === 'forward'
                      ? { animation: 'pageOpenFinal 0.8s ease-in-out forwards' }
                      : {}
                    ),
                    ...(pageIndex === 2 && isFlipping && flipDirection === 'backward'
                      ? { animation: 'pageCloseFinal 0.8s ease-in-out forwards' }
                      : {}
                    )
                  }}
                >
                  <Image
                    src={bookStates[2].image}
                    alt="Dernière page MTC"
                    fill
                    className="object-contain p-4 md:p-6 lg:p-8"
                    sizes="(max-width: 640px) 280px, (max-width: 768px) 448px, (max-width: 1024px) 512px, (max-width: 1280px) 672px, 768px"
                  />
                </div>
                )}

              </div>

            </div>
            
            {/* Navigation Controls - Below the book */}
            <div className="flex items-center justify-center gap-4 md:gap-6 mt-4 md:mt-6 lg:mt-8">
              <button
                onClick={prev}
                disabled={!canGoPrev || isFlipping}
                aria-label="Page précédente"
                className="group disabled:opacity-40 disabled:cursor-not-allowed rounded-full bg-gradient-to-r from-[#F26418] to-orange-600 hover:from-orange-600 hover:to-orange-700 disabled:from-orange-300 disabled:to-orange-400 text-white transition-all duration-200 shadow-lg p-2 sm:p-3 md:p-4 hover:shadow-xl transform hover:scale-110"
              >
                <ChevronLeft className="size-5 sm:size-6 md:size-7 group-active:translate-x-[-2px] transition-transform" />
              </button>

              <div className="text-white font-semibold text-xs sm:text-sm md:text-base bg-black/30 backdrop-blur-sm px-3 sm:px-4 md:px-6 py-1.5 sm:py-2 md:py-2.5 rounded-full">
                {pageIndex + 1} / {bookStates.length}
              </div>

              <button
                onClick={next}
                disabled={!canGoNext || isFlipping}
                aria-label="Page suivante"
                className="group disabled:opacity-40 disabled:cursor-not-allowed rounded-full bg-gradient-to-r from-[#F26418] to-orange-600 hover:from-orange-600 hover:to-orange-700 disabled:from-orange-300 disabled:to-orange-400 text-white transition-all duration-200 shadow-lg p-2 sm:p-3 md:p-4 hover:shadow-xl transform hover:scale-110"
              >
                <ChevronRight className="size-5 sm:size-6 md:size-7 group-active:translate-x-[2px] transition-transform" />
              </button>
            </div>
          </div>

          {/* Quality Service Card */}
          <div className="xl:col-span-5 flex items-center justify-center xl:justify-start pb-8 xl:pb-0">
            <div className="bg-white/95 backdrop-blur-sm rounded-xl md:rounded-2xl p-6 md:p-8 lg:p-10 shadow-2xl max-w-lg w-full border border-orange-200/30 ring-1 ring-orange-100/50">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-gray-900 to-[#F26418] bg-clip-text text-transparent mb-4 md:mb-6 text-center xl:text-left">
                Qualité de service inégalée
              </h2>
              
              <div className="space-y-3 md:space-y-4 text-gray-700 text-sm md:text-base leading-relaxed mb-6 md:mb-8">
                <p>
                  Chez MTC, l&apos;engagement envers la qualité est primordial. Chaque projet est une nouvelle 
                  opportunité d&apos;atteindre l&apos;excellence et de dépasser les attentes de nos clients. Nous 
                  mettons en œuvre des standards rigoureux et adoptons des processus éprouvés pour garantir 
                  des résultats irréprochables, tout en respectant les délais et les budgets.
                </p>
                
                <p>
                  Notre équipe d&apos;experts se consacre à offrir des solutions sur mesure, adaptées aux besoins 
                  spécifiques de chaque client. Grâce à une attention méticuleuse aux détails et à une 
                  approche proactive, nous assurons des prestations d&apos;une qualité que peu peuvent égaler.
                </p>
              </div>

              {/* CTA Button */}
              <div className="text-center xl:text-left">
                <button className="inline-flex items-center gap-2 md:gap-3 bg-gradient-to-r from-[#F26418] to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold px-6 md:px-8 py-3 md:py-4 text-sm md:text-base rounded-lg md:rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105">
                  <Phone className="size-4 md:size-5" />
                  Contactez-nous
                </button>
              
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
