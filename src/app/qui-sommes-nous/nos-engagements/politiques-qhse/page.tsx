import Hero from "@/components/hero";
import { 
  Shield, 
  Award, 
  Lock, 
  Leaf, 
  TrendingUp, 
  MessageSquare,
  CheckCircle2,
  FileCheck
} from "lucide-react";

export default function PolitiquesQHSEPage() {
  const titleHero = "Politiques QHSE";
  
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
                Notre Politique QHSE
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#4C4A4A] mb-6 leading-tight">
              Qualité, Sécurité &
              <span className="block text-[#F26418]">Environnement</span>
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
                      <Shield className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <p className="text-[#4C4A4A] text-lg md:text-xl leading-relaxed">
                      La politique QHSE de MTC témoigne de notre engagement à offrir un <span className="font-bold text-[#F26418]">environnement de travail sûr, respectueux de l'environnement et axé sur la qualité</span>. Nous plaçons la sécurité et la qualité au cœur de nos priorités dans toutes nos actions.
                    </p>
                  </div>
                </div>

                <div className="p-6 md:p-8 bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-100">
                  <p className="text-[#7A7674] text-base md:text-lg leading-relaxed">
                    Nous nous engageons à respecter les plus hauts standards de qualité, de sécurité et de protection de l'environnement dans l'ensemble de nos activités. Notre politique QHSE est fondée sur des principes solides qui guident nos pratiques quotidiennes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MAIN PILLARS SECTION */}
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
                Nos Engagements
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Six Piliers Fondamentaux
              <span className="block text-[#F26418]">de Notre Politique QHSE</span>
            </h2>
            <div className="w-24 h-1 bg-[#F26418] mx-auto rounded-full"></div>
          </div>

          {/* Pillars Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {/* Pillar 1: Engagement envers la qualité */}
            <div className="group">
              <div className="h-full bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 p-8 lg:p-10 border border-white/20 hover:scale-105 hover:bg-white">
                {/* Icon */}
                <div className="w-20 h-20 bg-gradient-to-br from-[#F26418] to-[#F26418]/70 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300 shadow-lg group-hover:animate-glow">
                  <Award className="w-10 h-10 text-white" />
                </div>

                <h3 className="text-2xl md:text-3xl font-bold text-[#4C4A4A] mb-6 leading-tight">
                  Engagement envers la qualité
                </h3>
                
                <p className="text-[#7A7674] text-base md:text-lg leading-relaxed">
                  MTC s'efforce d'offrir des services et des produits qui répondent aux attentes de nos clients et aux exigences réglementaires. Nous mettons en place des processus rigoureux d'évaluation et de contrôle de la qualité afin de garantir l'excellence dans chaque projet.
                </p>
              </div>
            </div>

            {/* Pillar 2: Sécurité des employés */}
            <div className="group">
              <div className="h-full bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 p-8 lg:p-10 border border-white/20 hover:scale-105 hover:bg-white">
                {/* Icon */}
                <div className="w-20 h-20 bg-gradient-to-br from-[#F26418] to-[#F26418]/70 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300 shadow-lg group-hover:animate-glow">
                  <Shield className="w-10 h-10 text-white" />
                </div>

                <h3 className="text-2xl md:text-3xl font-bold text-[#4C4A4A] mb-6 leading-tight">
                  Sécurité des employés
                </h3>
                
                <p className="text-[#7A7674] text-base md:text-lg leading-relaxed">
                  La sécurité de nos employés est une priorité absolue. Nous adoptons une approche proactive pour identifier, évaluer et réduire les risques sur nos chantiers. La formation continue, la sensibilisation et le respect des normes de sécurité sont des éléments essentiels de notre culture d'entreprise.
                </p>
              </div>
            </div>

            {/* Pillar 3: Protection de l'environnement */}
            <div className="group">
              <div className="h-full bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 p-8 lg:p-10 border border-white/20 hover:scale-105 hover:bg-white">
                {/* Icon */}
                <div className="w-20 h-20 bg-gradient-to-br from-[#F26418] to-[#F26418]/70 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300 shadow-lg group-hover:animate-glow">
                  <Leaf className="w-10 h-10 text-white" />
                </div>

                <h3 className="text-2xl md:text-3xl font-bold text-[#4C4A4A] mb-6 leading-tight">
                  Protection de l'environnement
                </h3>
                
                <p className="text-[#7A7674] text-base md:text-lg leading-relaxed">
                  Nous nous engageons à minimiser l'impact environnemental de nos opérations. Cela inclut la gestion responsable des ressources naturelles, la réduction des déchets et la promotion de pratiques durables. MTC s'engage également à respecter la législation environnementale en vigueur.
                </p>
              </div>
            </div>

            {/* Pillar 4: Amélioration continue */}
            <div className="group">
              <div className="h-full bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 p-8 lg:p-10 border border-white/20 hover:scale-105 hover:bg-white">
                {/* Icon */}
                <div className="w-20 h-20 bg-gradient-to-br from-[#F26418] to-[#F26418]/70 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300 shadow-lg group-hover:animate-glow">
                  <TrendingUp className="w-10 h-10 text-white" />
                </div>

                <h3 className="text-2xl md:text-3xl font-bold text-[#4C4A4A] mb-6 leading-tight">
                  Amélioration continue
                </h3>
                
                <p className="text-[#7A7674] text-base md:text-lg leading-relaxed">
                  Nous croyons en l'amélioration continue de nos processus QHSE. Nous mettons en place des indicateurs de performance pour suivre nos progrès et identifier les domaines à améliorer. Les retours d'expérience de nos employés et de nos partenaires sont pris en compte pour renforcer notre démarche.
                </p>
              </div>
            </div>

            {/* Pillar 5: Communication et sensibilisation */}
            <div className="group">
              <div className="h-full bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 p-8 lg:p-10 border border-white/20 hover:scale-105 hover:bg-white">
                {/* Icon */}
                <div className="w-20 h-20 bg-gradient-to-br from-[#F26418] to-[#F26418]/70 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300 shadow-lg group-hover:animate-glow">
                  <MessageSquare className="w-10 h-10 text-white" />
                </div>

                <h3 className="text-2xl md:text-3xl font-bold text-[#4C4A4A] mb-6 leading-tight">
                  Communication et sensibilisation
                </h3>
                
                <p className="text-[#7A7674] text-base md:text-lg leading-relaxed">
                  MTC favorise une communication ouverte et transparente sur les questions de QHSE. Nous encourageons la participation active de tous nos employés et parties prenantes afin de promouvoir une culture de la sécurité et de la qualité au sein de notre organisation.
                </p>
              </div>
            </div>

            {/* Pillar 6: Conformité aux normes et règlementations */}
            <div className="group">
              <div className="h-full bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 p-8 lg:p-10 border border-white/20 hover:scale-105 hover:bg-white">
                {/* Icon */}
                <div className="w-20 h-20 bg-gradient-to-br from-[#F26418] to-[#F26418]/70 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300 shadow-lg group-hover:animate-glow">
                  <FileCheck className="w-10 h-10 text-white" />
                </div>

                <h3 className="text-2xl md:text-3xl font-bold text-[#4C4A4A] mb-6 leading-tight">
                  Conformité aux normes et règlementations
                </h3>
                
                <p className="text-[#7A7674] text-base md:text-lg leading-relaxed">
                  Nous nous engageons à respecter toutes les normes et réglementations QHSE applicables dans notre secteur d'activité. Des audits réguliers sont réalisés pour garantir notre conformité et identifier les opportunités d'amélioration.
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
                <CheckCircle2 className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-3xl md:text-4xl font-bold text-[#4C4A4A] mb-8 leading-tight">
                Notre Engagement Inébranlable
              </h3>
              
              <p className="text-[#7A7674] text-lg md:text-xl leading-relaxed mb-8">
                Notre politique QHSE reflète notre engagement indéfectible envers l'excellence, la sécurité de nos collaborateurs, 
                la protection de l'environnement et la satisfaction de nos clients. Ces principes guident chacune de nos actions 
                et constituent le fondement de notre réussite.
              </p>
              
              <div className="inline-block px-8 py-4 bg-gradient-to-r from-[#F26418] to-[#F26418]/80 rounded-2xl">
                <p className="text-white font-bold text-lg">
                  MTC - Qualité, Sécurité, Environnement
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

