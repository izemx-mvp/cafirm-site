import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ArrowRight, Check, Link2 } from "lucide-react";
import { categoryLabels, getPost, sortedPosts } from "@/data/posts";
import { site } from "@/config/site";
import { Seo, articleJsonLd } from "@/lib/seo";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { Star8 } from "@/components/decor/Star8";
import { ArticleCover } from "@/components/decor/ArticleCover";
import { PostCard, formatDate } from "@/components/cards/PostCard";
import { NotFound } from "./NotFound";

export function Article() {
  const { slug } = useParams();
  const post = getPost(slug);
  const [copied, setCopied] = useState(false);

  if (!post) return <NotFound />;

  const path = `/actualites/${post.slug}`;
  const shareUrl = site.baseUrl + path;
  const related = sortedPosts.filter((p) => p.slug !== post.slug && p.category === post.category);
  const suggestions = [...related, ...sortedPosts.filter((p) => p.slug !== post.slug && p.category !== post.category)].slice(0, 3);

  const shareLinks = [
    { label: "LinkedIn", href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}` },
    { label: "X", href: `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(post.title)}` },
    { label: "Facebook", href: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}` },
    { label: "WhatsApp", href: `https://wa.me/?text=${encodeURIComponent(`${post.title} — ${shareUrl}`)}` },
  ];

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      /* presse-papiers indisponible : le lien reste visible dans la barre d'adresse */
    }
  };

  return (
    <>
      <Seo
        title={`${post.title} | CAFIRM`}
        description={post.excerpt}
        path={path}
        type="article"
        jsonLd={articleJsonLd({
          title: post.title,
          description: post.excerpt,
          path,
          datePublished: post.date,
          category: categoryLabels[post.category],
        })}
      />

      {/* Hero article */}
      <section className="border-b border-line bg-ivory">
        <div className="container-site py-12 lg:py-16">
          <Reveal>
            <Link
              to="/actualites"
              className="inline-flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.16em] text-muted transition-colors hover:text-gold"
            >
              <ArrowLeft className="h-3.5 w-3.5" aria-hidden="true" /> Toutes les actualités
            </Link>
            <div className="mt-6 flex flex-wrap items-center gap-3 text-xs text-muted">
              <span className="rounded-[2px] bg-gold px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-white">
                {categoryLabels[post.category]}
              </span>
              <time dateTime={post.date}>{formatDate(post.date)}</time>
              <span aria-hidden="true">·</span>
              <span>{post.readingTime} min de lecture</span>
            </div>
            <h1 className="mt-5 max-w-4xl font-display text-3xl font-semibold leading-[1.12] text-navy sm:text-4xl lg:text-5xl">
              {post.title}
            </h1>
          </Reveal>
          <Reveal delay={0.15} className="mt-10 overflow-hidden rounded-md border border-line">
            <ArticleCover category={post.category} className="h-56 w-full sm:h-72 lg:h-96" />
          </Reveal>
        </div>
      </section>

      {/* Corps + sommaire */}
      <section className="bg-white py-14 lg:py-20">
        <div className="container-site grid gap-14 lg:grid-cols-[minmax(0,1fr)_280px]">
          <article className="max-w-3xl">
            <p className="border-l-2 border-gold pl-5 font-display text-xl italic leading-relaxed text-ink sm:text-[1.35rem]">
              {post.intro}
            </p>
            {post.sections.map((section) => (
              <section key={section.id} id={section.id} className="mt-12 scroll-mt-28">
                <h2 className="font-display text-2xl font-semibold leading-snug text-navy sm:text-3xl">
                  {section.heading}
                </h2>
                {section.paragraphs.map((p, i) => (
                  <p key={i} className="mt-5 text-[15px] leading-[1.85] text-ink/85">
                    {p}
                  </p>
                ))}
                {section.list && (
                  <ul className="mt-6 space-y-3 rounded-md border border-line bg-ivory p-6">
                    {section.list.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm leading-snug text-ink">
                        <Star8 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-gold" />
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            ))}

            {/* CTA fin d'article */}
            <aside className="mt-14 rounded-md border border-gold/40 bg-navy p-8 text-white lg:p-10">
              <Star8 className="h-6 w-6 text-gold" />
              <h2 className="mt-4 font-display text-2xl font-semibold">Ce sujet concerne votre entreprise ?</h2>
              <p className="mt-2.5 max-w-xl text-sm leading-relaxed text-white/70">
                Chaque situation mérite une analyse spécifique. Échangeons 30 minutes sur votre cas : premier
                rendez-vous gratuit, au cabinet ou en visioconférence.
              </p>
              <div className="mt-6">
                <Button to="/prendre-rendez-vous" variant="gold">
                  Prendre rendez-vous <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Button>
              </div>
            </aside>
          </article>

          {/* Sommaire sticky + partage */}
          <aside className="hidden lg:block">
            <div className="sticky top-28 space-y-8">
              <nav aria-label="Sommaire de l'article" className="rounded-md border border-line bg-ivory p-6">
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-gold">Sommaire</p>
                <ol className="mt-4 space-y-3">
                  {post.sections.map((s, i) => (
                    <li key={s.id}>
                      <a
                        href={`#${s.id}`}
                        className="group flex gap-3 text-[13px] leading-snug text-muted transition-colors hover:text-gold"
                      >
                        <span className="font-display font-semibold text-gold">{String(i + 1).padStart(2, "0")}</span>
                        <span className="group-hover:underline">{s.heading}</span>
                      </a>
                    </li>
                  ))}
                </ol>
              </nav>
              <div className="rounded-md border border-line p-6">
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-gold">Partager</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {shareLinks.map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-[2px] border border-line px-3 py-1.5 text-xs font-medium text-muted transition-colors hover:border-gold hover:text-gold"
                    >
                      {s.label}
                    </a>
                  ))}
                  <button
                    type="button"
                    onClick={copyLink}
                    className="inline-flex items-center gap-1.5 rounded-[2px] border border-line px-3 py-1.5 text-xs font-medium text-muted transition-colors hover:border-gold hover:text-gold"
                  >
                    {copied ? <Check className="h-3.5 w-3.5" aria-hidden="true" /> : <Link2 className="h-3.5 w-3.5" aria-hidden="true" />}
                    {copied ? "Copié !" : "Copier le lien"}
                  </button>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* Partage mobile */}
      <section className="border-t border-line bg-white pb-4 lg:hidden">
        <div className="container-site flex flex-wrap items-center gap-2 py-6">
          <span className="mr-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-gold">Partager :</span>
          {shareLinks.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-[2px] border border-line px-3 py-1.5 text-xs font-medium text-muted"
            >
              {s.label}
            </a>
          ))}
        </div>
      </section>

      {/* Articles liés */}
      <section className="border-t border-line bg-ivory py-16 lg:py-24">
        <div className="container-site">
          <Reveal>
            <h2 className="font-display text-2xl font-semibold text-navy sm:text-3xl">À lire également</h2>
          </Reveal>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {suggestions.map((p, i) => (
              <Reveal key={p.slug} delay={i * 0.08} className="h-full">
                <PostCard post={p} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
