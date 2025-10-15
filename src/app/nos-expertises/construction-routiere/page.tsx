import Image from "next/image";
import Link from "next/link";
const tw = (...c: (string | false | undefined)[]) => c.filter(Boolean).join(" ");

export default function ConstructionRoutiere() {
    const routes = [
        {
          title: "Routes Interurbaines",
          subtitle: "+604 Km",
          image: "/images/mtc/route.jpg",
          items: [
            "Route Aleg – Magtaa Lehjar (100 Km)",
            "Route Boghé – Kaédi (100 Km)",
            "Route Kiffa – Kankossa (83 Km)",
            "Route Atar – Zouerate Lot3 (56,4 Km)",
            "Route Kiffa – Boumdeid (54,6 Km)",
            "Route Zravia – Tamchekett (45 Km)",
            "Route Atar – Tidjikja (40 Km)",
            "Route Touajil – Choum (25 Km)",
            "Route Nouakchott – Boutilimitt (25 Km)",
            "Route Nouakchott – Boutilimitt (25 Km)",
            "Route F'Derick – Touajil (22,5 Km)",
            "Route Nema – Achemim (16,4 Km)",
            "Route Kseir Torchan – Choum (12 Km)",
          ],
        },
        {
            title: "Voiries Urbaines",
            subtitle: "+104 Km",
            image: "/images/mtc/20180530_180352-scaled.jpg",
            imagePosition: "right" as const,
            items: [
              "Rehabilitation des voiries A Nouakchott (17,8 Km)",
              "Construction Voiries Aleg Et Magtaa Lahjar (12,2 Km)",
              "Voirie de Sommet à Nouakchott (11,5 Km)",
              "Revetement voirie de Nouakchott (11 Km)",
              "Voirie de Carr Ould Mah — Lycee de Teyarett (11 Km)",
              "Voirie de Rosso (8 Km)",
              "Piste de l'aeroport de Nema (7,5 Km)",
              "Revetement Carrefour Madrid Toujine (7 Km)",
              "Revetement piste Aeroport Carrefour Fnt (5 Km)",
              "Voirie d'Akjoujt (5 Km)",
              "Mise à niveau des voiries de Nouakchott (3 Km)",
              "Revetement voiries de Nouakchott (2 Km)",
              "Piste de l'Aeroport d'Atar (1,8 Km)",
              "Piste de l'Aeroport de Nema (1,5 Km)",
            ],
          },
      
      ];

      const images: { src: string; alt?: string }[] = [
        { src: "/images/mtc/route.jpg", alt: "Chantier 1" },
        { src: "/images/mtc/20180530_180352-scaled.jpg", alt: "Chantier 2" },
        { src: "/images/mtc/route.jpg", alt: "Chantier 3" },
        { src: "/images/mtc/20180530_180352-scaled.jpg", alt: "Chantier 4" },
        { src: "/images/mtc/route.jpg", alt: "Chantier 5" },
        { src: "/images/mtc/20180530_180352-scaled.jpg", alt: "Chantier 6" },
      ];

    return (
        <main className="min-h-screen w-full bg-white">
      {/* Hero Section  */}
      <section className="relative h-[60vh] md:h-[70vh] w-full overflow-hidden">
        <Image src="/images/rubon1.jpg" alt="Construction Routiere" fill priority className="object-cover" />
      <div className="absoluteinset-0 bg-gradient-to-b 
      from-black/50 via-black/30 to-black/70" />
      {/* Hero Content */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 tracking-tight">
            Construction Routiere
          </h1>
        </div>
      </div>
      </section>

      <section className="relative py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center" data-aos="fade-up">
            <div className="inline-block mb-6">
              <span className="text-[#F26418] font-semibold text-sm uppercase tracking-wider px-4 py-2 bg-[#F26418]/10 rounded-full">
                Construction Routiere
              </span>
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#4C4A4A] mb-8 leading-tight">
            Construire des infrastructures routières durables
            </h2>
            
            <div className="w-24 h-1 bg-[#F26418] mx-auto rounded-full mb-12"></div>
            
            <div className="space-y-6 text-black leading-relaxed text-lg md:text-xl">
              <p>
              Chez MTC, notre mission est de contribuer activement au développement du réseau routier en Mauritanie. Nous réalisons des projets de construction et de réhabilitation qui améliorent la mobilité, favorisent le développement économique et renforcent la connectivité régionale.              </p>
              <p>
              Grâce à notre expertise et à notre parc de véhicules et engins modernisé, nous offrons des solutions adaptées aux besoins des infrastructures de demain.              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Routes Section - Modern Cards */}
      <section className="relative py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16" data-aos="fade-up">
            <div className="inline-block mb-4">
              <span className="text-[#F26418] font-semibold text-sm uppercase tracking-wider px-4 py-2 bg-[#F26418]/10 rounded-full">
                Nos Réalisations
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#4C4A4A] mb-4">
              Routes & Voiries
            </h2>
            <div className="w-24 h-1 bg-[#F26418] mx-auto rounded-full"></div>
          </div>

          {/* Cards */}
          <div className="space-y-16 md:space-y-24">
            {routes.map((route, i) => (
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
                      route.imagePosition === "right" && "lg:order-2"
            )}
          >
                    <div className="relative aspect-[16/11] lg:aspect-[4/3]">
            <Image
                        src={route.image}
                        alt={route.title}
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
                      route.imagePosition === "right" && "lg:order-1"
                    )}
                  >
                    <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-10 border border-gray-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-1">
                      {/* Card Header */}
                      <div className="mb-8">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#F26418] to-[#d95712] flex items-center justify-center">
                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                            </svg>
                          </div>
                          <div className="h-1 w-12 bg-gradient-to-r from-[#F26418] to-transparent rounded-full" />
                        </div>
                        <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
                          {route.title}
                        </h3>
                        <p className="text-[#F26418] font-semibold text-lg">
                          {route.subtitle} de réseaux construits
                        </p>
                      </div>

                      {/* Projects List */}
                      <div className="space-y-3 mb-8 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
                        {route.items.map((item, idx) => (
                          <div 
                            key={idx}
                            className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                          >
                            <div className="flex-shrink-0 mt-1">
                              <div className="w-2 h-2 rounded-full bg-[#F26418]" />
                            </div>
                            <span className="text-gray-700 text-sm lg:text-base leading-relaxed">
                  {item}
                            </span>
                          </div>
              ))}
                      </div>

                      {/* CTA Button */}
            <button
              type="button"
                        className="group/btn w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#F26418] to-[#d95712] px-8 py-4 text-white font-semibold shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-[#F26418] focus:ring-offset-2"
                      >
                        <span>Voir Plus de Détails</span>
                        <svg 
                          className="w-5 h-5 transition-transform duration-300 group-hover/btn:translate-x-1" 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
            </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
    </section>
      {/* Gallery Section */}
      <section className="relative py-16 md:py-24 bg-white">
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

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {images.map((img, i) => (
          <figure
            key={i}
                className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                data-aos="zoom-in"
                data-aos-delay={i * 50}
          >
                <div className="relative aspect-[4/3]">
              <Image
                src={img.src}
                alt={img.alt ?? `Gallery image ${i + 1}`}
                fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    priority={i < 3}
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
          </figure>
        ))}
          </div>
      </div>
    </section>
      {/* CTA Section */}
      <section className="relative w-full min-h-[80vh] lg:min-h-[70vh] flex items-center justify-center overflow-hidden py-16 md:py-24">
        {/* Background Image */}
        <div className="absolute inset-0">
      <Image
            src="/images/mtc/20180530_180352-scaled.jpg"
        alt="Infrastructure routière"
        fill
        priority
        className="object-cover"
      />
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
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
              </div>

              {/* Content */}
              <div className="text-center lg:text-left space-y-6">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
          Votre Partenaire pour des Routes Durables
        </h2>
                
                <div className="w-24 h-1 bg-gradient-to-r from-[#F26418] to-[#d95712] rounded-full mx-auto lg:mx-0" />
                
                <p className="text-gray-700 leading-relaxed text-base md:text-lg max-w-2xl">
          En plaçant l'humain et l'innovation au cœur de notre stratégie, nous
          nous engageons à bâtir des infrastructures modernes et à anticiper les
          besoins de demain. Contactez-nous pour découvrir comment nous pouvons
                  contribuer à vos projets d'infrastructures routières.
        </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center lg:justify-start">
          <Link
            href="/contact"
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
                    href="/projets-realisations"
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
        </main>
    )
}