"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const tw = (...c: (string | false | undefined)[]) => c.filter(Boolean).join(" ");

export default function ProjetsRealisesPage() {
  const [activeCategory, setActiveCategory] = useState<"routes" | "perimetres" | "barrages">("routes");
  const [expandedProject, setExpandedProject] = useState<string | null>(null);

  const toggleProject = (id: string) => {
    setExpandedProject(expandedProject === id ? null : id);
  };

  // Routes Projects
  const routesProjects = [
    {
      id: "route-1",
      title: "Route Aleg - Magtaa lehjar",
      marche: "Travaux de réhabilitation/construction de certains tronçons du réseau routier national divisé en sept lots, Lot1 Tronçon Aleg – Magtaa Lehjar",
      description: "100 km, reconstruction de la couche de base avec apport de matériaux et recyclage du revêtement existant, imprégnation, accrochage, enrobés, géo-grille, bicouche, signalisation et bordures.",
      distance: "100 km"
    },
    {
      id: "route-2",
      title: "Route Boghé - Kaédi",
      marche: "Travaux de réhabilitation/construction de certains tronçons du réseau routier national divisé en sept lots, Lot7 Tronçon Boghé – Kaédi",
      description: "100 km, reconstruction de la couche de base avec apport de matériaux et recyclage du revêtement existant, imprégnation, accrochage, enrobés, géo-grille, bicouche, signalisation et bordures.",
      distance: "100 km"
    },
    {
      id: "route-3",
      title: "Voiries Aleg et Magtaa lahjar",
      marche: "Travaux de construction des voiries à l'intérieur du pays, divisé en quatre lots. Lot n°2 : Voiries Aleg et Magtaa Lahjar",
      description: "12,2 km Débroussaillage, décapage, déblais, remblais, fondation, base, revêtement, ouvrages hydrauliques bordures et signalisation.",
      distance: "12,2 km"
    },
    {
      id: "route-4",
      title: "Voirie de Rosso",
      marche: "Travaux de construction des voiries à l'intérieur du pays, divisé en quatre lots. Lot n°4 : Voirie de Rosso",
      description: "8 km Débroussaillage, décapage, déblais, remblais, fondation, base, revêtement, bordures et signalisation.",
      distance: "8 km"
    },
    {
      id: "route-5",
      title: "Rehabilitation de la Voirie de Nouakchott 2019",
      marche: "REHABILITATION 27 km DE VOIRIE A NOUAKCHOTT 2019",
      description: "18,28 km,. élargissement (déblai remblai), rehaussement (couche de base), imprégnation, accrochage, enrobés et bordures",
      distance: "18,28 km"
    },
    {
      id: "route-6",
      title: "Mise à niveau des axes de la Voirie de Nouakchott 2019",
      marche: "MISE A NIVEAU DE CERTAINS AXES DE LA VOIRIE DE NOUAKCHOTT 2019",
      description: "3 km d'Imprégnation, accrochage, enrobés et pavage.",
      distance: "3 km"
    },
    {
      id: "route-7",
      title: "Route Nema – Achemim",
      marche: "ROUTE NEMA – ACHEMIM",
      description: "16,4 km, Débroussaillage, décapage, déblais, remblais, fondation, base, revêtement, ouvrages hydrauliques et signalisation.",
      distance: "16,4 km"
    },
    {
      id: "route-8",
      title: "Voirie et Aeroport de Nema - Convention 008",
      marche: "VOIRIE ET AEROPORT DE NEMA, TRAVAUX COMPLEMENTAIRES",
      description: "50% de la couche de grave bitume d'épaisseur 11 cm sur toute la piste longue de 3 000 ml sur une largeur de 45m.",
      distance: "3 km"
    },
    {
      id: "route-9",
      title: "Voirie et Aeroport de Nema  - Convention 012",
      marche: "VOIRIE ET AEROPORT DE NEMA",
      description: "50% de : 15 km de voirie, réhabilitation et l'extension de la piste, réhabilitation des bâtiments de l'Aéroport de Néma..",
      distance: "15 km"
    },
    {
      id: "route-10",
      title: "Voirie de Nouakchott 2018",
      marche: "VOIRIE DU SOMMET DE L'UNION AFRIQUAINE DE NOUAKCHOTT",
      description: "18,28 km, élargissement (déblai remblai), rehaussement (couche de base), imprégnation, accrochage, enrobés et bordures.",
      distance: "18,28 km"
    },
    {
      id: "route-11",
      title: "Route Zravia - Tamchekett",
      marche: "ROUTE ZRAVIA – TAMCHEKETT",
      description: "45 km, Débroussaillage, décapage, déblais, remblais, fondation, base, revêtement, ouvrages hydrauliques et signalisation",
      distance: "45 km"
    },
    {
      id: "route-12",
      title: "Route Nouakchott-Boutilimitt PK 58 - PK 108",
      marche: "TRAVAUX DE RECONSTRUCTION DE LA ROUTE NOUAKCHOTT-BOUTILIMITT DU PK 58 AU PK 108",
      description: "25 km Débroussaillage, décapage, scarification du revêtement existant, déblais, remblais, fondation, base, revêtement, et signalisation",
      distance: "25 km"
    },
    {
      id: "route-13",
      title: "Aeroport d'Atar",
      marche: "AEROPORT D'ATAR",
      description: "piste de 3 000 m x 30 m : Colmatage et traitement des fissures, Décapage du revêtement, Remplissage en BB, Couche d'accrochage, Béton bitumineux de 6 cm d'épaisseur et Marquage horizontal.",
      distance: "3 km"
    },
    {
      id: "route-14",
      title: "Voirie d'Akjoujt",
      marche: "TRAVAUX DE CONSTRUCTION DE LA VOIRIE D'AKJOUJT",
      description: "5 km Débroussaillage, décapage, déblais, remblais, fondation, base, revêtement, et signalisation",
      distance: "5 km"
    },
    {
      id: "route-15",
      title: "Route Nouakchott-Boutilimitt PK 10 - PK 60",
      marche: "TRAVAUX DE RECONSTRUCTION DE LA ROUTE NOUAKCHOTT-BOUTILIMITT DU PK 10 AU PK 60",
      description: "25 km Débroussaillage, décapage, déblais, remblais, fondation, base, revêtement, et signalisation",
      distance: "25 km"
    },
    {
      id: "route-16",
      title: "Route Kiffa Boumdeid",
      marche: "ROUTE KIFFA BOUMDEID",
      description: "54,6 km, Débroussaillage, décapage, déblais, remblais, fondation, base, revêtement, ouvrages hydrauliques et signalisation.",
      distance: "54,6 km"
    },
    {
      id: "route-17",
      title: "Route Touajil - Choum",
      marche: "ROUTE TOUAJIL – CHOUM",
      description: "25 km Décapage, déblais, remblais, fondation, base, revêtement et signalisation.",
      distance: "25 km"
    },
    {
      id: "route-18",
      title: "Route Atar - Zou2rate",
      marche: "ROUTE ATAR – ZOUERATE LOT3",
      description: "56,369 km, Débroussaillage, décapage, déblais, remblais, fondation, base, revêtement, ouvrages hydrauliques et signalisation.",
      distance: "56,4 km"
    },
    {
      id: "route-19",
      title: "Route Atar - Tidjikja",
      marche: "TRAVAUX DE RECONSTRUCTION DE LA ROUTE ATAR TIDJIKJA LOT 2",
      description: "40 km Débroussaillage, décapage, déblais, remblais, fondation, base, revêtement, ouvrages hydrauliques et signalisation",
      distance: "40 km"
    },
    {
      id: "route-20",
      title: "Carrefour Aéroport Carrefour FNT",
      marche: "REVETEMENT CARREFOUR AEROPORT CARREFOUR FNT",
      description: "Accrochage et enrobés",
      distance: "-"
    },
    {
      id: "route-21",
      title: "Carrefour Madrid - Toujounine",
      marche: "REVETEMENT CARREFOUR MADRID TOUJOUNINE",
      description: "Accrochage et enrobés",
      distance: "-"
    },
    {
      id: "route-22",
      title: "Concorde Gueye/Patte d'Oie/PAN - Carrefour Ould Mah",
      marche: "Travaux Carr. CONCORDE GUEYE/PATTE D'OIE/PAN – Carr OULD MAH vers TERMINUS DU LYCEE DE TEYARETT",
      description: "10 km, Décapage, déblais, remblais, fondation, base, revêtement et signalisation.",
      distance: "10 km"
    },
    {
      id: "route-23",
      title: "Route Kseir Torchan – Choum",
      marche: "ROUTE KSEIR TORCHAN – CHOUM",
      description: "13 km, Débroussaillage, décapage, déblais, remblais, fondation, base, revêtement (20 km), ouvrages hydrauliques et signalisation.",
      distance: "13 km"
    },
    {
      id: "route-24",
      title: "Voirie de Nouakchott 2013",
      marche: "REVETEMENT VOIRIE DE NOUAKCHOTT",
      description: "11 km d'Imprégnation, accrochage et enrobés",
      distance: "11 km"
    },
    {
      id: "route-25",
      title: "Route F'Derick - Touajil",
      marche: "ROUTE F'DERICK – TOUAJIL",
      description: "22,5 km, Débroussaillage, décapage, déblais, remblais, fondation, base, revêtement, ouvrages hydrauliques et signalisation.",
      distance: "22,5 km"
    },
    {
      id: "route-26",
      title: "Voirie de Nouakchott 2012",
      marche: "REVETEMENT VOIRIE DE NOUAKCHOTT",
      description: "2 km d'Imprégnation, accrochage et enrobés",
      distance: "2 km"
    },
    {
      id: "route-27",
      title: "Route Kiffa - Kankossa",
      marche: "ROUTE KIFFA – KANKOSSA",
      description: "83 km, Débroussaillage, décapage, déblais, remblais, fondation et base",
      distance: "83 km"
    }
  ];

  // Périmètres Projects
  const perimetresProjects = [
    {
      id: "perimetre-1",
      title: "Axe Hydraulique de Tambass",
      marche: "Travaux d'aménagement de l'axe de TAMBASS dans le bassin de Garak (lot 1)",
      description: "curage de l'axe hydraulique sur 5 km (largeur du fond 20 m) construction de 2 digues sur les bords du canal créé et construction d'un ouvrage en béton vanné de deux ouvertures 2×2 : Débroussaillage, Décapage, Déblai en terrain ordinaire, Remblai compacté pour digues, OUVRAGES d'ART et protections.",
      distance: "5 km"
    },
    {
      id: "perimetre-2",
      title: "Marigot de Laoueija",
      marche: "TRAVAUX D'AMENAGEMENT DU MARIGOT DE LAOUEIJA",
      description: "Travaux de faucardage à sec, Travaux de curage et de recalibrage de l'axe hydraulique de Laoueija, Débroussaillage de la végétation, Remblayage de la digue et couche latéritique de 20 cm (protection et de roulement), et Remplacement des vannes et mise en place d'un système de manutention.",
      distance: "-"
    }
  ];

  // Barrages Projects
  const barragesProjects = [
    {
      id: "barrage-1",
      title: "Barrage de Reyoug",
      marche: "Travaux de réhabilitation du barrage de Reyoug, Wilaya du Hodh El Gharbi (lot 3)",
      description: "Construction de 1 barrage (digue 1480 ml et déversoir en béton armé de 70 ml x 3,5 m) en béton armé, démolition d'un déversoir en BA existant, sa reconstruction (122 ml x 3,5 m) et confortement d'un déversoir existant : Débroussaillage, Décapage, Déblai en terrain ordinaire, Remblai compacté pour digue, OUVRAGES d'ART et protections.",
      distance: "1,48 km"
    },
    {
      id: "barrage-2",
      title: "Barrages de R'Vigh et Lebeiziye",
      marche: "Travaux de construction des barrages de R'vigh et Lebeiziye dans la Moughataa de Bassiknou, Wilaya du Hodh Echarghi (lot 2)",
      description: "Construction de 2 barrages en béton armé : Débroussaillage, Décapage, Déblai en terrain ordinaire, Remblai compacté pour digue, OUVRAGES d'ART et protections.",
      distance: "-"
    }
  ];

  const getCurrentProjects = () => {
    switch (activeCategory) {
      case "routes":
        return routesProjects;
      case "perimetres":
        return perimetresProjects;
      case "barrages":
        return barragesProjects;
      default:
        return routesProjects;
    }
  };

  const getCategoryTitle = () => {
    switch (activeCategory) {
      case "routes":
        return "Routes";
      case "perimetres":
        return "Périmètres irrigués et axes hydrauliques";
      case "barrages":
        return "Barrages et bassins";
      default:
        return "Routes";
    }
  };

  const getCategoryIcon = () => {
    switch (activeCategory) {
      case "routes":
        return (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
          </svg>
        );
      case "perimetres":
        return (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
          </svg>
        );
      case "barrages":
        return (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
          </svg>
        );
    }
  };

  const projects = getCurrentProjects();

  return (
    <main className="min-h-screen w-full bg-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[70vh] w-full overflow-hidden">
        <div className="absolute inset-0">
          <Image 
            src="/images/mtc/route.jpg" 
            alt="Nos Réalisations" 
            fill 
            priority 
            className="object-cover"
            quality={95}
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
        
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
            <div className="animate-fade-in-up">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
                Nos Réalisations
              </h1>
              <div className="w-24 h-1 bg-[#F26418] mx-auto rounded-full mb-6"></div>
              <p className="text-white/90 text-lg md:text-xl max-w-3xl mx-auto">
                Découvrez nos projets réalisés avec excellence et engagement
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Category Tabs */}
      <section className="sticky top-0 z-40 bg-white border-b border-gray-200 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto hide-scrollbar py-4 gap-3">
            <button
              onClick={() => setActiveCategory("routes")}
              className={tw(
                "flex-shrink-0 flex items-center gap-3 px-6 py-3 rounded-xl font-semibold transition-all duration-300",
                activeCategory === "routes"
                  ? "bg-gradient-to-r from-[#F26418] to-[#d95712] text-white shadow-lg shadow-[#F26418]/30"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              )}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
              </svg>
              <span>Routes</span>
              <span className={tw(
                "px-2 py-1 rounded-full text-xs font-bold",
                activeCategory === "routes" ? "bg-white/20" : "bg-[#F26418]/10 text-[#F26418]"
              )}>
                {routesProjects.length}
              </span>
            </button>

            <button
              onClick={() => setActiveCategory("perimetres")}
              className={tw(
                "flex-shrink-0 flex items-center gap-3 px-6 py-3 rounded-xl font-semibold transition-all duration-300",
                activeCategory === "perimetres"
                  ? "bg-gradient-to-r from-[#F26418] to-[#d95712] text-white shadow-lg shadow-[#F26418]/30"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              )}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
              </svg>
              <span className="hidden sm:inline">Périmètres irrigués</span>
              <span className="sm:hidden">Périmètres</span>
              <span className={tw(
                "px-2 py-1 rounded-full text-xs font-bold",
                activeCategory === "perimetres" ? "bg-white/20" : "bg-[#F26418]/10 text-[#F26418]"
              )}>
                {perimetresProjects.length}
              </span>
            </button>

            <button
              onClick={() => setActiveCategory("barrages")}
              className={tw(
                "flex-shrink-0 flex items-center gap-3 px-6 py-3 rounded-xl font-semibold transition-all duration-300",
                activeCategory === "barrages"
                  ? "bg-gradient-to-r from-[#F26418] to-[#d95712] text-white shadow-lg shadow-[#F26418]/30"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              )}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
              </svg>
              <span className="hidden sm:inline">Barrages et bassins</span>
              <span className="sm:hidden">Barrages</span>
              <span className={tw(
                "px-2 py-1 rounded-full text-xs font-bold",
                activeCategory === "barrages" ? "bg-white/20" : "bg-[#F26418]/10 text-[#F26418]"
              )}>
                {barragesProjects.length}
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="relative py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Header */}
          <div className="text-center mb-12" data-aos="fade-up">
            <div className="inline-flex items-center justify-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#F26418] to-[#d95712] flex items-center justify-center text-white">
                {getCategoryIcon()}
              </div>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#4C4A4A] mb-4">
              {getCategoryTitle()}
            </h2>
            <div className="w-24 h-1 bg-[#F26418] mx-auto rounded-full"></div>
          </div>

          {/* Projects Grid */}
          <div className="grid gap-6 md:gap-8">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100"
                data-aos="fade-up"
                data-aos-delay={index * 50}
              >
                {/* Project Header */}
                <button
                  onClick={() => toggleProject(project.id)}
                  className="w-full text-left p-6 md:p-8 flex items-center justify-between gap-4 hover:bg-gray-50 transition-colors duration-300"
                >
                  <div className="flex-1">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 mt-1">
                        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#F26418]/10 to-[#F26418]/5 flex items-center justify-center">
                          <div className="w-3 h-3 rounded-full bg-[#F26418]"></div>
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2 group-hover:text-[#F26418] transition-colors duration-300">
                          {project.title}
                        </h3>
                        {project.distance && project.distance !== "-" && (
                          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#F26418]/10 rounded-full">
                            <svg className="w-4 h-4 text-[#F26418]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                            </svg>
                            <span className="text-[#F26418] font-semibold text-sm">{project.distance}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex-shrink-0">
                    <div className={tw(
                      "w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center transition-all duration-300",
                      expandedProject === project.id && "bg-[#F26418] rotate-180"
                    )}>
                      <svg 
                        className={tw(
                          "w-5 h-5 transition-colors duration-300",
                          expandedProject === project.id ? "text-white" : "text-gray-600"
                        )}
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </button>

                {/* Expandable Content */}
                <div
                  className={tw(
                    "overflow-hidden transition-all duration-500",
                    expandedProject === project.id ? "max-h-[800px] opacity-100" : "max-h-0 opacity-0"
                  )}
                >
                  <div className="px-6 md:px-8 pb-6 md:pb-8 pt-4 border-t border-gray-100">
                    <div className="pl-14 space-y-4">
                      <div>
                        <h4 className="text-sm font-semibold text-[#F26418] uppercase tracking-wider mb-2">
                          Nom du marché :
                        </h4>
                        <p className="text-gray-700 leading-relaxed">
                          {project.marche}
                        </p>
                      </div>
                      
                      <div>
                        <h4 className="text-sm font-semibold text-[#F26418] uppercase tracking-wider mb-2">
                          Brève description des Travaux réalisés :
                        </h4>
                        <p className="text-gray-700 leading-relaxed">
                          {project.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Projects Count */}
          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-white rounded-full shadow-md border border-gray-200">
              <div className="w-2 h-2 rounded-full bg-[#F26418] animate-pulse"></div>
              <span className="text-gray-700 font-semibold">
                {projects.length} projet{projects.length > 1 ? 's' : ''} réalisé{projects.length > 1 ? 's' : ''}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative w-full min-h-[70vh] flex items-center justify-center overflow-hidden py-16 md:py-24">
        <div className="absolute inset-0">
          <Image
            src="/images/mtc/20180530_180352-scaled.jpg"
            alt="Infrastructure"
            fill
            className="object-cover"
            quality={90}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/70 to-black/60" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-4xl mx-auto">
            <div 
              className="bg-white/98 backdrop-blur-lg rounded-3xl shadow-2xl p-8 md:p-12 lg:p-16 border border-gray-200/50"
              data-aos="fade-up"
            >
              <div className="mb-8">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-[#F26418] to-[#d95712] shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
              </div>

              <div className="text-center lg:text-left space-y-6">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                  Votre Partenaire pour des Infrastructures Durables
                </h2>
                
                <div className="w-24 h-1 bg-gradient-to-r from-[#F26418] to-[#d95712] rounded-full mx-auto lg:mx-0" />
                
                <p className="text-gray-700 leading-relaxed text-base md:text-lg max-w-2xl">
                  En plaçant l'expertise technique et la durabilité au cœur de notre stratégie, nous nous engageons à bâtir des infrastructures modernes et à anticiper les besoins de demain. Contactez-nous pour découvrir comment nous pouvons contribuer à vos projets.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center lg:justify-start">
                  <Link
                    href="/contactez-nous"
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
                
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx global>{`
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </main>
  );
}

