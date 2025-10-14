// // components/Nav.tsx
// "use client";

// import Link from "next/link";
// import { useEffect, useRef, useState } from "react";

// type MenuItem = {
//   label: string;
//   href?: string;
//   children?: MenuItem[];
// };

// const MENU: MenuItem[] = [
//   {
//     label: "Qui sommes-nous ?",
//     children: [
//       { label: "Mot du Directeur", href: "/mot-du-directeur" },
//       {
//         label: "L’entreprise",
//         children: [
//           { label: "Vision & Mission", href: "/lentreprise/vision-mission" },
//           { label: "Organigramme", href: "/lentreprise/organigramme" },
//           { label: "Moyens Matériels", href: "/lentreprise/moyens-materiels" },
//         ],
//       },
//       { label: "Nos Engagements", href: "/nos-engagements" },
//     ],
//   },
//   {
//     label: "Nos Expertises",
//     children: [
//       { label: "Construction Routière", href: "/nos-expertises/construction-routiere" },
//       { label: "Périmètres irrigués et axes hydrauliques", href: "/nos-expertises/perimetres-irrigues" },
//       { label: "Barrages et bassins", href: "/nos-expertises/barrages-bassins" },
//     ],
//   },
//   {
//     label: "Projets & Réalisations",
//     children: [
//       { label: "Projets en cours", href: "/projets-encours" },
//       { label: "Projets réalisés", href: "/projets-realises" },
//     ],
//   },
// ];

// function useClickOutside<T extends HTMLElement>(onClose: () => void) {
//   const ref = useRef<T | null>(null);
//   useEffect(() => {
//     function handler(e: MouseEvent) {
//       if (ref.current && !ref.current.contains(e.target as Node)) onClose();
//     }
//     document.addEventListener("mousedown", handler);
//     return () => document.removeEventListener("mousedown", handler);
//   }, [onClose]);
//   return ref;
// }

// export default function Navbar() {
//   const [openIdx, setOpenIdx] = useState<number | null>(null);
//   const [mobileOpen, setMobileOpen] = useState(false);

//   // close desktop menus on ESC
//   useEffect(() => {
//     const onKey = (e: KeyboardEvent) => {
//       if (e.key === "Escape") setOpenIdx(null);
//     };
//     window.addEventListener("keydown", onKey);
//     return () => window.removeEventListener("keydown", onKey);
//   }, []);

//   const navRef = useClickOutside<HTMLDivElement>(() => setOpenIdx(null));

//   return (
//     <header className="sticky top-0 z-50 bg-neutral-900/70 backdrop-blur supports-[backdrop-filter]:bg-neutral-900/60 text-white">
//       <div className="mx-auto max-w-7xl px-4">
//         <div className="flex h-16 items-center justify-between">
//           <Link href="/" className="font-semibold tracking-wide">
//             MTC
//           </Link>

//           {/* Desktop */}
//           <nav ref={navRef} className="hidden md:flex items-center gap-6">
//             {MENU.map((item, idx) => (
//               <div key={item.label} className="relative">
//                 {item.children ? (
//                   <>
//                     <button
//                       className="inline-flex items-center gap-2 px-2 py-1 rounded-md hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/40"
//                       aria-expanded={openIdx === idx}
//                       onMouseEnter={() => setOpenIdx(idx)}
//                       onFocus={() => setOpenIdx(idx)}
//                       onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
//                     >
//                       <span>{item.label}</span>
//                       <svg width="14" height="14" viewBox="0 0 20 20" aria-hidden="true">
//                         <path d="M5 7l5 6 5-6" fill="currentColor" />
//                       </svg>
//                     </button>

//                     {/* Flyout panel */}
//                     {openIdx === idx && (
//                       <div
//                         onMouseLeave={() => setOpenIdx(null)}
//                         className="absolute left-0 mt-2 w-[560px] rounded-xl border border-white/10 bg-neutral-900 shadow-xl"
//                       >
//                         {/* two-column layout */}
//                         <div className="grid grid-cols-2 gap-2 p-3">
//                           {/* left column = first level children */}
//                           <div className="rounded-lg bg-white/5 p-2">
//                             {item.children!.map((c) => {
//                               const hasGrand = !!c.children?.length;
//                               const base = (
//                                 <Link
//                                   key={c.label}
//                                   href={c.href || "#"}
//                                   className="block rounded-md px-3 py-2 text-sm hover:bg-white/10"
//                                 >
//                                   {c.label}
//                                 </Link>
//                               );
//                               return hasGrand ? (
//                                 <div key={c.label} className="mb-1">
//                                   <div className="px-3 py-2 text-sm font-semibold text-orange-400">{c.label}</div>
//                                   {/* render grandchildren on right column via nothing here; right column shows them */}
//                                 </div>
//                               ) : (
//                                 base
//                               );
//                             })}
//                           </div>

//                           {/* right column = grandchildren of the item that has children */}
//                           <div className="rounded-lg bg-white/5 p-2">
//                             {item.children
//                               ?.find((c) => c.children && c.children.length)
//                               ?.children?.map((gc) => (
//                                 <Link
//                                   key={gc.label}
//                                   href={gc.href || "#"}
//                                   className="block rounded-md px-3 py-2 text-sm hover:bg-white/10"
//                                 >
//                                   {gc.label}
//                                 </Link>
//                               )) || (
//                               <div className="px-3 py-2 text-sm text-white/60">
//                                 Sélectionnez une rubrique à gauche.
//                               </div>
//                             )}
//                           </div>
//                         </div>
//                       </div>
//                     )}
//                   </>
//                 ) : (
//                   <Link
//                     href={item.href || "#"}
//                     className="px-2 py-1 rounded-md hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/40"
//                   >
//                     {item.label}
//                   </Link>
//                 )}
//               </div>
//             ))}

//             <Link
//               href="/contact"
//               className="ml-2 rounded-full bg-orange-500 px-4 py-2 text-sm font-medium hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-300"
//             >
//               Contactez-Nous
//             </Link>
//           </nav>

//           {/* Mobile toggle */}
//           <button
//             className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-md hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/40"
//             aria-label="Ouvrir le menu"
//             aria-expanded={mobileOpen}
//             onClick={() => setMobileOpen((v) => !v)}
//           >
//             <svg width="22" height="22" viewBox="0 0 24 24" className="fill-current">
//               {mobileOpen ? (
//                 <path d="M18.3 5.71L12 12.01 5.7 5.7 4.29 7.11 10.59 13.4 4.29 19.7 5.7 21.11 12 14.82l6.3 6.3 1.41-1.41-6.3-6.3 6.3-6.29z" />
//               ) : (
//                 <path d="M3 6h18v2H3V6zm0 5h18v2H3v-2zm0 5h18v2H3v-2z" />
//               )}
//             </svg>
//           </button>
//         </div>
//       </div>

//       {/* Mobile drawer */}
//       <div
//         className={`md:hidden transition-[max-height] duration-300 overflow-hidden bg-neutral-900 ${
//           mobileOpen ? "max-h-[90vh]" : "max-h-0"
//         }`}
//       >
//         <div className="px-5 pb-6 pt-3">
//           {MENU.map((item) => (
//             <MobileSection key={item.label} item={item} />
//           ))}

//           <Link
//             href="/contact"
//             className="mt-4 inline-flex w-full items-center justify-center rounded-lg bg-orange-500 px-4 py-2 font-medium hover:bg-orange-600"
//           >
//             Contactez-Nous
//           </Link>
//         </div>
//       </div>
//     </header>
//   );
// }

// function MobileSection({ item }: { item: MenuItem }) {
//   const [open, setOpen] = useState(false);
//   return (
//     <div className="border-b border-white/10 py-3">
//       {item.children ? (
//         <>
//           <button
//             className="flex w-full items-center justify-between text-left text-base font-semibold"
//             onClick={() => setOpen((v) => !v)}
//             aria-expanded={open}
//           >
//             <span>{item.label}</span>
//             <svg width="14" height="14" viewBox="0 0 20 20" className={`transition ${open ? "rotate-180" : ""}`}>
//               <path d="M5 7l5 6 5-6" fill="currentColor" />
//             </svg>
//           </button>
//           <div className={`overflow-hidden transition-[max-height] duration-300 ${open ? "max-h-96" : "max-h-0"}`}>
//             <div className="pl-3 pt-2">
//               {item.children.map((c) =>
//                 c.children?.length ? (
//                   <MobileSubSection key={c.label} parent={c} />
//                 ) : (
//                   <Link
//                     key={c.label}
//                     href={c.href || "#"}
//                     className="block rounded-md px-2 py-2 text-sm hover:bg-white/10"
//                   >
//                     {c.label}
//                   </Link>
//                 )
//               )}
//             </div>
//           </div>
//         </>
//       ) : (
//         <Link href={item.href || "#"} className="block py-1">
//           {item.label}
//         </Link>
//       )}
//     </div>
//   );
// }

// function MobileSubSection({ parent }: { parent: MenuItem }) {
//   const [open, setOpen] = useState(true); // default open to mirror your screenshot
//   return (
//     <div className="mb-2">
//       <button
//         className="flex w-full items-center justify-between rounded-md px-2 py-2 text-sm font-semibold text-orange-400"
//         onClick={() => setOpen((v) => !v)}
//         aria-expanded={open}
//       >
//         {parent.label}
//         <svg width="12" height="12" viewBox="0 0 20 20" className={`transition ${open ? "rotate-180" : ""}`}>
//           <path d="M5 7l5 6 5-6" fill="currentColor" />
//         </svg>
//       </button>
//       <div className={`overflow-hidden transition-[max-height] duration-300 ${open ? "max-h-80" : "max-h-0"}`}>
//         <div className="pl-3">
//           {parent.children?.map((gc) => (
//             <Link
//               key={gc.label}
//               href={gc.href || "#"}
//               className="block rounded-md px-2 py-2 text-sm hover:bg-white/10"
//             >
//               {gc.label}
//             </Link>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }











// components/Nav.tsx
"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
const BRAND = "#F26418"; // active & hover color

type MenuItem = {
  label: string;
  href?: string;
  children?: MenuItem[];
};

const MENU: MenuItem[] = [
  {
    label: "Qui sommes-nous ?",
    children: [
      { label: "Mot Du Directeur", href: "/qui-sommes-nous/mot-du-directeur" },
      {
        label: "L'entreprise",
        children: [
          { label: "Vision & Mission", href: "/qui-sommes-nous/lentreprise/vision-mission" },
          { label: "Organigramme", href: "/qui-sommes-nous/lentreprise/organigramme" },
          { label: "Moyens Matériels", href: "/qui-sommes-nous/lentreprise/moyens-materiels" },
        ],
      },
      {
        label: "Nos Engagements",
        children: [
          { label: "Nos Valeurs", href: "/qui-sommes-nous/nos-engagements/nos-valeurs" },
          { label: "Politiques QHSE", href: "/qui-sommes-nous/nos-engagements/politiques-qhse" },
          { label: "Politique RH", href: "/qui-sommes-nous/nos-engagements/politique-rh" },
        ],
      },
    ],
  },
  {
    label: "Nos Expertises",
    children: [
      { label: "Construction Routière", href: "/nos-expertises/construction-routiere" },
      { label: "Périmètres irrigués et axes hydrauliques", href: "/nos-expertises/perimetres-irrigues" },
      { label: "Barrages et bassins", href: "/nos-expertises/barrages-bassins" },
    ],
    
  },
  {
    label: "Projets & Réalisations",
    children: [
      { label: "Project encours", href: "/projets-realisations/projets-encours" },
      { label: "Project Realise", href: "/projets-realisations/projets-realises" },
    ],
  },
];

function useClickOutside<T extends HTMLElement>(onClose: () => void) {
  const ref = useRef<T | null>(null);
  useEffect(() => {
    const h = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) onClose();
    };
    document.addEventListener("mousedown", h);
    return () => document.removeEventListener("mousedown", h);
  }, [onClose]);
  return ref;
}

export default function Nav() {
  const [openTop, setOpenTop] = useState<number | null>(null);         // which top-level menu is open
  const [activeParent, setActiveParent] = useState<string | null>(null); // which subitem (with children) is active inside panel
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && (setOpenTop(null), setActiveParent(null));
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navRef = useClickOutside<HTMLDivElement>(() => {
    setOpenTop(null);
    setActiveParent(null);
  });

  return (
    <header 
      className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white text-gray-900 shadow-md' : 'text-white'}`}
      style={scrolled ? {} : { background: "#8B8F93", backdropFilter: "blur(8px)" }}
    >
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className={`font-semibold tracking-wide transition-colors ${scrolled ? 'text-gray-900' : 'text-white'}`}>MTC</Link>

          {/* Desktop */}
          <nav ref={navRef} className="hidden md:flex items-center gap-8">
            {MENU.map((top, idx) => (
              <div key={top.label} className="relative">
                {top.children ? (
                  <>
                    <button
                      className={`inline-flex items-center gap-2 px-2 py-1 rounded-md  transition-colors ${
                        scrolled ? 'text-gray-900 hover:text-orange-600' : 'text-white hover:text-orange-300'
                      }`}
                      onMouseEnter={() => setOpenTop(idx)}
                      onFocus={() => setOpenTop(idx)}
                      onClick={() => setOpenTop(openTop === idx ? null : idx)}
                      aria-expanded={openTop === idx}
                    >
                      <span className="font-medium">{top.label}</span>
                      <ChevronDown scrolled={scrolled} />
                    </button>

                    {/* Small primary panel */}
                    {openTop === idx && (
                      <div
                        className="absolute left-0 mt-2 w-[260px] rounded-lg border border-gray-200 bg-white text-gray-900 shadow-xl"
                        onMouseLeave={() => { setOpenTop(null); setActiveParent(null); }}
                      >
                        <ul className="py-2">
                          {top.children.map((item) => {
                            const hasKids = !!item.children?.length;
                            const selected = activeParent === item.label;
                            return (
                              <li key={item.label} className="relative">
                                {hasKids ? (
                                  <button
                                    onMouseEnter={() => setActiveParent(item.label)}
                                    onClick={() => setActiveParent(selected ? null : item.label)}
                                    className="flex w-full items-center justify-between rounded-md px-3 py-2 text-sm text-gray-900 hover:bg-orange-500 hover:text-white transition-colors"
                                  >
                                    {item.label}
                                    <ChevronRight />
                                  </button>
                                ) : (
                                  <Link
                                    href={item.href || "#"}
                                    className="block rounded-md px-3 py-2 text-sm text-gray-900 hover:bg-orange-500 hover:text-white transition-colors"
                                  >
                                    {item.label}
                                  </Link>
                                )}
                              </li>
                            );
                          })}
                        </ul>

                        {/* Secondary small panel for children (appears to the right) */}
                        {activeParent &&
                          top.children.find((c) => c.label === activeParent)?.children && (
                            <div
                              className="absolute top-0 left-[260px] w-[260px] rounded-lg border border-gray-200 bg-white text-gray-900 shadow-xl"
                              onMouseLeave={() => setActiveParent(null)}
                            >
                              <ul className="py-2">
                                {top.children
                                  .find((c) => c.label === activeParent)!
                                  .children!.map((gc) => (
                                    <li key={gc.label}>
                                      <Link
                                        href={gc.href || "#"}
                                        className="block rounded-md px-3 py-2 text-sm text-gray-900 hover:bg-orange-500 hover:text-white transition-colors"
                                      >
                                        {gc.label}
                                      </Link>
                                    </li>
                                  ))}
                              </ul>
                            </div>
                          )}
                      </div>
                    )}
                  </>
                ) : (
                  <Link 
                    href={top.href || "#"} 
                    className={`px-2 py-1 rounded-md font-medium transition-colors ${
                      scrolled ? 'text-gray-900 hover:text-orange-600' : 'text-white hover:text-orange-300'
                    }`}
                  >
                    {top.label}
                  </Link>
                )}
              </div>
            ))}

            <Link
              href="/contact"
              className="rounded-full px-4 py-2 text-sm font-medium transition-colors"
              style={{ background: BRAND }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.9")}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
            >
              Contactez-Nous
            </Link>
          </nav>

          {/* Mobile toggle */}
          <button
            className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-md "
            aria-label="Ouvrir le menu"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
          >
            <Burger open={mobileOpen} scrolled={scrolled} />
          </button>
        </div>
      </div>

      {/* Mobile drawer (accordion) */}
      <div className="md:hidden overflow-hidden transition-[max-height] duration-300"
           style={{ background: "#7D8286", maxHeight: mobileOpen ? "92vh" : "0px" }}>
        <div className="px-5 pb-6 pt-3">
          {MENU.map((item) => (
            <MobileSection key={item.label} item={item} />
          ))}
          <Link href="/contact"
                className="mt-4 inline-flex w-full items-center justify-center rounded-lg px-4 py-2 font-medium text-white"
                style={{ background: BRAND }}>
            Contactez-Nous
          </Link>
        </div>
      </div>
    </header>
  );
}

/* ----------------- Mobile sections ----------------- */

function MobileSection({ item }: { item: MenuItem }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-white/20 py-3">
      {item.children ? (
        <>
          <button
            className="flex w-full items-center justify-between text-left text-base font-semibold text-white"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
          >
            <span>{item.label}</span>
            <ChevronDown className={`${open ? "rotate-180" : ""}`} />
          </button>
          <div className="overflow-hidden transition-[max-height] duration-300" style={{ maxHeight: open ? "28rem" : "0" }}>
            <div className="pl-3 pt-2">
              {item.children.map((c) =>
                c.children?.length ? (
                  <MobileSubSection key={c.label} parent={c} />
                ) : (
                  <Link
                    key={c.label}
                    href={c.href || "#"}
                    className="block rounded-md px-2 py-2 text-sm text-white hover:bg-orange-500 transition-colors"
                  >
                    {c.label}
                  </Link>
                )
              )}
            </div>
          </div>
        </>
      ) : (
        <Link href={item.href || "#"} className="block py-1 text-white">
          {item.label}
        </Link>
      )}
    </div>
  );
}

function MobileSubSection({ parent }: { parent: MenuItem }) {
  const [open, setOpen] = useState(true); // open by default
  return (
    <div className="mb-2">
      <button
        className="flex w-full items-center justify-between rounded-md px-2 py-2 text-sm font-semibold text-white hover:bg-orange-500 transition-colors"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
      >
        {parent.label}
        <ChevronDown className={`${open ? "rotate-180" : ""}`} size={12} />
      </button>
      <div className="overflow-hidden transition-[max-height] duration-300" style={{ maxHeight: open ? "22rem" : "0" }}>
        <div className="pl-3">
          {parent.children?.map((gc) => (
            <Link
              key={gc.label}
              href={gc.href || "#"}
              className="block rounded-md px-2 py-2 text-sm text-white hover:bg-orange-500 transition-colors"
            >
              {gc.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ----------------- Icons ----------------- */
function ChevronDown({ className = "", size = 14, scrolled = false }) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" className={`transition ${scrolled ? 'text-gray-900' : 'text-white'} ${className}`} aria-hidden="true">
      <path d="M5 7l5 6 5-6" fill="currentColor" />
    </svg>
  );
}
function ChevronRight({ size = 14 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" aria-hidden="true" className="text-gray-400">
      <path d="M7 5l6 5-6 5" fill="currentColor" />
    </svg>
  );
}
function Burger({ open, scrolled = false }: { open: boolean; scrolled?: boolean }) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" className={`fill-current transition ${scrolled ? 'text-gray-900' : 'text-white'}`}>
      {open ? (
        <path d="M18.3 5.71L12 12.01 5.7 5.7 4.29 7.11 10.59 13.4 4.29 19.7 5.7 21.11 12 14.82l6.3 6.3 1.41-1.41-6.3-6.3 6.3-6.29z" />
      ) : (
        <path d="M3 6h18v2H3V6zm0 5h18v2H3v-2zm0 5h18v2H3v-2z" />
      )}
    </svg>
  );
}
