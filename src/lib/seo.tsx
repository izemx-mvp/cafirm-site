import { useEffect } from "react";
import { site } from "@/config/site";

type SeoProps = {
  title: string;
  description: string;
  path: string;
  type?: "website" | "article";
  image?: string;
  jsonLd?: object | object[];
};

function upsertMeta(attr: "name" | "property", key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

/** Gestion des balises <head> par page (SPA, sans dépendance). */
export function Seo({ title, description, path, type = "website", image, jsonLd }: SeoProps) {
  useEffect(() => {
    document.title = title;
    const url = site.baseUrl + path;
    const img = site.baseUrl + (image ?? "/og-image.png");

    upsertMeta("name", "description", description);
    upsertMeta("property", "og:title", title);
    upsertMeta("property", "og:description", description);
    upsertMeta("property", "og:type", type);
    upsertMeta("property", "og:url", url);
    upsertMeta("property", "og:image", img);
    upsertMeta("property", "og:site_name", site.name);
    upsertMeta("property", "og:locale", "fr_FR");
    upsertMeta("name", "twitter:card", "summary_large_image");
    upsertMeta("name", "twitter:title", title);
    upsertMeta("name", "twitter:description", description);
    upsertMeta("name", "twitter:image", img);

    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", url);

    document.head.querySelectorAll("script[data-seo-jsonld]").forEach((s) => s.remove());
    if (jsonLd) {
      const blocks = Array.isArray(jsonLd) ? jsonLd : [jsonLd];
      for (const block of blocks) {
        const script = document.createElement("script");
        script.type = "application/ld+json";
        script.setAttribute("data-seo-jsonld", "true");
        script.textContent = JSON.stringify(block);
        document.head.appendChild(script);
      }
    }
  }, [title, description, path, type, image, jsonLd]);

  return null;
}

export function accountingServiceJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "AccountingService",
    name: site.name,
    legalName: site.legalName,
    url: site.baseUrl,
    logo: `${site.baseUrl}/logo-cafirm-navy.png`,
    image: `${site.baseUrl}/og-image.png`,
    description: site.description,
    foundingDate: String(site.founded),
    founder: { "@type": "Person", name: site.manager.name },
    telephone: site.phoneDisplay,
    email: site.email,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: `${site.address.street}, ${site.address.district}`,
      addressLocality: site.address.city,
      postalCode: site.address.postalCode,
      addressCountry: site.address.countryCode,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "18:00",
      },
    ],
    sameAs: Object.values(site.socials),
  };
}

export function faqJsonLd(items: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };
}

export function articleJsonLd(args: {
  title: string;
  description: string;
  path: string;
  datePublished: string;
  category: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: args.title,
    description: args.description,
    datePublished: args.datePublished,
    dateModified: args.datePublished,
    articleSection: args.category,
    inLanguage: "fr",
    mainEntityOfPage: site.baseUrl + args.path,
    image: `${site.baseUrl}/og-image.png`,
    author: { "@type": "Organization", name: site.name, url: site.baseUrl },
    publisher: {
      "@type": "Organization",
      name: site.name,
      logo: { "@type": "ImageObject", url: `${site.baseUrl}/logo-cafirm-navy.png` },
    },
  };
}
