import { site } from "@/config/site";

/** Lien WhatsApp avec message pré-rempli. */
export function waHref(message: string): string {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
}

export const defaultWaMessage =
  "Bonjour CAFIRM, je visite votre site et j'aimerais échanger avec un conseiller au sujet de mon entreprise.";
