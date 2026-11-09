/**
 * Données centrales du cabinet — tout ce qui identifie CAFIRM se modifie ici.
 */
export const site = {
  name: "CAFIRM",
  legalName: "CAFIRM SARL",
  baseUrl: "https://www.cafirm.ma",
  tagline: "La rigueur comptable au service de votre croissance.",
  description:
    "Cabinet comptable et fiscal à Casablanca : tenue comptable, fiscalité, création d'entreprise et accompagnement des investisseurs étrangers au Maroc.",
  founded: 2012,

  phone: "+212522274589",
  phoneDisplay: "+212 5 22 27 45 89",
  whatsapp: "212661842735",
  whatsappDisplay: "+212 6 61 84 27 35",
  email: "contact@cafirm.ma",

  address: {
    street: "Angle Bd Zerktouni & Rue Ibn Toumart, 7ᵉ étage",
    district: "Quartier Gauthier",
    city: "Casablanca",
    postalCode: "20100",
    country: "Maroc",
    countryCode: "MA",
  },

  hours: [
    { days: "Lundi — Vendredi", time: "9h00 — 18h00" },
    { days: "Samedi", time: "Sur rendez-vous" },
  ],

  mapEmbedUrl:
    "https://maps.google.com/maps?q=Boulevard%20Zerktouni%2C%20Gauthier%2C%20Casablanca&t=&z=15&ie=UTF8&iwloc=&output=embed",

  socials: {
    linkedin: "https://www.linkedin.com/company/cafirm",
    facebook: "https://www.facebook.com/cafirm.ma",
    instagram: "https://www.instagram.com/cafirm.ma",
  },

  legal: {
    rc: "RC Casablanca n° 245 189",
    taxId: "IF 18762345",
    ice: "ICE 001542367000078",
    patente: "TP 34502189",
    cnss: "CNSS 7893456",
    capital: "500 000 MAD",
    publisher: "Youssef El Amrani",
    host: "OVHcloud — 2 rue Kellermann, 59100 Roubaix, France — www.ovhcloud.com",
  },

  manager: {
    name: "Youssef El Amrani",
    initials: "YE",
    title: "Expert-comptable, fondateur & gérant",
    bio: "Diplômé de l'ISCAE Casablanca et titulaire du diplôme national d'expert-comptable, Youssef El Amrani a exercé huit ans au sein d'un cabinet d'audit international avant de fonder CAFIRM en 2012. Il accompagne aujourd'hui dirigeants de PME et investisseurs étrangers dans leurs décisions comptables, fiscales et stratégiques.",
  },

  figures: [
    { value: 12, suffix: "+", label: "années d'expertise" },
    { value: 350, suffix: "+", label: "entreprises accompagnées" },
    { value: 40, suffix: "+", label: "investisseurs étrangers implantés" },
    { value: 98, suffix: "%", label: "de clients fidèles" },
  ],

  values: [
    {
      title: "Rigueur",
      text: "Des comptes justes, des déclarations exactes, des délais tenus. La précision n'est pas une option : c'est notre métier.",
    },
    {
      title: "Proximité",
      text: "Un interlocuteur dédié qui connaît votre dossier, répond vite et parle le langage de votre activité.",
    },
    {
      title: "Confidentialité",
      text: "Vos données financières sont traitées avec une discrétion absolue, dans le respect du secret professionnel.",
    },
    {
      title: "Anticipation",
      text: "Nous ne constatons pas les chiffres, nous les anticipons : alertes fiscales, échéances, optimisations légales.",
    },
  ],

  method: [
    {
      title: "Diagnostic",
      text: "Analyse de votre situation comptable, fiscale et sociale ; identification des risques et des opportunités.",
    },
    {
      title: "Mise en place",
      text: "Organisation des flux de pièces, paramétrage des outils, calendrier déclaratif et répartition des rôles.",
    },
    {
      title: "Suivi régulier",
      text: "Tenue, déclarations et paie traitées aux échéances, avec un reporting clair chaque mois.",
    },
    {
      title: "Pilotage & conseil",
      text: "Tableaux de bord, points trimestriels et recommandations pour éclairer vos décisions de gestion.",
    },
  ],

  testimonials: [
    {
      quote:
        "CAFIRM a repris une comptabilité en retard de huit mois et tout remis à niveau avant l'échéance fiscale. Depuis, je reçois mon reporting le 10 de chaque mois, sans exception.",
      name: "Salma R.",
      role: "Directrice générale, PME industrielle — Casablanca",
    },
    {
      quote:
        "De la création de ma SARL aux premières déclarations de TVA, tout a été anticipé. On sent un cabinet qui connaît parfaitement l'administration marocaine.",
      name: "Mehdi T.",
      role: "Fondateur, société e-commerce — Rabat",
    },
    {
      quote:
        "J'ai créé ma société marocaine depuis Paris, entièrement à distance. Visios efficaces, documents clairs, zéro aller-retour inutile. Un accompagnement vraiment rassurant.",
      name: "Claire D.",
      role: "Investisseuse française, secteur hôtellerie — Marrakech",
    },
  ],
} as const;

export interface NavItem {
  label: string;
  to: string;
  hasChildren?: boolean;
}

export const nav: NavItem[] = [
  { label: "Accueil", to: "/" },
  { label: "Le cabinet", to: "/le-cabinet" },
  { label: "Services", to: "/services", hasChildren: true },
  { label: "Investir au Maroc", to: "/investir-au-maroc" },
  { label: "Actualités", to: "/actualites" },
  { label: "Contact", to: "/contact" },
];
