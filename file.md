You are building the visual and navigation framework for the new MTC (Mauritanienne des Travaux et Constructions)
this is a nextjs app router with tailwindcss configured, The goal is to recreate the company’s WordPress website with a multi-page structure, accurate brand colors, and a professional, smooth and fluid design with responsivenss.

General guidelines

Framework: Next.js 14 (App Router) + Tailwind CSS + shadcn/ui + Framer Motion.

The website must be multi-page, not one-page scrolling.

Use clean, semantic HTML (header, nav, main, footer).

Use modern typography (Open Sans or Poppins).

Animations: soft fade or slide-up on scroll; nothing heavy.

Use Next Image for all images (lazy loading built in).

Keep hover and active states consistent.


You are building the visual and navigation framework for the new MTC (Mauritanienne des Travaux et Constructions)
this is a nextjs app router with tailwindcss configured, The goal is to recreate the company’s WordPress website with a multi-page structure, accurate brand colors, and a professional, smooth and fluid design with responsivenss.

Brand identity and colors

Primary orange: #F15A24

Orange hover/dark: #E55320

Light orange gradient: top #FFF6F3 → bottom #FDE0D1

Soft beige background: #E8DDDB

Dark gray: #4A4A4A (navbar, footer)

Text black: #1C1C1C

White: for cards and content blocks.

Menu
├─ Qui sommes-nous ?                 (/qui-sommes-nous)
│  ├─ Mot du Directeur               (/qui-sommes-nous/mot-du-directeur)
│  ├─ L’entreprise                   (/qui-sommes-nous/lentreprise)
│  │  ├─ Vision & Mission            (/qui-sommes-nous/lentreprise/vision-mission)
│  │  ├─ Organigramme                (/qui-sommes-nous/lentreprise/organigramme)
│  │  └─ Moyens Matériels            (/qui-sommes-nous/lentreprise/moyens-materiels)
│  └─ Nos Engagements                (/qui-sommes-nous/nos-engagements)
│     ├─ Nos Valeurs                 (/qui-sommes-nous/nos-engagements/nos-valeurs)
│     ├─ Politiques QHSE             (/qui-sommes-nous/nos-engagements/politiques-qhse)
│     └─ Politique RF                (/qui-sommes-nous/nos-engagements/politique-rf)
├─ Nos Expertises                    (/nos-expertises)
│  ├─ Construction Routière          (/nos-expertises/construction-routiere)
│  ├─ Périmètres irrigués et axes hydrauliques (/nos-expertises/perimetres-irrigues-axes-hydrauliques)
│  └─ Barrages et bassins            (/nos-expertises/barrages-bassins)
├─ Projets & Réalisations            (/projets-realisations)
│  ├─ Projets en cours               (/projets-realisations/projets-en-cours)
│  └─ Projets réalisés               (/projets-realisations/projets-realises)
└─ Contactez-Nous                    (/contactez-nous)
