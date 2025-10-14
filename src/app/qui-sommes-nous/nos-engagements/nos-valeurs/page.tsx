import Image from "next/image";
import { 
  Award, 
  Shield, 
  Lightbulb, 
  Users, 
  Leaf, 
  Heart,
  Target,
  CheckCircle2
} from "lucide-react";

export default function Page() {
  return (
    <main className="min-h-screen w-full bg-white">
      {/* HERO SECTION WITH IMAGE */}
      <section className="relative h-[60vh] md:h-[70vh] w-full overflow-hidden">
        <Image
          src="/images/rubon1.jpg"
          alt="Nos Valeurs - MTC"
          fill
          priority
          className="object-cover"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/70" />
        
        {/* Hero Content */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="max-w-5xl px-4 sm:px-6 lg:px-8 text-center" data-aos="fade-up" data-aos-duration="1000">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 tracking-tight">
              Nos Valeurs
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-6 font-light">
              Notre ADN
            </p>
            <div className="w-24 h-1 bg-[#F26418] mx-auto rounded-full" data-aos="zoom-in" data-aos-delay="500"></div>
          </div>
        </div>
      </section>

      {/* INTRODUCTION SECTION */}
      <section className="relative py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center" data-aos="fade-up">
            <div className="inline-block mb-6">
              <span className="text-[#F26418] font-semibold text-sm uppercase tracking-wider px-4 py-2 bg-[#F26418]/10 rounded-full">
                Notre ADN
              </span>
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#4C4A4A] mb-8 leading-tight">
              Nos Valeurs Fondamentales
            </h2>
            
            <div className="w-24 h-1 bg-[#F26418] mx-auto rounded-full mb-12"></div>
            
            <div className="space-y-6 text-black leading-relaxed text-lg md:text-xl">
              <p>
                Chez MTC, nos valeurs fondamentales guident chacune de nos actions et décisions, nous permettant de nous positionner comme un leader fiable et responsable dans le secteur des travaux publics.
              </p>
              <p>
                Nous sommes engagés à incarner l'excellence en offrant des services de qualité, l'intégrité par une conduite éthique et transparente, l'innovation à travers l'intégration de nouvelles technologies, une collaboration efficace pour assurer la réussite collective et la responsabilité environnementale en respectant les normes de sécurité et en préservant les ressources naturelles, le tout visant à garantir la satisfaction de nos clients.
              </p>
            </div>
          </div>
        </div>
      </section>

            {/* VALUES CARDS SECTION */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16" data-aos="fade-up">
            <div className="inline-block mb-4">
              <span className="text-[#F26418] font-semibold text-sm uppercase tracking-wider px-4 py-2 bg-[#F26418]/10 rounded-full">
                Nos 6 Valeurs
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#4C4A4A] mb-4">
              Ce qui nous guide au quotidien
            </h2>
            <div className="w-24 h-1 bg-[#F26418] mx-auto rounded-full"></div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
            
            {/* Excellence */}
            <div className="group" data-aos="fade-up" data-aos-delay="100">
              <div className="h-full bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 p-6 md:p-8 border-t-4 border-[#F26418] hover:scale-105 transform hover:-translate-y-2">
                {/* Icon */}
                <div className="w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-[#F26418] to-[#F26418]/70 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-300 animate-glow">
                  <Award className="w-7 h-7 md:w-8 md:h-8 text-white" />
                </div>

                <h3 className="text-xl md:text-2xl font-bold text-[#4C4A4A] mb-4">
                  Excellence
                </h3>
                
                <p className="text-black text-sm md:text-base leading-relaxed">
                  Nous visons l'excellence en atteignant les plus hauts standards de qualité pour dépasser les attentes de nos clients.
                </p>
              </div>
            </div>

            {/* Intégrité */}
            <div className="group" data-aos="fade-up" data-aos-delay="200">
              <div className="h-full bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 p-6 md:p-8 border-t-4 border-[#F26418] hover:scale-105 transform hover:-translate-y-2">
                {/* Icon */}
                <div className="w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-[#F26418] to-[#F26418]/70 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-300 animate-glow">
                  <Shield className="w-7 h-7 md:w-8 md:h-8 text-white" />
                </div>

                <h3 className="text-xl md:text-2xl font-bold text-[#4C4A4A] mb-4">
                  Intégrité
                </h3>
                
                <p className="text-black text-sm md:text-base leading-relaxed">
                  Nous valorisons une conduite éthique et transparente, renforçant la confiance et la loyauté avec nos clients, partenaires et employés.
                </p>
              </div>
            </div>

            {/* Innovation */}
            <div className="group" data-aos="fade-up" data-aos-delay="300">
              <div className="h-full bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 p-6 md:p-8 border-t-4 border-[#F26418] hover:scale-105 transform hover:-translate-y-2">
                {/* Icon */}
                <div className="w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-[#F26418] to-[#F26418]/70 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-300 animate-glow">
                  <Lightbulb className="w-7 h-7 md:w-8 md:h-8 text-white" />
                </div>

                <h3 className="text-xl md:text-2xl font-bold text-[#4C4A4A] mb-4">
                  Innovation
                </h3>
                
                <p className="text-black text-sm md:text-base leading-relaxed">
                  L'innovation alimente notre croissance : nous intégrons sans cesse de nouvelles technologies pour améliorer l'efficacité, la durabilité de nos projets et la satisfaction de nos clients.
                </p>
              </div>
            </div>

            {/* Collaboration */}
            <div className="group" data-aos="fade-up" data-aos-delay="400">
              <div className="h-full bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 p-6 md:p-8 border-t-4 border-[#F26418] hover:scale-105 transform hover:-translate-y-2">
                {/* Icon */}
                <div className="w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-[#F26418] to-[#F26418]/70 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-300 animate-glow">
                  <Users className="w-7 h-7 md:w-8 md:h-8 text-white" />
                </div>

                <h3 className="text-xl md:text-2xl font-bold text-[#4C4A4A] mb-4">
                  Collaboration
                </h3>
                
                <p className="text-black text-sm md:text-base leading-relaxed">
                  La collaboration est essentielle à notre succès. Chez MTC, nous favorisons un environnement inclusif où chaque membre peut contribuer pleinement à nos objectifs communs.
                </p>
              </div>
            </div>

            {/* Responsabilité Environnementale */}
            <div className="group" data-aos="fade-up" data-aos-delay="500">
              <div className="h-full bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 p-6 md:p-8 border-t-4 border-[#F26418] hover:scale-105 transform hover:-translate-y-2">
                {/* Icon */}
                <div className="w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-[#F26418] to-[#F26418]/70 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-300 animate-glow">
                  <Leaf className="w-7 h-7 md:w-8 md:h-8 text-white" />
                </div>

                <h3 className="text-xl md:text-2xl font-bold text-[#4C4A4A] mb-4">
                  Responsabilité Environnementale
                </h3>
                
                <p className="text-black text-sm md:text-base leading-relaxed">
                  Nous assumons une responsabilité environnementale en respectant les normes de sécurité et en préservant les ressources naturelles.
                </p>
              </div>
            </div>

            {/* Satisfaction client */}
            <div className="group" data-aos="fade-up" data-aos-delay="600">
              <div className="h-full bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 p-6 md:p-8 border-t-4 border-[#F26418] hover:scale-105 transform hover:-translate-y-2">
                {/* Icon */}
                <div className="w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-[#F26418] to-[#F26418]/70 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-300 animate-glow">
                  <Heart className="w-7 h-7 md:w-8 md:h-8 text-white" />
                </div>

                <h3 className="text-xl md:text-2xl font-bold text-[#4C4A4A] mb-4">
                  Satisfaction client
                </h3>
                
                <p className="text-black text-sm md:text-base leading-relaxed">
                  La satisfaction client est notre priorité. Nous nous engageons à comprendre leurs besoins, respecter les délais et fournir des solutions adaptées pour assurer leur fidélité.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* COMMITMENT SECTION */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center" data-aos="fade-up">
            <div className="inline-block mb-6">
              <span className="text-[#F26418] font-semibold text-sm uppercase tracking-wider px-4 py-2 bg-[#F26418]/10 rounded-full">
                Notre Engagement
              </span>
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#4C4A4A] mb-8 leading-tight">
              Un Engagement Authentique
            </h2>
            
            <div className="w-24 h-1 bg-[#F26418] mx-auto rounded-full mb-12"></div>
            
            <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 text-left">
              <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg border-l-4 border-[#F26418] hover:shadow-xl transition-all duration-300 hover:scale-105" data-aos="fade-right" data-aos-delay="200">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-[#F26418]/10 rounded-lg flex items-center justify-center mr-4">
                    <Target className="w-6 h-6 md:w-7 md:h-7 text-[#F26418]" />
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-[#4C4A4A]">Leadership Responsable</h3>
                </div>
                <p className="text-black text-sm md:text-base leading-relaxed">
                  Nos valeurs nous permettent de nous positionner comme un leader fiable et responsable dans le secteur des travaux publics.
                </p>
              </div>
              
              <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg border-l-4 border-[#F26418] hover:shadow-xl transition-all duration-300 hover:scale-105" data-aos="fade-left" data-aos-delay="300">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-[#F26418]/10 rounded-lg flex items-center justify-center mr-4">
                    <CheckCircle2 className="w-6 h-6 md:w-7 md:h-7 text-[#F26418]" />
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-[#4C4A4A]">Actions Concrètes</h3>
                </div>
                <p className="text-black text-sm md:text-base leading-relaxed">
                  Chacune de nos actions et décisions est guidée par ces valeurs fondamentales, garantissant cohérence et authenticité.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CLOSING SECTION */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-[#4C4A4A] to-[#7A7674] relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#F26418]/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#F26418]/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" data-aos="fade-up">
          <div className="text-center">
            <div className="w-20 h-1 bg-[#F26418] mx-auto rounded-full mb-8"></div>
            
            <div className="mb-12">
              <div className="w-20 h-20 bg-[#F26418]/20 rounded-full flex items-center justify-center mx-auto mb-6 animate-float">
                <Award className="w-10 h-10 text-[#F26418]" />
              </div>
            </div>

            <h3 className="text-3xl md:text-4xl font-bold text-white mb-8">
              Ces valeurs font de nous qui nous sommes
            </h3>
            
            <p className="text-white/90 text-lg md:text-xl leading-relaxed mb-12 max-w-3xl mx-auto">
              Elles sont le fondement de notre identité d'entreprise et la garantie de notre engagement envers l'excellence, l'intégrité et la satisfaction de tous nos partenaires.
            </p>

            <div className="inline-block">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl px-8 py-6 border border-white/20">
                <p className="text-[#F26418] text-2xl md:text-3xl font-bold mb-2">
                  MTC
                </p>
                <p className="text-white text-lg md:text-xl font-semibold">
                  Des valeurs, une excellence
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
