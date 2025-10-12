import Hero from "@/components/hero";
export default function VisionMissionPage() {
  const titleHero = "Vision & Mission";
  return (
    <main className="min-h-screen w-full bg-white overflow-hidden">
      {/* HERO SECTION */}
      <Hero titleHero={titleHero} />

      {/* VISION SECTION */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#F26418]/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#F26418]/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-block mb-6">
              <span className="text-[#F26418] font-bold text-sm uppercase tracking-wider px-6 py-3 bg-[#F26418]/10 rounded-full border border-[#F26418]/20">
                Notre Vision
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#4C4A4A] mb-6 leading-tight">
              Leader du Secteur
              <span className="block text-[#F26418]">des Travaux Publics</span>
            </h2>
            <div className="w-24 h-1 bg-[#F26418] mx-auto rounded-full"></div>
          </div>

          {/* Vision Content */}
          <div className="max-w-5xl mx-auto">
            <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden">
              {/* Decorative top border */}
              <div className="h-2 bg-gradient-to-r from-[#F26418] via-[#F26418]/80 to-[#F26418]"></div>
              
              <div className="p-8 md:p-12 lg:p-16">
                <div className="flex items-start space-x-4 mb-8">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#F26418] to-[#F26418]/70 rounded-xl flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    </div>
                  </div>
                  <div className="flex-1">
                    <p className="text-[#4C4A4A] text-lg md:text-xl leading-relaxed">
                      Nous aspirons à être le <span className="font-bold text-[#F26418]">leader incontesté du secteur des travaux publics en Mauritanie</span>, en nous positionnant comme une entreprise innovante, responsable, et engagée dans le développement économique national.
                    </p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-[#F26418]/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                        <div className="w-3 h-3 bg-[#F26418] rounded-full"></div>
                      </div>
                      <p className="text-[#7A7674] leading-relaxed">
                        Nous souhaitons devenir une <strong className="text-[#4C4A4A]">référence régionale</strong> dans la construction de routes, les aménagements hydrauliques, et les infrastructures civiles.
                      </p>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-[#F26418]/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                        <div className="w-3 h-3 bg-[#F26418] rounded-full"></div>
                      </div>
                      <p className="text-[#7A7674] leading-relaxed">
                        Mettre en avant notre <strong className="text-[#4C4A4A]">expertise technique</strong> et notre capacité à exécuter des projets de grande envergure.
                      </p>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-[#F26418]/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                        <div className="w-3 h-3 bg-[#F26418] rounded-full"></div>
                      </div>
                      <p className="text-[#7A7674] leading-relaxed">
                        Notre ambition est de créer un <strong className="text-[#4C4A4A]">impact positif et durable</strong>, en contribuant à l'amélioration des infrastructures locales.
                      </p>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-[#F26418]/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                        <div className="w-3 h-3 bg-[#F26418] rounded-full"></div>
                      </div>
                      <p className="text-[#7A7674] leading-relaxed">
                        Promouvoir un <strong className="text-[#4C4A4A]">savoir-faire national reconnu</strong> sur la scène régionale et internationale.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MISSION SECTION */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-[#4C4A4A] to-[#7A7674] relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-10 w-64 h-64 bg-[#F26418]/10 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-1/4 right-10 w-80 h-80 bg-[#F26418]/10 rounded-full blur-3xl animate-float" style={{animationDelay: '3s'}}></div>
          <div className="absolute top-1/3 right-1/4 w-32 h-32 bg-[#F26418]/10 rounded-full blur-2xl animate-float" style={{animationDelay: '1.5s'}}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-20">
            <div className="inline-block mb-6">
              <span className="text-[#F26418] font-bold text-sm uppercase tracking-wider px-6 py-3 bg-[#F26418]/20 rounded-full border border-[#F26418]/30">
                Notre Mission
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Excellence & Qualité
              <span className="block text-[#F26418]">Cinq Piliers Essentiels</span>
            </h2>
            <div className="w-24 h-1 bg-[#F26418] mx-auto rounded-full mb-8"></div>
            <p className="text-white/90 text-lg md:text-xl max-w-4xl mx-auto leading-relaxed">
              Notre mission est de fournir des services de haute qualité dans les domaines de la construction de routes, 
              du génie civil, des aménagements hydrauliques, et de l'assainissement. Notre mission repose sur cinq piliers essentiels.
            </p>
          </div>

          {/* Mission Pillars Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {/* Pillar 1: Excellence et Qualité */}
            <div className="group lg:col-span-1">
              <div className="h-full bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 p-8 lg:p-10 border border-white/20 hover:scale-105 hover:bg-white">
                {/* Icon */}
                <div className="w-20 h-20 bg-gradient-to-br from-[#F26418] to-[#F26418]/70 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300 shadow-lg group-hover:animate-glow">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>

                <h3 className="text-2xl md:text-3xl font-bold text-[#4C4A4A] mb-6 leading-tight">
                  Excellence et Qualité
                </h3>
                
                <p className="text-[#7A7674] text-base md:text-lg leading-relaxed">
                  Concevoir et réaliser des infrastructures respectant les plus hauts standards de qualité et de durabilité, 
                  tout en honorant les délais et les attentes de nos clients.
                </p>
              </div>
            </div>

            {/* Pillar 2: Contribution Économique */}
            <div className="group lg:col-span-1">
              <div className="h-full bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 p-8 lg:p-10 border border-white/20 hover:scale-105 hover:bg-white">
                {/* Icon */}
                <div className="w-20 h-20 bg-gradient-to-br from-[#F26418] to-[#F26418]/70 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300 shadow-lg group-hover:animate-glow">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>

                <h3 className="text-2xl md:text-3xl font-bold text-[#4C4A4A] mb-6 leading-tight">
                  Contribution Économique
                </h3>
                
                <p className="text-[#7A7674] text-base md:text-lg leading-relaxed">
                  Créer de la valeur ajoutée en menant des projets structurants qui soutiennent le développement économique 
                  du pays et favorisent une croissance durable.
                </p>
              </div>
            </div>

            {/* Pillar 3: Innovation et Sécurité */}
            <div className="group md:col-span-2 lg:col-span-1">
              <div className="h-full bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 p-8 lg:p-10 border border-white/20 hover:scale-105 hover:bg-white">
                {/* Icon */}
                <div className="w-20 h-20 bg-gradient-to-br from-[#F26418] to-[#F26418]/70 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300 shadow-lg group-hover:animate-glow">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>

                <h3 className="text-2xl md:text-3xl font-bold text-[#4C4A4A] mb-6 leading-tight">
                  Innovation et Sécurité
                </h3>
                
                <p className="text-[#7A7674] text-base md:text-lg leading-relaxed">
                  Innover en permanence en adoptant les dernières technologies et en appliquant les meilleures pratiques 
                  en matière de sécurité, de santé et de protection de l'environnement (SSE).
                </p>
              </div>
            </div>

            {/* Pillar 4: Développement des Talents */}
            <div className="group lg:col-span-1">
              <div className="h-full bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 p-8 lg:p-10 border border-white/20 hover:scale-105 hover:bg-white">
                {/* Icon */}
                <div className="w-20 h-20 bg-gradient-to-br from-[#F26418] to-[#F26418]/70 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300 shadow-lg group-hover:animate-glow">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                  </svg>
                </div>

                <h3 className="text-2xl md:text-3xl font-bold text-[#4C4A4A] mb-6 leading-tight">
                  Développement des Talents
                </h3>
                
                <p className="text-[#7A7674] text-base md:text-lg leading-relaxed">
                  Former et motiver nos équipes pour qu'elles acquièrent les compétences nécessaires, devenant ainsi 
                  des experts dans leurs domaines et garantissant la pérennité de notre expertise.
                </p>
              </div>
            </div>

            {/* Pillar 5: Partenariats de Confiance */}
            <div className="group lg:col-span-2">
              <div className="h-full bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 p-8 lg:p-12 border border-white/20 hover:scale-105 hover:bg-white">
                {/* Icon */}
                <div className="w-20 h-20 bg-gradient-to-br from-[#F26418] to-[#F26418]/70 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300 shadow-lg group-hover:animate-glow">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>

                <h3 className="text-2xl md:text-3xl font-bold text-[#4C4A4A] mb-6 leading-tight">
                  Partenariats de Confiance
                </h3>
                
                <p className="text-[#7A7674] text-base md:text-lg leading-relaxed">
                  Établir des relations solides avec nos clients, fournisseurs et partenaires, basées sur la transparence, 
                  la qualité et le respect des engagements. Nous croyons en la force des collaborations durables pour 
                  construire un avenir prospère ensemble.
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
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#F26418] to-transparent mx-auto rounded-full mb-12"></div>
            
            <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 p-8 md:p-12 lg:p-16">
              <div className="w-16 h-16 bg-gradient-to-br from-[#F26418] to-[#F26418]/70 rounded-2xl flex items-center justify-center mx-auto mb-8">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              
              <h3 className="text-3xl md:text-4xl font-bold text-[#4C4A4A] mb-8 leading-tight">
                Ensemble, Construisons l'Avenir
              </h3>
              
              <p className="text-[#7A7674] text-lg md:text-xl leading-relaxed mb-8">
                Notre vision et notre mission guident chacune de nos actions. Elles reflètent notre engagement indéfectible 
                envers l'excellence, l'innovation et le développement durable de la Mauritanie.
              </p>
              
              <div className="inline-block px-8 py-4 bg-gradient-to-r from-[#F26418] to-[#F26418]/80 rounded-2xl">
                <p className="text-white font-bold text-lg">
                  MTC - Votre Partenaire de Confiance
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
