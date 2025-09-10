// // wp.ts

// export type MenuItem = {
//   id: number;
//   label: string;
//   url: string;
//   target?: string;
//   children?: MenuItem[];
// };

// export type HeaderData = {
//   siteName: string;
//   siteUrl: string;
//   logo?: { url: string; alt?: string; width?: number; height?: number } | null;
//   menu: MenuItem[];
// };

// // small helper: ensure env is present and normalize trailing slash
// function wpBase(): string {
//   const base = process.env.NEXT_PUBLIC_WP_API_BASE;
//   if (!base) throw new Error("Missing env: NEXT_PUBLIC_WP_API_BASE");
//   return base.replace(/\/+$/, "");
// }

// export async function getHeader(lang?: string): Promise<HeaderData> {
//   const base = wpBase(); // e.g. https://gomowebb.com/hackathon-Prasad/wp-json
//   const url = new URL(`${base}/headless/v1/options/header`);
//   if (lang) url.searchParams.set("lang", lang);

//   const res = await fetch(url.toString(), { next: { revalidate: 120 } as any });
//   if (!res.ok) throw new Error(`Failed to fetch header: ${res.status}`);
//   const data: HeaderData = await res.json();
//   return data;
// }

// // ---- Fetch ACF Sections (page by slug) ----
// export type WPPage = any; // (optional) define a stricter type later

// export async function getPageWithACF(slug: string): Promise<WPPage | null> {
//   const base = wpBase();
//   const url = `${base}/wp/v2/pages?slug=${encodeURIComponent(
//     slug
//   )}&acf_format=standard`;

//   const res = await fetch(url, { next: { revalidate: 60 } as any });
//   if (!res.ok) throw new Error(`WP fetch failed: ${res.status}`);

//   const arr: WPPage[] = await res.json();
//   return arr?.[0] ?? null;
// }

// lib/wp.ts

// Minimal image type from ACF
export type WPImage = {
  url?: string;
  alt?: string;
  title?: string;
  width?: number;
  height?: number;
  sizes?: Record<string, string>;
};

// Minimal page type (extend later as needed)
export type WPPage = {
  id: number;
  slug: string;
  acf?: {
    page_builder?: any[]; // you can make this a union of your block types later
    [key: string]: any;
  };
  [key: string]: any;
};

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

// Safe fetchers (won’t crash build)
export async function getHeader(lang?: string): Promise<HeaderData> {
  const base = process.env.NEXT_PUBLIC_WP_API_BASE;
  if (!base) {
    console.warn("NEXT_PUBLIC_WP_API_BASE is missing");
    return { siteName: "", siteUrl: "", logo: null, menu: [] };
  }
  try {
    const url = new URL(`${base}/headless/v1/options/header`);
    if (lang) url.searchParams.set("lang", lang);
    const res = await fetch(url.toString(), { next: { revalidate: 120 } });
    if (!res.ok) {
      console.warn("getHeader non-200:", res.status);
      return { siteName: "", siteUrl: "", logo: null, menu: [] };
    }
    return res.json();
  } catch (e) {
    console.warn("getHeader error:", e);
    return { siteName: "", siteUrl: "", logo: null, menu: [] };
  }
}

export async function getPageWithACF(slug: string): Promise<WPPage | null> {
  const base = process.env.NEXT_PUBLIC_WP_API_BASE;
  if (!base) {
    console.warn("NEXT_PUBLIC_WP_API_BASE is missing");
    return null;
  }
  try {
    const url = `${base}/wp/v2/pages?slug=${encodeURIComponent(slug)}&acf_format=standard`;
    const res = await fetch(url, { next: { revalidate: 60 } });
    if (!res.ok) {
      console.warn("WP fetch failed:", res.status);
      return null;
    }
    const arr: WPPage[] = await res.json();
    return arr?.[0] ?? null;
  } catch (e) {
    console.warn("getPageWithACF error:", e);
    return null;
  }
}
