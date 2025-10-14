"use client";

import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin } from "lucide-react";

const BRAND = "#F26418";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main Footer Content */}
      <div className="mx-auto max-w-7xl px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold text-white mb-4">
              Mauritanienne de Travaux et Constructions
            </h3>
            <p className="text-sm text-gray-400 mb-6">
              Leader dans le secteur des travaux publics et de la construction en Mauritanie
            </p>
            
            {/* Contact Information */}
            <div className="space-y-4">
              <div className="flex items-start gap-3 group">
                <MapPin 
                  className="w-5 h-5 mt-1 flex-shrink-0 transition-colors" 
                  style={{ color: BRAND }} 
                />
                <div className="text-sm">
                  <p className="text-gray-300">Boite postale : 4903</p>
                  <p className="text-gray-300">94 – Rue El Moughaouama</p>
                  <p className="text-gray-300">Zone Industrielle et commerciale</p>
                  <p className="text-gray-300">Jonction Dar Naïm / Toujounine</p>
                  <p className="text-gray-300 font-medium">Nouakchott, Mauritanie</p>
                </div>
              </div>

              <div className="flex items-center gap-3 group hover:translate-x-1 transition-transform">
                <Phone 
                  className="w-5 h-5 flex-shrink-0 transition-colors" 
                  style={{ color: BRAND }} 
                />
                <a 
                  href="tel:+22245258338" 
                  className="text-sm text-gray-300 hover:text-white transition-colors"
                >
                  + (222) 45 25 83 38
                </a>
              </div>

              <div className="flex items-center gap-3 group hover:translate-x-1 transition-transform">
                <Mail 
                  className="w-5 h-5 flex-shrink-0 transition-colors" 
                  style={{ color: BRAND }} 
                />
                <a 
                  href="mailto:contact@mtc.mr" 
                  className="text-sm text-gray-300 hover:text-white transition-colors"
                >
                  contact@mtc.mr
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Liens Rapides</h4>
            <ul className="space-y-3">
              <li>
                <Link 
                  href="/qui-sommes-nous/mot-du-directeur" 
                  className="text-sm hover:text-white hover:translate-x-1 inline-block transition-all"
                >
                  Mot du Directeur
                </Link>
              </li>
              <li>
                <Link 
                  href="/qui-sommes-nous/lentreprise/vision-mission" 
                  className="text-sm hover:text-white hover:translate-x-1 inline-block transition-all"
                >
                  Vision & Mission
                </Link>
              </li>
              <li>
                <Link 
                  href="/nos-expertises/construction-routiere" 
                  className="text-sm hover:text-white hover:translate-x-1 inline-block transition-all"
                >
                  Nos Expertises
                </Link>
              </li>
              <li>
                <Link 
                  href="/projets-realisations/projets-encours" 
                  className="text-sm hover:text-white hover:translate-x-1 inline-block transition-all"
                >
                  Projets & Réalisations
                </Link>
              </li>
              <li>
                <Link 
                  href="/contactez-nous" 
                  className="text-sm hover:text-white hover:translate-x-1 inline-block transition-all"
                >
                  Contactez-nous
                </Link>
              </li>
            </ul>
          </div>

          {/* Wefa Holding - Compact Version */}
          <div className="flex flex-col justify-start">
            <h4 className="text-lg font-semibold text-white mb-4">Filiale de</h4>
            <div className="bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-all duration-300 group">
              <div className="relative w-full h-20">
                <Image
                  src="/images/wefaholding.png"
                  alt="Wefa Holding"
                  fill
                  className="object-contain group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
            <p className="text-xs text-gray-500 mt-2 text-center">
              Groupe Wefa Holding
            </p>
          </div>
        </div>
      </div>

      {/* Other Group Companies Section */}
      <div className="border-t border-gray-800">
        <div className="mx-auto max-w-7xl px-4 py-10">
          <h4 className="text-xl font-semibold text-white mb-6 text-center">Autres sociétés du groupe</h4>
          <div className="max-w-4xl mx-auto bg-gray-800/50 rounded-lg p-6 hover:bg-gray-800/70 transition-all duration-300">
            <div className="relative w-full">
              <Image
                src="/images/companies.png"
                alt="Sociétés du groupe"
                width={3000}
                height={3000}
                className="object-contain rounded"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 text-center">
        <div className="mx-auto max-w-7xl px-4 py-6">
          <div className="flex flex-col md:flex-row justify-center items-center gap-4">
            <p className="text-sm text-gray-400 text-center">
              © {new Date().getFullYear()} MTC-sa. Tous droits réservés.
            </p>
        
          </div>
        </div>
      </div>
    </footer>
  );
}

