"use client";

import Image from "next/image";

export default function PourquoiCollaborer() {
  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Grid: text + small image (left) / big image (right) */}
        <div className="grid gap-8 sm:gap-10 md:gap-12 lg:gap-16 xl:grid-cols-2 items-start">
          {/* LEFT */}
          <div className="order-2 xl:order-1">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl font-extrabold leading-tight">
              <span className="text-[#F26418]">Pourquoi Collaborer avec MTC&nbsp;?</span>
            </h2>

            <h3 className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl font-semibold">
              Une vision tournée vers l'avenir des infrastructures
            </h3>

            <p className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed">
              Notre approche innovante et notre expertise technique sont au service des
              infrastructures de demain. Grâce à des équipements de pointe et à des méthodes
              modernes, nous révolutionnons le secteur des travaux publics et offrons des
              solutions inégalées à nos clients.
            </p>

            {/* Small image under text */}
            <div className="relative mt-6 sm:mt-8 rounded-xl sm:rounded-2xl overflow-hidden shadow-lg sm:shadow-xl ring-1 ring-black/5">
              <div className="aspect-[3/2] sm:aspect-[4/3] md:aspect-[3/2]">
                <Image
                  src="/images/mtc/image1.jpg"  /* <-- replace if needed */
                  alt="Arroseuse et équipe MTC"
                  width={1200}
                  height={800}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
            </div>
          </div>

          {/* RIGHT: image with text below */}
          <div className="relative order-1 xl:order-2">
            {/* Image matching left side proportions */}
            {/* subtle glow */}
            <div className="absolute -inset-2 sm:-inset-4 -z-10 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-orange-200/30 to-orange-500/10 blur-xl sm:blur-2xl" />
            <div className="relative rounded-xl sm:rounded-2xl overflow-hidden shadow-lg sm:shadow-xl ring-1 ring-black/5">
              <div className="aspect-[3/2] sm:aspect-[4/3] md:aspect-[3/2]">
                <Image
                  src="/images/mtc/image2.jpg"  /* <-- replace if needed */
                  alt="Flotte de bennes MTC"
                  width={1200}
                  height={800}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
             <h3 className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl font-semibold">
               <span className="text-[#F26418] font-extrabold text-5xl">+14 </span>
               ans d'expérience dans le domaine
             </h3>
             <p className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed py-8">
               Fort de plus de 14 ans d'expérience dans les travaux publics, MTC a développé une expertise solide et une fiabilité reconnue dans l'ensemble des projets réalisés, des routes aux aménagements hydrauliques, en passant par les bâtiments et l'exploitation de centrales de production.
             </p>
          </div>
        </div>
      </div>
    </section>
  );
}
