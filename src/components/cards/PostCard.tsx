import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import type { Post } from "@/data/posts";
import { categoryLabels } from "@/data/posts";
import { ArticleCover } from "@/components/decor/ArticleCover";
import { Photo } from "@/components/ui/Photo";

export function formatDate(iso: string) {
  return new Date(iso + "T00:00:00").toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

/** Carte article utilisée sur l'accueil, la page Actualités et les suggestions. */
export function PostCard({ post }: { post: Post }) {
  return (
    <article className="card-lift group flex h-full flex-col overflow-hidden rounded-md border border-line bg-white">
      <Link to={`/actualites/${post.slug}`} className="block" aria-label={post.title} tabIndex={-1}>
        <div className="relative aspect-[16/9] overflow-hidden bg-navy">
          {post.cover ? (
            <Photo
              name={post.cover}
              sizes="(min-width: 1216px) 380px, (min-width: 768px) 33vw, 100vw"
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
            />
          ) : (
            <ArticleCover category={post.category} className="h-full w-full transition-transform duration-500 group-hover:scale-[1.03]" />
          )}
          <div className="pointer-events-none absolute inset-0 bg-linear-to-b from-navy/35 via-transparent to-transparent" aria-hidden="true" />
          <span className="absolute left-4 top-4 rounded-[2px] bg-gold px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-white">
            {categoryLabels[post.category]}
          </span>
        </div>
      </Link>
      <div className="flex flex-1 flex-col p-6">
        <p className="text-xs text-muted">
          {formatDate(post.date)} · {post.readingTime} min de lecture
        </p>
        <h3 className="mt-2.5 font-display text-xl font-semibold leading-snug text-navy">
          <Link to={`/actualites/${post.slug}`} className="transition-colors group-hover:text-gold">
            {post.title}
          </Link>
        </h3>
        <p className="mt-3 line-clamp-3 flex-1 text-sm leading-relaxed text-muted">{post.excerpt}</p>
        <Link
          to={`/actualites/${post.slug}`}
          className="mt-5 inline-flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.16em] text-navy transition-colors hover:text-gold"
        >
          Lire l'article <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
        </Link>
      </div>
    </article>
  );
}
