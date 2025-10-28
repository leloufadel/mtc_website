"use client";

import Image from "next/image"; 
import { useState, useEffect } from "react";

export default function Hero({titleHero, imageHero}: {titleHero: string, imageHero: string | string[]}){
  // Normalize to array
  const images = Array.isArray(imageHero) ? imageHero : [imageHero];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(interval);
  }, [images.length]);

 return (
    <section className= "relative h-[60vh] md:h-[70vh] w-full overflow-hidden" >
      {images.map((image, index) => (
        <Image 
          key={index}
          src={image} 
          alt={`${titleHero} - Slide ${index + 1}`}
          fill 
          priority={index === 0}
          className={`object-cover transition-opacity duration-1000 ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ position: 'absolute' }}
        />
      ))}
  {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/70" />
        
        {/* Hero Content */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 tracking-tight">
              {titleHero}</h1>
            <div className="w-24 h-1 bg-[#F26418] mx-auto rounded-full"></div>
          </div>
        </div>
    </section>
)
}