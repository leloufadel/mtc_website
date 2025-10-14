import Hero from "@/components/hero";
import { 
  Droplets, 
  Waves, 
  Leaf, 
  Shield,
  TrendingUp,
  ArrowRight
} from "lucide-react";

export default function PerimetresIrriguesPage() {
  const titleHero = "Périmètres irrigués et axes hydrauliques";
  
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
                Notre Expertise Hydraulique
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#4C4A4A] mb-6 leading-tight">
              Aménagements Hydrauliques
              <span className="block text-[#F26418]">Allier Technique et Préservation de l'Environnement</span>
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
                      <Droplets className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <p className="text-[#4C4A4A] text-lg md:text-xl leading-relaxed mb-6">
                      Chez MTC, nous mettons notre expertise au service de projets d'<span className="font-bold text-[#F26418]">aménagements hydrauliques certifiés Per/Axe3</span> pour les périmètres irrigués et axes hydrauliques. Nos interventions incluent la construction et la réhabilitation de barrages, ainsi que l'aménagement de périmètres irrigués et de cours d'eau, contribuant à la gestion durable des ressources en eau et à la préservation des écosystèmes, tout en répondant aux besoins croissants en infrastructures hydrauliques.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* APPROCHE RESPONSABLE SECTION */}
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
                Notre Approche
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Une Approche Responsable
              <span className="block text-[#F26418]">et Durable</span>
            </h2>
            <div className="w-24 h-1 bg-[#F26418] mx-auto rounded-full"></div>
          </div>

          {/* Content Cards */}
          <div className="grid md:grid-cols-3 gap-8 lg:gap-10 mb-16">
            {/* Card 1: RSE */}
            <div className="group">
              <div className="h-full bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 p-8 lg:p-10 border border-white/20 hover:scale-105 hover:bg-white">
                <div className="w-20 h-20 bg-gradient-to-br from-[#F26418] to-[#F26418]/70 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300 shadow-lg group-hover:animate-glow">
                  <Shield className="w-10 h-10 text-white" />
                </div>

                <h3 className="text-2xl md:text-3xl font-bold text-[#4C4A4A] mb-6 leading-tight">
                  Responsabilité Sociétale
                </h3>
                
                <p className="text-[#7A7674] text-base md:text-lg leading-relaxed">
                  Nos aménagements hydrauliques respectent les principes de responsabilité sociétale et environnementale.
                </p>
              </div>
            </div>

            {/* Card 2: Performance Technique */}
            <div className="group">
              <div className="h-full bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 p-8 lg:p-10 border border-white/20 hover:scale-105 hover:bg-white">
                <div className="w-20 h-20 bg-gradient-to-br from-[#F26418] to-[#F26418]/70 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300 shadow-lg group-hover:animate-glow">
                  <TrendingUp className="w-10 h-10 text-white" />
                </div>

                <h3 className="text-2xl md:text-3xl font-bold text-[#4C4A4A] mb-6 leading-tight">
                  Performance Technique
                </h3>
                
                <p className="text-[#7A7674] text-base md:text-lg leading-relaxed">
                  Nous nous efforçons de concilier performance technique et préservation des écosystèmes naturels.
                </p>
              </div>
            </div>

            {/* Card 3: Protection */}
            <div className="group">
              <div className="h-full bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 p-8 lg:p-10 border border-white/20 hover:scale-105 hover:bg-white">
                <div className="w-20 h-20 bg-gradient-to-br from-[#F26418] to-[#F26418]/70 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300 shadow-lg group-hover:animate-glow">
                  <Leaf className="w-10 h-10 text-white" />
                </div>

                <h3 className="text-2xl md:text-3xl font-bold text-[#4C4A4A] mb-6 leading-tight">
                  Protection des Écosystèmes
                </h3>
                
                <p className="text-[#7A7674] text-base md:text-lg leading-relaxed">
                  Grâce à des actions telles que l'enrochement pour la protection contre les inondations, nous veillons à la stabilité et à la durabilité des cours d'eau.
                </p>
              </div>
            </div>
          </div>

          {/* Mission Statement */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl p-8 md:p-12 lg:p-16 border border-white/20">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#F26418] to-[#F26418]/70 rounded-2xl flex items-center justify-center">
                    <Waves className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl md:text-3xl font-bold text-[#4C4A4A] mb-6">
                    Notre Mission
                  </h3>
                  <p className="text-[#7A7674] text-lg md:text-xl leading-relaxed">
                    Chez MTC, notre mission est de créer des solutions hydrauliques qui non seulement répondent aux défis techniques mais aussi préservent et valorisent les milieux naturels.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#F26418]/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-block mb-6">
              <span className="text-[#F26418] font-bold text-sm uppercase tracking-wider px-6 py-3 bg-[#F26418]/10 rounded-full border border-[#F26418]/20">
                Nos Réalisations
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#4C4A4A] mb-6 leading-tight">
              Projets d'Excellence
              <span className="block text-[#F26418]">en Hydraulique</span>
            </h2>
            <div className="w-24 h-1 bg-[#F26418] mx-auto rounded-full"></div>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {/* Project 1: Curage des axes hydrauliques */}
            <div className="group">
              <div className="h-full bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden hover:shadow-3xl transition-all duration-500 hover:scale-105">
                {/* Decorative top border */}
                <div className="h-2 bg-gradient-to-r from-[#F26418] via-[#F26418]/80 to-[#F26418]"></div>
                
                <div className="p-8 md:p-10 lg:p-12">
                  {/* Icon */}
                  <div className="w-20 h-20 bg-gradient-to-br from-[#F26418] to-[#F26418]/70 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <Waves className="w-10 h-10 text-white" />
                  </div>

                  <h3 className="text-2xl md:text-3xl font-bold text-[#4C4A4A] mb-6 leading-tight">
                    Curage des axes hydrauliques
                  </h3>
                  
                  <p className="text-[#7A7674] text-base md:text-lg leading-relaxed mb-8">
                    Nos travaux de curage et de calibrage ont permis la remise en état de marigots et d'axes hydrauliques stratégiques comme ceux de Laoueija et de Tambass…
                  </p>

                  {/* CTA Button */}
                  <button className="group/btn inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#F26418] to-[#F26418]/80 text-white font-semibold rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-300">
                    <span>Voir Plus</span>
                    <ArrowRight className="ml-2 w-5 h-5 group-hover/btn:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>
              </div>
            </div>

            {/* Project 2: Aménagement des périmètres irrigués */}
            <div className="group">
              <div className="h-full bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden hover:shadow-3xl transition-all duration-500 hover:scale-105">
                {/* Decorative top border */}
                <div className="h-2 bg-gradient-to-r from-[#F26418] via-[#F26418]/80 to-[#F26418]"></div>
                
                <div className="p-8 md:p-10 lg:p-12">
                  {/* Icon */}
                  <div className="w-20 h-20 bg-gradient-to-br from-[#F26418] to-[#F26418]/70 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <Droplets className="w-10 h-10 text-white" />
                  </div>

                  <h3 className="text-2xl md:text-3xl font-bold text-[#4C4A4A] mb-6 leading-tight">
                    Aménagement des périmètres irrigués
                  </h3>
                  
                  <p className="text-[#7A7674] text-base md:text-lg leading-relaxed mb-8">
                    L'aménagement des périmètres irrigués de Lexeiba Agricole est un exemple de notre engagement à soutenir l'agriculture locale…
                  </p>

                  {/* CTA Button */}
                  <button className="group/btn inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#F26418] to-[#F26418]/80 text-white font-semibold rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-300">
                    <span>Voir Plus</span>
                    <ArrowRight className="ml-2 w-5 h-5 group-hover/btn:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CLOSING SECTION */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#F26418]/5 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2"></div>
        
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#F26418] to-transparent mx-auto rounded-full mb-12"></div>
            
            <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 p-8 md:p-12 lg:p-16">
              <div className="w-16 h-16 bg-gradient-to-br from-[#F26418] to-[#F26418]/70 rounded-2xl flex items-center justify-center mx-auto mb-8">
                <Droplets className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-3xl md:text-4xl font-bold text-[#4C4A4A] mb-8 leading-tight">
                Solutions Hydrauliques Durables
              </h3>
              
              <p className="text-[#7A7674] text-lg md:text-xl leading-relaxed mb-8">
                Nous prenons en compte l'impact de chaque projet sur l'environnement et nous engageons à créer des infrastructures 
                qui contribuent à la stabilité et à la durabilité des cours d'eau, tout en valorisant les milieux naturels.
              </p>
              
              <div className="inline-block px-8 py-4 bg-gradient-to-r from-[#F26418] to-[#F26418]/80 rounded-2xl">
                <p className="text-white font-bold text-lg">
                  MTC - Expert en Aménagements Hydrauliques
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

