import { siteConfig } from "../config/site";

export function generateSchemaOrg() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        name: siteConfig.name,
        url: siteConfig.url,
        description: siteConfig.description,
        contactPoint: {
          "@type": "ContactPoint",
          telephone: siteConfig.contact.phone,
          email: siteConfig.contact.email,
          contactType: "customer service",
          areaServed: "CR",
          availableLanguage: "Spanish",
        },
        sameAs: Object.values(siteConfig.socials),
      },
      {
        "@type": "LocalBusiness",
        "@id": `${siteConfig.url}/#localbusiness`,
        name: siteConfig.name,
        description: siteConfig.description,
        url: siteConfig.url,
        telephone: siteConfig.contact.phone,
        email: siteConfig.contact.email,
        address: {
          "@type": "PostalAddress",
          addressLocality: "Limón",
          addressCountry: "CR",
        },
      },
      {
        "@type": "EducationalOrganization",
        "@id": `${siteConfig.url}/#educational`,
        name: siteConfig.name,
        description: siteConfig.description,
        url: siteConfig.url,
      },
    ],
  };
}

export interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  canonical?: string;
}

export function getPageTitle(pageTitle?: string): string {
  if (!pageTitle) return `${siteConfig.name} — ${siteConfig.tagline}`;
  return `${pageTitle} | ${siteConfig.name}`;
}

export function getCanonicalURL(path: string = "/"): string {
  return new URL(path, siteConfig.url).toString();
}
