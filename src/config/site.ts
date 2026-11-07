export const site = {
  name: "CAFIRM",
  tagline: "Expertise comptable, fiscale & conseil",
  founded: 2012,
  manager: "Nadia El Mansouri",
  managerTitle: "Expert-comptable & associée fondatrice",
  managerBio:
    "Depuis plus de quinze ans, Nadia accompagne dirigeants et investisseurs avec une conviction simple : une comptabilité bien tenue est un outil de décision, pas une formalité. Elle a fondé CAFIRM pour offrir aux entreprises un conseil exigeant, accessible et ancré dans la réalité marocaine.",
  phone: "+212 5 22 36 48 20",
  phoneHref: "+212522364820",
  whatsapp: "212661234567",
  email: "contact@cafirm.ma",
  address: "12, boulevard Abdelmoumen, 4e étage, Casablanca 20360, Maroc",
  hours: "Du lundi au vendredi, de 9h à 18h",
  figures: [
    { value: "12+", label: "années d’expertise" },
    { value: "350+", label: "entreprises accompagnées" },
    { value: "40+", label: "investisseurs étrangers" },
    { value: "98%", label: "de clients fidèles" },
  ],
  socials: [
    { label: "LinkedIn", href: "https://www.linkedin.com/company/cafirm/" },
    { label: "Instagram", href: "https://www.instagram.com/" },
  ],
};

export const whatsappUrl = (message: string) =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;