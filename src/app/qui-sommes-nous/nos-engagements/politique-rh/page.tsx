import Hero from "@/components/hero";

export default function PolitiqueRHPage() {
  const titleHero = "Politique RH";
  return (
    <main className="min-h-screen w-full bg-white overflow-hidden">
      {/* HERO SECTION */}
      <Hero titleHero={titleHero} />

      {/* INTRODUCTION SECTION */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#F26418]/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#F26418]/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-block mb-6">
              <span className="text-[#F26418] font-bold text-sm uppercase tracking-wider px-6 py-3 bg-[#F26418]/10 rounded-full border border-[#F26418]/20">
                Notre politique de ressources humaines
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#4C4A4A] mb-6 leading-tight">
              Le Capital Humain
              <span className="block text-[#F26418]">au Cœur de Notre Succès</span>
            </h2>
            <div className="w-24 h-1 bg-[#F26418] mx-auto rounded-full"></div>
          </div>

          {/* Introduction Content */}
          <div className="max-w-5xl mx-auto">
            <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden">
              {/* Decorative top border */}
              <div className="h-2 bg-gradient-to-r from-[#F26418] via-[#F26418]/80 to-[#F26418]"></div>
              
              <div className="p-8 md:p-12 lg:p-16">
                <div className="flex items-start space-x-4 mb-8">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#F26418] to-[#F26418]/70 rounded-xl flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                  </div>
                  <div className="flex-1">
                    <p className="text-[#4C4A4A] text-lg md:text-xl leading-relaxed mb-6">
                      MTC reconnaît que le <span className="font-bold text-[#F26418]">capital humain est essentiel à son succès</span>. Notre politique des ressources humaines vise à attirer, développer et retenir les talents tout en cultivant un environnement de travail positif et inclusif.
                    </p>
                  </div>
                </div>

                <div className="space-y-6 bg-gray-50 rounded-2xl p-6 md:p-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-[#F26418]/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="w-3 h-3 bg-[#F26418] rounded-full"></div>
                    </div>
                    <p className="text-[#7A7674] leading-relaxed">
                      Cette politique reflète notre <strong className="text-[#4C4A4A]">engagement à créer un cadre dynamique et épanouissant</strong> pour nos employés.
                    </p>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-[#F26418]/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="w-3 h-3 bg-[#F26418] rounded-full"></div>
                    </div>
                    <p className="text-[#7A7674] leading-relaxed">
                      En les plaçant au cœur de notre stratégie, nous aspirons à nous <strong className="text-[#4C4A4A]">démarquer dans le secteur des travaux publics en Mauritanie</strong>.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7 KEY POINTS SECTION */}
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
                Notre Engagement RH
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Politique RH Stratégique
              <span className="block text-[#F26418]">7 Points Clés</span>
            </h2>
            <div className="w-24 h-1 bg-[#F26418] mx-auto rounded-full mb-8"></div>
            <p className="text-white/90 text-lg md:text-xl max-w-4xl mx-auto leading-relaxed">
              Notre politique RH se décline en 7 points clés qui structurent notre approche du capital humain 
              et garantissent un environnement de travail optimal pour nos collaborateurs.
            </p>
          </div>

          {/* Key Points Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {/* Point 1: Recrutement et intégration */}
            <div className="group">
              <div className="h-full bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 p-8 lg:p-10 border border-white/20 hover:scale-105 hover:bg-white">
                {/* Number Badge */}
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-[#F26418] to-[#F26418]/70 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                    </svg>
                  </div>
                  <div className="absolute -top-2 -right-2 w-10 h-10 bg-[#F26418] text-white rounded-full flex items-center justify-center font-bold text-lg shadow-lg">
                    1
                  </div>
                </div>

                <h3 className="text-2xl md:text-3xl font-bold text-[#4C4A4A] mb-6 leading-tight">
                  Recrutement et intégration
                </h3>
                
                <p className="text-[#7A7674] text-base md:text-lg leading-relaxed">
                  Nous nous engageons à attirer des professionnels compétents et diversifiés grâce à un recrutement équitable et transparent. Chaque nouvel employé bénéficie d'un programme d'intégration complet pour faciliter son adaptation aux valeurs et à la culture de l'entreprise.
                </p>
              </div>
            </div>

            {/* Point 2: Formation et développement */}
            <div className="group">
              <div className="h-full bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 p-8 lg:p-10 border border-white/20 hover:scale-105 hover:bg-white">
                {/* Number Badge */}
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-[#F26418] to-[#F26418]/70 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <div className="absolute -top-2 -right-2 w-10 h-10 bg-[#F26418] text-white rounded-full flex items-center justify-center font-bold text-lg shadow-lg">
                    2
                  </div>
                </div>

                <h3 className="text-2xl md:text-3xl font-bold text-[#4C4A4A] mb-6 leading-tight">
                  Formation et développement
                </h3>
                
                <p className="text-[#7A7674] text-base md:text-lg leading-relaxed">
                  MTC investit dans la formation continue de ses employés en proposant des programmes adaptés à leurs besoins et aux objectifs de l'entreprise pour renforcer leurs compétences techniques et managériales.
                </p>
              </div>
            </div>

            {/* Point 3: Evaluation de la performance */}
            <div className="group">
              <div className="h-full bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 p-8 lg:p-10 border border-white/20 hover:scale-105 hover:bg-white">
                {/* Number Badge */}
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-[#F26418] to-[#F26418]/70 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <div className="absolute -top-2 -right-2 w-10 h-10 bg-[#F26418] text-white rounded-full flex items-center justify-center font-bold text-lg shadow-lg">
                    3
                  </div>
                </div>

                <h3 className="text-2xl md:text-3xl font-bold text-[#4C4A4A] mb-6 leading-tight">
                  Evaluation de la performance
                </h3>
                
                <p className="text-[#7A7674] text-base md:text-lg leading-relaxed">
                  Nous instaurons un système d'évaluation de la performance transparent, offrant à chaque employé un feedback constructif et reconnaissant leurs contributions tout en identifiant des opportunités de développement.
                </p>
              </div>
            </div>

            {/* Point 4: Bien-être et équilibre */}
            <div className="group">
              <div className="h-full bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 p-8 lg:p-10 border border-white/20 hover:scale-105 hover:bg-white">
                {/* Number Badge */}
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-[#F26418] to-[#F26418]/70 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                  <div className="absolute -top-2 -right-2 w-10 h-10 bg-[#F26418] text-white rounded-full flex items-center justify-center font-bold text-lg shadow-lg">
                    4
                  </div>
                </div>

                <h3 className="text-2xl md:text-3xl font-bold text-[#4C4A4A] mb-6 leading-tight">
                  Bien-être et équilibre vie professionnelle/vie privée
                </h3>
                
                <p className="text-[#7A7674] text-base md:text-lg leading-relaxed">
                  Nous valorisons le bien-être de nos employés en promouvant un équilibre sain entre vie professionnelle et personnelle, avec des initiatives pour la santé physique, mentale et la satisfaction au travail.
                </p>
              </div>
            </div>

            {/* Point 5: Diversité et inclusion */}
            <div className="group">
              <div className="h-full bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 p-8 lg:p-10 border border-white/20 hover:scale-105 hover:bg-white">
                {/* Number Badge */}
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-[#F26418] to-[#F26418]/70 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="absolute -top-2 -right-2 w-10 h-10 bg-[#F26418] text-white rounded-full flex items-center justify-center font-bold text-lg shadow-lg">
                    5
                  </div>
                </div>

                <h3 className="text-2xl md:text-3xl font-bold text-[#4C4A4A] mb-6 leading-tight">
                  Diversité et inclusion
                </h3>
                
                <p className="text-[#7A7674] text-base md:text-lg leading-relaxed">
                  MTC s'engage à offrir un environnement de travail inclusif qui valorise la diversité de ses employés. Nous croyons qu'une équipe variée stimule l'innovation et la créativité, et nous promouvons l'égalité des chances à tous les niveaux.
                </p>
              </div>
            </div>

            {/* Point 6: Communication et participation */}
            <div className="group">
              <div className="h-full bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 p-8 lg:p-10 border border-white/20 hover:scale-105 hover:bg-white">
                {/* Number Badge */}
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-[#F26418] to-[#F26418]/70 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                  </div>
                  <div className="absolute -top-2 -right-2 w-10 h-10 bg-[#F26418] text-white rounded-full flex items-center justify-center font-bold text-lg shadow-lg">
                    6
                  </div>
                </div>

                <h3 className="text-2xl md:text-3xl font-bold text-[#4C4A4A] mb-6 leading-tight">
                  Communication et participation
                </h3>
                
                <p className="text-[#7A7674] text-base md:text-lg leading-relaxed">
                  Nous encourageons une communication ouverte et transparente, permettant aux employés d'exprimer leurs idées et suggestions, ce qui renforce la confiance et la collaboration.
                </p>
              </div>
            </div>

            {/* Point 7: Responsabilité sociale */}
            <div className="group lg:col-span-3">
              <div className="h-full bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 p-8 lg:p-12 border border-white/20 hover:scale-105 hover:bg-white">
                {/* Number Badge */}
                <div className="relative mb-6 inline-block">
                  <div className="w-20 h-20 bg-gradient-to-br from-[#F26418] to-[#F26418]/70 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="absolute -top-2 -right-2 w-10 h-10 bg-[#F26418] text-white rounded-full flex items-center justify-center font-bold text-lg shadow-lg">
                    7
                  </div>
                </div>

                <h3 className="text-2xl md:text-3xl font-bold text-[#4C4A4A] mb-6 leading-tight">
                  Responsabilité sociale et développement durable
                </h3>
                
                <p className="text-[#7A7674] text-base md:text-lg leading-relaxed max-w-4xl">
                  MTC s'engage à agir de manière éthique et responsable. Nous adoptons des pratiques durables en gestion des ressources humaines et soutenons des initiatives bénéfiques pour la communauté.
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
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                </svg>
              </div>
              
              <h3 className="text-3xl md:text-4xl font-bold text-[#4C4A4A] mb-8 leading-tight">
                Nos Employés, Notre Force
              </h3>
              
              <p className="text-[#7A7674] text-lg md:text-xl leading-relaxed mb-8">
                Notre politique de ressources humaines traduit notre conviction que le succès de MTC repose sur le talent, 
                l'engagement et le bien-être de nos collaborateurs. Ensemble, nous bâtissons un avenir prospère et durable.
              </p>
              
              <div className="inline-block px-8 py-4 bg-gradient-to-r from-[#F26418] to-[#F26418]/80 rounded-2xl">
                <p className="text-white font-bold text-lg">
                  MTC - Investir dans l'Humain
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

