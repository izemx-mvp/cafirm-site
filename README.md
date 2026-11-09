# CAFIRM — Site vitrine

Site multi-pages du cabinet comptable et fiscal CAFIRM (Casablanca).
Frontend uniquement : React 18 + Vite 6 + TypeScript + Tailwind CSS v4 + Framer Motion.

## Démarrer

```bash
npm install
npm run dev        # http://localhost:5173
```

## Build de production

```bash
npm run build      # type-check + build dans dist/
npm run preview    # prévisualiser le build
```

## Où modifier le contenu

| Fichier | Contenu |
| --- | --- |
| `src/config/site.ts` | Coordonnées, horaires, chiffres clés, dirigeant, témoignages, réseaux sociaux, mentions légales |
| `src/data/services.ts` | Les 4 services (checklists, processus, FAQ, articles liés) |
| `src/data/posts.ts` | Les articles du blog (catégories, contenu riche par sections) |

## Pages

`/` · `/le-cabinet` · `/services` · `/services/:slug` · `/investir-au-maroc` · `/actualites` ·
`/actualites/:slug` · `/prendre-rendez-vous` (pré-sélection via `?service=...`) · `/contact` ·
`/mentions-legales` · `/politique-de-confidentialite` · 404

## Notes

- Les formulaires (react-hook-form + zod) n'envoient rien à un serveur : à la validation,
  un message pré-rédigé s'ouvre dans WhatsApp.
- SEO : balises par page, Open Graph, JSON-LD (AccountingService, Article, FAQPage),
  `public/sitemap.xml`, `public/robots.txt`.
- Les logos (`public/logo-cafirm-navy.png`, `public/logo-cafirm-white.png`), le favicon et
  l'image Open Graph ont été générés à partir du logo blanc fourni.
- Déploiement SPA : configurer la réécriture de toutes les routes vers `index.html`
  (Netlify `_redirects`, Vercel `rewrites`, etc.).
