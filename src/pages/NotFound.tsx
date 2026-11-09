import { Seo } from "@/lib/seo";
import { Button } from "@/components/ui/Button";
import { Star8 } from "@/components/decor/Star8";
import { ZelligeGrid } from "@/components/decor/ZelligeGrid";

export function NotFound() {
  return (
    <>
      <Seo
        title="Page introuvable — CAFIRM"
        description="La page que vous recherchez n'existe pas ou a été déplacée. Retrouvez l'ensemble des services et actualités de CAFIRM depuis l'accueil."
        path="/404"
      />
      <section className="relative overflow-hidden bg-ivory">
        <ZelligeGrid className="pointer-events-none absolute inset-0 h-full w-full" opacity={0.06} />
        <div className="container-site relative flex min-h-[70vh] flex-col items-center justify-center py-24 text-center">
          <Star8 className="h-10 w-10 text-gold" />
          <p className="mt-8 font-display text-7xl font-semibold leading-none text-navy sm:text-8xl">404</p>
          <h1 className="mt-5 font-display text-2xl font-semibold text-navy sm:text-3xl">
            Cette page n'existe pas — ou plus
          </h1>
          <p className="mt-4 max-w-md text-[15px] text-muted">
            Comme une écriture sans pièce justificative, ce lien ne mène nulle part. Reprenons depuis un point sûr.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button to="/">Retour à l'accueil</Button>
            <Button to="/contact" variant="outline">
              Contacter le cabinet
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
