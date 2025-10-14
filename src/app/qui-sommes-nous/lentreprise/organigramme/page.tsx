import Hero from "@/components/hero";
import Image from "next/image";

export default function OrganigrammePage() {
  const titleHero = "L'organigramme";
  
  return (
    <main className="min-h-screen w-full bg-white overflow-hidden">
      {/* HERO SECTION */}
      <Hero titleHero={titleHero} />

      {/* ORGANIZATIONAL CHART IMAGE SECTION */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#F26418]/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#F26418]/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-16" data-aos="fade-up">
            <div className="inline-block mb-6">
              <span className="text-[#F26418] font-bold text-sm uppercase tracking-wider px-6 py-3 bg-[#F26418]/10 rounded-full border border-[#F26418]/20">
                Structure Organisationnelle
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#4C4A4A] mb-6 leading-tight">
              Notre Organigramme
            </h2>
            <div className="w-24 h-1 bg-[#F26418] mx-auto rounded-full"></div>
          </div>

          {/* Organizational Chart Image */}
          <div className="max-w-6xl mx-auto mb-20" data-aos="zoom-in" data-aos-delay="200">
            <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden">
              {/* Decorative top border */}
              <div className="h-2 bg-gradient-to-r from-[#F26418] via-[#F26418]/80 to-[#F26418]"></div>
              
              <div className="p-6 md:p-8 lg:p-12">
                <div className="relative w-full aspect-[16/10] md:aspect-[20/12] lg:aspect-[24/14] rounded-2xl overflow-hidden shadow-lg">
                  <Image
                    src="/images/organigramme.png"
                    alt="Organigramme MTC - Structure Organisationnelle"
                    fill
                    className="object-contain bg-white"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONSEIL D'ADMINISTRATION SECTION */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto" data-aos="fade-up" data-aos-delay="100">
            <div className="bg-gradient-to-br from-[#4C4A4A] to-[#7A7674] rounded-3xl shadow-2xl overflow-hidden">
              <div className="p-8 md:p-12 lg:p-16 text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-[#F26418] to-[#F26418]/70 rounded-2xl flex items-center justify-center mx-auto mb-8">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-4m-5 0H9m0 0H5m0 0h2M7 7h10M7 11h4m6 0h2M7 15h1m6 0h2" />
                  </svg>
                </div>
                
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-8">
                  Conseil d'Administration
                </h3>
                
                <p className="text-white/90 text-lg md:text-xl leading-relaxed">
                  Le Conseil d'Administration constitue l'organe stratégique de MTC. Il établit les orientations générales, définit les objectifs à long terme et veille à la bonne gouvernance de l'entreprise.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DIRECTION GÉNÉRALE SECTION */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Directeur Général */}
            <div className="order-1 lg:order-1" data-aos="fade-right" data-aos-delay="100">
              <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden">
                <div className="h-2 bg-gradient-to-r from-[#F26418] via-[#F26418]/80 to-[#F26418]"></div>
                <div className="p-8 md:p-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#F26418] to-[#F26418]/70 rounded-2xl flex items-center justify-center mb-6">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  
                  <h3 className="text-2xl md:text-3xl font-bold text-[#4C4A4A] mb-6">
                    Directeur Général
                  </h3>
                  
                  <p className="text-[#7A7674] text-base md:text-lg leading-relaxed">
                    Le Directeur Général (DG) est responsable de la gestion globale de l'entreprise. Il supervise l'ensemble des opérations, garantit la bonne exécution des stratégies décidées par le Conseil d'Administration, et représente MTC auprès des partenaires et des parties prenantes.
                  </p>
                </div>
              </div>
            </div>

            {/* Assistant du Directeur Général */}
            <div className="order-2 lg:order-2" data-aos="fade-left" data-aos-delay="200">
              <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden">
                <div className="h-2 bg-gradient-to-r from-[#F26418]/70 via-[#F26418]/50 to-[#F26418]/70"></div>
                <div className="p-8 md:p-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#F26418]/80 to-[#F26418]/60 rounded-2xl flex items-center justify-center mb-6">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </div>
                  
                  <h3 className="text-2xl md:text-3xl font-bold text-[#4C4A4A] mb-6">
                    Assistant du Directeur Général
                  </h3>
                  
                  <p className="text-[#7A7674] text-base md:text-lg leading-relaxed">
                    L'assistant du DG assure le soutien administratif et logistique, coordonne l'agenda, prépare les réunions, et participe à la gestion des relations internes et externes de la direction.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SUPPORTS FONCTIONNELS SECTION */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16" data-aos="fade-up">
            <div className="inline-block mb-6">
              <span className="text-[#F26418] font-bold text-sm uppercase tracking-wider px-6 py-3 bg-[#F26418]/10 rounded-full border border-[#F26418]/20">
                Supports Fonctionnels
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#4C4A4A] mb-6 leading-tight">
              Fonctions Support
            </h2>
            <div className="w-24 h-1 bg-[#F26418] mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Contrôleur de Gestion */}
            <div className="group" data-aos="fade-up" data-aos-delay="100">
              <div className="h-full bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 border-t-4 border-[#F26418]">
                <div className="w-16 h-16 bg-gradient-to-br from-[#F26418] to-[#F26418]/70 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                
                <h3 className="text-xl md:text-2xl font-bold text-[#4C4A4A] mb-4">
                  Contrôleur de Gestion
                </h3>
                
                <p className="text-[#7A7674] text-base leading-relaxed">
                  Le Contrôleur de Gestion analyse les performances de l'entreprise et assure le suivi budgétaire. Il fournit des rapports réguliers à la direction pour garantir l'optimisation des ressources et la maîtrise des coûts.
                </p>
              </div>
            </div>

            {/* Cellule Achats */}
            <div className="group" data-aos="fade-up" data-aos-delay="200">
              <div className="h-full bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 border-t-4 border-[#F26418]">
                <div className="w-16 h-16 bg-gradient-to-br from-[#F26418] to-[#F26418]/70 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17M17 13v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6m8 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01" />
                  </svg>
                </div>
                
                <h3 className="text-xl md:text-2xl font-bold text-[#4C4A4A] mb-4">
                  Cellule Achats
                </h3>
                
                <p className="text-[#7A7674] text-base leading-relaxed">
                  La Cellule Achats est responsable de la gestion des approvisionnements et des relations avec les fournisseurs. Elle négocie les contrats et garantit l'acquisition des biens et services nécessaires aux projets de l'entreprise.
                </p>
              </div>
            </div>

            {/* Cellule Appros */}
            <div className="group md:col-span-2 lg:col-span-1" data-aos="fade-up" data-aos-delay="300">
              <div className="h-full bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 border-t-4 border-[#F26418]">
                <div className="w-16 h-16 bg-gradient-to-br from-[#F26418] to-[#F26418]/70 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                  </svg>
                </div>
                
                <h3 className="text-xl md:text-2xl font-bold text-[#4C4A4A] mb-4">
                  Cellule Appros
                </h3>
                
                <p className="text-[#7A7674] text-base leading-relaxed">
                  La Cellule Appros gère l'ensemble des flux d'approvisionnement, assure la réception, le stockage et la distribution des matériaux nécessaires aux chantiers. Elle veille à la bonne gestion des stocks et à l'optimisation des délais de livraison.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DIRECTIONS OPÉRATIONNELLES SECTION */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-[#4C4A4A] to-[#7A7674] relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-10 w-64 h-64 bg-[#F26418]/10 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-1/4 right-10 w-80 h-80 bg-[#F26418]/10 rounded-full blur-3xl animate-float" style={{animationDelay: '3s'}}></div>
          <div className="absolute top-1/3 right-1/4 w-32 h-32 bg-[#F26418]/10 rounded-full blur-2xl animate-float" style={{animationDelay: '1.5s'}}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-20" data-aos="fade-up">
            <div className="inline-block mb-6">
              <span className="text-[#F26418] font-bold text-sm uppercase tracking-wider px-6 py-3 bg-[#F26418]/20 rounded-full border border-[#F26418]/30">
                Directions Opérationnelles
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Nos Directions
              <span className="block text-[#F26418]">Métiers</span>
            </h2>
            <div className="w-24 h-1 bg-[#F26418] mx-auto rounded-full mb-8"></div>
          </div>

          {/* Directions Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Direction des Travaux */}
            <div className="group lg:col-span-2" data-aos="fade-up" data-aos-delay="100">
              <div className="h-full bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 p-8 lg:p-10 border border-white/20 hover:scale-105 hover:bg-white">
                <div className="w-20 h-20 bg-gradient-to-br from-[#F26418] to-[#F26418]/70 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>

                <h3 className="text-2xl md:text-3xl font-bold text-[#4C4A4A] mb-6 leading-tight">
                  Direction des Travaux (DTX)
                </h3>
                
                <p className="text-[#7A7674] text-base md:text-lg leading-relaxed">
                  La Direction des Travaux est chargée de la planification, de l'organisation et de l'exécution des projets. Elle coordonne les équipes sur le terrain, contrôle la qualité des réalisations, et veille au respect des délais et des normes de sécurité.
                </p>
              </div>
            </div>

            {/* Direction du Matériel */}
            <div className="group lg:col-span-2" data-aos="fade-up" data-aos-delay="200">
              <div className="h-full bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 p-8 lg:p-10 border border-white/20 hover:scale-105 hover:bg-white">
                <div className="w-20 h-20 bg-gradient-to-br from-[#F26418] to-[#F26418]/70 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>

                <h3 className="text-2xl md:text-3xl font-bold text-[#4C4A4A] mb-6 leading-tight">
                  Direction du Matériel (DMA)
                </h3>
                
                <p className="text-[#7A7674] text-base md:text-lg leading-relaxed">
                  La Direction du Matériel supervise l'acquisition, l'entretien et la gestion des équipements et engins de chantier. Elle garantit leur bon fonctionnement, leur disponibilité et la maintenance préventive pour réduire les risques de pannes.
                </p>
              </div>
            </div>

            {/* Direction Études et Développement */}
            <div className="group lg:col-span-2" data-aos="fade-up" data-aos-delay="300">
              <div className="h-full bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 p-8 lg:p-10 border border-white/20 hover:scale-105 hover:bg-white">
                <div className="w-20 h-20 bg-gradient-to-br from-[#F26418] to-[#F26418]/70 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>

                <h3 className="text-2xl md:text-3xl font-bold text-[#4C4A4A] mb-6 leading-tight">
                  Direction Études et Développement (DED)
                </h3>
                
                <p className="text-[#7A7674] text-base md:text-lg leading-relaxed">
                  La Direction des Études et Développement est chargée des études techniques et du développement de projets. Elle conçoit les plans, effectue les analyses de faisabilité, et propose des solutions innovantes pour améliorer l'efficacité des projets.
                </p>
              </div>
            </div>

            {/* Direction Administrative et Financière */}
            <div className="group lg:col-span-2" data-aos="fade-up" data-aos-delay="400">
              <div className="h-full bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 p-8 lg:p-10 border border-white/20 hover:scale-105 hover:bg-white">
                <div className="w-20 h-20 bg-gradient-to-br from-[#F26418] to-[#F26418]/70 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>

                <h3 className="text-2xl md:text-3xl font-bold text-[#4C4A4A] mb-6 leading-tight">
                  Direction Administrative et Financière (DAF)
                </h3>
                
                <p className="text-[#7A7674] text-base md:text-lg leading-relaxed">
                  La Direction Administrative et Financière assure la gestion financière, comptable, et administrative de l'entreprise. Elle veille à la bonne exécution des opérations financières, au respect des obligations fiscales et à la gestion des ressources humaines.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CLOSING SECTION */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#F26418]/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
        
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#F26418] to-transparent mx-auto rounded-full mb-12" data-aos="fade-in"></div>
            
            <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 p-8 md:p-12 lg:p-16" data-aos="fade-up" data-aos-delay="100">
              <div className="w-16 h-16 bg-gradient-to-br from-[#F26418] to-[#F26418]/70 rounded-2xl flex items-center justify-center mx-auto mb-8">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              
              <h3 className="text-3xl md:text-4xl font-bold text-[#4C4A4A] mb-8 leading-tight">
                Une Organisation Structurée pour l'Excellence
              </h3>
              
              <p className="text-[#7A7674] text-lg md:text-xl leading-relaxed mb-8">
                Notre organigramme reflète notre engagement à maintenir une structure organisationnelle claire et efficace, 
                permettant à chaque direction et cellule de contribuer pleinement à la réussite de nos projets et à la satisfaction de nos clients.
              </p>
              
              <div className="inline-block px-8 py-4 bg-gradient-to-r from-[#F26418] to-[#F26418]/80 rounded-2xl">
                <p className="text-white font-bold text-lg">
                  MTC - Une Équipe, Une Vision
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
