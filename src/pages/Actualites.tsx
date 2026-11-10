import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Search } from "lucide-react";
import { categoryLabels, sortedPosts, type Category } from "@/data/posts";
import { Seo } from "@/lib/seo";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { PostCard, formatDate } from "@/components/cards/PostCard";
import { ArticleCover } from "@/components/decor/ArticleCover";
import { Photo } from "@/components/ui/Photo";

const filters: { value: Category | "all"; label: string }[] = [
  { value: "all", label: "Tous les articles" },
  ...(Object.entries(categoryLabels) as [Category, string][]).map(([value, label]) => ({ value, label })),
];

export function Actualites() {
  const [category, setCategory] = useState<Category | "all">("all");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return sortedPosts.filter((p) => {
      const matchCat = category === "all" || p.category === category;
      const matchQuery =
        q.length === 0 ||
        p.title.toLowerCase().includes(q) ||
        p.excerpt.toLowerCase().includes(q) ||
        categoryLabels[p.category].toLowerCase().includes(q);
      return matchCat && matchQuery;
    });
  }, [category, query]);

  const featured = category === "all" && query.trim() === "" ? (sortedPosts.find((p) => p.featured) ?? sortedPosts[0]) : null;
  const gridPosts = featured ? filtered.filter((p) => p.slug !== featured.slug) : filtered;

  return (
    <>
      <Seo
        title="Actualités — Fiscalité, comptabilité et création d'entreprise au Maroc | CAFIRM"
        description="Les éclairages de CAFIRM sur l'actualité comptable, fiscale et sociale marocaine : lois de finances, TVA, création d'entreprise, CNSS et investissement étranger."
        path="/actualites"
      />

      <PageHero
        label="Actualités"
        title={
          <>
            L'actualité décryptée pour les <span className="text-gold">dirigeants</span>
          </>
        }
        intro="Lois de finances, TVA, obligations sociales, investissement étranger : nos analyses pratiques, écrites pour décider — pas pour réviser le droit fiscal."
      />

      <section className="bg-white py-14 lg:py-20">
        <div className="container-site">
          {/* Filtres + recherche */}
          <Reveal className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex flex-wrap gap-2" role="group" aria-label="Filtrer par catégorie">
              {filters.map((f) => (
                <button
                  key={f.value}
                  type="button"
                  onClick={() => setCategory(f.value)}
                  aria-pressed={category === f.value}
                  className={`rounded-[2px] border px-3.5 py-2 text-xs font-semibold uppercase tracking-[0.1em] transition-all duration-200 ${
                    category === f.value
                      ? "border-navy bg-navy text-white"
                      : "border-line bg-white text-muted hover:border-gold hover:text-gold"
                  }`}
                >
                  {f.label}
                </button>
              ))}
            </div>
            <div className="relative lg:w-72">
              <Search className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted" aria-hidden="true" />
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Rechercher un article…"
                aria-label="Rechercher un article"
                className="w-full rounded-[2px] border border-line bg-ivory py-2.5 pl-10 pr-4 text-sm outline-none transition-colors focus:border-gold"
              />
            </div>
          </Reveal>

          {/* À la une */}
          {featured && (
            <Reveal delay={0.1} className="mt-10">
              <Link
                to={`/actualites/${featured.slug}`}
                className="card-lift group grid overflow-hidden rounded-md border border-line bg-white lg:grid-cols-2"
              >
                <div className="relative overflow-hidden bg-navy lg:min-h-[340px]">
                  {featured.cover ? (
                    <Photo
                      name={featured.cover}
                      sizes="(min-width: 1216px) 568px, (min-width: 1024px) 50vw, 100vw"
                      className="h-56 w-full object-cover transition-transform duration-700 group-hover:scale-[1.04] sm:h-72 lg:absolute lg:inset-0 lg:h-full"
                    />
                  ) : (
                    <ArticleCover
                      category={featured.category}
                      className="h-56 w-full transition-transform duration-500 group-hover:scale-[1.03] lg:h-full"
                    />
                  )}
                  <span className="absolute left-5 top-5 rounded-[2px] bg-gold px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-white">
                    À la une
                  </span>
                </div>
                <div className="flex flex-col justify-center p-8 lg:p-12">
                  <p className="text-xs text-muted">
                    {categoryLabels[featured.category]} · {formatDate(featured.date)} · {featured.readingTime} min
                  </p>
                  <h2 className="mt-3 font-display text-2xl font-semibold leading-snug text-navy transition-colors group-hover:text-gold sm:text-3xl">
                    {featured.title}
                  </h2>
                  <p className="mt-4 text-sm leading-relaxed text-muted sm:text-[15px]">{featured.excerpt}</p>
                  <span className="mt-6 inline-flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.16em] text-navy group-hover:text-gold">
                    Lire l'article <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </span>
                </div>
              </Link>
            </Reveal>
          )}

          {/* Grille */}
          <p className="mt-12 text-xs uppercase tracking-[0.2em] text-muted" aria-live="polite">
            {filtered.length} article{filtered.length > 1 ? "s" : ""}
            {category !== "all" ? ` — ${categoryLabels[category as Category]}` : ""}
          </p>
          {gridPosts.length > 0 ? (
            <div className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {gridPosts.map((post, i) => (
                <Reveal key={post.slug} delay={(i % 3) * 0.08} className="h-full">
                  <PostCard post={post} />
                </Reveal>
              ))}
            </div>
          ) : (
            filtered.length === 0 && (
              <div className="mt-6 rounded-md border border-line bg-ivory p-12 text-center">
                <p className="font-display text-xl font-semibold text-navy">Aucun article ne correspond à votre recherche.</p>
                <p className="mt-2 text-sm text-muted">Essayez un autre mot-clé ou réinitialisez les filtres.</p>
                <button
                  type="button"
                  onClick={() => {
                    setQuery("");
                    setCategory("all");
                  }}
                  className="link-underline mt-5 text-[12px] font-semibold uppercase tracking-[0.16em] text-gold"
                >
                  Réinitialiser les filtres
                </button>
              </div>
            )
          )}
        </div>
      </section>
    </>
  );
}
