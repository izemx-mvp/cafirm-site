/**
 * Registre des photos du site.
 *
 * Les fichiers sont dans public/images/photos/, en WebP, déclinés en plusieurs
 * largeurs : `<nom>-<largeur>.webp` (ex. reunion-conseil-800.webp).
 *
 * Pour remplacer une photo (par exemple par une vraie photo des bureaux ou de
 * l'équipe) : déposer les nouveaux fichiers sous le même nom, puis ajuster
 * `width`/`height` (dimensions d'origine) et `alt` ci-dessous.
 *
 * Sources actuelles : Unsplash (licence Unsplash, usage commercial libre) et
 * rawpixel (CC0, domaine public). Aucune attribution n'est exigée ; l'origine
 * est notée pour traçabilité.
 */
export interface PhotoInfo {
  /** Nom de base du fichier dans public/images/photos/ */
  file: string;
  /** Largeurs disponibles, en pixels */
  widths: number[];
  /** Dimensions de la plus grande déclinaison (ratio utilisé contre le CLS) */
  width: number;
  height: number;
  alt: string;
  source: string;
}

const photo = (file: string, alt: string, source: string, ratio = 1.5, widths = [800, 1600]): PhotoInfo => {
  const width = widths[widths.length - 1];
  return { file, widths, width, height: Math.round(width / ratio), alt, source };
};

export const photos = {
  /* ── Ambiance cabinet ── */
  reunionConseil: photo(
    "reunion-conseil",
    "Réunion de travail autour d'une table : prise de notes lors d'un rendez-vous de conseil",
    "images.unsplash.com/photo-1517048676732-d65bc937f952",
  ),
  bureauReunion: photo(
    "bureau-reunion",
    "Salle de réunion lumineuse avec grande table et baies vitrées",
    "images.unsplash.com/photo-1497366811353-6870744d04b2",
  ),
  bureauLumineux: photo(
    "bureau-lumineux",
    "Poste de travail face aux baies vitrées d'un immeuble de bureaux en ville",
    "images.unsplash.com/photo-1497215728101-856f4ea42174",
  ),
  bureauCabinet: photo(
    "bureau-cabinet",
    "Espace de bureaux moderne aux murs bleu nuit",
    "images.unsplash.com/photo-1497366216548-37526070297c",
  ),
  salleConference: photo(
    "salle-conference",
    "Salle de conférence avec longue table de réunion et vue panoramique",
    "images.unsplash.com/photo-1462826303086-329426d1aef5",
  ),

  /* ── Maroc ── */
  zelligeFontaine: photo(
    "zellige-fontaine",
    "Fontaine marocaine en zellige et stuc sculpté",
    "images.unsplash.com/photo-1539020140153-e479b8c22e70",
  ),
  casablancaCorniche: photo(
    "casablanca-corniche",
    "La corniche de Casablanca et le phare d'El Hank face à l'océan Atlantique",
    "images.unsplash.com/photo-1577147443647-81856d5151af",
  ),
  mosqueeHassanII: photo(
    "mosquee-hassan-ii",
    "La mosquée Hassan II à Casablanca sous un ciel bleu",
    "rawpixel.com/image/5907026 (CC0)",
    1024 / 609,
    [800, 1024],
  ),

  /* ── Services ── */
  serviceTenueComptable: photo(
    "service-tenue-comptable",
    "Mains annotant des documents comptables à côté d'un ordinateur portable",
    "images.unsplash.com/photo-1454165804606-c3d57bc86b40",
  ),
  serviceFiscalite: photo(
    "service-fiscalite",
    "Graphique de progression tracé à la main, règle et stylo doré sur un bureau en bois",
    "images.unsplash.com/photo-1543286386-713bdd548da4",
  ),
  serviceCreation: photo(
    "service-creation",
    "Signature d'un document officiel au stylo",
    "images.unsplash.com/photo-1450101499163-c8848c66ca85",
  ),
  serviceConseil: photo(
    "service-conseil",
    "Poignée de main concluant un rendez-vous d'affaires",
    "images.unsplash.com/photo-1521791136064-7986c2920216",
  ),

  /* ── Articles ── */
  articleLoiDeFinances: photo(
    "article-loi-de-finances",
    "Bureau vu de dessus : carnet, loupe, café et ordinateur portable",
    "images.unsplash.com/photo-1497032628192-86f99bcd76bc",
  ),
  articleTva: photo(
    "article-tva",
    "Analyse de documents chiffrés et de graphiques sur une table de travail",
    "images.unsplash.com/photo-1434626881859-194d67b2b86f",
  ),
  articleSarl: photo(
    "article-sarl",
    "Jeune équipe d'entrepreneurs échangeant dans un espace de travail",
    "images.unsplash.com/photo-1556761175-b413da4baf72",
    2000 / 1500,
  ),
  articleInvestisseurs: photo(
    "article-investisseurs",
    "Le minaret de la Koutoubia à Marrakech devant l'Atlas enneigé",
    "images.unsplash.com/photo-1597212618440-806262de4f6b",
  ),
  articleExternaliser: photo(
    "article-externaliser",
    "Tableau de bord financier affiché sur un ordinateur portable",
    "images.unsplash.com/photo-1460925895917-afdab827c52f",
    2000 / 1425,
  ),
  articleCnss: photo(
    "article-cnss",
    "Équipe réunie autour d'une table de travail",
    "images.unsplash.com/photo-1521737604893-d14cc237f11d",
    2000 / 1312,
  ),
} satisfies Record<string, PhotoInfo>;

export type PhotoKey = keyof typeof photos;
