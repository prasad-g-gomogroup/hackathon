// wp.ts

export type MenuItem = {
  id: number;
  label: string;
  url: string;
  target?: string;
  children?: MenuItem[];
};

export type HeaderData = {
  siteName: string;
  siteUrl: string;
  logo?: { url: string; alt?: string; width?: number; height?: number } | null;
  menu: MenuItem[];
};

// small helper: ensure env is present and normalize trailing slash
function wpBase(): string {
  const base = process.env.NEXT_PUBLIC_WP_API_BASE;
  if (!base) throw new Error("Missing env: NEXT_PUBLIC_WP_API_BASE");
  return base.replace(/\/+$/, "");
}

export async function getHeader(lang?: string): Promise<HeaderData> {
  const base = wpBase(); // e.g. https://gomowebb.com/hackathon-Prasad/wp-json
  const url = new URL(`${base}/headless/v1/options/header`);
  if (lang) url.searchParams.set("lang", lang);

  const res = await fetch(url.toString(), { next: { revalidate: 120 } as any });
  if (!res.ok) throw new Error(`Failed to fetch header: ${res.status}`);
  const data: HeaderData = await res.json();
  return data;
}

// ---- Fetch ACF Sections (page by slug) ----
export type WPPage = any; // (optional) define a stricter type later

export async function getPageWithACF(slug: string): Promise<WPPage | null> {
  const base = wpBase();
  const url = `${base}/wp/v2/pages?slug=${encodeURIComponent(
    slug
  )}&acf_format=standard`;

  const res = await fetch(url, { next: { revalidate: 60 } as any });
  if (!res.ok) throw new Error(`WP fetch failed: ${res.status}`);

  const arr: WPPage[] = await res.json();
  return arr?.[0] ?? null;
}
