"use client";

import { useState } from "react";
import Hero from "@/components/hero";
import Image from "next/image";

type ProjectItem = {
    title: string;
    description: string;
    image: string;      
  };
  
  const PROJECTS: ProjectItem[] = [
    {
      title: "Route Aleg - Magtaa Lehjar",
      description:
        "Travaux de réhabilitation / construction de certains tronçons du réseau routier national divisé en sept lots. Lot1 Tronçon Aleg – Magtaa Lehjar (100 km).",
      image: "/images/projects/image1-scaled.jpg",
    },
    {
      title: "Route Boghé - Kaédi",
      description:
        "Travaux de réhabilitation / construction du réseau routier national. Lot7 Tronçon Boghé – Kaédi (100 km).",
      image: "/images/projects/image2-scaled.jpg",
    },
    {
        title: "Construction de stations de pompage",
        description:
          "Travaux de construction de deux (02)  stations de pompage, fourniture et installation d’équipements électromécaniques et électriques du périmètre de SOKAM ( LOT 2 : SP2 et SP3)",
        image: "/images/projects/Projet Sokam _SP2.jpg",
      },
  ];
  
  function cx(...cls: (string | false | null | undefined)[]) {
    return cls.filter(Boolean).join(" ");
  }

export default function ProjetsEnCoursPage() {
    const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string } | null>(null);
    const titleHero = "Projets en cours";
    const imageHero = ["/images/mtc/new/20180610_142523-scaled.jpg", "/images/mtc/home/image2025-10-01.24.jpeg" ,"/images/bassins/Mj.jpg"];

    return (
        <main className="min-h-screen w-full bg-white overflow-hidden">
            <Hero titleHero={titleHero} imageHero={imageHero} />
        {/* here goes the content */}
        <section className="bg-gradient-to-b from-[#E9DFDE] to-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:py-20 lg:py-24">
        <div className="mb-16 text-center">
          <h1 className="text-3xl font-bold text-neutral-900 md:text-4xl lg:text-5xl">
            Projets & Réalisations
          </h1>
          <p className="mt-4 text-lg text-neutral-600">
            Découvrez nos projets en cours de réalisation
          </p>
        </div>

        <div className="space-y-24 md:space-y-32">
          {PROJECTS.map((p, i) => {
            const isLeft = i % 2 === 0;

            return (
              <article 
                key={p.title} 
                className="group"
                data-aos="fade-up"
                data-aos-duration="800"
              >
                <div className={cx(
                  "flex flex-col gap-8",
                  "md:grid md:grid-cols-2 md:gap-12 lg:gap-16",
                  "md:items-center"
                )}>
                  {/* Image */}
                  <div
                    className={cx(
                      "relative overflow-hidden rounded-2xl shadow-2xl cursor-pointer",
                      "transition-all duration-500",
                      "group-hover:shadow-3xl group-hover:scale-[1.02]",
                      isLeft ? "md:order-1" : "md:order-2"
                    )}
                    onClick={() => setSelectedImage({ src: p.image, alt: p.title })}
                  >
                    <div className="relative aspect-[4/3] md:aspect-[3/2]">
                      <Image
                        src={p.image}
                        alt={p.title}
                        fill
                        priority={i === 0}
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      {/* Gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      
                      {/* Zoom Icon */}
                      <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg">
                        <svg className="w-5 h-5 text-[#F26418]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div
                    className={cx(
                      "flex flex-col justify-center",
                      "space-y-6",
                      isLeft ? "md:order-2" : "md:order-1"
                    )}
                  >
                    <div className="space-y-1">
                      <div className="flex items-center gap-3">
                        <div className="h-1 w-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full" />
                        <span className="text-sm font-semibold text-orange-600 uppercase tracking-wider">
                          Projet {String(i + 1).padStart(2, '0')}
                        </span>
                      </div>
                      <h2 className="text-2xl font-bold text-neutral-900 md:text-3xl lg:text-4xl leading-tight">
                        {p.title}
                      </h2>
                    </div>

                    <p className="text-base leading-relaxed text-neutral-700 md:text-lg lg:text-xl">
                      {p.description}
                    </p>

                    <div className="flex items-center gap-4 pt-4">
                      <div className="flex items-center gap-2 text-sm text-neutral-600">
                        <svg className="w-5 h-5 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="font-medium">En cours</span>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
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
        </main>
    )
}