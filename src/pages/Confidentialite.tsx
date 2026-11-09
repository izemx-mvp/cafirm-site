import { site } from "@/config/site";
import { Seo } from "@/lib/seo";
import { PageHero } from "@/components/ui/PageHero";

const h2Cls = "mt-10 font-display text-2xl font-semibold text-navy";
const pCls = "mt-4 text-[15px] leading-relaxed text-ink/85";
const liCls = "mt-2 text-[15px] leading-relaxed text-ink/85";

export function Confidentialite() {
  return (
    <>
      <Seo
        title="Politique de confidentialité — CAFIRM"
        description="Politique de confidentialité du site www.cafirm.ma : traitement des données personnelles conformément à la loi marocaine n° 09-08 et à la CNDP."
        path="/politique-de-confidentialite"
      />
      <PageHero label="Vos données" title="Politique de confidentialité" />
      <section className="bg-white py-16 lg:py-20">
        <div className="container-site max-w-3xl">
          <p className={pCls}>
            {site.legalName} attache une importance particulière à la protection des données personnelles, conformément
            à la loi n° 09-08 relative à la protection des personnes physiques à l'égard du traitement des données à
            caractère personnel et aux directives de la Commission Nationale de contrôle de la protection des Données à
            caractère Personnel (CNDP).
          </p>

          <h2 className={h2Cls}>1. Données collectées</h2>
          <p className={pCls}>
            Ce site ne dispose d'aucune base de données : les formulaires (contact, rendez-vous, projet
            d'investissement) ne transmettent aucune information à un serveur. À la validation d'un formulaire, un
            message est généré localement dans votre navigateur et ouvert dans l'application WhatsApp de votre choix :
            vous restez libre de l'envoyer ou non. Les données alors communiquées (nom, coordonnées, contenu du
            message) sont celles que vous choisissez de transmettre via WhatsApp, e-mail ou téléphone.
          </p>

          <h2 className={h2Cls}>2. Finalités du traitement</h2>
          <p className={pCls}>Les informations que vous nous transmettez sont utilisées exclusivement pour :</p>
          <ul className="mt-2 list-disc pl-6">
            <li className={liCls}>répondre à vos demandes de renseignement et de rendez-vous ;</li>
            <li className={liCls}>assurer le suivi de la relation client dans le cadre de nos missions ;</li>
            <li className={liCls}>respecter nos obligations légales et déontologiques.</li>
          </ul>
          <p className={pCls}>
            Aucune donnée n'est vendue, louée ou transmise à des tiers à des fins commerciales.
          </p>

          <h2 className={h2Cls}>3. Durée de conservation</h2>
          <p className={pCls}>
            Les données liées à une simple demande de contact sont conservées le temps du traitement de la demande,
            puis au maximum douze mois. Les données liées à une mission contractuelle sont conservées pendant la durée
            de la mission et les délais de prescription légaux applicables aux professions comptables.
          </p>

          <h2 className={h2Cls}>4. Cookies</h2>
          <p className={pCls}>
            Ce site n'utilise ni cookie publicitaire ni traceur d'audience tiers. Seuls des éléments techniques
            strictement nécessaires au fonctionnement (préférences d'affichage, sécurité) peuvent être stockés par
            votre navigateur. La carte interactive de la page Contact est fournie par Google Maps, qui peut déposer ses
            propres cookies lors de son chargement ; reportez-vous à la politique de confidentialité de Google pour en
            savoir plus.
          </p>

          <h2 className={h2Cls}>5. Vos droits</h2>
          <p className={pCls}>
            Conformément à la loi n° 09-08, vous disposez d'un droit d'accès, de rectification et d'opposition sur les
            données vous concernant. Pour l'exercer, adressez votre demande par e-mail à {site.email} ou par courrier à
            l'adresse du cabinet : {site.address.street}, {site.address.district}, {site.address.postalCode}{" "}
            {site.address.city}. Nous nous engageons à répondre dans un délai maximal de trente jours.
          </p>

          <h2 className={h2Cls}>6. Sécurité et secret professionnel</h2>
          <p className={pCls}>
            Au-delà des obligations légales, l'ensemble des informations confiées au cabinet est couvert par le secret
            professionnel auquel sont tenus ses collaborateurs. Des mesures techniques et organisationnelles
            appropriées protègent vos données contre tout accès non autorisé.
          </p>

          <h2 className={h2Cls}>7. Contact</h2>
          <p className={pCls}>
            Pour toute question relative à la présente politique : {site.email} — {site.phoneDisplay}.
          </p>
        </div>
      </section>
    </>
  );
}
