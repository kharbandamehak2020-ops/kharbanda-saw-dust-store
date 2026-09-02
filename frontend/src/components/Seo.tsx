import { useEffect } from "react";

type SeoProps = {
  title: string;
  description: string;
  schema?: Record<string, unknown>;
};

function setMeta(name: string, content: string, property = false) {
  const selector = property ? `meta[property="${name}"]` : `meta[name="${name}"]`;
  let element = document.head.querySelector(selector) as HTMLMetaElement | null;
  if (!element) {
    element = document.createElement("meta");
    if (property) element.setAttribute("property", name);
    else element.setAttribute("name", name);
    document.head.appendChild(element);
  }
  element.content = content;
}

export default function Seo({ title, description, schema }: SeoProps) {
  useEffect(() => {
    document.title = title;
    const canonicalUrl = `${window.location.origin}${window.location.pathname}`;
    let canonical = document.head.querySelector("link[rel='canonical']") as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = canonicalUrl;
    setMeta("description", description);
    setMeta("og:title", title, true);
    setMeta("og:description", description, true);
    setMeta("og:type", "website", true);
    setMeta("og:url", canonicalUrl, true);
    setMeta("twitter:card", "summary_large_image");
    setMeta("twitter:title", title);
    setMeta("twitter:description", description);

    const existing = document.head.querySelector("script[data-site-schema]");
    existing?.remove();
    if (schema) {
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.setAttribute("data-site-schema", "true");
      script.textContent = JSON.stringify(schema);
      document.head.appendChild(script);
    }
  }, [description, schema, title]);

  return null;
}