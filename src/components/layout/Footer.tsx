import { Link } from "react-router-dom";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { site } from "@/config/site";
import { services } from "@/data/services";
import { ZelligeGrid } from "@/components/decor/ZelligeGrid";
import { waHref, defaultWaMessage } from "@/lib/wa";

const colTitle = "text-[11px] font-semibold uppercase tracking-[0.25em] text-gold";
const footLink = "text-sm text-white/65 transition-colors hover:text-gold";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-navy text-white">
      <ZelligeGrid className="pointer-events-none absolute inset-0 h-full w-full" opacity={0.05} color="#F8F6F1" />
      <div className="container-site relative py-16 lg:py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div>
            <img src="/logo-cafirm-white.png" alt="CAFIRM" className="h-11 w-auto" width={160} height={53} />
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-white/65">
              Cabinet comptable et fiscal indépendant fondé en {site.founded} à Casablanca. Nous accompagnons PME,
              entrepreneurs et investisseurs étrangers avec rigueur, proximité et confidentialité.
            </p>
            <div className="mt-6 flex gap-3">
              {(
                [
                  ["LinkedIn", site.socials.linkedin, "in"],
                  ["Facebook", site.socials.facebook, "f"],
                  ["Instagram", site.socials.instagram, "ig"],
                ] as const
              ).map(([label, href, short]) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-[2px] border border-white/15 text-xs font-semibold uppercase text-white/70 transition-all hover:border-gold hover:text-gold"
                >
                  {short}
                </a>
              ))}
            </div>
          </div>

          <nav aria-label="Services">
            <p className={colTitle}>Services</p>
            <ul className="mt-5 space-y-3">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link to={`/services/${s.slug}`} className={footLink}>
                    {s.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/investir-au-maroc" className={footLink}>
                  Investir au Maroc
                </Link>
              </li>
            </ul>
          </nav>

          <nav aria-label="Le cabinet">
            <p className={colTitle}>Cabinet</p>
            <ul className="mt-5 space-y-3">
              <li><Link to="/le-cabinet" className={footLink}>Qui sommes-nous</Link></li>
              <li><Link to="/actualites" className={footLink}>Actualités</Link></li>
              <li><Link to="/prendre-rendez-vous" className={footLink}>Prendre rendez-vous</Link></li>
              <li><Link to="/contact" className={footLink}>Contact</Link></li>
              <li>
                <a href={waHref(defaultWaMessage)} target="_blank" rel="noopener noreferrer" className={footLink}>
                  WhatsApp
                </a>
              </li>
            </ul>
          </nav>

          <div>
            <p className={colTitle}>Contact</p>
            <ul className="mt-5 space-y-4 text-sm text-white/65">
              <li className="flex gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
                <span>
                  {site.address.street}
                  <br />
                  {site.address.district}, {site.address.postalCode} {site.address.city}
                </span>
              </li>
              <li className="flex gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
                <a href={`tel:${site.phone}`} className="transition-colors hover:text-gold">
                  {site.phoneDisplay}
                </a>
              </li>
              <li className="flex gap-3">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
                <a href={`mailto:${site.email}`} className="transition-colors hover:text-gold">
                  {site.email}
                </a>
              </li>
              <li className="flex gap-3">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
                <span>
                  {site.hours.map((h) => (
                    <span key={h.days} className="block">
                      {h.days} : {h.time}
                    </span>
                  ))}
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-7 text-xs text-white/45 sm:flex-row sm:items-center">
          <p>
            © {new Date().getFullYear()} {site.legalName} — Cabinet comptable et fiscal, {site.address.city}. Tous droits réservés.
          </p>
          <div className="flex gap-6">
            <Link to="/mentions-legales" className="transition-colors hover:text-gold">
              Mentions légales
            </Link>
            <Link to="/politique-de-confidentialite" className="transition-colors hover:text-gold">
              Politique de confidentialité
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
