import Hero from "@/components/hero";

type Qualification = {
  secteur: string;
  qualification: string;
  niveauMax: string;
};

const QUALIFICATIONS: Qualification[] = [
  { 
    secteur: "Routes", 
    qualification: "ROUTE3", 
    niveauMax: "ROUTE3" 
  },
  { 
    secteur: "Périmètres Irrigués et Axes Hydrauliques", 
    qualification: "Per/Axe3", 
    niveauMax: "Per/Axe3" 
  },
  { 
    secteur: "Barrages et Bassins (Projets agricoles)", 
    qualification: "Bar/Bas2", 
    niveauMax: "Bar/Bas3" 
  },
  { 
    secteur: "Barrages (Projets d'alimentation en eau potable)", 
    qualification: "BARRAGE2", 
    niveauMax: "BARRAGE3" 
  },
];

type CertificationDetail = {
  title: string;
  description: string;
  icon: string;
};

const CERTIFICATIONS: CertificationDetail[] = [
  {
    title: "ROUTE3",
    description: "le niveau le plus élevé du domaine routier, témoignant de notre maîtrise complète des travaux de construction et de réhabilitation de routes",
    icon: "🛣️"
  },
  {
    title: "Per/Axe3",
    description: "la plus haute distinction pour les périmètres irrigués et axes hydrauliques, confirmant notre expertise dans la gestion durable de l'eau",
    icon: "💧"
  },
  {
    title: "Bar/Bas2",
    description: "certification spécifique aux ouvrages hydrauliques agricoles, tels que les bassins et barrages destinés à l'irrigation",
    icon: "🌾"
  },
  {
    title: "BARRAGE2",
    description: "qualification dédiée aux projets d'alimentation en eau potable, assurant la sécurité, la qualité et la durabilité des infrastructures hydrauliques",
    icon: "🏗️"
  },
];

export default function QualificationsPage() {
  const titleHero = "Qualifications";
  const imageHero = ["/images/mtc/new/IMG_20170828_103122-2048x1536.jpg",
    "/images/mtc/home/image2025-10-01.26.jpeg", "/images/mtc/home/image2025-10-01.22.jpeg", "/images/mtc/image3-scaled.jpg",
    "/images/mtc/new/IMG_20170828_103122-2048x1536.jpg",
    "/images/mtc/new/20190305_095110-scaled.jpg",
  ];
  return (
    <main className="min-h-screen w-full bg-white overflow-hidden">
      {/* HERO SECTION */}
      <Hero titleHero={titleHero} imageHero={imageHero} />

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
                Excellence Certifiée
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#4C4A4A] mb-6 leading-tight">
              Qualité & Performance
              <span className="block text-[#F26418]">Au Cœur de Notre Engagement</span>
            </h2>
            <div className="w-24 h-1 bg-[#F26418] mx-auto rounded-full"></div>
          </div>

          {/* Introduction Content */}
          <div className="max-w-5xl mx-auto">
            <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden">
              {/* Decorative top border */}
              <div className="h-2 bg-gradient-to-r from-[#F26418] via-[#F26418]/80 to-[#F26418]"></div>
              
              <div className="p-8 md:p-12 lg:p-16">
                <div className="space-y-6">
                  <p className="text-[#4C4A4A] text-lg md:text-xl leading-relaxed">
                    Chez MTC, la qualité et la performance sont au cœur de notre engagement. Nos certifications nationales témoignent de notre savoir-faire reconnu et de notre conformité aux normes les plus exigeantes du secteur du BTP en Mauritanie.
                  </p>
                  <p className="text-[#7A7674] text-lg md:text-xl leading-relaxed">
                    Elles constituent une garantie de fiabilité pour nos partenaires et clients, confirmant notre capacité à réaliser des projets d'envergure dans différents domaines d'intervention.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* QUALIFICATIONS TABLE SECTION */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#4C4A4A] mb-4">
              Nos Qualifications Officielles
            </h2>
            <div className="w-20 h-1 bg-[#F26418] mx-auto rounded-full"></div>
          </div>

          {/* Desktop Table */}
          <div className="hidden md:block overflow-hidden rounded-2xl shadow-2xl border border-gray-200">
            <table className="w-full">
              <thead>
                <tr className="bg-gradient-to-r from-[#F26418] to-[#F26418]/80">
                  <th className="px-6 py-5 text-left text-base font-bold text-white uppercase tracking-wider">
                    Secteur
                  </th>
                  <th className="px-6 py-5 text-left text-base font-bold text-white uppercase tracking-wider">
                    Qualification Obtenue
                  </th>
                  <th className="px-6 py-5 text-left text-base font-bold text-white uppercase tracking-wider">
                    Niveau Maximal dans le Secteur
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {QUALIFICATIONS.map((qual, index) => (
                  <tr 
                    key={index} 
                    className="hover:bg-[#F26418]/5 transition-colors duration-200"
                  >
                    <td className="px-6 py-5 text-[#4C4A4A] font-medium text-base">
                      {qual.secteur}
                    </td>
                    <td className="px-6 py-5">
                      <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-bold text-[#F26418] bg-[#F26418]/10 border border-[#F26418]/20">
                        {qual.qualification}
                      </span>
                    </td>
                    <td className="px-6 py-5">
                      <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-bold text-[#4C4A4A] bg-gray-100 border border-gray-200">
                        {qual.niveauMax}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Cards */}
          <div className="md:hidden space-y-4">
            {QUALIFICATIONS.map((qual, index) => (
              <div 
                key={index} 
                className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="h-2 bg-gradient-to-r from-[#F26418] to-[#F26418]/80"></div>
                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="text-xs uppercase tracking-wider text-gray-500 font-semibold mb-1">
                      Secteur
                    </h3>
                    <p className="text-[#4C4A4A] font-bold text-lg">
                      {qual.secteur}
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xs uppercase tracking-wider text-gray-500 font-semibold mb-2">
                      Qualification Obtenue
                    </h3>
                    <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-bold text-[#F26418] bg-[#F26418]/10 border border-[#F26418]/20">
                      {qual.qualification}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-xs uppercase tracking-wider text-gray-500 font-semibold mb-2">
                      Niveau Maximal dans le Secteur
                    </h3>
                    <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-bold text-[#4C4A4A] bg-gray-100 border border-gray-200">
                      {qual.niveauMax}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CERTIFICATION DETAILS SECTION */}
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
                Reconnaissance
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Une Reconnaissance du 
              <span className="block text-[#F26418]">Professionnalisme de MTC</span>
            </h2>
            <div className="w-24 h-1 bg-[#F26418] mx-auto rounded-full mb-8"></div>
            <p className="text-white/90 text-lg md:text-xl max-w-4xl mx-auto leading-relaxed">
              Ces qualifications, délivrées par les autorités compétentes, placent MTC parmi les entreprises les mieux classées dans plusieurs secteurs clés :
            </p>
          </div>

          {/* Certification Cards Grid */}
          <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
            {CERTIFICATIONS.map((cert, index) => (
              <div key={index} className="group">
                <div className="h-full bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 p-8 lg:p-10 border border-white/20 hover:scale-105 hover:bg-white">
                  {/* Icon */}
                  <div className="w-20 h-20 bg-gradient-to-br from-[#F26418] to-[#F26418]/70 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <span className="text-4xl">{cert.icon}</span>
                  </div>

                  <h3 className="text-2xl md:text-3xl font-bold text-[#F26418] mb-4 leading-tight">
                    {cert.title}
                  </h3>
                  
                  <p className="text-[#7A7674] text-base md:text-lg leading-relaxed">
                    {cert.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ENGAGEMENT SECTION */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#F26418]/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
        
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#F26418] to-transparent mx-auto rounded-full mb-12"></div>
            
            <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 p-8 md:p-12 lg:p-16">
              <div className="w-16 h-16 bg-gradient-to-br from-[#F26418] to-[#F26418]/70 rounded-2xl flex items-center justify-center mx-auto mb-8">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              
              <h3 className="text-3xl md:text-4xl font-bold text-[#4C4A4A] mb-8 leading-tight">
                Notre Engagement
              </h3>
              
              <p className="text-[#7A7674] text-lg md:text-xl leading-relaxed">
                Ces agréments reflètent notre engagement constant à respecter les standards techniques, environnementaux et de sécurité les plus stricts, tout en contribuant activement au développement des infrastructures durables en Mauritanie.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

