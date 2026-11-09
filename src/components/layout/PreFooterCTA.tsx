import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { Star8 } from "@/components/decor/Star8";
import { waHref, defaultWaMessage } from "@/lib/wa";

/** Bandeau d'appel à l'action avant le footer. */
export function PreFooterCTA() {
  return (
    <section className="border-t border-line bg-ivory" aria-label="Prendre contact">
      <div className="container-site py-16 lg:py-20">
        <Reveal className="flex flex-col items-center text-center">
          <Star8 className="h-7 w-7 text-gold" />
          <h2 className="mt-5 max-w-2xl font-display text-3xl font-semibold leading-tight text-navy sm:text-4xl">
            Un projet, une question fiscale&nbsp;? Parlons-en.
          </h2>
          <p className="mt-4 max-w-xl text-[15px] text-muted">
            Premier échange gratuit et sans engagement, au cabinet, en visioconférence ou par téléphone.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button to="/prendre-rendez-vous">Prendre rendez-vous</Button>
            <Button href={waHref(defaultWaMessage)} external variant="outline">
              Écrire sur WhatsApp
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
