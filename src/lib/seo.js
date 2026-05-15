import { siteConfig } from "@/data/siteConfig";

/**
 * Helper bangun URL absolut (untuk og:url, canonical, sitemap).
 */
export const absoluteUrl = (path = "/") => {
  const clean = path.startsWith("/") ? path : `/${path}`;
  return `${siteConfig.url}${clean}`;
};

/**
 * JSON-LD Organization (dipakai sekali di root).
 */
export const orgJsonLd = () => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  name: siteConfig.name,
  legalName: siteConfig.legalName,
  url: siteConfig.url,
  logo: absoluteUrl("/favicon.svg"),
  description: siteConfig.description,
  foundingDate: siteConfig.founded,
  email: siteConfig.contact.email,
  telephone: siteConfig.contact.phone,
  address: {
    "@type": "PostalAddress",
    streetAddress: siteConfig.location.address,
    addressLocality: siteConfig.location.district,
    addressRegion: siteConfig.location.region,
    addressCountry: siteConfig.location.country,
  },
  sameAs: [
    "https://www.instagram.com/ilycode_/",
    "https://www.tiktok.com/@ily_code",
    "https://www.linkedin.com/in/ily-code-850301396/",
    "https://www.youtube.com/@ILYcode-z4f",
  ],
});

/**
 * JSON-LD WebSite + SearchAction (helps Google sitelinks search).
 */
export const websiteJsonLd = () => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: siteConfig.name,
  url: siteConfig.url,
  inLanguage: siteConfig.language,
  potentialAction: {
    "@type": "SearchAction",
    target: `${siteConfig.url}/blog?q={search_term_string}`,
    "query-input": "required name=search_term_string",
  },
});

/**
 * JSON-LD BlogPosting per artikel.
 */
export const blogPostingJsonLd = (post) => ({
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: post.title,
  description: post.excerpt,
  image: post.coverImage ? absoluteUrl(post.coverImage) : absoluteUrl(siteConfig.ogImage),
  datePublished: post.publishedAt,
  dateModified: post.updatedAt || post.publishedAt,
  author: {
    "@type": "Organization",
    name: post.author || siteConfig.name,
  },
  publisher: {
    "@type": "Organization",
    name: siteConfig.name,
    logo: { "@type": "ImageObject", url: absoluteUrl("/favicon.svg") },
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": absoluteUrl(`/blog/${post.slug}`),
  },
  inLanguage: siteConfig.language,
  keywords: post.tags?.join(", "),
});

/**
 * JSON-LD BreadcrumbList helper.
 */
export const breadcrumbJsonLd = (items) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((it, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: it.name,
    item: absoluteUrl(it.href),
  })),
});

/**
 * JSON-LD Service — dipakai di halaman detail produk (IlyCorp, IlyProject).
 *
 * @param {object} opts
 * @param {string} opts.name            — nama produk/layanan
 * @param {string} opts.description     — deskripsi singkat
 * @param {string} opts.path            — path halaman detail (mis. "/produk/ilycorp")
 * @param {string} [opts.serviceType]   — tipe layanan (default "Software Development")
 * @param {string} [opts.areaServed]    — default "ID"
 * @param {object} [opts.offers]        — { priceFrom, priceCurrency, availability }
 */
export const serviceJsonLd = ({
  name,
  description,
  path,
  serviceType = "Software Development",
  areaServed = "ID",
  offers,
}) => {
  const base = {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    serviceType,
    areaServed: { "@type": "Country", name: areaServed },
    url: absoluteUrl(path),
    provider: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
  };

  if (offers) {
    base.offers = {
      "@type": "Offer",
      price: offers.priceFrom,
      priceCurrency: offers.priceCurrency || "IDR",
      availability: offers.availability || "https://schema.org/InStock",
      url: absoluteUrl(path),
    };
  }

  return base;
};

/**
 * JSON-LD FAQPage — dipakai di halaman produk yang punya FAQ.
 */
export const faqJsonLd = (items) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: items.map((it) => ({
    "@type": "Question",
    name: it.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: it.a,
    },
  })),
});
