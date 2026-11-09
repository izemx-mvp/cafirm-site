import { site } from "@/config/site";
import { Seo } from "@/lib/seo";
import { PageHero } from "@/components/ui/PageHero";

const h2Cls = "mt-10 font-display text-2xl font-semibold text-navy";
const pCls = "mt-4 text-[15px] leading-relaxed text-ink/85";

export function MentionsLegales() {
  return (
    <>
      <Seo
        title="Mentions légales — CAFIRM"
        description="Mentions légales du site www.cafirm.ma, édité par CAFIRM SARL, cabinet comptable et fiscal à Casablanca."
        path="/mentions-legales"
      />
      <PageHero label="Informations légales" title="Mentions légales" />
      <section className="bg-white py-16 lg:py-20">
        <div className="container-site max-w-3xl">
          <h2 className={h2Cls}>1. Éditeur du site</h2>
          <p className={pCls}>
            Le site www.cafirm.ma est édité par {site.legalName}, société à responsabilité limitée au capital de{" "}
            {site.legal.capital}, dont le siège social est situé {site.address.street}, {site.address.district},{" "}
            {site.address.postalCode} {site.address.city}, {site.address.country}.
          </p>
          <p className={pCls}>
            {site.legal.rc} — {site.legal.taxId} — {site.legal.ice} — {site.legal.patente} — {site.legal.cnss}.
            <br />
            Téléphone : {site.phoneDisplay} — E-mail : {site.email}.
            <br />
            Directeur de la publication : {site.legal.publisher}, gérant.
          </p>

          <h2 className={h2Cls}>2. Hébergement</h2>
          <p className={pCls}>Le site est hébergé par {site.legal.host}.</p>

          <h2 className={h2Cls}>3. Propriété intellectuelle</h2>
          <p className={pCls}>
            L'ensemble des éléments composant le site (textes, graphismes, logos, illustrations, structure, charte
            graphique) est la propriété exclusive de {site.legalName} ou fait l'objet d'une autorisation d'utilisation.
            Toute reproduction, représentation, modification ou adaptation, totale ou partielle, par quelque procédé que
            ce soit, sans autorisation écrite préalable, est interdite et constitue une contrefaçon au sens de la loi
            n° 2-00 relative aux droits d'auteur et droits voisins.
          </p>

          <h2 className={h2Cls}>4. Responsabilité</h2>
          <p className={pCls}>
            Les informations publiées sur ce site, notamment dans la rubrique Actualités, ont une vocation générale
            d'information et ne constituent en aucun cas un conseil professionnel personnalisé. La réglementation
            comptable, fiscale et sociale marocaine évolue régulièrement : avant toute décision, rapprochez-vous du
            cabinet pour une analyse adaptée à votre situation. {site.legalName} ne saurait être tenue responsable de
            l'usage fait des informations publiées sans consultation préalable.
          </p>

          <h2 className={h2Cls}>5. Liens hypertextes</h2>
          <p className={pCls}>
            Le site peut contenir des liens vers des sites tiers. {site.legalName} n'exerce aucun contrôle sur leur
            contenu et décline toute responsabilité quant aux informations qui y sont publiées.
          </p>

          <h2 className={h2Cls}>6. Droit applicable</h2>
          <p className={pCls}>
            Les présentes mentions légales sont régies par le droit marocain. Tout litige relatif à l'utilisation du
            site relève de la compétence exclusive des tribunaux de Casablanca.
          </p>
        </div>
      </section>
    </>
  );
}
