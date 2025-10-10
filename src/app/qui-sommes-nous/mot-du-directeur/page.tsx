import Image from "next/image";

export default function Page() {
  return (
    <main className="min-h-screen w-full bg-white">
      {/* HERO SECTION WITH IMAGE */}
      <section className="relative h-[60vh] md:h-[70vh] w-full overflow-hidden">
        <Image
          src="/images/rubon1.jpg"
          alt="Mot du Directeur - MTC"
          fill
          priority
          className="object-cover"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/70" />
        
        {/* Hero Content */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 tracking-tight">
              Mot du Directeur
            </h1>
            <div className="w-24 h-1 bg-[#F26418] mx-auto rounded-full"></div>
          </div>
        </div>
      </section>

      {/* INTRODUCTION SECTION WITH DIRECTOR IMAGE */}
      <section className="relative py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Director Image */}
            <div className="order-2 lg:order-1" data-aos="fade-right">
              <div className="relative group">
                {/* Decorative background element */}
                <div className="absolute -inset-4 bg-gradient-to-br from-[#F26418]/20 to-[#F26418]/5 rounded-3xl transform rotate-3 group-hover:rotate-6 transition-transform duration-300"></div>
                
                {/* Image container */}
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <div className="relative aspect-[3/4] w-full">
                <Image
                      src="/images/rubon2.jpg"
                      alt="El Wely BOUHEBEYNI - Directeur Général MTC"
                  fill
                  className="object-cover"
                />
                  </div>
                  
                  {/* Name card overlay */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#4C4A4A] to-transparent p-6">
                    <h3 className="text-white text-xl md:text-2xl font-bold mb-1">
                      El Wely BOUHEBEYNI
                    </h3>
                    <p className="text-[#F26418] text-sm md:text-base font-semibold">
                      Directeur Général MTC
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Introduction Text */}
            <div className="order-1 lg:order-2" data-aos="fade-left">
              <div className="inline-block mb-4">
                <span className="text-[#F26418] font-semibold text-sm uppercase tracking-wider px-4 py-2 bg-[#F26418]/10 rounded-full">
                  Notre Vision
                </span>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-[#4C4A4A] mb-6 leading-tight">
                Excellence et Développement Durable
              </h2>
              
              <div className="space-y-4 text-black leading-relaxed text-base md:text-lg">
                <p>
                  La Mauritanienne de Travaux et Constructions (MTC-sa) s'inscrit dans une dynamique d'excellence et de développement durable dans le secteur des travaux publics. Face aux défis d'un marché en constante évolution, notre engagement est de fournir des services de qualité tout en respectant les normes environnementales et de sécurité.
              </p>
              <p>
                  Ce mot a pour objectif de partager notre vision, nos valeurs et nos engagements envers nos clients, partenaires et employés.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ENGAGEMENT SECTION */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16" data-aos="fade-up">
            <div className="inline-block mb-4">
              <span className="text-[#F26418] font-semibold text-sm uppercase tracking-wider px-4 py-2 bg-[#F26418]/10 rounded-full">
                Nos Engagements
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#4C4A4A] mb-4">
              Engagement envers l'excellence
            </h2>
            <div className="w-24 h-1 bg-[#F26418] mx-auto rounded-full"></div>
          </div>

          {/* Content */}
          <div className="max-w-4xl mx-auto" data-aos="fade-up" data-aos-delay="100">
            <p className="text-black text-lg leading-relaxed text-center">
              MTC s'engage résolument à promouvoir l'excellence dans le secteur des travaux publics en Mauritanie. Dans un environnement en constante évolution, la stratégie de l'entreprise repose sur l'accroissement continu du chiffre d'affaires, l'expansion sur le marché et la fidélisation des clients.
            </p>
          </div>
        </div>
      </section>

      {/* KEY PILLARS SECTION */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {/* Pillar 1: Quality */}
            <div className="group" data-aos="fade-up">
              <div className="h-full bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 md:p-10 border-t-4 border-[#F26418]">
                {/* Icon */}
                <div className="w-16 h-16 bg-gradient-to-br from-[#F26418] to-[#F26418]/70 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>

                <h3 className="text-2xl md:text-3xl font-bold text-[#4C4A4A] mb-4">
                  Qualité au cœur des opérations
                </h3>
                
                <p className="text-black text-base md:text-lg leading-relaxed">
                  La qualité est au cœur des opérations de MTC. Des normes strictes sont appliquées pour garantir que les produits et services offerts répondent aux attentes des clients et respectent les réglementations en vigueur. Les indicateurs de performance sont régulièrement établis et évalués pour optimiser les processus clés.
                </p>
              </div>
            </div>

            {/* Pillar 2: Partnerships */}
            <div className="group" data-aos="fade-up" data-aos-delay="100">
              <div className="h-full bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 md:p-10 border-t-4 border-[#F26418]">
                {/* Icon */}
                <div className="w-16 h-16 bg-gradient-to-br from-[#F26418] to-[#F26418]/70 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>

                <h3 className="text-2xl md:text-3xl font-bold text-[#4C4A4A] mb-4">
                  Partenariats durables et communication ouverte et transparente
                </h3>
                
                <p className="text-black text-base md:text-lg leading-relaxed">
                  Nous croyons fermement en l'importance des partenariats durables. C'est pourquoi nous nous engageons à établir des relations solides et de confiance avec nos fournisseurs et sous-traitants. Cette approche vise à consolider notre position en tant qu'acteur majeur dans le secteur des BTP, tout en contribuant au développement d'une expertise nationale.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CLOSING MESSAGE SECTION */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-[#4C4A4A] to-[#7A7674] relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#F26418]/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#F26418]/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" data-aos="fade-up">
          <div className="text-center mb-12">
            <div className="w-20 h-1 bg-[#F26418] mx-auto rounded-full mb-8"></div>
            <svg className="w-16 h-16 text-[#F26418]/30 mx-auto mb-8" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
          </div>

          <p className="text-white text-lg md:text-xl leading-relaxed mb-12 text-center">
            Nous sommes convaincus qu'une communication ouverte et transparente avec vous, nos parties prenantes, est essentielle pour garantir la réussite et la pérennité de notre entreprise. En tant que direction, nous restons déterminés à conduire MTC vers de nouveaux sommets, en offrant des solutions innovantes et en nous concentrant sur l'amélioration continue de nos services.
          </p>

          <div className="text-center">
            <p className="text-white/90 text-xl md:text-2xl font-semibold mb-8">
              Merci de votre confiance.
            </p>
            
            <div className="inline-block">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl px-8 py-6 border border-white/20">
                <p className="text-white text-2xl md:text-3xl font-bold mb-2">
                  El Wely BOUHEBEYNI
                </p>
                <p className="text-[#F26418] text-lg md:text-xl font-semibold">
                  Directeur Général MTC
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
