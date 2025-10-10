export type NavItem = {
    label: string;
    href?: string;
    children?: NavItem[];
  };
  
  export const NAV: NavItem[] = [
    {
      label: "Qui sommes-nous ?",
      href: "/qui-sommes-nous",
      children: [
        { label: "Mot du Directeur", href: "/qui-sommes-nous/mot-du-directeur" },
        {
          label: "L’entreprise",
          href: "/qui-sommes-nous/lentreprise",
          children: [
            { label: "Vision & Mission", href: "/qui-sommes-nous/lentreprise/vision-mission" },
            { label: "Organigramme", href: "/qui-sommes-nous/lentreprise/organigramme" },
            { label: "Moyens Matériels", href: "/qui-sommes-nous/lentreprise/moyens-materiels" },
          ],
        },
        {
          label: "Nos Engagements",
          href: "/qui-sommes-nous/nos-engagements",
          children: [
            { label: "Nos Valeurs", href: "/qui-sommes-nous/nos-engagements/nos-valeurs" },
            { label: "Politiques QHSE", href: "/qui-sommes-nous/nos-engagements/politiques-qhse" },
            { label: "Politique RF", href: "/qui-sommes-nous/nos-engagements/politique-rf" },
          ],
        },
      ],
    },
    {
      label: "Nos Expertises",
      href: "/nos-expertises",
      children: [
        { label: "Construction Routière", href: "/nos-expertises/construction-routiere" },
        { label: "Périmètres irrigués et axes hydrauliques", href: "/nos-expertises/perimetres-irrigues-axes-hydrauliques" },
        { label: "Barrages et bassins", href: "/nos-expertises/barrages-bassins" },
      ],
    },
    {
      label: "Projets & Réalisations",
      href: "/projets-realisations",
      children: [
        { label: "Projets en cours", href: "/projets-realisations/projets-en-cours" },
        { label: "Projets réalisés", href: "/projets-realisations/projets-realises" },
      ],
    },
    { label: "Contactez-Nous", href: "/contactez-nous" },
  ];
  